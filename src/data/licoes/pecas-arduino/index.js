// Formato de uma lição (vale para todas as trilhas):
//   { id, titulo, resumo, minutos, blocos: [...] }
//   blocos: lista do que aparece na página, em ordem. Tipos de bloco:
//     { tipo: 'titulo', texto }               -> subtítulo
//     { tipo: 'texto', texto }                -> parágrafo (`código` e **negrito** funcionam)
//     { tipo: 'lista', itens: [...] }         -> lista com marcadores
//     { tipo: 'passos', itens: [...] }        -> lista numerada (passo a passo)
//     { tipo: 'figura', nome, legenda }       -> ilustração (nomes em src/components/ilustracoes/index.js)
//     { tipo: 'dica' | 'cuidado', texto }     -> caixas de destaque
//     { tipo: 'professor', itens: [...] }     -> caixa "Para o professor" (sugestões de aula)
//     { tipo: 'link', texto, url }            -> botão que abre um site externo em outra aba
//     { tipo: 'resumo', itens: [...] }        -> resumo final
//   quiz (opcional): perguntas que aparecem no fim da lição (src/components/Quiz.jsx).
//     { pergunta, opcoes: [...], certa, explicacao }
//     "certa" é a posição da opção certa, contando do 0 (0 = primeira, 1 = segunda...).
//     A explicação aparece depois que o aluno responde, certo ou errado.
//
// Para criar uma lição nova: copie um arquivo desta pasta, mude o conteúdo,
// importe aqui e coloque na lista abaixo, na ordem certa.
import placaArduino from './01-placa-arduino.js'
import protoboard from './02-protoboard.js'
import ledEResistor from './03-led-e-resistor.js'
import botao from './04-botao.js'
import sensorUltrassonico from './05-sensor-ultrassonico.js'
import servoMotor from './06-servo-motor.js'
import motorComRoda from './07-motor-com-roda.js'

export default [placaArduino, protoboard, ledEResistor, botao, sensorUltrassonico, servoMotor, motorComRoda]
