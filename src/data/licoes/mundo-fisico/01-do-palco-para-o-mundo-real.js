export default {
  id: 'do-palco-para-o-mundo-real',
  titulo: 'Do palco para o mundo real',
  resumo: 'Entrada, processamento e saída: como um programa sente o mundo e age nele.',
  minutos: 7,
  blocos: [
    {
      tipo: 'texto',
      texto:
        'No Scratch, o código mexe com coisas **da tela**: o gato anda, fala e mia. Agora o código vai sair do computador para mexer com coisas **de verdade**: acender uma luz, sentir um toque, girar um motor.',
    },
    {
      tipo: 'texto',
      texto:
        'E a boa notícia: a lógica é **a mesma**. O `se`, o `repita`, o `sempre` e as variáveis que você já conhece continuam funcionando. Muda só **o que** eles controlam.',
    },
    { tipo: 'titulo', texto: 'Entrada, processamento e saída' },
    { tipo: 'figura', nome: 'entrada-saida', legenda: 'Todo projeto de robótica segue este caminho.' },
    {
      tipo: 'lista',
      itens: [
        '**Entrada:** o que o projeto **percebe** do mundo. Quem percebe são os **sensores**: o botão sente um toque, o sensor ultrassônico sente a distância.',
        '**Processamento:** o **Arduino** roda o programa e **decide** o que fazer com o que os sensores perceberam.',
        '**Saída:** o que o projeto **faz** no mundo. Quem faz são os **atuadores**: o LED acende, o servo gira, o motor anda.',
      ],
    },
    {
      tipo: 'dica',
      texto:
        'Lembra da comparação com o corpo humano? Sensores são os **sentidos**, o Arduino é o **cérebro** e os atuadores são os **músculos**.',
    },
    { tipo: 'titulo', texto: 'Já está ao seu redor' },
    {
      tipo: 'lista',
      itens: [
        '**Porta automática do mercado:** um sensor percebe a pessoa (entrada), o controlador decide abrir (processamento) e o motor abre a porta (saída).',
        '**Luz com sensor de presença:** alguém passa (entrada), o circuito decide (processamento) e a luz acende por um tempo (saída).',
        '**Sensor de ré do carro:** mede a distância (entrada), calcula se está perto (processamento) e apita mais rápido (saída). Esse vai ser o nosso projeto no fim da trilha!',
      ],
    },
    { tipo: 'titulo', texto: 'O que muda em relação à tela' },
    {
      tipo: 'lista',
      itens: [
        '**O mundo real não é perfeito:** fio solto, pilha fraca e peça invertida também causam "erros", e não só o código.',
        '**Montar faz parte:** antes de programar, as peças precisam estar ligadas do jeito certo.',
        '**Segurança:** os circuitos dos alunos usam só **baixa tensão** (5 V a 9 V), e nunca a tomada.',
      ],
    },
    {
      tipo: 'professor',
      itens: [
        '**Atividade desplugada:** "caça às entradas e saídas". Em grupos, os alunos listam 5 aparelhos da escola ou de casa e separam o que é entrada, processamento e saída (micro-ondas, controle da TV, catraca, semáforo...).',
        'Esta lição não precisa de placa nem de computador. Funciona bem como abertura da semana 5, logo depois do minijogo do Scratch.',
        'Relembre a trilha **Peças do kit Arduino**: os alunos podem classificar cada peça do kit como entrada ou saída.',
      ],
    },
    {
      tipo: 'resumo',
      itens: [
        'Os mesmos blocos do Scratch agora controlam coisas **de verdade**.',
        '**Entrada** (sensores) → **processamento** (Arduino) → **saída** (atuadores).',
        'No mundo real, montagem e peças também podem causar erros.',
        'Sempre **baixa tensão**: nada de tomada.',
      ],
    },
  ],
  quiz: [
    {
      pergunta: 'Num projeto de robótica, qual destas peças é uma **entrada**?',
      opcoes: ['O LED', 'O botão', 'O motor'],
      certa: 1,
      explicacao: 'O **botão** percebe um toque e manda essa informação para o Arduino: é um **sensor**, ou seja, uma entrada. LED e motor são saídas.',
    },
    {
      pergunta: 'Quem faz o **processamento**, isto é, decide o que fazer?',
      opcoes: ['O Arduino, rodando o programa', 'O sensor', 'A pilha'],
      certa: 0,
      explicacao: 'O **Arduino** é o cérebro: ele roda o programa e decide o que fazer com o que os sensores perceberam.',
    },
    {
      pergunta: 'Na porta automática do mercado, o que é a **saída**?',
      opcoes: ['A pessoa chegando', 'O sensor que percebe a pessoa', 'O motor que abre a porta'],
      certa: 2,
      explicacao: 'A saída é o que o projeto **faz** no mundo. Quem faz é o **atuador**: aqui, o motor que abre a porta.',
    },
    {
      pergunta: 'Seu código está certo, mas o LED não acende. O que também pode ser a causa?',
      opcoes: ['Nada, se o código está certo tem que funcionar', 'Um fio solto ou o LED invertido', 'O nome do projeto'],
      certa: 1,
      explicacao: 'No mundo real, **a montagem também conta**: fio solto, peça invertida ou pilha fraca causam problemas mesmo com o código certo.',
    },
  ],
}
