export default {
  id: 'sensor-ultrassonico',
  titulo: 'Sensor ultrassônico: medir distância como um morcego',
  resumo: 'Como o sensor usa o eco do som para medir a distância até um objeto.',
  minutos: 8,
  blocos: [
    { tipo: 'figura', nome: 'sensor-ultrassonico', legenda: 'Sensor ultrassônico HC-SR04, com os dois "olhos".' },
    {
      tipo: 'texto',
      texto:
        'Os **morcegos** voam no escuro sem bater em nada. Eles soltam um som muito agudo e escutam o **eco** que volta quando o som bate em algo. Quanto mais o eco demora, mais longe está o obstáculo. O sensor ultrassônico faz **exatamente isso**.',
    },
    { tipo: 'titulo', texto: 'Como ele funciona' },
    {
      tipo: 'lista',
      itens: [
        'Um dos "olhos" é um **alto-falante**: ele solta um som agudo demais para os humanos ouvirem (o **ultrassom**).',
        'O outro "olho" é um **microfone**: ele escuta o eco que volta.',
        'O sensor mede **quanto tempo** o som levou para ir e voltar.',
        'Com esse tempo, o programa calcula a **distância** até o objeto.',
      ],
    },
    { tipo: 'titulo', texto: 'Os 4 pinos' },
    {
      tipo: 'lista',
      itens: [
        '**VCC:** energia, vai no 5V.',
        '**Trig:** o Arduino manda o sinal "pode gritar!".',
        '**Echo:** o sensor avisa quanto tempo o eco demorou.',
        '**GND:** o negativo.',
      ],
    },
    {
      tipo: 'dica',
      texto:
        'Nos programas em blocos (mBlock, Tinkercad) já existe um bloco pronto que devolve a distância em **centímetros**. Você só informa em quais pinos ligou o Trig e o Echo.',
    },
    { tipo: 'titulo', texto: 'A conta por trás do sensor' },
    {
      tipo: 'texto',
      texto:
        'O som anda cerca de **340 metros por segundo** no ar, o que dá **0,034 cm a cada microssegundo**. Como o som vai **e** volta, dividimos por 2:',
    },
    {
      tipo: 'lista',
      itens: [
        '**distância = tempo × 0,034 ÷ 2**',
        'Exemplo: o eco voltou em 1000 microssegundos → 1000 × 0,034 ÷ 2 = **17 cm**.',
      ],
    },
    {
      tipo: 'cuidado',
      texto:
        'O sensor erra com objetos **macios** (tecido, espuma, que "engolem" o som), **muito finos** ou **inclinados** (o eco vai para outro lado). Ele mede bem de uns **2 cm até uns 4 metros**.',
    },
    {
      tipo: 'professor',
      itens: [
        '**Ciências:** conecte com o conteúdo de ondas sonoras, eco e ecolocalização (morcegos e golfinhos). Os sensores de ré dos carros usam a mesma ideia.',
        '**Matemática:** a fórmula da distância é um ótimo exercício de multiplicação com decimais e de "por que dividir por 2".',
        '**Atividade:** os alunos medem objetos com régua e com o sensor e comparam os números numa tabela.',
        'Esta peça é a base do projeto **robô que desvia de obstáculos**, da trilha Robôs.',
      ],
    },
    {
      tipo: 'resumo',
      itens: [
        'O sensor solta um **ultrassom** e mede quanto tempo o **eco** demora.',
        'Pinos: **VCC**, **Trig**, **Echo** e **GND**.',
        '**distância = tempo × 0,034 ÷ 2** (em cm, com o tempo em microssegundos).',
        'Objetos macios, finos ou inclinados atrapalham a medida.',
      ],
    },
  ],
  quiz: [
    {
      pergunta: 'O sensor ultrassônico funciona do mesmo jeito que qual animal?',
      opcoes: [
        'O gato, que enxerga no escuro',
        'O morcego, que usa o eco do som',
        'A coruja, que tem olhos grandes',
      ],
      certa: 1,
      explicacao: 'Igual ao **morcego**: o sensor solta um som agudo e escuta o **eco**. Quanto mais o eco demora, mais longe está o objeto.',
    },
    {
      pergunta: 'Na conta da distância, por que dividimos por 2?',
      opcoes: [
        'Porque o som vai até o objeto e depois volta',
        'Porque o sensor tem 2 "olhos"',
        'Só para o número ficar menor',
      ],
      certa: 0,
      explicacao: 'O tempo medido é de **ida e volta** do som. A distância até o objeto é só a ida, ou seja, **metade** do caminho.',
    },
    {
      pergunta: 'O eco voltou em **2000** microssegundos. Usando `distância = tempo × 0,034 ÷ 2`, qual é a distância?',
      opcoes: ['17 cm', '68 cm', '34 cm'],
      certa: 2,
      explicacao: '2000 × 0,034 = 68. Depois, 68 ÷ 2 = **34 cm**. Quem respondeu 68 esqueceu de dividir por 2!',
    },
    {
      pergunta: 'Qual destes objetos o sensor tem **mais dificuldade** para medir?',
      opcoes: ['Uma parede lisa, bem de frente', 'Uma almofada de espuma', 'Uma caixa de papelão, bem de frente'],
      certa: 1,
      explicacao: 'Objetos **macios**, como espuma e tecido, "engolem" o som e o eco quase não volta. Objetos muito finos ou inclinados também atrapalham.',
    },
  ],
}
