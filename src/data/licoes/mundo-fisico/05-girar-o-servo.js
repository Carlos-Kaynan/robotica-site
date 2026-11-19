export default {
  id: 'girar-o-servo',
  titulo: 'Girar o servo',
  resumo: 'Mandar o servo para um ângulo exato e montar uma cancela que abre com um botão.',
  minutos: 9,
  blocos: [
    {
      tipo: 'texto',
      texto:
        'O LED só acende e apaga. O **servo motor** faz algo mais interessante: **movimento**. Você diz um ângulo, de **0° a 180°**, e ele gira até lá e para.',
    },
    { tipo: 'titulo', texto: 'Ligando o servo' },
    { tipo: 'figura', nome: 'servo', legenda: 'Micro servo: três fios, três cores.' },
    {
      tipo: 'lista',
      itens: [
        'Fio **marrom** (ou preto) → **GND**.',
        'Fio **vermelho** → **5V**.',
        'Fio **laranja** (ou amarelo) → **pino 9**. É por ele que o Arduino manda o ângulo.',
      ],
    },
    { tipo: 'titulo', texto: 'O bloco do servo' },
    {
      tipo: 'scratch',
      blocos: [
        { cor: 'eventos', texto: 'quando {bandeira} for clicado' },
        { cor: 'arduino', texto: 'defina o servo do pino (9) para o ângulo (0)' },
        { cor: 'controle', texto: 'espere (1) seg' },
        { cor: 'arduino', texto: 'defina o servo do pino (9) para o ângulo (90)' },
        { cor: 'controle', texto: 'espere (1) seg' },
        { cor: 'arduino', texto: 'defina o servo do pino (9) para o ângulo (180)' },
      ],
      legenda: 'O braço vai para um lado, para o meio e para o outro lado.',
    },
    {
      tipo: 'dica',
      texto:
        'Se o bloco do servo não funcionar no **modo ao vivo**, use o **modo upload**: troque a bandeira verde pelo bloco **quando o Arduino Uno iniciar** e envie o programa para a placa.',
    },
    { tipo: 'titulo', texto: 'Projeto rápido: cancela de estacionamento' },
    {
      tipo: 'texto',
      texto:
        'Junte o **botão** da lição anterior (no pino 2) com o servo. Aperte o botão e a cancela abre, espera o carro passar e fecha sozinha.',
    },
    {
      tipo: 'scratch',
      blocos: [
        { cor: 'eventos', texto: 'quando {bandeira} for clicado' },
        { cor: 'arduino', texto: 'defina o servo do pino (9) para o ângulo (0)' },
        {
          cor: 'controle',
          texto: 'sempre',
          dentro: [
            {
              cor: 'controle',
              texto: 'se <arduino:ler pino digital (2)> então',
              dentro: [
                { cor: 'arduino', texto: 'defina o servo do pino (9) para o ângulo (90)' },
                { cor: 'controle', texto: 'espere (3) seg' },
                { cor: 'arduino', texto: 'defina o servo do pino (9) para o ângulo (0)' },
              ],
            },
          ],
        },
      ],
      legenda: '0° = cancela fechada; 90° = cancela aberta.',
    },
    {
      tipo: 'texto',
      texto: 'Cole um palito de picolé no braço do servo e pronto: você tem uma cancela de verdade!',
    },
    { tipo: 'titulo', texto: 'Girando devagar com uma variável' },
    {
      tipo: 'scratch',
      blocos: [
        { cor: 'eventos', texto: 'quando {bandeira} for clicado' },
        { cor: 'variaveis', texto: 'mude [ângulo] para (0)' },
        {
          cor: 'controle',
          texto: 'repita (18) vezes',
          dentro: [
            { cor: 'arduino', texto: 'defina o servo do pino (9) para o ângulo {variaveis:ângulo}' },
            { cor: 'variaveis', texto: 'adicione (10) a [ângulo]' },
            { cor: 'controle', texto: 'espere (0.1) seg' },
          ],
        },
      ],
      legenda: 'De 10 em 10 graus: o braço vai de 0° a 170° devagar, em 18 passinhos.',
    },
    {
      tipo: 'cuidado',
      texto: 'Não gire o braço do servo com a mão: as engrenagens de dentro são de plástico e quebram fácil.',
    },
    {
      tipo: 'professor',
      itens: [
        '**Matemática:** cole um transferidor de papel atrás do braço e peça que os alunos prevejam onde ele vai parar antes de rodar o programa.',
        'Na cancela, pergunte: "por que mandar o servo para 0° logo no começo?" (para ela começar sempre fechada, igual zerar a variável no Scratch).',
        'A cancela é a base do projeto **Trânsito na porta** do 2º semestre.',
        '**Sem placa?** O Tinkercad Circuits tem o micro servo com a mesma ligação de 3 fios.',
      ],
    },
    {
      tipo: 'resumo',
      itens: [
        'Fios do servo: **marrom = GND**, **vermelho = 5V**, **laranja = sinal** (pino 9).',
        'O bloco do servo manda ele para um **ângulo** de 0° a 180°.',
        'Botão + servo = **cancela** que abre e fecha sozinha.',
        'Com uma **variável**, o servo gira aos poucos.',
      ],
    },
  ],
  quiz: [
    {
      pergunta: 'Em qual pino vai o fio **laranja** do servo, neste projeto?',
      opcoes: ['No GND', 'No pino 9', 'No 5V'],
      certa: 1,
      explicacao: 'O fio laranja é o do **sinal**: vai num pino digital, aqui o **9**. Marrom vai no GND e vermelho no 5V.',
    },
    {
      pergunta: 'Na cancela, por que o programa manda o servo para 0° **antes** do `sempre`?',
      opcoes: [
        'Para a cancela começar sempre fechada',
        'Para o servo esquentar',
        'Não faz diferença',
      ],
      certa: 0,
      explicacao: 'Assim, toda vez que o programa começa, a cancela está **fechada** (0°), não importa onde ela parou antes.',
    },
    {
      pergunta: 'No programa da variável, `ângulo` começa em 0 e soma 10 em cada uma das 18 voltas. Qual é o último ângulo enviado ao servo?',
      opcoes: ['180°', '18°', '170°'],
      certa: 2,
      explicacao: 'O servo recebe 0, 10, 20... O 18º valor é **170°**. O `adicione` da última volta deixa a variável em 180, mas aí o `repita` já acabou.',
    },
    {
      pergunta: 'O bloco do servo não funcionou no modo ao vivo. O que tentar?',
      opcoes: ['Girar o braço com a mão', 'Trocar o fio vermelho pelo laranja', 'Usar o modo upload'],
      certa: 2,
      explicacao: 'Alguns blocos do Arduino funcionam melhor (ou só funcionam) no **modo upload**. Troque a bandeira por **quando o Arduino Uno iniciar** e envie para a placa.',
    },
  ],
}
