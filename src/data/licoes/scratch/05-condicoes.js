export default {
  id: 'condicoes',
  titulo: 'Condições: se... então',
  resumo: 'Com "se" o programa toma decisões: faz uma coisa só quando uma condição é verdadeira.',
  minutos: 8,
  blocos: [
    {
      tipo: 'texto',
      texto:
        'Todo dia você toma decisões: **se** estiver chovendo, **então** leve o guarda-chuva. Os programas também decidem, com o bloco **se... então** (categoria **Controle**).',
    },
    {
      tipo: 'texto',
      texto:
        'Dentro do espaço em forma de **hexágono** vai uma **condição**: uma pergunta que só pode ter resposta **sim** ou **não**. Muitas delas ficam na categoria **Sensores** (azul-claro):',
    },
    {
      tipo: 'lista',
      itens: [
        '`tocando em borda?`: o ator está encostando na beirada do palco?',
        '`tocando em ponteiro do mouse?`: o mouse está em cima do ator?',
        '`tecla espaço pressionada?`: alguém está apertando essa tecla agora?',
      ],
    },
    { tipo: 'titulo', texto: 'Se... então... senão' },
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
              texto: 'se <tocando em [ponteiro do mouse]?> então',
              dentro: [{ cor: 'aparencia', texto: 'diga (Ai, que cócegas!)' }],
              senao: [{ cor: 'aparencia', texto: 'diga ()' }],
            },
          ],
        },
      ],
      legenda: 'Com o mouse em cima, o gato reclama. Senão, ele fica quieto (diga vazio apaga a fala).',
    },
    {
      tipo: 'texto',
      texto:
        'O bloco **se... senão** escolhe **um** de dois caminhos: se a resposta for **sim**, roda a parte de cima; se for **não**, roda a parte do **senão**.',
    },
    {
      tipo: 'cuidado',
      texto:
        'Repare que o `se` está **dentro** de um `sempre`. Sozinho, o `se` faz a pergunta **uma vez só**, logo que a bandeira é clicada, e nunca mais. Dentro do `sempre`, ele pergunta **o tempo todo**. Esse é o erro mais comum com condições!',
    },
    { tipo: 'titulo', texto: 'Controlando o ator pelo teclado' },
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
      legenda: 'As setas do teclado levam o gato para a direita e para a esquerda.',
    },
    {
      tipo: 'dica',
      texto: 'Quer andar também para cima e para baixo? Copie um dos `se`, troque a tecla e use `mude y por`.',
    },
    {
      tipo: 'professor',
      itens: [
        '**Atividade desplugada:** "se a carta for vermelha, levante a mão; senão, bata palma". Depois peça que os alunos inventem regras com se/senão.',
        'Conecte com a trilha **Arduino em blocos**: lá o mesmo `se` acende um LED quando um botão é apertado.',
        '**Desafio:** o gato muda de cor (efeito **cor** em Aparência) sempre que toca na borda.',
      ],
    },
    { tipo: 'link', texto: 'Abrir o Scratch', url: 'https://scratch.mit.edu/projects/editor/' },
    {
      tipo: 'resumo',
      itens: [
        '`se... então` roda blocos **só quando** a condição é verdadeira.',
        'A condição é uma pergunta de **sim ou não** (hexágono), como `tocando em borda?`.',
        '`se... senão` escolhe **um de dois** caminhos.',
        'Para checar o tempo todo, coloque o `se` **dentro** do `sempre`.',
      ],
    },
  ],
  quiz: [
    {
      pergunta: 'Que tipo de pergunta vai no espaço em forma de hexágono do bloco `se`?',
      opcoes: ['Uma pergunta de sim ou não', 'Um número qualquer', 'O nome de um som'],
      certa: 0,
      explicacao: 'A **condição** só pode ser verdadeira (sim) ou falsa (não), como `tocando em borda?`.',
    },
    {
      pergunta: 'Você colocou `se tocando em borda? então diga Ai!` direto embaixo da bandeira, **sem** o `sempre`. O que acontece?',
      opcoes: [
        'O gato diz "Ai!" toda vez que toca na borda',
        'O teste acontece uma vez só, no começo, e nunca mais',
        'O gato não consegue mais andar',
      ],
      certa: 1,
      explicacao: 'Sem o `sempre`, o `se` pergunta **uma vez só**. Dentro do `sempre`, ele fica perguntando **o tempo todo**.',
    },
    {
      pergunta: 'No bloco `se... senão`, quando a condição é **falsa**, o que roda?',
      opcoes: ['A parte de cima', 'As duas partes', 'A parte do senão'],
      certa: 2,
      explicacao: 'O `se... senão` escolhe **um** caminho: condição verdadeira → parte de cima; falsa → parte do **senão**.',
    },
    {
      pergunta: 'Para o gato ir para a **esquerda** quando a seta esquerda for apertada, qual bloco vai dentro do `se`?',
      opcoes: ['mude x por (10)', 'mude x por (-10)', 'mude y por (-10)'],
      certa: 1,
      explicacao: 'Esquerda e direita são o **x**. Para a esquerda o número é **negativo**: `mude x por -10`.',
    },
  ],
}
