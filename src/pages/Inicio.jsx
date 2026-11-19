import { Link } from 'react-router-dom'
import BarraProgresso from '../components/BarraProgresso.jsx'
import { PlacaArduino, Robo } from '../components/ilustracoes/Pecas.jsx'
import { trilhas } from '../data/trilhas.js'
import { contarLidas } from '../progresso.js'

export default function Inicio() {
  return (
    <>
      <section className="destaque">
        <div className="destaque-texto">
          <p className="sobretitulo">Programação e robótica na escola</p>
          <h1>Aprenda a criar, programar e montar robôs</h1>
          <p className="destaque-subtitulo">
            Trilhas de estudo do Scratch ao robô de competição, para alunos do 6º ao 9º ano. Professores encontram em cada lição
            sugestões de atividades para a sala.
          </p>
        </div>
        <div className="destaque-desenhos">
          <div className="destaque-placa">
            <PlacaArduino />
          </div>
          <div className="destaque-robo">
            <Robo />
          </div>
        </div>
      </section>

      <section className="pagina">
        <h2 className="titulo-secao">Escolha uma trilha</h2>
        <ol className="grade-trilhas">
          {trilhas.map((trilha, i) => (
            <li key={trilha.id}>
              <CartaoTrilha trilha={trilha} numero={i + 1} />
            </li>
          ))}
        </ol>
      </section>
    </>
  )
}

function CartaoTrilha({ trilha, numero }) {
  const emBreve = trilha.licoes.length === 0
  const conteudo = (
    <>
      <span className="cartao-topo">
        <span className="cartao-icone" aria-hidden="true">
          {trilha.icone}
        </span>
        <span className="cartao-numero">Trilha {numero}</span>
      </span>
      <span className="cartao-titulo">{trilha.titulo}</span>
      <span className="cartao-resumo">{trilha.resumo}</span>
      {emBreve ? <span className="etiqueta-em-breve">Em breve</span> : <BarraProgresso lidas={contarLidas(trilha)} total={trilha.licoes.length} />}
    </>
  )

  if (emBreve) return <div className="cartao-trilha cartao-em-breve">{conteudo}</div>
  return (
    <Link to={`/trilha/${trilha.id}`} className="cartao-trilha">
      {conteudo}
    </Link>
  )
}
