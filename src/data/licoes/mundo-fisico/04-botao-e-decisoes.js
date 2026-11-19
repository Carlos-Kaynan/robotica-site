export default {
  id: 'botao-e-decisoes',
  titulo: 'Botão: a placa toma decisões',
  resumo: 'Ler um botão de verdade e usar o "se... senão" para decidir quando acender o LED.',
  minutos: 9,
  blocos: [
    {
      tipo: 'texto',
      texto:
        'Na lição anterior, a placa só **fazia** coisas (saída). Agora ela vai **perceber** o mundo (entrada) e **decidir** o que fazer. É o caminho completo: entrada → processamento → saída.',
    },
    { tipo: 'titulo', texto: 'Montando o botão' },
    { tipo: 'figura', nome: 'botao', legenda: 'Botão de toque, atravessando o canal do meio da protoboard.' },
    {
      tipo: 'passos',
      itens: [
        'Coloque o botão **atravessando o canal do meio** da protoboard.',
        'Ligue uma perna do botão no **5V**.',
        'Ligue a perna do outro lado no **pino 2** do Arduino.',
        'Ligue também o pino 2 ao **GND** por um resistor de **10 kΩ**, que mantém a leitura em "não apertado" quando ninguém aperta.',
      ],
    },
    {
      tipo: 'dica',
      texto:
        'Este é o mesmo circuito da lição **Botão** da trilha Peças do kit Arduino. Se tiver dúvida sobre o resistor de 10 kΩ, volte lá!',
    },
    { tipo: 'titulo', texto: 'Lendo o botão' },
    {
      tipo: 'texto',
      texto:
        'O mBlock tem um bloco em forma de **hexágono** que lê um pino digital. Ele é uma **condição**, como o `tocando na borda?` do Scratch: a resposta é **sim** (botão apertado) ou **não** (solto).',
    },
    {
      tipo: 'scratch',
      blocos: [
        { cor: 'eventos', texto: 'quando {bandeira} for clicado' },
        {
          cor: 'controle',
          texto: 'sempre',
          dentro: [
            {
              cor: 'controle',
              texto: 'se <arduino:ler pino digital (2)> então',
              dentro: [{ cor: 'arduino', texto: 'defina o pino digital (13) como [alto]' }],
              senao: [{ cor: 'arduino', texto: 'defina o pino digital (13) como [baixo]' }],
            },
          ],
        },
      ],
      legenda: 'Botão apertado: LED aceso. Botão solto: LED apagado.',
    },
    {
      tipo: 'texto',
      texto:
        'Compare com a lição de condições do Scratch: é a **mesma estrutura**! O `se` dentro do `sempre`, para perguntar o tempo todo. Só trocamos "o mouse está tocando no gato?" por "o botão está apertado?".',
    },
    { tipo: 'titulo', texto: 'Contando toques' },
    {
      tipo: 'scratch',
      blocos: [
        { cor: 'eventos', texto: 'quando {bandeira} for clicado' },
        { cor: 'variaveis', texto: 'mude [toques] para (0)' },
        {
          cor: 'controle',
          texto: 'sempre',
          dentro: [
            {
              cor: 'controle',
              texto: 'se <arduino:ler pino digital (2)> então',
              dentro: [
                { cor: 'variaveis', texto: 'adicione (1) a [toques]' },
                { cor: 'controle', texto: 'espere (0.3) seg' },
              ],
            },
          ],
        },
      ],
      legenda: 'Uma variável conta quantas vezes o botão foi apertado.',
    },
    {
      tipo: 'cuidado',
      texto:
        'Sem o `espere 0.3 seg`, um único aperto conta **muitas vezes**: enquanto o seu dedo está no botão, o `sempre` dá dezenas de voltas. O `espere` dá tempo de você soltar.',
    },
    {
      tipo: 'professor',
      itens: [
        '**Pergunta para a turma:** "o que é entrada, processamento e saída neste programa?" (botão; o `se`; o LED).',
        'Leitura "maluca", com o LED piscando sozinho? Quase sempre falta o resistor de 10 kΩ ou ele está na coluna errada.',
        '**Desafio:** o LED só acende se o botão ficar apertado por 2 segundos (dica: `espere` e um segundo `se`).',
        '**Sem placa?** O Tinkercad Circuits tem botão, resistor e protoboard para montar o mesmo circuito.',
      ],
    },
    {
      tipo: 'resumo',
      itens: [
        'O botão é uma **entrada**: o Arduino lê **sim** (apertado) ou **não** (solto).',
        'O bloco de **ler pino digital** é uma condição, como as do Scratch.',
        '`se... senão` dentro do `sempre`: o mesmo jeito de decidir do Scratch.',
        'Para contar toques, use uma **variável** e um pequeno `espere`.',
      ],
    },
  ],
  quiz: [
    {
      pergunta: 'Neste projeto, o que é o **processamento**?',
      opcoes: ['O botão', 'O LED', 'O "se... senão" decidindo o que fazer'],
      certa: 2,
      explicacao: 'O botão é a **entrada**, o LED é a **saída** e o programa (o `se... senão`) é o **processamento**: ele decide.',
    },
    {
      pergunta: 'O bloco `ler pino digital 2` tem forma de hexágono. Por quê?',
      opcoes: [
        'Porque é uma condição: a resposta é sim ou não',
        'Porque é um bloco de evento',
        'Só para ficar bonito',
      ],
      certa: 0,
      explicacao: 'No Scratch e no mBlock, o **hexágono** é o formato das **condições**, as perguntas de sim ou não.',
    },
    {
      pergunta: 'O LED está piscando sozinho, sem ninguém apertar o botão. Qual é a causa mais provável?',
      opcoes: ['O LED está queimado', 'Falta o resistor de 10 kΩ ou ele está no lugar errado', 'O cabo USB é muito curto'],
      certa: 1,
      explicacao: 'Sem o resistor de 10 kΩ ligando o pino ao GND, o pino fica "solto" e lê valores **aleatórios**.',
    },
    {
      pergunta: 'No contador de toques, um aperto conta várias vezes. Como resolver?',
      opcoes: ['Colocar um `espere 0.3 seg` depois de somar', 'Apertar mais forte', 'Trocar o botão de lugar'],
      certa: 0,
      explicacao: 'Enquanto o dedo está no botão, o `sempre` dá muitas voltas. O **espere** dá tempo de soltar antes da próxima leitura.',
    },
  ],
}
