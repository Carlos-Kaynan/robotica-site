export default {
  id: 'conhecendo-o-scratch',
  titulo: 'Conhecendo o Scratch',
  resumo: 'O que é o Scratch, como abrir e para que serve cada parte da tela.',
  minutos: 7,
  blocos: [
    {
      tipo: 'texto',
      texto:
        'O **Scratch** é um jeito de programar **encaixando blocos**, como peças de quebra-cabeça. Em vez de digitar comandos, você arrasta blocos coloridos e monta o programa. Com ele dá para criar jogos, animações e histórias.',
    },
    {
      tipo: 'texto',
      texto:
        'Ele foi criado por pesquisadores do **MIT** (uma universidade dos Estados Unidos), é **gratuito**, funciona em português e roda direto no **navegador**, sem instalar nada.',
    },
    { tipo: 'titulo', texto: 'As partes da tela' },
    { tipo: 'figura', nome: 'tela-scratch', legenda: 'Esquema da tela do Scratch, com as quatro áreas principais.' },
    {
      tipo: 'lista',
      itens: [
        '**1. Categorias e blocos:** à esquerda ficam as categorias (Movimento, Aparência, Som, Eventos...). Cada uma tem uma **cor** e mostra os seus blocos.',
        '**2. Área de código:** no meio. É aqui que você **arrasta e encaixa** os blocos para montar o programa.',
        '**3. Palco:** à direita, em cima. É onde o programa **acontece**. Em cima dele ficam a **bandeira verde** (começar) e o **botão vermelho** (parar).',
        '**4. Atores:** embaixo do palco. Os **atores** são os personagens e objetos do projeto. O primeiro ator de todo projeto é o **gato** do Scratch.',
      ],
    },
    {
      tipo: 'dica',
      texto:
        'Cada ator tem o **seu próprio código**. Clique no ator, embaixo do palco, para ver e mudar o código dele. Esse é um dos detalhes que mais confundem no começo!',
    },
    { tipo: 'titulo', texto: 'As cores dos blocos' },
    {
      tipo: 'texto',
      texto: 'A cor de um bloco mostra de qual categoria ele é. Veja alguns exemplos:',
    },
    {
      tipo: 'scratch',
      blocos: [
        { cor: 'eventos', texto: 'quando {bandeira} for clicado' },
        { cor: 'movimento', texto: 'mova (10) passos' },
        { cor: 'aparencia', texto: 'diga (Olá!) por (2) segundos' },
        { cor: 'som', texto: 'toque o som [Miau] até o fim' },
      ],
      legenda: 'Amarelo = Eventos, azul = Movimento, roxo = Aparência, rosa = Som.',
    },
    {
      tipo: 'texto',
      texto:
        'Esse é um programa completo! Quando alguém clica na **bandeira verde**, o gato anda 10 passos, diz "Olá!" e mia. Os blocos rodam **de cima para baixo**, um depois do outro.',
    },
    { tipo: 'titulo', texto: 'Salvando o seu projeto' },
    {
      tipo: 'lista',
      itens: [
        '**Com uma conta no Scratch:** o projeto fica salvo na internet e você pode compartilhar com outras pessoas.',
        '**Sem conta:** use o menu **Arquivo → Baixar para o seu computador**. O projeto vira um arquivo `.sb3`, que depois pode ser aberto de novo pelo mesmo menu.',
      ],
    },
    {
      tipo: 'cuidado',
      texto:
        'Sem conta, o Scratch **não salva sozinho**. Se fechar a aba sem baixar o arquivo, o projeto se perde.',
    },
    {
      tipo: 'professor',
      itens: [
        'Com a **Conta de Professor** do Scratch, você cria as contas dos alunos em turmas, sem que eles precisem de e-mail. Ela é pedida no próprio site do Scratch.',
        'Sem internet no laboratório? Existe o **aplicativo do Scratch** para instalar no computador, que funciona offline.',
        '**Primeira aula:** deixe os alunos explorarem livremente por 10 minutos e depois peça que cada um mostre um bloco que descobriu.',
      ],
    },
    { tipo: 'link', texto: 'Abrir o Scratch', url: 'https://scratch.mit.edu/projects/editor/' },
    {
      tipo: 'resumo',
      itens: [
        'No Scratch você programa **encaixando blocos**.',
        'A tela tem **categorias e blocos**, **área de código**, **palco** e **atores**.',
        'A **cor** do bloco mostra a categoria dele.',
        'Cada ator tem o **seu próprio código**.',
      ],
    },
  ],
  quiz: [
    {
      pergunta: 'Como se programa no Scratch?',
      opcoes: ['Digitando comandos em inglês', 'Encaixando blocos coloridos', 'Desenhando o personagem'],
      certa: 1,
      explicacao: 'No Scratch você **arrasta e encaixa blocos**, como um quebra-cabeça. Não precisa digitar comandos.',
    },
    {
      pergunta: 'Em que parte da tela o programa **acontece** (onde o gato se mexe)?',
      opcoes: ['No palco', 'Na área de código', 'Nas categorias'],
      certa: 0,
      explicacao: 'O **palco** mostra o resultado. Na área de código você monta os blocos, e nas categorias escolhe quais blocos usar.',
    },
    {
      pergunta: 'Você quer mudar o código de um ator. O que precisa fazer primeiro?',
      opcoes: ['Apertar a bandeira verde', 'Apagar o gato', 'Clicar nesse ator, embaixo do palco'],
      certa: 2,
      explicacao: 'Cada ator tem o **seu próprio código**. Clique no ator na área de atores para ver e mudar o código dele.',
    },
    {
      pergunta: 'Você está sem conta no Scratch. Como guardar o projeto?',
      opcoes: [
        'Não precisa, ele salva sozinho',
        'Arquivo → Baixar para o seu computador',
        'Clicando no botão vermelho',
      ],
      certa: 1,
      explicacao: 'Sem conta, o Scratch **não salva sozinho**. Baixe o arquivo `.sb3` pelo menu **Arquivo** para abrir o projeto de novo depois.',
    },
  ],
}
