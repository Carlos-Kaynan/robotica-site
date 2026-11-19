export default {
  id: 'projeto-minijogo',
  titulo: 'Projeto final: jogo "Pegue a maçã"',
  resumo: 'Juntando eventos, movimento, repetição, condições e variáveis num jogo de verdade.',
  minutos: 15,
  blocos: [
    {
      tipo: 'texto',
      texto:
        'Hora de usar tudo o que você aprendeu! Neste jogo, uma **maçã cai** do alto do palco e você move o **gato** com as setas do teclado para pegá-la. Cada maçã pega vale **1 ponto**.',
    },
    {
      tipo: 'lista',
      itens: [
        '**Eventos:** o jogo começa com a bandeira verde.',
        '**Movimento:** o gato anda; a maçã cai.',
        '**Repetição:** o `sempre` mantém o jogo rodando.',
        '**Condições:** "se tocou no gato", "se tocou na borda".',
        '**Variáveis:** os pontos.',
      ],
    },
    { tipo: 'titulo', texto: 'Passo 1: preparar o projeto' },
    {
      tipo: 'passos',
      itens: [
        'Abra um projeto novo no Scratch. O gato já vem pronto, com o nome **Ator1**.',
        'Passe o mouse no botão **Escolha um Ator** (o gatinho azul, embaixo à direita), clique na lupa e procure por **Apple** (maçã em inglês).',
        'Em **Variáveis**, crie a variável **pontos**.',
      ],
    },
    { tipo: 'titulo', texto: 'Passo 2: o código do gato' },
    {
      tipo: 'texto',
      texto: 'Clique no **gato** (Ator1), embaixo do palco, e monte:',
    },
    {
      tipo: 'scratch',
      blocos: [
        { cor: 'eventos', texto: 'quando {bandeira} for clicado' },
        { cor: 'movimento', texto: 'vá para x: (0) y: (-130)' },
        {
          cor: 'controle',
          texto: 'sempre',
          dentro: [
            {
              cor: 'controle',
              texto: 'se <tecla [seta para a direita] pressionada?> então',
              dentro: [{ cor: 'movimento', texto: 'mude x por (10)' }],
            },
            {
              cor: 'controle',
              texto: 'se <tecla [seta para a esquerda] pressionada?> então',
              dentro: [{ cor: 'movimento', texto: 'mude x por (-10)' }],
            },
          ],
        },
      ],
      legenda: 'O gato fica embaixo e anda para os lados com as setas.',
    },
    { tipo: 'titulo', texto: 'Passo 3: o código da maçã' },
    {
      tipo: 'texto',
      texto:
        'Agora clique na **maçã**, embaixo do palco, e monte o código dela. O bloco verde `número aleatório` fica em **Operadores**: ele sorteia um número, assim a maçã cai cada vez num lugar diferente.',
    },
    {
      tipo: 'scratch',
      blocos: [
        { cor: 'eventos', texto: 'quando {bandeira} for clicado' },
        { cor: 'variaveis', texto: 'mude [pontos] para (0)' },
        { cor: 'movimento', texto: 'vá para x: {número aleatório entre (-200) e (200)} y: (140)' },
        {
          cor: 'controle',
          texto: 'sempre',
          dentro: [
            { cor: 'movimento', texto: 'mude y por (-5)' },
            {
              cor: 'controle',
              texto: 'se <tocando em [Ator1]?> então',
              dentro: [
                { cor: 'variaveis', texto: 'adicione (1) a [pontos]' },
                { cor: 'movimento', texto: 'vá para x: {número aleatório entre (-200) e (200)} y: (140)' },
              ],
            },
            {
              cor: 'controle',
              texto: 'se <tocando em [borda]?> então',
              dentro: [{ cor: 'movimento', texto: 'vá para x: {número aleatório entre (-200) e (200)} y: (140)' }],
            },
          ],
        },
      ],
      legenda: 'A maçã desce; se o gato pegar, ganha ponto; se cair no chão, volta para cima.',
    },
    {
      tipo: 'dica',
      texto:
        'Entendendo a maçã: `mude y por -5` faz ela **descer** um pouquinho a cada volta do `sempre`. Quando ela toca no gato **ou** na borda de baixo, volta para o alto (y: 140) num x sorteado.',
    },
    { tipo: 'titulo', texto: 'Passo 4: testar e consertar' },
    {
      tipo: 'lista',
      itens: [
        'Clique na **bandeira verde** e jogue!',
        '**O gato não anda?** Confira se o código está no gato, e não na maçã.',
        '**A maçã não volta para cima?** Confira os nomes nos menus: `Ator1` e `borda`.',
        '**Os pontos não zeram?** Falta o `mude pontos para 0` no começo.',
      ],
    },
    { tipo: 'titulo', texto: 'Desafios para deixar o jogo seu' },
    {
      tipo: 'lista',
      itens: [
        '**Cenário:** escolha um fundo no botão **Escolha um Cenário** (embaixo à direita).',
        '**Tempo:** use o relógio de 10 segundos da lição de variáveis.',
        '**Mais difícil:** troque `-5` por `-8`. A maçã cai mais rápido!',
        '**Vidas:** crie a variável **vidas**, comece com 3 e tire 1 cada vez que a maçã tocar na borda.',
      ],
    },
    {
      tipo: 'professor',
      itens: [
        'Reserve **duas aulas**: uma para montar o jogo e outra para os desafios e para os alunos jogarem os jogos dos colegas.',
        '**Depuração:** quando algo não funcionar, peça ao aluno que explique, bloco por bloco, o que o código faz. Muitas vezes ele mesmo encontra o erro.',
        'Com contas de turma, os alunos podem **compartilhar** os jogos no Scratch e comentar os projetos dos colegas.',
        '**Avaliação:** observe se o aluno usa cada um dos 5 conceitos (eventos, sequência, repetição, condição e variável) e se consegue explicar onde estão.',
      ],
    },
    { tipo: 'link', texto: 'Abrir o Scratch e criar o jogo', url: 'https://scratch.mit.edu/projects/editor/' },
    {
      tipo: 'resumo',
      itens: [
        'Um jogo junta **eventos**, **movimento**, **repetição**, **condições** e **variáveis**.',
        'Cada ator tem o **seu código**: o gato anda, a maçã cai.',
        '`número aleatório` deixa o jogo diferente a cada vez.',
        'Testar, achar o erro e consertar faz parte de programar.',
      ],
    },
  ],
  quiz: [
    {
      pergunta: 'Por que a maçã usa `número aleatório entre -200 e 200` no x?',
      opcoes: [
        'Para ela cair mais rápido',
        'Para ela aparecer cada vez num lugar diferente',
        'Para ela mudar de cor',
      ],
      certa: 1,
      explicacao: 'O número aleatório **sorteia** uma posição. Assim o jogador não sabe onde a próxima maçã vai cair.',
    },
    {
      pergunta: 'Qual bloco faz a maçã **descer**?',
      opcoes: ['mude x por (-5)', 'mude y por (5)', 'mude y por (-5)'],
      certa: 2,
      explicacao: '**y** é baixo e cima. Com número **negativo**, a maçã desce um pouco a cada volta do `sempre`.',
    },
    {
      pergunta: 'Se o código da maçã **não tivesse** o `sempre`, o que aconteceria?',
      opcoes: [
        'A maçã desceria só uma vez, 5 passinhos, e pararia',
        'A maçã cairia mais rápido',
        'Nada mudaria',
      ],
      certa: 0,
      explicacao: 'Sem repetição, cada bloco roda **uma vez só**. É o `sempre` que faz a maçã continuar caindo.',
    },
    {
      pergunta: 'Onde fica o bloco `adicione 1 a pontos` no jogo?',
      opcoes: [
        'No código do gato, dentro do "se tecla seta pressionada"',
        'No código da maçã, dentro do "se tocando em Ator1"',
        'Solto, sem nenhum evento',
      ],
      certa: 1,
      explicacao: 'O ponto vem quando a **maçã toca no gato** (Ator1). Por isso ele fica dentro desse `se`, no código da maçã.',
    },
  ],
}
