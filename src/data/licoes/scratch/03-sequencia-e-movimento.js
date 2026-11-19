export default {
  id: 'sequencia-e-movimento',
  titulo: 'Sequência e movimento',
  resumo: 'Os blocos rodam um depois do outro. E o palco tem um "mapa" com x e y para mover os atores.',
  minutos: 8,
  blocos: [
    {
      tipo: 'texto',
      texto:
        'Uma **sequência** é uma lista de passos em ordem, como uma receita de bolo. No Scratch, os blocos rodam **de cima para baixo**, um depois do outro. Se você trocar a ordem, o resultado muda.',
    },
    {
      tipo: 'scratch',
      blocos: [
        { cor: 'eventos', texto: 'quando {bandeira} for clicado' },
        { cor: 'movimento', texto: 'vá para x: (-150) y: (0)' },
        { cor: 'aparencia', texto: 'diga (Vou atravessar!) por (2) segundos' },
        { cor: 'movimento', texto: 'deslize por (2) segundos até x: (150) y: (0)' },
        { cor: 'aparencia', texto: 'diga (Cheguei!) por (2) segundos' },
      ],
      legenda: 'O gato vai para a esquerda, avisa, desliza até a direita e comemora.',
    },
    { tipo: 'titulo', texto: 'O mapa do palco: x e y' },
    { tipo: 'figura', nome: 'palco-coordenadas', legenda: 'O centro do palco é o ponto x: 0, y: 0.' },
    {
      tipo: 'lista',
      itens: [
        '**x** é a posição **deitada** (esquerda ↔ direita). Vai de **-240** (beirada esquerda) até **240** (beirada direita).',
        '**y** é a posição **em pé** (baixo ↕ cima). Vai de **-180** (embaixo) até **180** (em cima).',
        'O **centro** do palco é **x: 0, y: 0**.',
      ],
    },
    {
      tipo: 'dica',
      texto:
        'Não precisa decorar números: arraste o ator no palco e veja a posição dele embaixo do palco, nos campos **x** e **y**. O bloco "vá para x: y:" já vem com a posição atual.',
    },
    { tipo: 'titulo', texto: 'Blocos de movimento' },
    {
      tipo: 'lista',
      itens: [
        '`mova 10 passos`: anda para a frente, na direção para onde o ator está virado.',
        '`mude x por 10`: vai **10 para a direita**. Com **-10**, vai para a esquerda.',
        '`mude y por 10`: vai **10 para cima**. Com **-10**, vai para baixo.',
        '`vá para x: y:`: pula na hora para um ponto do palco.',
        '`deslize por 1 segundos até x: y:`: vai até o ponto devagar, dá para ver o caminho.',
      ],
    },
    {
      tipo: 'cuidado',
      texto:
        'O computador é **muito rápido**. Se você empilhar `mova 10 passos` três vezes, o ator parece pular de uma vez. Para ver cada passo, coloque um bloco `espere 1 seg` (da categoria **Controle**) entre eles.',
    },
    {
      tipo: 'professor',
      itens: [
        '**Atividade desplugada:** "robô humano". Um aluno dá comandos em sequência ("ande 3 passos", "vire à direita") para um colega chegar até um objeto. Depois, troquem a ordem dos comandos e vejam o que acontece.',
        '**Matemática:** as coordenadas do Scratch são o **plano cartesiano**, com números negativos. Ótimo para o 6º e 7º ano.',
        '**Desafio:** fazer o gato visitar os quatro cantos do palco, usando `deslize`.',
      ],
    },
    { tipo: 'link', texto: 'Abrir o Scratch', url: 'https://scratch.mit.edu/projects/editor/' },
    {
      tipo: 'resumo',
      itens: [
        'Os blocos rodam **em sequência**, de cima para baixo. A **ordem** importa.',
        '**x** = esquerda e direita (-240 a 240). **y** = baixo e cima (-180 a 180).',
        'O centro do palco é **x: 0, y: 0**.',
        'Use `espere` para ver cada passo acontecer.',
      ],
    },
  ],
  quiz: [
    {
      pergunta: 'Em que ordem o Scratch roda os blocos de uma pilha?',
      opcoes: ['De cima para baixo, um depois do outro', 'De baixo para cima', 'Todos ao mesmo tempo, em qualquer ordem'],
      certa: 0,
      explicacao: 'Os blocos formam uma **sequência**: rodam de **cima para baixo**. Trocar a ordem muda o resultado.',
    },
    {
      pergunta: 'Qual é a posição do **centro** do palco?',
      opcoes: ['x: 240, y: 180', 'x: 100, y: 100', 'x: 0, y: 0'],
      certa: 2,
      explicacao: 'O centro é **x: 0, y: 0**. Para a direita o x aumenta; para cima, o y aumenta.',
    },
    {
      pergunta: 'O bloco `mude y por -10` faz o ator ir para onde?',
      opcoes: ['Para a direita', 'Para baixo', 'Para cima'],
      certa: 1,
      explicacao: '**y** é a posição em pé (baixo e cima). Com número **negativo**, o ator vai para **baixo**.',
    },
    {
      pergunta: 'Você empilhou três blocos `mova 10 passos`, mas o gato parece pular de uma vez. Como ver cada passo?',
      opcoes: ['Colocar `espere 1 seg` entre os blocos', 'Apertar a bandeira mais devagar', 'Trocar 10 por 100'],
      certa: 0,
      explicacao: 'O computador é muito rápido. O bloco **espere** dá uma pausa entre os passos, e aí dá para ver cada um.',
    },
  ],
}
