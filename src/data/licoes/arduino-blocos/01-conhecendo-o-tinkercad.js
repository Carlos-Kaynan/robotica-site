export default {
  id: 'conhecendo-o-tinkercad',
  titulo: 'Conhecendo o Tinkercad Circuits',
  resumo: 'Um laboratório de eletrônica dentro do navegador: montar, programar e testar sem gastar nenhuma peça.',
  minutos: 9,
  blocos: [
    {
      tipo: 'texto',
      texto:
        'O **Tinkercad Circuits** é um **simulador**: um programa que imita peças eletrônicas de verdade. Você arrasta um Arduino, LEDs e fios para a tela, monta o circuito, programa e aperta um botão para ver tudo funcionando, como se fosse real.',
    },
    {
      tipo: 'lista',
      itens: [
        '**É gratuito** e roda no navegador, sem instalar nada.',
        '**Não queima nada:** se você errar a ligação, a peça "queima" só na tela.',
        '**Peças sem fim:** precisa de 10 LEDs? É só arrastar.',
      ],
    },
    { tipo: 'titulo', texto: 'Entrando com o código da turma' },
    {
      tipo: 'passos',
      itens: [
        'O professor cria uma **turma** no Tinkercad e passa para você o **código da turma** e o seu **apelido**.',
        'No site do Tinkercad, clique em **Participar da sua aula** (ou "Join your class").',
        'Digite o código da turma e depois o seu apelido. Pronto: não precisa de e-mail!',
      ],
    },
    { tipo: 'titulo', texto: 'Seu primeiro circuito' },
    {
      tipo: 'passos',
      itens: [
        'Clique em **Criar** e escolha **Circuito**.',
        'À direita fica a lista de **componentes**. Procure o **Arduino Uno** e arraste para a área de trabalho.',
        'Clique no botão **Código**, em cima. Abre o editor de **blocos**, parecido com o do Scratch.',
        'Clique em **Iniciar simulação**. O LED pequeno da placa (o **L**, do pino 13) começa a piscar!',
      ],
    },
    {
      tipo: 'texto',
      texto: 'Ele pisca porque o Tinkercad já começa com um programa pronto, mais ou menos assim:',
    },
    {
      tipo: 'scratch',
      blocos: [
        { cor: 'saida', texto: 'definir LED integrado como [ALTO]' },
        { cor: 'controle', texto: 'aguardar (1) [segundos]' },
        { cor: 'saida', texto: 'definir LED integrado como [BAIXO]' },
        { cor: 'controle', texto: 'aguardar (1) [segundos]' },
      ],
      legenda: 'O programa que já vem pronto: acende, espera, apaga, espera.',
    },
    { tipo: 'titulo', texto: 'Cadê o "sempre"?' },
    {
      tipo: 'texto',
      texto:
        'Repare: não tem bandeira verde nem bloco `sempre`, e mesmo assim o LED pisca sem parar. No Tinkercad, **o programa inteiro se repete sozinho**, do último bloco de volta para o primeiro, enquanto a simulação estiver ligada. É como se tudo já estivesse dentro de um `sempre` invisível.',
    },
    {
      tipo: 'dica',
      texto:
        'Curioso para ver como é o código "de verdade"? Mude o editor de **Blocos** para **Blocos + Texto**. Do lado aparece o mesmo programa escrito na linguagem do Arduino. Mexa num bloco e veja o texto mudar junto!',
    },
    {
      tipo: 'cuidado',
      texto:
        'Os nomes dos blocos e botões nesta trilha são **aproximados**. Eles podem mudar um pouco conforme a versão e o idioma do Tinkercad. Procure pelo bloco que faz a mesma coisa.',
    },
    {
      tipo: 'professor',
      itens: [
        '**Antes da aula:** crie a turma em **Turmas** no Tinkercad e gere os apelidos dos alunos. Imprima um papelzinho com código e apelido para cada um.',
        'Os **Starters** (circuitos prontos, no menu de componentes) são ótimos para os alunos explorarem: dá para arrastar, simular e modificar.',
        'O Tinkercad precisa de **internet**. Se a conexão da escola for fraca, prefira atividades em dupla, com um computador para cada dois alunos.',
      ],
    },
    { tipo: 'link', texto: 'Abrir o Tinkercad', url: 'https://www.tinkercad.com/' },
    {
      tipo: 'resumo',
      itens: [
        'O **Tinkercad Circuits** simula eletrônica no navegador: montar e testar **sem gastar peças**.',
        'Os alunos entram com o **código da turma** e um **apelido**, sem e-mail.',
        '**Código** abre os blocos; **Iniciar simulação** liga tudo.',
        'No Tinkercad, o programa **se repete sozinho**.',
      ],
    },
  ],
  quiz: [
    {
      pergunta: 'Qual é a maior vantagem de testar o circuito num simulador?',
      opcoes: ['Fica mais bonito', 'Se errar, nenhuma peça de verdade queima', 'O LED brilha mais'],
      certa: 1,
      explicacao: 'No **simulador**, os erros só acontecem na tela. Dá para errar, aprender e corrigir sem gastar peças.',
    },
    {
      pergunta: 'O programa do Tinkercad não tem o bloco `sempre`. Por que o LED pisca sem parar?',
      opcoes: [
        'Porque no Tinkercad o programa inteiro se repete sozinho',
        'Porque o LED está com defeito',
        'Porque a bandeira verde foi clicada',
      ],
      certa: 0,
      explicacao: 'No Tinkercad, o programa **se repete sozinho** enquanto a simulação está ligada, como um `sempre` invisível.',
    },
    {
      pergunta: 'Você montou o circuito e o código. Qual botão faz tudo funcionar?',
      opcoes: ['Código', 'Criar', 'Iniciar simulação'],
      certa: 2,
      explicacao: '**Iniciar simulação** liga o circuito virtual. O botão **Código** só abre o editor de blocos.',
    },
    {
      pergunta: 'Para que serve o modo **Blocos + Texto**?',
      opcoes: [
        'Para escrever mensagens para o professor',
        'Para ver o mesmo programa escrito na linguagem do Arduino',
        'Para deixar os blocos maiores',
      ],
      certa: 1,
      explicacao: 'Ele mostra, lado a lado, os blocos e o **código em texto** que o Arduino usa. É uma espiadinha no próximo passo da programação.',
    },
  ],
}
