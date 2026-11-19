export default {
  id: 'eventos',
  titulo: 'Eventos: quando tudo começa',
  resumo: 'Os blocos amarelos que dizem quando o programa deve começar: bandeira verde, teclas e cliques.',
  minutos: 6,
  blocos: [
    {
      tipo: 'texto',
      texto:
        'Um programa precisa saber **quando** começar. Para isso existem os blocos de **Eventos**, os amarelos. Eles têm o topo arredondado, como um chapéu, porque sempre ficam **no topo** de uma pilha de blocos.',
    },
    {
      tipo: 'texto',
      texto:
        'Um **evento** é algo que acontece: alguém clicou na bandeira, apertou uma tecla, clicou no ator. Quando o evento acontece, os blocos encaixados embaixo dele rodam.',
    },
    { tipo: 'titulo', texto: 'Os três eventos mais usados' },
    {
      tipo: 'scratch',
      blocos: [
        { cor: 'eventos', texto: 'quando {bandeira} for clicado' },
        { cor: 'movimento', texto: 'vá para x: (0) y: (0)' },
        { cor: 'aparencia', texto: 'diga (Vamos começar!) por (2) segundos' },
      ],
      legenda: 'Bandeira verde: o jeito de começar o projeto inteiro.',
    },
    {
      tipo: 'scratch',
      blocos: [
        { cor: 'eventos', texto: 'quando a tecla [espaço] for pressionada' },
        { cor: 'som', texto: 'toque o som [Miau] até o fim' },
      ],
      legenda: 'Tecla: no menu dá para escolher qualquer tecla, como as setas.',
    },
    {
      tipo: 'scratch',
      blocos: [
        { cor: 'eventos', texto: 'quando este ator for clicado' },
        { cor: 'movimento', texto: 'gire ↻ (15) graus' },
      ],
      legenda: 'Clique: roda quando alguém clica com o mouse no ator.',
    },
    {
      tipo: 'dica',
      texto:
        'Um ator pode ter **vários** programas ao mesmo tempo, cada um com o seu evento. Se dois começam com a bandeira verde, os dois rodam **juntos** quando ela é clicada.',
    },
    {
      tipo: 'cuidado',
      texto:
        'Bloco **solto**, sem um evento em cima, **nunca roda** sozinho. Se o seu programa "não faz nada", confira se ele está encaixado embaixo de um bloco amarelo.',
    },
    { tipo: 'titulo', texto: 'E para parar?' },
    {
      tipo: 'texto',
      texto:
        'O **botão vermelho**, ao lado da bandeira verde, para todos os programas na hora. Use sempre que algo sair do controle.',
    },
    {
      tipo: 'professor',
      itens: [
        '**Atividade desplugada:** combine eventos com a turma ("quando eu bater palma, todos levantam"; "quando eu apitar, todos sentam"). Depois mostre que no Scratch funciona igual.',
        '**Desafio:** fazer o gato reagir a três teclas diferentes, cada uma com um som ou uma fala.',
        'Clicar num bloco na área de código também faz ele rodar. É ótimo para testar, mas explique que, no projeto pronto, quem dispara o código é o **evento**.',
      ],
    },
    { tipo: 'link', texto: 'Abrir o Scratch', url: 'https://scratch.mit.edu/projects/editor/' },
    {
      tipo: 'resumo',
      itens: [
        'Os blocos de **Eventos** (amarelos) dizem **quando** o código começa.',
        'Os mais usados: **bandeira verde**, **tecla pressionada** e **ator clicado**.',
        'Vários programas podem rodar **ao mesmo tempo**.',
        'Bloco sem evento em cima **não roda**. O botão vermelho **para** tudo.',
      ],
    },
  ],
  quiz: [
    {
      pergunta: 'Para que servem os blocos amarelos de **Eventos**?',
      opcoes: ['Para mudar a cor do ator', 'Para dizer quando o código começa', 'Para tocar músicas'],
      certa: 1,
      explicacao: 'Os blocos de Eventos ficam **no topo** da pilha e dizem **quando** os blocos de baixo devem rodar.',
    },
    {
      pergunta: 'Você montou blocos na área de código, mas não encaixou nenhum evento em cima. O que acontece ao clicar na bandeira verde?',
      opcoes: ['Os blocos não rodam', 'Os blocos rodam normalmente', 'O Scratch apaga os blocos'],
      certa: 0,
      explicacao: 'Bloco **solto**, sem evento em cima, não sabe quando começar, então **não roda**.',
    },
    {
      pergunta: 'Qual evento você usa para o gato miar quando alguém aperta a tecla **espaço**?',
      opcoes: ['quando este ator for clicado', 'quando a bandeira for clicada', 'quando a tecla espaço for pressionada'],
      certa: 2,
      explicacao: 'O bloco **quando a tecla [espaço] for pressionada** roda os blocos de baixo sempre que a tecla é apertada.',
    },
    {
      pergunta: 'Dois programas do mesmo ator começam com "quando a bandeira for clicada". O que acontece ao clicar nela?',
      opcoes: ['Só o primeiro roda', 'Os dois rodam ao mesmo tempo', 'Dá erro'],
      certa: 1,
      explicacao: 'Todos os programas com o mesmo evento rodam **juntos**. É assim que um ator consegue andar e falar ao mesmo tempo.',
    },
  ],
}
