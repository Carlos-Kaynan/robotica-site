export default {
  id: 'projeto-sensor-de-re',
  titulo: 'Projeto: sensor de ré',
  resumo: 'O sensor ultrassônico mede a distância e o LED pisca mais rápido quanto mais perto o objeto está.',
  minutos: 15,
  blocos: [
    {
      tipo: 'texto',
      texto:
        'Os carros modernos têm um **sensor de ré**: quando o carro chega perto de uma parede, ele apita, e quanto mais perto, mais rápido apita. Vamos fazer o nosso, trocando o apito por um **LED que pisca**.',
    },
    {
      tipo: 'lista',
      itens: [
        '**Entrada:** o sensor ultrassônico mede a distância.',
        '**Processamento:** o programa decide se está **muito perto**, **perto** ou **longe**.',
        '**Saída:** o LED pisca rápido, pisca devagar ou fica apagado.',
      ],
    },
    { tipo: 'titulo', texto: 'Passo 1: ligar o sensor' },
    { tipo: 'figura', nome: 'sensor-ultrassonico', legenda: 'Sensor ultrassônico: VCC, Trig, Echo e GND.' },
    {
      tipo: 'lista',
      itens: [
        '**VCC** → 5V.',
        '**Trig** → pino **7**.',
        '**Echo** → pino **6**.',
        '**GND** → GND.',
        'O LED é o **L** da placa (pino 13). Se quiser, ligue também um LED de fora no pino 13.',
      ],
    },
    { tipo: 'titulo', texto: 'Passo 2: o programa' },
    {
      tipo: 'texto',
      texto:
        'Lembre: o sensor ultrassônico **só funciona no modo upload**. Por isso o programa começa com **quando o Arduino Uno iniciar**, e não com a bandeira verde. Crie antes a variável **distância**.',
    },
    {
      tipo: 'scratch',
      blocos: [
        { cor: 'arduino', texto: 'quando o Arduino Uno iniciar' },
        {
          cor: 'controle',
          texto: 'sempre',
          dentro: [
            { cor: 'variaveis', texto: 'mude [distância] para {arduino:ler sensor ultrassônico trig (7) echo (6)}' },
            {
              cor: 'controle',
              texto: 'se <operadores:{variaveis:distância} < (10)> então',
              dentro: [
                { cor: 'arduino', texto: 'defina o pino digital (13) como [alto]' },
                { cor: 'controle', texto: 'espere (0.1) seg' },
                { cor: 'arduino', texto: 'defina o pino digital (13) como [baixo]' },
                { cor: 'controle', texto: 'espere (0.1) seg' },
              ],
              senao: [
                {
                  cor: 'controle',
                  texto: 'se <operadores:{variaveis:distância} < (30)> então',
                  dentro: [
                    { cor: 'arduino', texto: 'defina o pino digital (13) como [alto]' },
                    { cor: 'controle', texto: 'espere (0.5) seg' },
                    { cor: 'arduino', texto: 'defina o pino digital (13) como [baixo]' },
                    { cor: 'controle', texto: 'espere (0.5) seg' },
                  ],
                  senao: [{ cor: 'arduino', texto: 'defina o pino digital (13) como [baixo]' }],
                },
              ],
            },
          ],
        },
      ],
      legenda: 'Menos de 10 cm: pisca rápido. De 10 a 30 cm: pisca devagar. Mais longe: apagado.',
    },
    {
      tipo: 'texto',
      texto:
        'Repare no **se dentro do senão**: primeiro o programa pergunta "está a menos de 10 cm?". Se não estiver, ele faz uma segunda pergunta: "e a menos de 30 cm?". Assim ele separa **três** situações.',
    },
    { tipo: 'titulo', texto: 'Passo 3: enviar e testar' },
    {
      tipo: 'passos',
      itens: [
        'Mude o mBlock para o **modo upload** e clique no botão de **enviar** (Upload).',
        'Espere a mensagem de que o envio terminou.',
        'Aproxime a mão do sensor devagar, começando de longe. O LED deve ficar apagado, depois piscar devagar, depois rápido.',
        'Agora tire o cabo e ligue a placa em pilhas: o sensor de ré continua funcionando sozinho!',
      ],
    },
    {
      tipo: 'dica',
      texto:
        'Não funcionou? Confira se o **Trig** e o **Echo** não estão trocados: os números no bloco precisam combinar com os fios. Lembre também que tecidos e objetos inclinados atrapalham a medida.',
    },
    { tipo: 'titulo', texto: 'Desafios' },
    {
      tipo: 'lista',
      itens: [
        '**Três níveis de cor:** com LEDs de fora, use verde (longe), amarelo (perto) e vermelho (muito perto).',
        '**Cancela automática:** troque o LED pelo servo da lição anterior: carro chegou perto, a cancela abre.',
        '**Lixeira que abre sozinha:** o servo levanta a tampa quando uma mão chega a menos de 15 cm.',
      ],
    },
    {
      tipo: 'professor',
      itens: [
        'Reserve **duas aulas**: uma para montar e programar, outra para os desafios.',
        'Os desafios são o começo dos projetos do 2º semestre: **Trânsito na porta** (cancela e alerta) e **Lixo no lugar** (lixeira automática).',
        '**Depuração no modo upload:** como não dá para ver a variável na tela, use o próprio LED para testar: "acenda o LED se a distância for menor que 20" é um bom primeiro teste.',
        '**Sem placa?** No Tinkercad Circuits, o sensor ultrassônico simulado tem uma "bolinha" que você arrasta para mudar a distância.',
      ],
    },
    {
      tipo: 'resumo',
      itens: [
        'Sensor de ré: **entrada** (distância) → **processamento** (se/senão) → **saída** (LED).',
        'O sensor ultrassônico precisa do **modo upload**.',
        'Um **se dentro do senão** separa três situações.',
        'Depois do upload, a placa funciona **sozinha**, até com pilhas.',
      ],
    },
  ],
  quiz: [
    {
      pergunta: 'Por que o programa começa com **quando o Arduino Uno iniciar** e não com a bandeira verde?',
      opcoes: [
        'Porque o sensor ultrassônico só funciona no modo upload',
        'Porque a bandeira verde está quebrada',
        'Tanto faz, os dois funcionam igual',
      ],
      certa: 0,
      explicacao: 'O sensor ultrassônico precisa do **modo upload**, e nesse modo o programa começa quando a placa **liga**.',
    },
    {
      pergunta: 'O sensor mediu **20 cm**. O que o LED faz?',
      opcoes: ['Pisca rápido', 'Fica apagado', 'Pisca devagar'],
      certa: 2,
      explicacao: '20 não é menor que 10, então vai para o **senão**. Lá, 20 é menor que 30: o LED **pisca devagar**.',
    },
    {
      pergunta: 'E se o sensor medir **50 cm**?',
      opcoes: ['O LED fica apagado', 'O LED pisca rápido', 'O LED fica sempre aceso'],
      certa: 0,
      explicacao: '50 não é menor que 10 nem menor que 30. Sobra o último **senão**: o LED fica **apagado**.',
    },
    {
      pergunta: 'Depois do upload, você tirou o cabo e ligou a placa em pilhas. O que acontece?',
      opcoes: ['Para de funcionar', 'Continua funcionando sozinho', 'Só funciona com a bandeira verde'],
      certa: 1,
      explicacao: 'No upload, o programa fica **gravado na placa**. Com energia das pilhas, ela roda sozinha.',
    },
  ],
}
