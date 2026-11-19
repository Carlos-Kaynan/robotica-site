export default {
  id: 'repeticao',
  titulo: 'Repetição: fazer de novo sem copiar',
  resumo: 'Os blocos "repita" e "sempre" fazem o computador repetir passos sem você montar tudo de novo.',
  minutos: 8,
  blocos: [
    {
      tipo: 'texto',
      texto:
        'Imagine fazer o gato andar num quadrado: anda, vira, anda, vira, anda, vira, anda, vira. São 8 blocos, e quase todos iguais! Para isso existe a **repetição** (também chamada de **laço** ou **loop**).',
    },
    {
      tipo: 'texto',
      texto:
        'Os blocos de repetição ficam na categoria **Controle** (laranja) e têm o formato de um **"C"**: os blocos que você coloca **dentro da boca** do C são repetidos.',
    },
    { tipo: 'titulo', texto: 'Repita um número de vezes' },
    {
      tipo: 'scratch',
      blocos: [
        { cor: 'eventos', texto: 'quando {bandeira} for clicado' },
        {
          cor: 'controle',
          texto: 'repita (4) vezes',
          dentro: [
            { cor: 'movimento', texto: 'mova (100) passos' },
            { cor: 'movimento', texto: 'gire ↻ (90) graus' },
            { cor: 'controle', texto: 'espere (1) seg' },
          ],
        },
        { cor: 'aparencia', texto: 'diga (Fiz um quadrado!) por (2) segundos' },
      ],
      legenda: 'Anda e vira 4 vezes: o gato percorre um quadrado. Depois, fala.',
    },
    {
      tipo: 'texto',
      texto: 'Quando as 4 voltas terminam, o programa **continua** e roda o bloco que está embaixo do C.',
    },
    { tipo: 'titulo', texto: 'Sempre: repetir sem parar' },
    {
      tipo: 'scratch',
      blocos: [
        { cor: 'eventos', texto: 'quando {bandeira} for clicado' },
        {
          cor: 'controle',
          texto: 'sempre',
          dentro: [
            { cor: 'movimento', texto: 'mova (10) passos' },
            { cor: 'movimento', texto: 'se tocar na borda, volte' },
            { cor: 'aparencia', texto: 'próxima fantasia' },
            { cor: 'controle', texto: 'espere (0.1) seg' },
          ],
        },
      ],
      legenda: 'O gato anda de um lado para o outro mexendo as pernas, até alguém clicar no botão vermelho.',
    },
    {
      tipo: 'texto',
      texto:
        'O `sempre` repete **para sempre**, até o botão vermelho ser clicado. A troca de **fantasia** (a roupa do ator) faz parecer que o gato está andando de verdade.',
    },
    {
      tipo: 'dica',
      texto:
        'O gato ficou de cabeça para baixo ao voltar da borda? Coloque antes do `sempre` o bloco de **estilo de rotação** (em Movimento) e escolha **esquerda-direita**.',
    },
    {
      tipo: 'cuidado',
      texto:
        'O `sempre` não tem encaixe embaixo: **nada depois dele roda**. E nos números com vírgula, use **ponto**: escreva `0.1`, não `0,1`.',
    },
    {
      tipo: 'professor',
      itens: [
        '**Pergunta para a turma:** "quantos blocos precisaríamos sem o repita?" Contar ajuda a ver para que serve a repetição.',
        '**Desafio:** desenhar um triângulo (3 lados, girar 120°) e um hexágono (6 lados, girar 60°). Com a extensão **Caneta** o gato deixa o rastro, e o 8º e 9º ano podem descobrir a regra: 360 ÷ número de lados.',
        'Repetição está em todo lugar: o refrão de uma música, os exercícios da educação física, o pisca-pisca do semáforo (que aparece na trilha Arduino em blocos).',
      ],
    },
    { tipo: 'link', texto: 'Abrir o Scratch', url: 'https://scratch.mit.edu/projects/editor/' },
    {
      tipo: 'resumo',
      itens: [
        'Repetição (laço) roda os mesmos blocos **várias vezes**.',
        '`repita 10 vezes` repete um número certo de vezes e depois **continua**.',
        '`sempre` repete **sem parar**, e nada embaixo dele roda.',
        'Os blocos repetidos ficam **dentro da boca** do "C".',
      ],
    },
  ],
  quiz: [
    {
      pergunta: 'Dentro de um `repita 4 vezes` estão `mova 100 passos` e `gire 90 graus`. Que caminho o gato faz?',
      opcoes: ['Uma linha reta', 'Um círculo', 'Um quadrado'],
      certa: 2,
      explicacao: 'Anda e vira 90°, **4 vezes**: são os 4 lados e os 4 cantos de um **quadrado**.',
    },
    {
      pergunta: 'Qual é a diferença entre `repita 10 vezes` e `sempre`?',
      opcoes: [
        'O repita para depois de 10 vezes; o sempre não para',
        'Nenhuma, os dois são iguais',
        'O sempre é mais rápido',
      ],
      certa: 0,
      explicacao: 'O `repita` faz um **número certo** de voltas e continua o programa. O `sempre` repete **até o botão vermelho**.',
    },
    {
      pergunta: 'Você colocou um bloco `diga Tchau!` **embaixo** de um `sempre`. O que acontece?',
      opcoes: ['O gato diz "Tchau!" no fim', 'O bloco nunca roda', 'O gato diz "Tchau!" a cada volta'],
      certa: 1,
      explicacao: 'O `sempre` nunca termina, então nada embaixo dele roda. Por isso ele nem tem encaixe embaixo.',
    },
    {
      pergunta: 'Como escrever "um décimo de segundo" no bloco `espere`?',
      opcoes: ['0,1', '1/10', '0.1'],
      certa: 2,
      explicacao: 'O Scratch usa **ponto** nos números quebrados: `0.1`.',
    },
  ],
}
