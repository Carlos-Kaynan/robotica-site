export default {
  id: 'circuitos-no-simulador',
  titulo: 'Montando circuitos no simulador',
  resumo: 'Protoboard, LED, resistor e fios no Tinkercad, e o que acontece quando falta o resistor.',
  minutos: 9,
  blocos: [
    {
      tipo: 'texto',
      texto:
        'O LED da placa é pequeno. Agora vamos montar um LED **de fora**, na protoboard, do mesmo jeito que se faz com peças de verdade. Só que, no simulador, errar não custa nada.',
    },
    { tipo: 'titulo', texto: 'Arrastando as peças' },
    {
      tipo: 'passos',
      itens: [
        'Com o Arduino na tela, arraste uma **placa de ensaio** (é a protoboard) para perto dele.',
        'Arraste um **LED** e encaixe as pernas em colunas **diferentes** da protoboard.',
        'Arraste um **resistor**. Clique nele e, no quadrinho de propriedades, mude a **resistência** para **220 Ω**.',
        'Para fazer um **fio**, clique num furo (ou num pino do Arduino) e depois clique no furo de destino.',
      ],
    },
    { tipo: 'figura', nome: 'circuito-led', legenda: 'O circuito a montar: pino 13 → resistor → LED → GND.' },
    {
      tipo: 'lista',
      itens: [
        'Fio do **pino 13** do Arduino até o resistor.',
        'Resistor até a **perna positiva** do LED (no Tinkercad, a perna **dobrada**).',
        'Perna negativa do LED até o **GND** do Arduino.',
      ],
    },
    {
      tipo: 'dica',
      texto:
        'Passe o mouse em cima da perna do LED: o Tinkercad mostra o nome dela, **ânodo** (+) ou **cátodo** (−). E clique num fio para mudar a **cor** dele: **vermelho** para energia e sinal, **preto** para GND. Fica muito mais fácil achar erros.',
    },
    { tipo: 'titulo', texto: 'O programa' },
    {
      tipo: 'scratch',
      blocos: [
        { cor: 'saida', texto: 'definir pino (13) como [ALTO]' },
        { cor: 'controle', texto: 'aguardar (1) [segundos]' },
        { cor: 'saida', texto: 'definir pino (13) como [BAIXO]' },
        { cor: 'controle', texto: 'aguardar (1) [segundos]' },
      ],
      legenda: 'O pisca-pisca no pino 13: o LED de fora e o LED L da placa piscam juntos.',
    },
    { tipo: 'titulo', texto: 'Experimento: tirar o resistor' },
    {
      tipo: 'texto',
      texto:
        'Que tal fazer no simulador o que **nunca** se deve fazer com peças de verdade? Apague o resistor, ligue o pino direto no LED e inicie a simulação. O Tinkercad mostra que o LED **queimou** e avisa que passou corrente demais.',
    },
    {
      tipo: 'cuidado',
      texto:
        'Na vida real, esse erro queima o LED de verdade e pode estragar o pino do Arduino. Por isso testamos no simulador antes de montar com as peças.',
    },
    {
      tipo: 'professor',
      itens: [
        '**Atividade de erros:** monte de propósito 3 circuitos com defeito (LED invertido, resistor na mesma coluna das duas pernas, fio no pino errado) e desafie as duplas a encontrar os erros.',
        'O Tinkercad tem **multímetro** na lista de componentes. Para o 8º e 9º ano, dá para medir a tensão no LED e retomar a Lei de Ohm da lição **LED e resistor**.',
        'Peça que os alunos **compartilhem** o link do circuito com você, para ver o trabalho de cada dupla.',
      ],
    },
    { tipo: 'link', texto: 'Abrir o Tinkercad', url: 'https://www.tinkercad.com/' },
    {
      tipo: 'resumo',
      itens: [
        'No Tinkercad, a protoboard se chama **placa de ensaio**.',
        'Mude o resistor para **220 Ω** nas propriedades.',
        'Circuito: **pino → resistor → LED → GND**; o bloco precisa usar o **mesmo pino** do fio.',
        'Sem resistor, o LED **queima**: no simulador dá para ver sem prejuízo.',
      ],
    },
  ],
  quiz: [
    {
      pergunta: 'Como se chama a protoboard no Tinkercad?',
      opcoes: ['Placa de ensaio', 'Placa Arduino', 'Multímetro'],
      certa: 0,
      explicacao: 'No Tinkercad, a protoboard aparece como **placa de ensaio**. É a mesma peça cheia de furinhos.',
    },
    {
      pergunta: 'O resistor do Tinkercad veio com outro valor. Onde trocar para 220 Ω?',
      opcoes: ['No editor de blocos', 'Nas propriedades do resistor, clicando nele', 'Não dá para trocar'],
      certa: 1,
      explicacao: 'Clique no resistor e mude a **resistência** no quadrinho de **propriedades**.',
    },
    {
      pergunta: 'Você mudou o fio do LED para o **pino 12**, mas o bloco continua `definir pino 13`. O que acontece?',
      opcoes: ['O LED de fora pisca normalmente', 'O LED queima', 'O LED de fora não acende'],
      certa: 2,
      explicacao: 'O bloco liga o pino 13, mas o LED de fora está no 12. O fio e o bloco precisam usar o **mesmo pino**.',
    },
    {
      pergunta: 'Por que testar o "LED sem resistor" no simulador, e não com peças de verdade?',
      opcoes: [
        'Porque no simulador o LED não queima de verdade',
        'Porque com peças de verdade o LED acende mais fraco',
        'Não tem diferença',
      ],
      certa: 0,
      explicacao: 'Sem resistor, o LED **queima**. No simulador você vê o erro acontecer **sem estragar nada**.',
    },
  ],
}
