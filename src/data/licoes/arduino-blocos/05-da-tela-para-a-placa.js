export default {
  id: 'da-tela-para-a-placa',
  titulo: 'Da tela para a placa',
  resumo: 'Montar o semáforo com peças de verdade e programar a placa no mBlock, no modo upload.',
  minutos: 12,
  blocos: [
    {
      tipo: 'texto',
      texto:
        'O semáforo funciona no simulador. Agora é hora de montá-lo **de verdade**! O circuito é o mesmo; muda o lugar onde o código é feito: em vez do Tinkercad, usamos o **mBlock**, que você conheceu na trilha Código no mundo físico.',
    },
    { tipo: 'titulo', texto: 'Passo 1: montar com a placa desligada' },
    {
      tipo: 'passos',
      itens: [
        'Abra o seu circuito do Tinkercad ao lado e use-o como **mapa**.',
        'Monte as peças na protoboard **na mesma posição** e use as **mesmas cores** de fio.',
        'Só ligue o cabo USB **depois** de conferir tudo.',
      ],
    },
    { tipo: 'figura', nome: 'circuito-semaforo', legenda: 'O mesmo circuito do simulador: pinos 12, 11 e 10.' },
    { tipo: 'titulo', texto: 'Passo 2: o programa no mBlock' },
    {
      tipo: 'texto',
      texto:
        'No mBlock, adicione o **Arduino Uno**, conecte e mude para o **modo upload**. Os blocos têm nomes um pouco diferentes, mas fazem a mesma coisa:',
    },
    {
      tipo: 'lista',
      itens: [
        '`definir pino 10 como ALTO` (Tinkercad) = `defina o pino digital 10 como alto` (mBlock).',
        '`aguardar 1 segundos` (Tinkercad) = `espere 1 seg` (mBlock).',
        '**A grande diferença:** no mBlock o programa **não se repete sozinho**. É preciso colocar tudo dentro de um `sempre`.',
      ],
    },
    {
      tipo: 'scratch',
      blocos: [
        { cor: 'arduino', texto: 'quando o Arduino Uno iniciar' },
        {
          cor: 'controle',
          texto: 'sempre',
          dentro: [
            { cor: 'arduino', texto: 'defina o pino digital (10) como [alto]' },
            { cor: 'controle', texto: 'espere (5) seg' },
            { cor: 'arduino', texto: 'defina o pino digital (10) como [baixo]' },
            { cor: 'arduino', texto: 'defina o pino digital (11) como [alto]' },
            { cor: 'controle', texto: 'espere (2) seg' },
            { cor: 'arduino', texto: 'defina o pino digital (11) como [baixo]' },
            { cor: 'arduino', texto: 'defina o pino digital (12) como [alto]' },
            { cor: 'controle', texto: 'espere (5) seg' },
            { cor: 'arduino', texto: 'defina o pino digital (12) como [baixo]' },
          ],
        },
      ],
      legenda: 'O semáforo simples no mBlock: a mesma sequência, agora dentro de um "sempre".',
    },
    {
      tipo: 'texto',
      texto:
        'Clique em **enviar** (Upload) e espere terminar. O semáforo começa a funcionar, e continua mesmo se você tirar o cabo e ligar a placa em pilhas.',
    },
    { tipo: 'titulo', texto: 'Passo 3: não funcionou? Confira a lista' },
    {
      tipo: 'lista',
      itens: [
        '**LED invertido?** A perna comprida (+) vai do lado do resistor.',
        '**Pernas na mesma coluna?** As duas pernas do LED precisam estar em colunas diferentes.',
        '**Fio no pino certo?** O número no bloco precisa ser o mesmo do pino onde o fio está.',
        '**GND ligado?** Os três LEDs precisam chegar ao GND do Arduino.',
        '**Faltou o sempre?** Sem o bloco `sempre`, o semáforo faz a sequência uma vez só e para.',
      ],
    },
    {
      tipo: 'dica',
      texto:
        'Um LED só não acende e os outros sim? Troque esse LED de lugar com um que funciona. Se o problema "mudar de lugar" junto com o LED, o LED está com defeito; se não mudar, o problema está no fio ou no resistor.',
    },
    {
      tipo: 'professor',
      itens: [
        '**Organização:** separe os kits em potes por grupo (3 LEDs + 3 resistores de 220 Ω + fios) antes da aula. A montagem rende muito mais.',
        '**Depuração em dupla:** um aluno lê a lista de conferência em voz alta e o outro confere na protoboard.',
        'Grupos sem kit podem continuar no Tinkercad e fazer o semáforo com pedestre da lição anterior.',
        'Para turmas curiosas: o Tinkercad permite **baixar o código em texto** (arquivo .ino), que pode ser aberto no Arduino IDE. É um bom "próximo passo" para o 9º ano.',
      ],
    },
    {
      tipo: 'resumo',
      itens: [
        'Monte com a placa **desligada**, usando o circuito do Tinkercad como mapa.',
        'No mBlock, use o **modo upload** e o bloco **quando o Arduino Uno iniciar**.',
        'No mBlock o programa **não se repete sozinho**: coloque tudo dentro do `sempre`.',
        'Não funcionou? Use a **lista de conferência**.',
      ],
    },
  ],
  quiz: [
    {
      pergunta: 'Qual é a grande diferença entre o programa do Tinkercad e o do mBlock?',
      opcoes: [
        'No mBlock é preciso colocar tudo dentro de um `sempre`',
        'No mBlock não existe o bloco de esperar',
        'Não tem diferença nenhuma',
      ],
      certa: 0,
      explicacao: 'O Tinkercad repete o programa **sozinho**. No mBlock, sem o `sempre`, a sequência roda **uma vez só**.',
    },
    {
      pergunta: 'Quando é a hora de ligar o cabo USB na placa?',
      opcoes: ['Antes de começar a montar', 'Depois de montar e conferir tudo', 'Tanto faz'],
      certa: 1,
      explicacao: 'Monte e confira com a placa **desligada**. Assim um fio no lugar errado não causa curto-circuito.',
    },
    {
      pergunta: 'O LED amarelo não acende, mas os outros sim. Você trocou o amarelo de lugar com o verde e agora quem não acende é o **verde**. O que isso mostra?',
      opcoes: ['O LED amarelo está com defeito', 'O código está errado', 'O problema está naquele lugar: fio, resistor ou pino'],
      certa: 2,
      explicacao: 'O problema **ficou no mesmo lugar**, mesmo trocando o LED. Então o defeito está no **fio, no resistor ou no pino** daquela posição.',
    },
    {
      pergunta: 'O semáforo fez verde, amarelo, vermelho... e parou. O que provavelmente faltou?',
      opcoes: ['Um resistor', 'O bloco `sempre`', 'Mais um LED'],
      certa: 1,
      explicacao: 'Sem o **sempre**, o mBlock roda a sequência **uma vez** e para. Coloque todos os blocos dentro dele.',
    },
  ],
}
