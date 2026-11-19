export default {
  id: 'variaveis',
  titulo: 'Variáveis: guardar números',
  resumo: 'Uma variável é uma caixinha com nome que guarda um valor, como os pontos e o tempo de um jogo.',
  minutos: 8,
  blocos: [
    {
      tipo: 'texto',
      texto:
        'Num jogo, o programa precisa **lembrar** de coisas: quantos pontos você fez, quanto tempo falta, quantas vidas sobraram. Para isso usamos **variáveis**.',
    },
    {
      tipo: 'texto',
      texto:
        'Uma **variável** é como uma **caixinha com um nome** escrito do lado de fora. Dentro dela fica guardado um valor, que pode **mudar** (por isso o nome "variável") durante o jogo.',
    },
    { tipo: 'titulo', texto: 'Criando uma variável' },
    {
      tipo: 'passos',
      itens: [
        'Clique na categoria **Variáveis** (laranja-escuro).',
        'Clique no botão **Criar uma Variável**.',
        'Dê um nome que explique o que ela guarda, como **pontos**, e clique em OK.',
        'Pronto: a variável aparece num quadrinho no **palco**, mostrando o valor dela.',
      ],
    },
    { tipo: 'titulo', texto: 'Contando pontos' },
    {
      tipo: 'scratch',
      blocos: [
        { cor: 'eventos', texto: 'quando {bandeira} for clicado' },
        { cor: 'variaveis', texto: 'mude [pontos] para (0)' },
        { cor: 'movimento', texto: 'vá para x: (0) y: (0)' },
      ],
      legenda: 'No começo do jogo, os pontos voltam para zero.',
    },
    {
      tipo: 'scratch',
      blocos: [
        { cor: 'eventos', texto: 'quando este ator for clicado' },
        { cor: 'variaveis', texto: 'adicione (1) a [pontos]' },
        { cor: 'som', texto: 'toque o som [Miau]' },
        { cor: 'movimento', texto: 'vá para [posição aleatória]' },
      ],
      legenda: 'Cada clique no gato vale 1 ponto, e ele pula para outro lugar.',
    },
    {
      tipo: 'lista',
      itens: [
        '`mude pontos para 0`: **troca** o valor da caixinha por um novo.',
        '`adicione 1 a pontos`: **soma** ao valor que já estava lá. Com **-1**, diminui.',
      ],
    },
    {
      tipo: 'cuidado',
      texto:
        'Esqueceu o `mude pontos para 0` no começo? Então cada partida nova começa com os pontos da **partida anterior**. Sempre "zere" as variáveis quando a bandeira for clicada.',
    },
    { tipo: 'titulo', texto: 'Um relógio de 10 segundos' },
    {
      tipo: 'scratch',
      blocos: [
        { cor: 'eventos', texto: 'quando {bandeira} for clicado' },
        { cor: 'variaveis', texto: 'mude [tempo] para (10)' },
        {
          cor: 'controle',
          texto: 'repita (10) vezes',
          dentro: [
            { cor: 'controle', texto: 'espere (1) seg' },
            { cor: 'variaveis', texto: 'adicione (-1) a [tempo]' },
          ],
        },
        { cor: 'aparencia', texto: 'diga (Fim de jogo!) por (2) segundos' },
        { cor: 'controle', texto: 'pare [todos]' },
      ],
      legenda: 'Com uma segunda variável, "tempo", o jogo tem contagem regressiva.',
    },
    {
      tipo: 'dica',
      texto:
        'Junte os dois programas acima e você já tem um jogo: clicar no gato o máximo de vezes em 10 segundos!',
    },
    {
      tipo: 'professor',
      itens: [
        '**Atividade desplugada:** caixas de sapato com etiquetas ("pontos", "vidas") e papeizinhos com números. Um aluno lê as instruções ("adicione 1 a pontos") e outro atualiza a caixa.',
        '**Matemática:** variáveis no Scratch são uma ótima ponte para a **álgebra** do 7º e 8º ano (a letra que guarda um valor).',
        'Desmarcar a caixinha ao lado da variável, na lista de blocos, esconde o quadrinho do palco.',
      ],
    },
    { tipo: 'link', texto: 'Abrir o Scratch', url: 'https://scratch.mit.edu/projects/editor/' },
    {
      tipo: 'resumo',
      itens: [
        'Uma **variável** é uma caixinha com nome que guarda um valor.',
        'Crie em **Variáveis → Criar uma Variável**.',
        '`mude ... para` **troca** o valor; `adicione ... a` **soma** (ou diminui, com número negativo).',
        'Zere as variáveis no **começo** do jogo.',
      ],
    },
  ],
  quiz: [
    {
      pergunta: 'O que é uma variável?',
      opcoes: ['Um tipo de ator', 'Uma caixinha com nome que guarda um valor', 'Um som do Scratch'],
      certa: 1,
      explicacao: 'A variável **guarda um valor** (como os pontos), que pode mudar durante o jogo.',
    },
    {
      pergunta: 'A variável **pontos** vale 5. O bloco `adicione 1 a pontos` roda. Quanto ela passa a valer?',
      opcoes: ['6', '1', '5'],
      certa: 0,
      explicacao: '`adicione` **soma** ao que já estava lá: 5 + 1 = **6**. Já o `mude pontos para 1` trocaria o valor por 1.',
    },
    {
      pergunta: 'Por que colocar `mude pontos para 0` logo depois da bandeira verde?',
      opcoes: [
        'Para o jogo ficar mais rápido',
        'Para o gato voltar ao centro',
        'Para cada partida começar do zero, sem os pontos da anterior',
      ],
      certa: 2,
      explicacao: 'Sem isso, a caixinha continua com os pontos da **partida anterior**. Zerar no começo resolve.',
    },
    {
      pergunta: 'Qual bloco faz o **tempo** diminuir 1 segundo?',
      opcoes: ['adicione (-1) a [tempo]', 'mude [tempo] para (1)', 'adicione (1) a [tempo]'],
      certa: 0,
      explicacao: 'Somar um número **negativo** diminui: `adicione -1 a tempo` faz 10 virar 9, depois 8...',
    },
  ],
}
