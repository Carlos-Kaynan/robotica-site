export default {
  id: 'conhecendo-o-mblock',
  titulo: 'Conhecendo o mBlock',
  resumo: 'O "Scratch que fala com o Arduino": como ligar a placa e a diferença entre o modo ao vivo e o modo upload.',
  minutos: 9,
  blocos: [
    {
      tipo: 'texto',
      texto:
        'O **mBlock** é um programa feito a partir do Scratch. A tela é quase igual: palco, atores, categorias e blocos de encaixar. A diferença é que ele também programa **placas**, como o **Arduino**.',
    },
    {
      tipo: 'lista',
      itens: [
        '**Aplicativo para computador:** baixe no site do mBlock e instale. É o jeito mais simples na escola.',
        '**Versão no navegador:** também funciona, mas precisa instalar um programinha chamado **mLink**, que deixa o navegador falar com a placa pelo USB.',
      ],
    },
    { tipo: 'titulo', texto: 'Dispositivos e atores' },
    {
      tipo: 'texto',
      texto:
        'Embaixo do palco, o mBlock tem duas abas: **Dispositivos** (as placas) e **Atores** (os personagens, como no Scratch). O código que você monta vale para o que está **selecionado**: se for a placa, aparecem os blocos do Arduino.',
    },
    { tipo: 'titulo', texto: 'Ligando o Arduino no mBlock' },
    {
      tipo: 'passos',
      itens: [
        'Ligue o Arduino no computador com o cabo USB. Uma luzinha da placa acende.',
        'Na aba **Dispositivos**, o mBlock pode começar com outra placa (como o **CyberPi**). Remova-a no **x** e clique em **+ Adicionar**.',
        'Escolha **Arduino Uno** e confirme.',
        'Clique em **Conectar** e escolha a porta que apareceu (no Windows ela se chama **COM** e um número, como COM3).',
      ],
    },
    {
      tipo: 'dica',
      texto:
        'A porta não aparece? Troque o cabo USB: alguns cabos só carregam celular e não passam dados. Também ajuda marcar a opção de **mostrar todos os dispositivos**.',
    },
    { tipo: 'titulo', texto: 'Modo ao vivo × modo upload' },
    {
      tipo: 'texto',
      texto: 'Esta é a parte mais importante da lição. O mBlock tem um botão para escolher entre **dois modos**:',
    },
    {
      tipo: 'lista',
      itens: [
        '**Ao vivo:** o computador manda cada bloco para a placa **na hora**. É ótimo para testar e aprender, porque você clica num bloco e vê o resultado. Mas o programa roda **no computador**: tirou o cabo, parou tudo.',
        '**Upload:** o programa inteiro é **gravado na placa**, como vimos na lição da placa Arduino. Depois disso ela funciona **sozinha**, até com pilhas e sem computador. Alguns blocos, como o do **sensor ultrassônico**, só funcionam neste modo.',
      ],
    },
    {
      tipo: 'scratch',
      blocos: [
        { cor: 'arduino', texto: 'quando o Arduino Uno iniciar' },
        { cor: 'arduino', texto: 'defina o pino digital (13) como [alto]' },
      ],
      legenda: 'No modo upload, o programa começa com um bloco próprio da placa, e não com a bandeira verde.',
    },
    {
      tipo: 'cuidado',
      texto:
        'Para usar o **modo ao vivo**, a placa precisa de um programa especial do mBlock (o **firmware**). Se o botão de **configurações** do dispositivo aparecer amarelo, com um aviso, clique nele e atualize. E atenção: depois de usar o **upload**, é preciso atualizar o firmware de novo para voltar ao ao vivo.',
    },
    {
      tipo: 'cuidado',
      texto:
        'Os nomes dos blocos e botões nesta trilha são **aproximados**. Eles podem mudar um pouco conforme a versão do mBlock e o idioma escolhido. Procure pelo bloco que faz a mesma coisa.',
    },
    {
      tipo: 'professor',
      itens: [
        '**Antes da aula:** instale o mBlock e faça a atualização do firmware em todas as placas. Isso economiza uns 15 minutos da aula.',
        'Combine com a turma: **ao vivo para testar**, **upload para o projeto pronto**.',
        '**Sem placa?** O **Tinkercad Circuits** tem um Arduino simulado com programação em blocos. Os grupos sem kit podem fazer as mesmas atividades por lá.',
      ],
    },
    { tipo: 'link', texto: 'Abrir o site do mBlock', url: 'https://mblock.cc/' },
    {
      tipo: 'resumo',
      itens: [
        'O **mBlock** é parecido com o Scratch, mas também programa o **Arduino**.',
        'Adicione o **Arduino Uno** na aba **Dispositivos** e clique em **Conectar**.',
        '**Ao vivo:** testa na hora, mas só com o cabo ligado.',
        '**Upload:** grava na placa, que passa a funcionar **sozinha**.',
      ],
    },
  ],
  quiz: [
    {
      pergunta: 'Qual é a grande diferença entre o mBlock e o Scratch?',
      opcoes: ['O mBlock não tem blocos', 'O mBlock também programa placas, como o Arduino', 'O mBlock só funciona em celular'],
      certa: 1,
      explicacao: 'O mBlock foi feito a partir do Scratch, então é bem parecido, e ainda programa **placas** como o Arduino.',
    },
    {
      pergunta: 'Você usou o **modo ao vivo** e tirou o cabo USB. O que acontece com o programa?',
      opcoes: ['Para, porque ele rodava no computador', 'Continua igual', 'Fica gravado na placa'],
      certa: 0,
      explicacao: 'No modo ao vivo, o **computador** manda os comandos para a placa. Sem o cabo, a placa não recebe mais nada.',
    },
    {
      pergunta: 'Seu projeto precisa funcionar **com pilhas, longe do computador**. Qual modo usar?',
      opcoes: ['Ao vivo', 'Qualquer um', 'Upload'],
      certa: 2,
      explicacao: 'No **upload**, o programa fica **gravado na placa**. Depois ela funciona sozinha, só com energia.',
    },
    {
      pergunta: 'O bloco do **sensor ultrassônico** aparece desligado no modo ao vivo. O que fazer?',
      opcoes: ['Trocar o sensor', 'Usar o modo upload', 'Desistir do sensor'],
      certa: 1,
      explicacao: 'O sensor ultrassônico precisa de tempos muito precisos, então no mBlock ele só funciona no **modo upload**.',
    },
  ],
}
