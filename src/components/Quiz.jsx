import { useRef, useState } from 'react'
import { melhorResultado, salvarResultado } from '../progresso.js'
import TextoRico from './TextoRico.jsx'

const LETRAS = ['A', 'B', 'C', 'D', 'E']

// Quiz do fim da lição. Cada pergunta mostra na hora se a resposta está certa,
// com uma explicação. Quando todas são respondidas, aparece o placar, o melhor
// resultado fica guardado e a lição é marcada como lida (aoTerminar).
// O formato das perguntas está explicado em src/data/licoes/pecas-arduino/index.js.
export default function Quiz({ chave, perguntas, aoTerminar }) {
  // respostas[i] = número da opção escolhida na pergunta i (null = ainda não respondeu)
  const [respostas, setRespostas] = useState(() => perguntas.map(() => null))
  const [melhor, setMelhor] = useState(() => melhorResultado(chave))
  const secao = useRef(null)

  const contarAcertos = (lista) => lista.filter((resposta, i) => resposta === perguntas[i].certa).length
  const acertos = contarAcertos(respostas)
  const terminou = respostas.every((resposta) => resposta !== null)

  function responder(indice, opcao) {
    const novas = respostas.map((resposta, i) => (i === indice ? opcao : resposta))
    setRespostas(novas)
    if (novas.every((resposta) => resposta !== null)) {
      const total = contarAcertos(novas)
      salvarResultado(chave, total)
      setMelhor((anterior) => Math.max(anterior ?? 0, total))
      aoTerminar()
    }
  }

  function recomecar() {
    setRespostas(perguntas.map(() => null))
    secao.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  let mensagem = 'Vale a pena reler a lição e tentar de novo. Você consegue!'
  if (acertos === perguntas.length) mensagem = 'Mandou bem, acertou tudo! 🎉'
  else if (acertos >= perguntas.length / 2) mensagem = 'Bom trabalho! Releia as explicações das que errou.'

  return (
    <section className="quiz" ref={secao} aria-labelledby="quiz-titulo">
      <h2 id="quiz-titulo">🎯 Teste o que você aprendeu</h2>
      <p className="quiz-instrucao">
        Clique na resposta que você acha certa. Depois de responder, aparece a explicação.
        {melhor !== null && !terminou && ` Seu melhor resultado até agora: ${melhor} de ${perguntas.length}.`}
      </p>

      <ol className="quiz-perguntas">
        {perguntas.map((pergunta, i) => (
          <Pergunta
            key={i}
            numero={i + 1}
            pergunta={pergunta}
            resposta={respostas[i]}
            aoResponder={(opcao) => responder(i, opcao)}
          />
        ))}
      </ol>

      {terminou && (
        <div className="quiz-placar" role="status">
          <p className="quiz-placar-numero">
            Você acertou {acertos} de {perguntas.length}
          </p>
          <p>{mensagem}</p>
          {melhor !== null && melhor > acertos && (
            <p className="quiz-placar-melhor">
              Seu melhor resultado: {melhor} de {perguntas.length}
            </p>
          )}
          <button type="button" className="botao" onClick={recomecar}>
            ↺ Tentar de novo
          </button>
        </div>
      )}
    </section>
  )
}

function Pergunta({ numero, pergunta, resposta, aoResponder }) {
  const respondida = resposta !== null
  const acertou = resposta === pergunta.certa

  return (
    <li className="quiz-pergunta">
      <p className="quiz-enunciado">
        <span className="numero-bolinha pequena">{numero}</span>
        <span>
          <TextoRico texto={pergunta.pergunta} />
        </span>
      </p>

      <div className="quiz-opcoes">
        {pergunta.opcoes.map((opcao, j) => {
          // Depois de responder, a certa fica verde e a escolhida errada fica vermelha.
          let estado = ''
          if (respondida && j === pergunta.certa) estado = 'certa'
          else if (j === resposta) estado = 'errada'
          const marca = { certa: '✓', errada: '✗' }[estado] ?? LETRAS[j]
          return (
            <button
              key={j}
              type="button"
              className={`quiz-opcao ${estado}`}
              disabled={respondida}
              onClick={() => aoResponder(j)}
            >
              <span className="quiz-letra" aria-hidden="true">
                {marca}
              </span>
              <span>
                <TextoRico texto={opcao} />
              </span>
            </button>
          )
        })}
      </div>

      {respondida && (
        <p className={`quiz-retorno ${acertou ? 'certa' : 'errada'}`} role="status">
          <strong>{acertou ? '✅ Isso mesmo!' : '❌ Não foi dessa vez.'}</strong> <TextoRico texto={pergunta.explicacao} />
        </p>
      )}
    </li>
  )
}
