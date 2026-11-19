// Desenha uma pilha de blocos no estilo do Scratch (feitos com HTML e CSS).
// O formato está explicado em src/data/licoes/scratch/index.js.
//
// Dentro do texto de um bloco:
//   (10)          -> campo branco onde se digita um valor
//   [borda]       -> menu de escolher (aparece com ▾)
//   <tocando?>    -> condição (o "hexágono" de perguntas de sim ou não)
//   {sorteie}     -> bloco redondo de operador, encaixado no campo (ex.: número aleatório)
//   {bandeira}    -> a bandeira verde
// Condições e operadores podem ter campos e menus dentro: <tecla [espaço] pressionada?>.
// Por padrão a condição é azul-clara (Sensores) e o bloco redondo é verde (Operadores).
// Para outra cor, comece com a categoria e dois-pontos: <arduino:ler pino digital (2)>, {variaveis:distância}.
// Bloco cujo texto começa com "quando" vira um "chapéu": é ele que inicia o código.

function Bandeira() {
  return (
    <svg className="scratch-bandeira" viewBox="0 0 16 16" aria-label="bandeira verde" role="img">
      <path d="M3 1.5v13" stroke="#3d7d27" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M3.8 2.5c3-1.6 5.6 1.6 9.6 0v6.6c-4 1.6-6.6-1.6-9.6 0z" fill="#4cbf56" stroke="#3d7d27" strokeWidth="1" />
    </svg>
  )
}

const CATEGORIAS = /^(eventos|movimento|aparencia|som|controle|sensores|operadores|variaveis|arduino):/

// Separa a categoria do começo do texto, se houver: "arduino:ler pino" -> ['arduino', 'ler pino'].
function separarCategoria(texto, padrao) {
  const achou = texto.match(CATEGORIAS)
  return achou ? [achou[1], texto.slice(achou[0].length)] : [padrao, texto]
}

function TextoBloco({ texto }) {
  const partes = texto.split(/(\([^)]*\)|\[[^\]]*\]|<[^>]*>|\{[^}]*\})/g)
  return partes.map((parte, i) => {
    const dentro = parte.slice(1, -1)
    if (parte === '{bandeira}') return <Bandeira key={i} />
    if (parte.startsWith('(') && parte.endsWith(')')) return <span key={i} className="scratch-campo">{dentro}</span>
    if (parte.startsWith('[') && parte.endsWith(']')) return <span key={i} className="scratch-menu">{dentro} ▾</span>
    // Condições e blocos redondos podem ter campos e menus dentro, então o texto deles é lido de novo.
    if (parte.startsWith('<') && parte.endsWith('>')) {
      const [cor, resto] = separarCategoria(dentro, 'sensores')
      return (
        <span key={i} className={`scratch-condicao scratch-${cor}`}>
          <TextoBloco texto={resto} />
        </span>
      )
    }
    if (parte.startsWith('{') && parte.endsWith('}')) {
      const [cor, resto] = separarCategoria(dentro, 'operadores')
      return (
        <span key={i} className={`scratch-redondo scratch-${cor}`}>
          <TextoBloco texto={resto} />
        </span>
      )
    }
    return parte
  })
}

function Pilha({ blocos }) {
  return (
    <ul className="scratch-pilha">
      {blocos.map((bloco, i) => (
        <BlocoScratch key={i} bloco={bloco} />
      ))}
    </ul>
  )
}

function BlocoScratch({ bloco }) {
  const chapeu = bloco.texto.startsWith('quando')
  const temBoca = bloco.dentro || bloco.senao

  if (!temBoca) {
    return (
      <li className={`scratch-bloco scratch-${bloco.cor} ${chapeu ? 'scratch-chapeu' : ''}`}>
        <div className="scratch-linha">
          <TextoBloco texto={bloco.texto} />
        </div>
      </li>
    )
  }

  // Blocos em forma de "C" (repita, sempre, se...): têm uma "boca" com outros blocos dentro.
  return (
    <li className={`scratch-bloco scratch-c scratch-${bloco.cor}`}>
      <div className="scratch-linha">
        <TextoBloco texto={bloco.texto} />
      </div>
      <div className="scratch-boca">
        <Pilha blocos={bloco.dentro ?? []} />
      </div>
      {bloco.senao && (
        <>
          <div className="scratch-linha scratch-meio">senão</div>
          <div className="scratch-boca">
            <Pilha blocos={bloco.senao} />
          </div>
        </>
      )}
      <div className="scratch-pe" />
    </li>
  )
}

export default function BlocosScratch({ blocos, legenda }) {
  return (
    <figure className="figura figura-scratch">
      <div className="scratch">
        <Pilha blocos={blocos} />
      </div>
      {legenda && <figcaption>{legenda}</figcaption>}
    </figure>
  )
}
