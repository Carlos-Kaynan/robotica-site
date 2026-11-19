import { ilustracoes } from './ilustracoes/index.js'
import TextoRico from './TextoRico.jsx'

// "numerada" troca as bolinhas por números (1, 2, 3...), para passo a passo.
function ListaRica({ itens, numerada = false }) {
  const Lista = numerada ? 'ol' : 'ul'
  return (
    <Lista>
      {itens.map((item, i) => (
        <li key={i}>
          <TextoRico texto={item} />
        </li>
      ))}
    </Lista>
  )
}

// Desenha um bloco de lição de acordo com o tipo dele
// (o formato está explicado em src/data/licoes/pecas-arduino/index.js).
export default function Bloco({ bloco }) {
  switch (bloco.tipo) {
    case 'titulo':
      return <h2>{bloco.texto}</h2>
    case 'texto':
      return (
        <p>
          <TextoRico texto={bloco.texto} />
        </p>
      )
    case 'lista':
      return <ListaRica itens={bloco.itens} />
    case 'passos':
      return <ListaRica itens={bloco.itens} numerada />
    case 'figura': {
      const Desenho = ilustracoes[bloco.nome]
      if (!Desenho) return null
      return (
        <figure className={`figura figura-${bloco.nome}`}>
          <Desenho />
          {bloco.legenda && <figcaption>{bloco.legenda}</figcaption>}
        </figure>
      )
    }
    case 'dica':
    case 'cuidado':
      return (
        <aside className={`caixa caixa-${bloco.tipo}`}>
          <strong>{bloco.tipo === 'dica' ? '💡 Dica' : '⚠️ Cuidado'}</strong>
          <p>
            <TextoRico texto={bloco.texto} />
          </p>
        </aside>
      )
    case 'professor':
      return (
        <aside className="caixa caixa-professor">
          <strong>🍎 Para o professor</strong>
          <ListaRica itens={bloco.itens} />
        </aside>
      )
    case 'link':
      return (
        <p>
          <a href={bloco.url} target="_blank" rel="noreferrer" className="botao botao-link">
            {bloco.texto} ↗
          </a>
        </p>
      )
    case 'resumo':
      return (
        <aside className="caixa caixa-resumo">
          <strong>🧠 Resumo</strong>
          <ListaRica itens={bloco.itens} />
        </aside>
      )
    default:
      return null
  }
}
