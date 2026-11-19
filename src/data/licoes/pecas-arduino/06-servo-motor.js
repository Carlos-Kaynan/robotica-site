export default {
  id: 'servo-motor',
  titulo: 'Servo motor: girar em ângulos exatos',
  resumo: 'Como mandar o servo para um ângulo exato, de 0° a 180°, e como ligar os 3 fios.',
  minutos: 6,
  blocos: [
    { tipo: 'figura', nome: 'servo', legenda: 'Micro servo SG90, com o braço branco encaixado em cima.' },
    {
      tipo: 'texto',
      texto:
        'O **servo motor** é um motor que não fica girando sem parar: você manda ele ir para um **ângulo** e ele vai até lá e **para**. É perfeito para cancelas, braços robóticos, garras e ponteiros.',
    },
    { tipo: 'titulo', texto: 'Ângulos de 0° a 180°' },
    {
      tipo: 'lista',
      itens: [
        '**0°:** o braço vai todo para um lado.',
        '**90°:** o braço fica no meio.',
        '**180°:** o braço vai todo para o outro lado.',
        'No programa em blocos basta um bloco como "girar servo do pino 9 para **90** graus".',
      ],
    },
    { tipo: 'titulo', texto: 'Os 3 fios' },
    {
      tipo: 'lista',
      itens: [
        '**Marrom** (ou preto): GND.',
        '**Vermelho:** 5V.',
        '**Laranja** (ou amarelo/branco): sinal. Vai num pino digital, por exemplo o **9**.',
      ],
    },
    {
      tipo: 'cuidado',
      texto:
        'Não gire o braço do servo **com a mão**, principalmente com ele ligado: as engrenagens de dentro são de plástico e quebram com facilidade.',
    },
    {
      tipo: 'dica',
      texto:
        'Um servo pequeno pode ser ligado direto no 5V do Arduino. Se o projeto tiver **vários** servos, use uma fonte ou pilhas separadas para eles (com o GND ligado ao GND do Arduino).',
    },
    {
      tipo: 'texto',
      texto:
        'Existe também o **servo de rotação contínua (360°)**. Nele o número não é um ângulo: ele controla a **velocidade** e o **sentido** do giro. Confira qual é o seu antes de programar!',
    },
    {
      tipo: 'professor',
      itens: [
        '**Projeto curto:** cancela de estacionamento. Botão apertado → servo vai para 90° (abre), espera 3 segundos e volta para 0° (fecha).',
        '**Matemática:** use o servo para trabalhar ângulos com um transferidor de papel colado atrás do braço.',
        'Junto com o sensor ultrassônico, dá para fazer uma lixeira que abre a tampa sozinha (ligação com o projeto "Lixo no lugar").',
      ],
    },
    {
      tipo: 'resumo',
      itens: [
        'O servo vai para um **ângulo exato** (0° a 180°) e para lá.',
        'Fios: **marrom = GND**, **vermelho = 5V**, **laranja = sinal**.',
        'Não force o braço com a mão; vários servos pedem fonte separada.',
      ],
    },
  ],
  quiz: [
    {
      pergunta: 'O que o servo motor tem de diferente de um motor comum?',
      opcoes: [
        'Ele vai até um ângulo exato e para lá',
        'Ele gira sem parar, sempre no mesmo sentido',
        'Ele só funciona ligado em pilhas',
      ],
      certa: 0,
      explicacao: 'Você manda o servo para um **ângulo** (de 0° a 180°) e ele vai até lá e **para**. Por isso ele é ótimo para cancelas, garras e braços robóticos.',
    },
    {
      pergunta: 'Para qual ângulo você manda o servo para deixar o braço **no meio**?',
      opcoes: ['0°', '90°', '180°'],
      certa: 1,
      explicacao: '**90°** é o meio. 0° leva o braço todo para um lado e 180° todo para o outro.',
    },
    {
      pergunta: 'O servo tem 3 fios. Para onde vai o fio **laranja**?',
      opcoes: ['Para o GND', 'Para o 5V', 'Para um pino digital, como o 9: é o fio do sinal'],
      certa: 2,
      explicacao: '**Laranja = sinal** (num pino digital), **vermelho = 5V** e **marrom = GND**.',
    },
    {
      pergunta: 'Por que não se deve girar o braço do servo com a mão?',
      opcoes: [
        'As engrenagens de dentro são de plástico e quebram fácil',
        'Porque dá choque',
        'Porque apaga o programa do Arduino',
      ],
      certa: 0,
      explicacao: 'Por dentro, o servo tem **engrenagens de plástico**. Forçar o braço, principalmente com ele ligado, pode quebrá-las.',
    },
  ],
}
