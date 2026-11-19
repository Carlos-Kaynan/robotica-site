export default {
  id: 'placa-arduino',
  titulo: 'Placa Arduino: o cérebro do projeto',
  resumo: 'O que é o Arduino, para que servem os pinos e como o programa chega até a placa.',
  minutos: 7,
  blocos: [
    { tipo: 'figura', nome: 'placa-arduino', legenda: 'Placa Arduino Uno, a mais usada nas escolas.' },
    {
      tipo: 'texto',
      texto:
        'O **Arduino** é uma plaquinha com um pequeno computador dentro, chamado **microcontrolador**. Ele não tem tela nem teclado: a função dele é **rodar um programa** e, com esse programa, controlar luzes, motores e sensores.',
    },
    {
      tipo: 'texto',
      texto:
        'Pense no Arduino como o **cérebro** de um robô. Os sensores são os "sentidos" (enxergar, sentir um toque), os motores são os "músculos" e o programa que você escreve é o "pensamento" que liga uma coisa à outra.',
    },
    { tipo: 'titulo', texto: 'As partes da placa' },
    {
      tipo: 'lista',
      itens: [
        '**Entrada USB:** liga a placa ao computador. Por ela o programa é enviado e a placa também recebe energia.',
        '**Entrada de energia (P4):** liga uma bateria ou fonte quando o projeto precisa funcionar longe do computador.',
        '**Pinos digitais (0 a 13):** só entendem dois estados: **ligado** (1) ou **desligado** (0). Servem para acender um LED ou ler um botão.',
        '**Pinos analógicos (A0 a A5):** leem valores que variam, como a luz de um ambiente ou a posição de um botão giratório.',
        '**Pinos de energia (5V e GND):** o 5V é o "positivo" e o GND é o "negativo" (terra). Quase todo circuito precisa dos dois.',
        '**Botão de reset:** reinicia o programa do começo, como desligar e ligar de novo.',
      ],
    },
    {
      tipo: 'dica',
      texto:
        'O pino 13 já tem um LED pequeno soldado na placa, marcado com a letra **L**. Dá para testar o primeiro programa (fazer o LED piscar) sem montar nenhum circuito!',
    },
    { tipo: 'titulo', texto: 'Como o programa chega na placa' },
    {
      tipo: 'passos',
      itens: [
        'Você monta o programa no computador, em blocos (mBlock ou Tinkercad) ou em texto.',
        'Liga o Arduino no computador com o cabo USB.',
        'Clica em **Enviar** (ou "Upload"). O programa é gravado na memória da placa.',
        'Pronto: o Arduino guarda o programa mesmo depois de desligado e volta a rodá-lo sempre que recebe energia.',
      ],
    },
    {
      tipo: 'cuidado',
      texto:
        'Evite usar os pinos **0** e **1**: eles são usados pela placa para conversar com o computador pelo USB. Se você ligar algo neles, o envio do programa pode falhar.',
    },
    {
      tipo: 'cuidado',
      texto:
        'Nunca encoste um fio do **5V** direto no **GND**. Isso é um **curto-circuito**: a corrente passa sem nada no caminho e pode estragar a placa ou a porta USB do computador.',
    },
    {
      tipo: 'professor',
      itens: [
        '**Atividade de 15 min:** peça que os grupos encontrem na placa cada parte da lista e marquem num desenho impresso.',
        '**Analogia que funciona bem:** corpo humano. Cérebro = Arduino, olhos e pele = sensores, músculos = motores, nervos = fios.',
        'Não é preciso ter placas para começar: o simulador do Tinkercad Circuits tem o Arduino Uno e roda no navegador.',
      ],
    },
    { tipo: 'link', texto: 'Abrir o Tinkercad Circuits (simulador)', url: 'https://www.tinkercad.com/circuits' },
    {
      tipo: 'resumo',
      itens: [
        'O Arduino é um pequeno computador que roda **um programa** para controlar peças.',
        'Pinos **digitais** = ligado ou desligado. Pinos **analógicos** = valores que variam.',
        '**5V** é o positivo e **GND** é o negativo. Nunca ligue um direto no outro.',
        'O programa é enviado pelo USB e fica gravado na placa.',
      ],
    },
  ],
  quiz: [
    {
      pergunta: 'Qual é o trabalho do Arduino num projeto?',
      opcoes: [
        'Rodar um programa que controla luzes, motores e sensores',
        'Mostrar vídeos numa tela',
        'Só guardar arquivos, como um pen drive',
      ],
      certa: 0,
      explicacao: 'O Arduino é o **cérebro** do projeto: um pequeno computador que roda o seu programa e, com ele, controla as outras peças.',
    },
    {
      pergunta: 'O que um pino **digital** consegue entender?',
      opcoes: [
        'Qualquer número de 0 a 1000',
        'Só dois estados: ligado (1) ou desligado (0)',
        'As cores das peças ligadas nele',
      ],
      certa: 1,
      explicacao: 'Pinos digitais só entendem **ligado ou desligado**. Para valores que variam, como a luz do ambiente, usamos os pinos **analógicos** (A0 a A5).',
    },
    {
      pergunta: 'O que acontece se você encostar um fio do 5V direto no GND?',
      opcoes: [
        'O LED da placa começa a piscar',
        'O programa reinicia do começo',
        'Um curto-circuito, que pode estragar a placa ou a porta USB',
      ],
      certa: 2,
      explicacao: 'Ligar o 5V direto no GND é um **curto-circuito**: a corrente passa sem nada no caminho. Nunca faça isso!',
    },
    {
      pergunta: 'Você enviou o programa e depois desligou o cabo USB. O que acontece com o programa?',
      opcoes: [
        'Ele some, e é preciso enviar de novo',
        'Fica gravado na placa e volta a rodar quando ela recebe energia',
        'Passa a rodar só no computador',
      ],
      certa: 1,
      explicacao: 'O programa fica **gravado na memória** do Arduino. Sempre que a placa recebe energia (pelo USB ou por uma bateria), ele roda de novo.',
    },
  ],
}
