export default {
  id: 'led-e-resistor',
  titulo: 'LED e resistor: a dupla inseparável',
  resumo: 'Como ligar um LED do jeito certo e por que ele sempre precisa de um resistor.',
  minutos: 8,
  blocos: [
    { tipo: 'figura', nome: 'led', legenda: 'LED: a perna mais comprida é o positivo.' },
    {
      tipo: 'texto',
      texto:
        'O **LED** é uma pequena lâmpada que gasta pouquíssima energia. É a peça que o seu código vai acender primeiro, e é com ele que você descobre se o programa está funcionando.',
    },
    { tipo: 'titulo', texto: 'O LED tem lado certo' },
    {
      tipo: 'texto',
      texto: 'O LED só acende se a corrente passar no sentido certo. Por isso ele tem um lado **positivo** e um **negativo**:',
    },
    {
      tipo: 'lista',
      itens: [
        '**Perna comprida (ânodo):** o positivo (+). Vai para o pino do Arduino.',
        '**Perna curta (cátodo):** o negativo (−). Vai para o GND. A borda do LED também é reta desse lado.',
      ],
    },
    {
      tipo: 'dica',
      texto: 'Ligou e o LED não acendeu? A primeira coisa a testar é **virar o LED**. Ligado ao contrário ele não estraga, só não acende.',
    },
    { tipo: 'titulo', texto: 'O resistor protege o LED' },
    { tipo: 'figura', nome: 'resistor', legenda: 'Resistor: as faixas coloridas mostram o valor dele.' },
    {
      tipo: 'texto',
      texto:
        'O **resistor** "segura" a corrente elétrica, como uma torneira meio fechada segura a água. Sem ele, passa corrente demais pelo LED, que **queima** (e pode danificar o pino do Arduino).',
    },
    {
      tipo: 'lista',
      itens: [
        'O resistor **não tem lado certo**: pode ligar de qualquer jeito.',
        'Para um LED ligado no Arduino, use um resistor de **220 Ω** ou **330 Ω** (Ω se lê "ohm").',
        'As **faixas coloridas** mostram o valor. O de 220 Ω tem as faixas **vermelho, vermelho, marrom**. O de 330 Ω tem **laranja, laranja, marrom**.',
      ],
    },
    { tipo: 'titulo', texto: 'Montando o circuito' },
    { tipo: 'figura', nome: 'circuito-led', legenda: 'Pino 13 → resistor → LED → GND.' },
    {
      tipo: 'passos',
      itens: [
        'Um fio sai do **pino 13** do Arduino e vai até a protoboard.',
        'O **resistor** liga esse fio à **perna comprida** do LED.',
        'A **perna curta** do LED vai para o **GND**.',
        'No programa, ligar o pino 13 acende o LED; desligar apaga.',
      ],
    },
    {
      tipo: 'cuidado',
      texto: 'Não olhe de perto e por muito tempo para LEDs muito fortes, e nunca ligue um LED direto no 5V sem resistor.',
    },
    {
      tipo: 'professor',
      itens: [
        '**Para turmas do 8º e 9º ano:** dá para calcular o resistor com a Lei de Ohm. Com 5 V no pino, cerca de 2 V no LED vermelho e 15 mA de corrente: R = (5 − 2) ÷ 0,015 = 200 Ω. O valor comercial mais próximo acima é 220 Ω.',
        '**Atividade:** dê aos grupos resistores misturados e uma tabela de cores para que descubram o valor de cada um. Depois confiram com um multímetro.',
        'No Tinkercad, o LED "queima" na simulação quando falta o resistor. É um jeito seguro de mostrar o erro.',
      ],
    },
    { tipo: 'link', texto: 'Montar este circuito no Tinkercad', url: 'https://www.tinkercad.com/circuits' },
    {
      tipo: 'resumo',
      itens: [
        'LED tem lado: **perna comprida = +**, perna curta = −.',
        'Todo LED precisa de um **resistor** (220 Ω ou 330 Ω no Arduino).',
        'O resistor não tem lado e o valor dele vem nas **faixas coloridas**.',
        'Circuito básico: **pino → resistor → LED → GND**.',
      ],
    },
  ],
}
