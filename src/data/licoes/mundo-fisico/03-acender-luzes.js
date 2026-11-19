export default {
  id: 'acender-luzes',
  titulo: 'Acender luzes',
  resumo: 'O primeiro programa no mundo físico: ligar, desligar e fazer piscar o LED da placa.',
  minutos: 8,
  blocos: [
    {
      tipo: 'texto',
      texto:
        'Todo mundo que aprende Arduino começa do mesmo jeito: **fazendo um LED piscar**. É o "Olá, mundo!" da robótica. E não precisa montar nada, porque a placa já tem um LED ligado no **pino 13**, marcado com a letra **L**.',
    },
    { tipo: 'titulo', texto: 'Ligado e desligado: alto e baixo' },
    {
      tipo: 'lista',
      itens: [
        '**Alto:** o pino recebe energia (5 V). O LED **acende**.',
        '**Baixo:** o pino fica sem energia (0 V). O LED **apaga**.',
        'É a mesma ideia dos pinos digitais que vimos na lição da placa: só **ligado** ou **desligado**.',
      ],
    },
    {
      tipo: 'scratch',
      blocos: [
        { cor: 'eventos', texto: 'quando {bandeira} for clicado' },
        { cor: 'arduino', texto: 'defina o pino digital (13) como [alto]' },
      ],
      legenda: 'No modo ao vivo, a bandeira verde acende o LED L da placa.',
    },
    { tipo: 'titulo', texto: 'Fazendo piscar' },
    {
      tipo: 'scratch',
      blocos: [
        { cor: 'eventos', texto: 'quando {bandeira} for clicado' },
        {
          cor: 'controle',
          texto: 'sempre',
          dentro: [
            { cor: 'arduino', texto: 'defina o pino digital (13) como [alto]' },
            { cor: 'controle', texto: 'espere (1) seg' },
            { cor: 'arduino', texto: 'defina o pino digital (13) como [baixo]' },
            { cor: 'controle', texto: 'espere (1) seg' },
          ],
        },
      ],
      legenda: 'Acende, espera, apaga, espera... para sempre.',
    },
    {
      tipo: 'texto',
      texto:
        'Repare que são os **mesmos** blocos `sempre` e `espere` do Scratch! Só que agora, em vez de mexer o gato, eles mexem numa luz de verdade.',
    },
    {
      tipo: 'cuidado',
      texto:
        'Tirou os blocos `espere`? O LED vai parecer **sempre aceso**. Ele continua piscando, mas tão rápido que o olho não percebe. É o mesmo "computador rápido demais" da lição de sequência do Scratch.',
    },
    { tipo: 'titulo', texto: 'Com um LED de fora' },
    {
      tipo: 'texto',
      texto:
        'Quer um LED maior, ou de outra cor? Monte o circuito da lição **LED e resistor** (pino 13 → resistor → LED → GND). O mesmo programa acende os dois LEDs ao mesmo tempo, o da placa e o seu.',
    },
    {
      tipo: 'dica',
      texto:
        'Para usar outro pino, como o 8, troque o número no bloco **e** mude o fio de lugar na placa. Os dois precisam combinar!',
    },
    {
      tipo: 'professor',
      itens: [
        '**Desafio 1:** pisca-pisca rápido (troque 1 por 0.2) e lento (troque por 2).',
        '**Desafio 2:** o **SOS** em código Morse: 3 piscadas curtas, 3 longas e 3 curtas. É ótimo para usar o `repita 3 vezes`.',
        '**Desafio 3 (com LEDs de fora):** dois LEDs que piscam alternados, como as luzes de uma passagem de trem. Já é um aquecimento para o semáforo da trilha **Arduino em blocos**.',
        '**Sem placa?** Faça no Tinkercad Circuits, que também tem o LED do pino 13 na placa simulada.',
      ],
    },
    {
      tipo: 'resumo',
      itens: [
        'O LED **L** da placa está ligado no **pino 13**.',
        '**Alto** = ligado (acende). **Baixo** = desligado (apaga).',
        'Piscar = alto, espera, baixo, espera, dentro de um `sempre`.',
        'Os blocos `sempre` e `espere` são os mesmos do Scratch.',
      ],
    },
  ],
  quiz: [
    {
      pergunta: 'Em qual pino está o LED que já vem na placa (marcado com **L**)?',
      opcoes: ['Pino 0', 'Pino 13', 'Pino 5V'],
      certa: 1,
      explicacao: 'O LED **L** fica ligado no **pino 13**. Por isso dá para testar o primeiro programa sem montar nada.',
    },
    {
      pergunta: 'O que o bloco `defina o pino digital 13 como baixo` faz?',
      opcoes: ['Acende o LED', 'Faz o LED piscar', 'Apaga o LED'],
      certa: 2,
      explicacao: '**Baixo** deixa o pino sem energia (0 V), então o LED **apaga**. **Alto** acende.',
    },
    {
      pergunta: 'Você tirou os blocos `espere` do pisca-pisca. O que acontece?',
      opcoes: [
        'O LED parece sempre aceso, porque pisca rápido demais',
        'O LED queima',
        'O LED pisca mais devagar',
      ],
      certa: 0,
      explicacao: 'Sem o `espere`, o LED pisca tão rápido que o olho não percebe e ele **parece sempre aceso**.',
    },
    {
      pergunta: 'Você mudou o LED de fora para o **pino 8**. O que mais precisa mudar?',
      opcoes: ['Nada', 'O número no bloco, de 13 para 8', 'O cabo USB'],
      certa: 1,
      explicacao: 'O número no bloco e o fio na placa precisam **combinar**. Se o fio está no pino 8, o bloco também precisa dizer 8.',
    },
  ],
}
