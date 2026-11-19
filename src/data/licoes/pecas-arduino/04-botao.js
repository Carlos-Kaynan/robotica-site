export default {
  id: 'botao',
  titulo: 'Botão: o robô sente um toque',
  resumo: 'Como o Arduino percebe que um botão foi apertado e por que precisamos de um resistor de 10 kΩ.',
  minutos: 7,
  blocos: [
    { tipo: 'figura', nome: 'botao', legenda: 'Botão de toque (push button) com 4 pernas.' },
    {
      tipo: 'texto',
      texto:
        'Até agora o Arduino só **mandava** sinais (acender o LED). Com o **botão**, ele passa a **receber** informação do mundo: é a primeira **entrada** do nosso projeto.',
    },
    {
      tipo: 'texto',
      texto:
        'O botão funciona como uma ponte: **solto**, a ponte está aberta e a corrente não passa. **Apertado**, a ponte fecha e a corrente passa. O Arduino lê isso como **1** (apertado) ou **0** (solto).',
    },
    { tipo: 'titulo', texto: 'As 4 pernas do botão' },
    {
      tipo: 'lista',
      itens: [
        'As pernas são ligadas **duas a duas** por dentro do botão.',
        'Coloque o botão **atravessando o canal do meio** da protoboard: assim as pernas ficam em colunas separadas e não há como errar.',
      ],
    },
    { tipo: 'titulo', texto: 'O resistor de 10 kΩ' },
    {
      tipo: 'texto',
      texto:
        'Quando o botão está solto, o pino do Arduino fica "desligado de tudo" e começa a ler valores aleatórios, como um rádio fora da estação. Para evitar isso, colocamos um resistor de **10 kΩ** (marrom, preto, laranja) ligando o pino ao GND. Ele mantém a leitura em **0** enquanto ninguém aperta.',
    },
    {
      tipo: 'dica',
      texto:
        'Muitos programas em blocos têm a opção **pull-up interno**, que já liga um resistor por dentro do Arduino. Mas atenção: com ela a leitura fica **invertida** (apertado = 0, solto = 1).',
    },
    { tipo: 'titulo', texto: 'Um exemplo de lógica' },
    {
      tipo: 'lista',
      itens: [
        '**Se** o botão estiver apertado → acende o LED.',
        '**Senão** → apaga o LED.',
        'Essa mesma ideia de **se/senão** você usa no Scratch. Aqui ela controla algo de verdade.',
      ],
    },
    {
      tipo: 'cuidado',
      texto:
        'Às vezes, um único aperto é lido como vários, porque o metal "treme" ao encostar. Se o seu contador pular números, coloque uma **pequena espera** (uns 50 milissegundos) depois de ler o botão.',
    },
    {
      tipo: 'professor',
      itens: [
        'Bom momento para falar de **entrada × saída**: peça que os alunos listem objetos de casa e classifiquem as partes (controle remoto = entrada, lâmpada = saída).',
        '**Projeto curto:** campainha. Botão apertado = LED aceso (e um buzzer, se o kit tiver).',
        'Se a leitura estiver "louca", quase sempre falta o resistor de 10 kΩ ou ele está na coluna errada.',
      ],
    },
    {
      tipo: 'resumo',
      itens: [
        'O botão é uma **entrada**: o Arduino lê **1** (apertado) ou **0** (solto).',
        'Coloque o botão **atravessando o canal do meio** da protoboard.',
        'Use um resistor de **10 kΩ** até o GND (ou o pull-up interno, que inverte a leitura).',
      ],
    },
  ],
}
