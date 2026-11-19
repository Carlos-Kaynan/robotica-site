// As 9 trilhas do site, na ordem em que aparecem na tela inicial.
// Cada trilha tem uma lista de lições (pasta src/data/licoes/<id da trilha>/).
// Trilha com "licoes: []" aparece na tela inicial como "Em breve".
import pecasArduino from './licoes/pecas-arduino/index.js'

export const trilhas = [
  {
    id: 'scratch',
    icone: '🧩',
    titulo: 'Scratch',
    resumo: 'Lógica, repetição, condições e eventos com blocos de encaixar. No fim, você cria um minijogo.',
    licoes: [],
  },
  {
    id: 'mundo-fisico',
    icone: '💡',
    titulo: 'Código no mundo físico',
    resumo: 'Os mesmos blocos do Scratch acendem luzes, leem sensores e giram motores.',
    licoes: [],
  },
  {
    id: 'pecas-arduino',
    icone: '🔌',
    titulo: 'Peças do kit Arduino',
    resumo: 'Placa, protoboard, LED, resistor, botão, sensor ultrassônico, servo e motor: o que cada peça faz.',
    licoes: pecasArduino,
  },
  {
    id: 'arduino-blocos',
    icone: '🚦',
    titulo: 'Arduino em blocos',
    resumo: 'Primeiro no simulador, depois na placa de verdade. O projeto final é um semáforo.',
    licoes: [],
  },
  {
    id: 'robos',
    icone: '🤖',
    titulo: 'Robôs',
    resumo: 'Monte e programe um robô seguidor de linha e um que desvia de obstáculos.',
    licoes: [],
  },
  {
    id: 'lego',
    icone: '🧱',
    titulo: 'LEGO Computação e IA',
    resumo: 'Robôs de LEGO com motores, sensores e atividades de inteligência artificial.',
    licoes: [],
  },
  {
    id: 'maker',
    icone: '🛠️',
    titulo: 'Laboratório maker',
    resumo: 'Impressora 3D e cortadora a laser: da ideia à peça de verdade, com segurança.',
    licoes: [],
  },
  {
    id: 'obr',
    icone: '🏆',
    titulo: 'OBR: modalidade resgate',
    resumo: 'Como funciona a Olimpíada Brasileira de Robótica: linha, marcadores, obstáculos, rampa e resgate.',
    licoes: [],
  },
  {
    id: 'cidadania-digital',
    icone: '🛡️',
    titulo: 'Cidadania digital',
    resumo: 'Segurança de dados, fake news, cyberbullying e celular na medida certa.',
    licoes: [],
  },
]

export function buscarTrilha(trilhaId) {
  return trilhas.find((trilha) => trilha.id === trilhaId)
}
