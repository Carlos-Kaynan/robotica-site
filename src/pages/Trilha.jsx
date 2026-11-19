import { Link, useParams } from 'react-router-dom'
import BarraProgresso from '../components/BarraProgresso.jsx'
import { buscarTrilha } from '../data/trilhas.js'
import { contarLidas, estaLida } from '../progresso.js'
import NaoEncontrado from './NaoEncontrado.jsx'

export default function Trilha() {
  const { trilhaId } = useParams()
  const trilha = buscarTrilha(trilhaId)
  if (!trilha || trilha.licoes.length === 0) return <NaoEncontrado />

  return (
    <div className="pagina">
      <Link to="/" className="voltar">
        ← Todas as trilhas
      </Link>
      <h1>
        <span aria-hidden="true">{trilha.icone}</span> {trilha.titulo}
      </h1>
      <p className="subtitulo">{trilha.resumo}</p>
      <BarraProgresso lidas={contarLidas(trilha)} total={trilha.licoes.length} />

      <ol className="lista-licoes">
        {trilha.licoes.map((licao, i) => {
          const lida = estaLida(`${trilha.id}/${licao.id}`)
          return (
            <li key={licao.id}>
              <Link to={`/trilha/${trilha.id}/${licao.id}`} className="cartao-licao">
                <span className={`numero-bolinha ${lida ? 'lida' : ''}`}>{lida ? '✓' : i + 1}</span>
                <span className="cartao-licao-texto">
                  <span className="cartao-licao-titulo">{licao.titulo}</span>
                  <span className="cartao-licao-resumo">{licao.resumo}</span>
                </span>
                <span className="cartao-licao-tempo">⏱ {licao.minutos} min</span>
              </Link>
            </li>
          )
        })}
      </ol>
    </div>
  )
}
