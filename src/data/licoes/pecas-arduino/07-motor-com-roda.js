export default {
  id: 'motor-com-roda',
  titulo: 'Motor com roda: fazer o robô andar',
  resumo: 'Por que o motor precisa de um driver (ponte H) e como dois motores fazem o robô virar.',
  minutos: 8,
  blocos: [
    { tipo: 'figura', nome: 'motor-roda', legenda: 'Motor com caixa de redução e roda, comum nos chassis de robô.' },
    {
      tipo: 'texto',
      texto:
        'O motor dos kits de robô é um **motor de corrente contínua (DC)** com uma **caixa de redução**: engrenagens que deixam o giro mais lento e mais forte, no ponto certo para empurrar o robô.',
    },
    { tipo: 'titulo', texto: 'O motor não vai direto no Arduino' },
    {
      tipo: 'texto',
      texto:
        'Um pino do Arduino aguenta só um pouquinho de corrente, o bastante para um LED. Um motor precisa de **muito mais**. Ligado direto no pino, o motor não gira direito e o Arduino pode **queimar**.',
    },
    {
      tipo: 'texto',
      texto:
        'Por isso usamos um **driver de motor** (também chamado de **ponte H**, como o L298N). Ele funciona como um **interruptor forte**: o Arduino dá a ordem com um sinal fraco e o driver liga o motor com a energia das **pilhas ou da bateria**.',
    },
    {
      tipo: 'cuidado',
      texto:
        'O **GND** das pilhas, do driver e do Arduino precisam estar **ligados entre si**. Sem esse "negativo em comum", os sinais do Arduino não chegam direito ao driver.',
    },
    { tipo: 'titulo', texto: 'Sentido e velocidade' },
    {
      tipo: 'lista',
      itens: [
        '**Sentido:** inverter os fios do motor inverte o giro. A ponte H faz essa inversão pelo programa, sem você tocar nos fios.',
        '**Velocidade:** o Arduino liga e desliga o motor muito rápido. Quanto mais tempo ligado, mais rápido ele gira (isso se chama **PWM**).',
      ],
    },
    { tipo: 'titulo', texto: 'Como um robô de 2 rodas vira' },
    { tipo: 'figura', nome: 'robo', legenda: 'Robô com dois motores: um de cada lado.' },
    {
      tipo: 'lista',
      itens: [
        '**Os dois para frente:** o robô anda reto.',
        '**Só o motor da esquerda girando:** o robô faz uma curva para a **direita**.',
        '**Só o motor da direita girando:** curva para a **esquerda**.',
        '**Um para frente e o outro para trás:** o robô **gira no lugar**.',
      ],
    },
    {
      tipo: 'dica',
      texto:
        'Se o robô andar para trás quando devia ir para frente, ou rodar em círculos, provavelmente um dos motores está com os fios invertidos. Troque os dois fios **daquele motor** no driver.',
    },
    {
      tipo: 'professor',
      itens: [
        '**Atividade sem robô:** dois alunos fazem o papel das rodas e um terceiro dá os comandos ("esquerda para frente, direita parada"). Eles descobrem sozinhos como o robô vira.',
        'Use sempre **baixa tensão** (5 V a 9 V) e pilhas ou baterias próprias para robô; nada de tomada nos circuitos dos alunos.',
        'Esta lição prepara diretamente o **seguidor de linha** e o **desvio de obstáculos** da trilha Robôs.',
      ],
    },
    {
      tipo: 'resumo',
      itens: [
        'O motor DC com caixa de redução é o que faz o robô **andar**.',
        'Ele precisa de um **driver (ponte H)** e de pilhas; nunca ligue direto no pino.',
        'Os GNDs de tudo ficam **ligados entre si**.',
        'Dois motores controlados separadamente fazem o robô **virar**.',
      ],
    },
  ],
  quiz: [
    {
      pergunta: 'Por que o motor **não** pode ser ligado direto no pino do Arduino?',
      opcoes: [
        'Porque ele giraria rápido demais',
        'Porque o pino aguenta pouca corrente e o Arduino pode queimar',
        'Porque os pinos só funcionam com LEDs',
      ],
      certa: 1,
      explicacao: 'O pino aguenta só o bastante para um LED. O motor precisa de **muito mais corrente**, e o Arduino pode queimar.',
    },
    {
      pergunta: 'O que faz o driver de motor (ponte H)?',
      opcoes: [
        'Funciona como um interruptor forte: liga o motor com a energia das pilhas quando o Arduino manda',
        'Mede a velocidade do robô',
        'Grava o programa dentro do motor',
      ],
      certa: 0,
      explicacao: 'O Arduino dá a ordem com um **sinal fraco** e o driver liga o motor com a energia das **pilhas ou da bateria**. Ele também consegue inverter o sentido do giro.',
    },
    {
      pergunta: 'Num robô de 2 rodas, só o motor da **esquerda** está girando para frente. O que o robô faz?',
      opcoes: ['Anda reto', 'Faz uma curva para a esquerda', 'Faz uma curva para a direita'],
      certa: 2,
      explicacao: 'O lado esquerdo empurra e o direito fica parado, então o robô gira em volta da roda direita: **curva para a direita**. Teste andando com os colegas!',
    },
    {
      pergunta: 'Seu robô anda para trás quando deveria ir para frente. Qual é a solução mais provável?',
      opcoes: [
        'Trocar as pilhas por novas',
        'Trocar os dois fios daquele motor no driver',
        'Desligar o GND do Arduino',
      ],
      certa: 1,
      explicacao: 'Inverter os fios do motor inverte o giro. Troque os **dois fios daquele motor** no driver. E nunca desligue o GND: ele precisa ser **comum** a tudo.',
    },
  ],
}
