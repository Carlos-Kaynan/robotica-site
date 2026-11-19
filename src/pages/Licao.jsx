import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Bloco from '../components/Bloco.jsx'
import Quiz from '../components/Quiz.jsx'
import { buscarTrilha } from '../data/trilhas.js'
import { estaLida, marcarLida } from '../progresso.js'
import NaoEncontrado from './NaoEncontrado.jsx'

export default function Licao() {
  const { trilhaId, licaoId } = useParams()
  const trilha = buscarTrilha(trilhaId)
  const licao = trilha?.licoes.find((item) => item.id === licaoId)
  if (!licao) return <NaoEncontrado />
  // A "key" recria a tela ao trocar de lição (volta ao topo e relê o "lida").
  return <ConteudoLicao key={`${trilha.id}/${licao.id}`} trilha={trilha} licao={licao} />
}

function ConteudoLicao({ trilha, licao }) {
  const chave = `${trilha.id}/${licao.id}`
  const [lida, setLida] = useState(() => estaLida(chave))
  const posicao = trilha.licoes.indexOf(licao)
  const anterior = trilha.licoes[posicao - 1]
  const proxima = trilha.licoes[posicao + 1]

  // Ao abrir uma lição, começa a leitura do topo da página.
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  function alternarLida() {
    marcarLida(chave, !lida)
    setLida(!lida)
  }

  // Terminar o quiz conta como ter lido a lição.
  function concluirQuiz() {
    marcarLida(chave, true)
    setLida(true)
  }

  return (
    <div className="licao">
      <nav className="licao-menu" aria-label={`Lições da trilha ${trilha.titulo}`}>
        <Link to={`/trilha/${trilha.id}`} className="voltar">
          ← {trilha.titulo}
        </Link>
        <ol>
          {trilha.licoes.map((item, i) => {
            const atual = item.id === licao.id
            const itemLido = atual ? lida : estaLida(`${trilha.id}/${item.id}`)
            return (
              <li key={item.id}>
                <Link to={`/trilha/${trilha.id}/${item.id}`} className={atual ? 'atual' : ''} aria-current={atual ? 'page' : undefined}>
                  <span className={`numero-bolinha pequena ${itemLido ? 'lida' : ''}`}>{itemLido ? '✓' : i + 1}</span>
                  <span>{item.titulo}</span>
                </Link>
              </li>
            )
          })}
        </ol>
      </nav>

      <article className="licao-conteudo">
        <p className="licao-meta">
          {trilha.icone} {trilha.titulo} · Lição {posicao + 1} de {trilha.licoes.length} · ⏱ {licao.minutos} min
        </p>
        <h1>{licao.titulo}</h1>
        <p className="licao-resumo">{licao.resumo}</p>

        {licao.blocos.map((bloco, i) => (
          <Bloco key={i} bloco={bloco} />
        ))}

        {licao.quiz && <Quiz chave={chave} perguntas={licao.quiz} aoTerminar={concluirQuiz} />}

        <div className="licao-fim">
          <button type="button" className={`botao ${lida ? 'botao-lida' : 'botao-principal'}`} onClick={alternarLida}>
            {lida ? '✓ Lição lida' : 'Marcar como lida'}
          </button>

          <nav className="licao-navegacao" aria-label="Navegar entre lições">
            {anterior ? (
              <Link to={`/trilha/${trilha.id}/${anterior.id}`} className="botao">
                ← {anterior.titulo}
              </Link>
            ) : (
              <span />
            )}
            {proxima && (
              <Link to={`/trilha/${trilha.id}/${proxima.id}`} className="botao">
                {proxima.titulo} →
              </Link>
            )}
          </nav>
        </div>
      </article>
    </div>
  )
}
