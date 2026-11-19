export default {
  id: 'protoboard',
  titulo: 'Protoboard: montar circuitos sem solda',
  resumo: 'Como os furos da protoboard são ligados por dentro e como usar as linhas de energia.',
  minutos: 6,
  blocos: [
    { tipo: 'figura', nome: 'protoboard', legenda: 'Protoboard com as linhas de energia (vermelha e azul) nas bordas.' },
    {
      tipo: 'texto',
      texto:
        'A **protoboard** (também chamada de **matriz de contatos**) é uma placa cheia de furinhos. Você encaixa as pernas das peças e os fios nos furos e o circuito já funciona, **sem precisar soldar**. Se errar, é só tirar e encaixar de novo.',
    },
    { tipo: 'titulo', texto: 'O segredo: os furos são ligados por dentro' },
    {
      tipo: 'texto',
      texto:
        'Embaixo dos furos existem tirinhas de metal que ligam alguns furos entre si. Entender **quais furos estão ligados** é a parte mais importante desta lição:',
    },
    {
      tipo: 'lista',
      itens: [
        '**Colunas do meio:** cada coluna numerada tem 5 furos ligados (de **a** até **e**). Os 5 furos de baixo (de **f** até **j**) formam outro grupo ligado.',
        '**Canal do meio:** o "vale" no centro separa a parte de cima da parte de baixo. Os dois lados **não** estão ligados.',
        '**Linhas de energia:** nas bordas ficam as linhas compridas marcadas com **+** (vermelha) e **−** (azul). Todos os furos de uma mesma linha estão ligados.',
      ],
    },
    {
      tipo: 'dica',
      texto:
        'Costume que ajuda muito: ligue o **5V** do Arduino na linha **vermelha (+)** e o **GND** na linha **azul (−)**. Assim todas as peças pegam energia das bordas.',
    },
    {
      tipo: 'cuidado',
      texto:
        'Duas pernas de uma mesma peça **nunca** devem ficar na mesma coluna de 5 furos: elas ficariam ligadas uma na outra e a peça não funciona. Por isso o LED e o botão costumam ficar "atravessados".',
    },
    {
      tipo: 'cuidado',
      texto:
        'Em algumas protoboards, as linhas de energia são **cortadas no meio** (repare se a linha vermelha tem uma falha). Nesse caso, é preciso um fio para ligar as duas metades.',
    },
    {
      tipo: 'professor',
      itens: [
        '**Desafio rápido:** desenhe no quadro uma protoboard com três peças e pergunte "quais pernas estão ligadas?". É o erro de montagem mais comum dos alunos.',
        'Combine as cores dos fios com a turma: **vermelho** para 5V, **preto** para GND e outras cores para sinal. Isso facilita muito achar erros.',
      ],
    },
    {
      tipo: 'resumo',
      itens: [
        'A protoboard monta circuitos **sem solda**.',
        'Cada coluna de **5 furos** é ligada por dentro; o canal do meio separa os dois lados.',
        'As linhas das bordas (**+** e **−**) distribuem a energia.',
        'As pernas de uma peça ficam em colunas **diferentes**.',
      ],
    },
  ],
}
