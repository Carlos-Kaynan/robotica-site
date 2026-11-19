// Lições da trilha Scratch. O formato das lições e do quiz é o mesmo de
// src/data/licoes/pecas-arduino/index.js, mais um tipo de bloco só desta trilha:
//
//     { tipo: 'scratch', blocos: [...], legenda } -> desenha blocos do Scratch (BlocosScratch.jsx)
//       cada bloco: { cor, texto, dentro, senao }
//       cor: 'eventos', 'movimento', 'aparencia', 'som', 'controle', 'sensores', 'operadores' ou 'variaveis'
//       dentro: lista de blocos dentro da "boca" (repita, sempre, se...)
//       senao: lista de blocos da parte "senão" (só no bloco "se... senão")
//       No texto: (10) = campo de valor, [borda] = menu, <tocando?> = condição,
//       {número aleatório entre (1) e (10)} = operador encaixado, {bandeira} = bandeira verde.
//       Texto que começa com "quando" vira um bloco de início.
import conhecendoOScratch from './01-conhecendo-o-scratch.js'
import eventos from './02-eventos.js'
import sequenciaEMovimento from './03-sequencia-e-movimento.js'
import repeticao from './04-repeticao.js'
import condicoes from './05-condicoes.js'
import variaveis from './06-variaveis.js'
import projetoMinijogo from './07-projeto-minijogo.js'

export default [conhecendoOScratch, eventos, sequenciaEMovimento, repeticao, condicoes, variaveis, projetoMinijogo]
