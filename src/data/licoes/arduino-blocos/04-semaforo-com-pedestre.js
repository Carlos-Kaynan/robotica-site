export default {
  id: 'semaforo-com-pedestre',
  titulo: 'Semáforo com botão de pedestre',
  resumo: 'O pedestre aperta o botão, o semáforo fecha para os carros e abre para ele atravessar.',
  minutos: 12,
  blocos: [
    {
      tipo: 'texto',
      texto:
        'Na frente de muitas escolas existe um semáforo com **botão**: o carro só para quando alguém quer atravessar. Vamos montar esse semáforo no simulador. Ele junta tudo: saída (LEDs), entrada (botão) e decisão (`se`).',
    },
    { tipo: 'titulo', texto: 'O que muda no circuito' },
    {
      tipo: 'lista',
      itens: [
        'Os 3 LEDs dos **carros** continuam nos pinos 12 (vermelho), 11 (amarelo) e 10 (verde).',
        'Dois LEDs novos para o **pedestre**: **vermelho no pino 9** e **verde no pino 8**, cada um com seu resistor de 220 Ω.',
        'Um **botão** atravessando o canal do meio: uma perna no **5V** e a outra no **pino 2**, com um resistor de **10 kΩ** do pino 2 até o GND (o mesmo circuito da lição Botão).',
      ],
    },
    { tipo: 'titulo', texto: 'O fluxograma ganha uma decisão' },
    {
      tipo: 'texto',
      texto:
        'No fluxograma, uma **decisão** é desenhada como um **losango** com uma pergunta de sim ou não: "o botão foi apertado?". Se **não**, os carros continuam com o verde. Se **sim**, começa a travessia:',
    },
    {
      tipo: 'passos',
      itens: [
        'Normal: **verde para os carros** e **vermelho para o pedestre**.',
        'Botão apertado? Se não, volta ao passo 1.',
        'Se sim: os carros recebem **amarelo** por 2 segundos e depois **vermelho**.',
        'O pedestre recebe **verde** por 5 segundos.',
        'O verde do pedestre **pisca 3 vezes**, avisando que vai fechar.',
        'Tudo volta ao normal.',
      ],
    },
    { tipo: 'titulo', texto: 'O programa' },
    {
      tipo: 'scratch',
      blocos: [
        { cor: 'saida', texto: 'definir pino (10) como [ALTO]' },
        { cor: 'saida', texto: 'definir pino (9) como [ALTO]' },
        {
          cor: 'controle',
          texto: 'se <operadores:{entrada:ler pino digital (2)} = [ALTO]> então',
          dentro: [
            { cor: 'saida', texto: 'definir pino (10) como [BAIXO]' },
            { cor: 'saida', texto: 'definir pino (11) como [ALTO]' },
            { cor: 'controle', texto: 'aguardar (2) [segundos]' },
            { cor: 'saida', texto: 'definir pino (11) como [BAIXO]' },
            { cor: 'saida', texto: 'definir pino (12) como [ALTO]' },
            { cor: 'saida', texto: 'definir pino (9) como [BAIXO]' },
            { cor: 'saida', texto: 'definir pino (8) como [ALTO]' },
            { cor: 'controle', texto: 'aguardar (5) [segundos]' },
            {
              cor: 'controle',
              texto: 'repetir (3) vezes',
              dentro: [
                { cor: 'saida', texto: 'definir pino (8) como [BAIXO]' },
                { cor: 'controle', texto: 'aguardar (0.5) [segundos]' },
                { cor: 'saida', texto: 'definir pino (8) como [ALTO]' },
                { cor: 'controle', texto: 'aguardar (0.5) [segundos]' },
              ],
            },
            { cor: 'saida', texto: 'definir pino (8) como [BAIXO]' },
            { cor: 'saida', texto: 'definir pino (12) como [BAIXO]' },
          ],
        },
      ],
      legenda: 'Quando o programa se repete, os dois primeiros blocos voltam o semáforo ao normal.',
    },
    {
      tipo: 'texto',
      texto:
        'Repare no truque: o programa não precisa "voltar ao normal" no fim. Como o Tinkercad **repete tudo sozinho**, os dois primeiros blocos acendem de novo o verde dos carros e o vermelho do pedestre.',
    },
    {
      tipo: 'dica',
      texto:
        'No simulador, clique no botão com o mouse **durante a simulação** para "apertá-lo". Teste também o que acontece se você apertar no meio da travessia.',
    },
    {
      tipo: 'cuidado',
      texto:
        'Segurança em primeiro lugar: em nenhum momento o **verde dos carros** e o **verde do pedestre** podem estar acesos juntos. Confira isso passo a passo no seu programa!',
    },
    {
      tipo: 'professor',
      itens: [
        'Esta lição é a base do projeto **Trânsito na porta** do 2º semestre (semáforo e alerta na saída das aulas).',
        '**Pergunta para a turma:** "o que acontece se o pedestre apertar o botão durante o amarelo?" (nada: o programa só lê o botão no começo de cada volta). É um bom gancho para falar de como os programas "escutam" as entradas.',
        'Turmas mais rápidas podem tentar um **tempo mínimo de verde** para os carros, para o botão não parar o trânsito toda hora.',
      ],
    },
    { tipo: 'link', texto: 'Abrir o Tinkercad', url: 'https://www.tinkercad.com/' },
    {
      tipo: 'resumo',
      itens: [
        'Pedestre: **vermelho no pino 9**, **verde no pino 8**; botão no **pino 2** com resistor de 10 kΩ.',
        'No fluxograma, a **decisão** é um **losango** com uma pergunta de sim ou não.',
        'O `se` testa o botão; o `repetir 3 vezes` faz o verde do pedestre piscar.',
        'Os dois verdes **nunca** acendem juntos.',
      ],
    },
  ],
  quiz: [
    {
      pergunta: 'No fluxograma, qual forma representa uma **decisão** ("o botão foi apertado?")?',
      opcoes: ['O retângulo', 'O losango', 'O oval'],
      certa: 1,
      explicacao: 'A decisão é um **losango**, com dois caminhos saindo dele: **sim** e **não**.',
    },
    {
      pergunta: 'Ninguém apertou o botão. O que o semáforo mostra?',
      opcoes: [
        'Verde para os carros e vermelho para o pedestre',
        'Vermelho para os dois',
        'Tudo apagado',
      ],
      certa: 0,
      explicacao: 'Sem o botão, o `se` não roda, e os dois primeiros blocos deixam **verde para os carros** e **vermelho para o pedestre**.',
    },
    {
      pergunta: 'Qual parte do programa faz o verde do pedestre **piscar** antes de fechar?',
      opcoes: ['O `aguardar 5 segundos`', 'O `se`', 'O `repetir 3 vezes`'],
      certa: 2,
      explicacao: 'Dentro do **repetir 3 vezes**, o verde apaga e acende de novo: são as 3 piscadas de aviso.',
    },
    {
      pergunta: 'Qual destas situações **nunca** pode acontecer no semáforo?',
      opcoes: [
        'Vermelho dos carros e verde do pedestre juntos',
        'Verde dos carros e verde do pedestre juntos',
        'Vermelho dos carros e vermelho do pedestre juntos',
      ],
      certa: 1,
      explicacao: 'Os **dois verdes** juntos colocariam o pedestre na frente dos carros. O programa precisa evitar isso sempre.',
    },
  ],
}
