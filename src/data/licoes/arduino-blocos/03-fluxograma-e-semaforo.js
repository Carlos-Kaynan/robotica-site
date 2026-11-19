export default {
  id: 'fluxograma-e-semaforo',
  titulo: 'Planejar antes de programar: o semáforo',
  resumo: 'Desenhar o fluxograma do semáforo, montar os 3 LEDs e programar a sequência no simulador.',
  minutos: 10,
  blocos: [
    {
      tipo: 'texto',
      texto:
        'Antes de construir uma casa, alguém desenha a planta. Antes de programar, os programadores também desenham: o **fluxograma**. Ele mostra, com setas, **cada passo** do programa e a **ordem** em que eles acontecem.',
    },
    { tipo: 'titulo', texto: 'O fluxograma do semáforo' },
    { tipo: 'figura', nome: 'fluxograma-semaforo', legenda: 'Verde, amarelo, vermelho... e volta ao começo.' },
    {
      tipo: 'lista',
      itens: [
        '**Oval:** onde o programa começa.',
        '**Retângulo:** um passo, uma ação (acender, esperar).',
        '**Seta:** o caminho, qual passo vem depois.',
        'A seta que **volta para cima** é a repetição: o semáforo nunca para.',
      ],
    },
    {
      tipo: 'dica',
      texto:
        'Desenhe o fluxograma **no papel** antes de abrir o computador. Se o desenho estiver certo, o programa é só "traduzir" cada retângulo em blocos.',
    },
    { tipo: 'titulo', texto: 'Montando os 3 LEDs' },
    { tipo: 'figura', nome: 'circuito-semaforo', legenda: 'Cada LED tem o seu pino e o seu resistor; o GND é o mesmo para os três.' },
    {
      tipo: 'lista',
      itens: [
        '**Vermelho** no pino **12**, **amarelo** no **11** e **verde** no **10**.',
        'Cada LED com o **seu próprio resistor** de 220 Ω.',
        'As pernas negativas dos três LEDs vão para o **GND**. Use a linha **azul (−)** da placa de ensaio para ligar todos de uma vez.',
      ],
    },
    { tipo: 'titulo', texto: 'Traduzindo o fluxograma em blocos' },
    {
      tipo: 'scratch',
      blocos: [
        { cor: 'saida', texto: 'definir pino (10) como [ALTO]' },
        { cor: 'controle', texto: 'aguardar (5) [segundos]' },
        { cor: 'saida', texto: 'definir pino (10) como [BAIXO]' },
        { cor: 'saida', texto: 'definir pino (11) como [ALTO]' },
        { cor: 'controle', texto: 'aguardar (2) [segundos]' },
        { cor: 'saida', texto: 'definir pino (11) como [BAIXO]' },
        { cor: 'saida', texto: 'definir pino (12) como [ALTO]' },
        { cor: 'controle', texto: 'aguardar (5) [segundos]' },
        { cor: 'saida', texto: 'definir pino (12) como [BAIXO]' },
      ],
      legenda: 'Cada retângulo do fluxograma vira "acender + aguardar + apagar". A seta de volta é a repetição automática do Tinkercad.',
    },
    {
      tipo: 'cuidado',
      texto:
        'Esqueceu de **apagar** um LED antes de acender o próximo? Aí ficam **dois acesos** ao mesmo tempo, e o motorista não sabe se pode passar! Confira: cada cor acende, espera e **apaga**.',
    },
    {
      tipo: 'professor',
      itens: [
        '**Atividade desplugada:** três alunos com cartolinas vermelha, amarela e verde fazem o "semáforo humano" seguindo o fluxograma desenhado no quadro. Um quarto aluno é o "Arduino" e dá as ordens.',
        '**Conversa sobre o trânsito:** por que existe o amarelo? Por que o vermelho e o verde nunca podem acender juntos? Ótimo gancho para educação para o trânsito.',
        'Os tempos (5 s e 2 s) são curtos para a aula ficar dinâmica. Os alunos podem pesquisar os tempos de um semáforo de verdade da cidade.',
      ],
    },
    { tipo: 'link', texto: 'Abrir o Tinkercad', url: 'https://www.tinkercad.com/' },
    {
      tipo: 'resumo',
      itens: [
        'O **fluxograma** é o desenho do programa: passos e setas, na ordem.',
        'Semáforo: **vermelho = pino 12**, **amarelo = 11**, **verde = 10**, cada um com seu resistor.',
        'Cada passo vira **acender, aguardar e apagar**.',
        'Nunca deixe duas cores acesas juntas.',
      ],
    },
  ],
  quiz: [
    {
      pergunta: 'Para que serve um fluxograma?',
      opcoes: ['Para desenhar o circuito elétrico', 'Para enfeitar o projeto', 'Para planejar os passos do programa e a ordem deles'],
      certa: 2,
      explicacao: 'O **fluxograma** mostra cada passo e a **ordem** em que acontecem. Com ele pronto, programar fica mais fácil.',
    },
    {
      pergunta: 'No fluxograma do semáforo, o que significa a seta que **volta para cima**?',
      opcoes: ['Que o programa acabou', 'Que a sequência se repete', 'Que deu erro'],
      certa: 1,
      explicacao: 'A seta de volta é a **repetição**: depois do vermelho, o semáforo volta para o verde, sem parar.',
    },
    {
      pergunta: 'No programa, depois de `aguardar 5 segundos` com o verde aceso, qual é o próximo bloco?',
      opcoes: ['definir pino 10 como BAIXO (apagar o verde)', 'definir pino 12 como ALTO', 'aguardar 2 segundos'],
      certa: 0,
      explicacao: 'Primeiro **apaga o verde** (pino 10 em BAIXO), depois acende o amarelo. Senão as duas cores ficam acesas juntas.',
    },
    {
      pergunta: 'Os três LEDs precisam de quantos resistores?',
      opcoes: ['Um só, para os três', 'Nenhum', 'Três, um para cada LED'],
      certa: 2,
      explicacao: 'Cada LED tem o **seu próprio resistor**. O que os três compartilham é o fio do **GND**.',
    },
  ],
}
