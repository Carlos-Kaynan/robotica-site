export default {
  id: 'entrega-semaforo',
  titulo: 'Entrega: o semáforo da turma',
  resumo: 'O que o seu semáforo precisa ter, como apresentar e desafios para quem quiser ir além.',
  minutos: 10,
  blocos: [
    {
      tipo: 'texto',
      texto:
        'Chegou a hora de mostrar o que você construiu! A entrega desta trilha é um **semáforo funcionando**, montado pelo seu grupo. Use esta lição como uma **lista de conferência** antes de apresentar.',
    },
    { tipo: 'titulo', texto: 'O que o semáforo precisa ter' },
    {
      tipo: 'lista',
      itens: [
        '**Três LEDs** (vermelho, amarelo e verde), cada um com o seu resistor.',
        'A sequência certa: **verde → amarelo → vermelho**, repetindo sem parar.',
        '**Nunca** duas cores acesas ao mesmo tempo.',
        'O **fluxograma** desenhado no papel, igual ao que o programa faz.',
        'Funcionando **na placa de verdade** (ou no Tinkercad, para os grupos sem kit).',
      ],
    },
    { tipo: 'titulo', texto: 'Como apresentar' },
    {
      tipo: 'passos',
      itens: [
        'Mostre o **fluxograma** e explique cada passo.',
        'Diga o que é **entrada**, **processamento** e **saída** no seu projeto.',
        'Ligue o semáforo e deixe ele rodar pelo menos **duas voltas**.',
        'Conte um **problema** que o grupo encontrou e **como resolveu**. Errar e consertar faz parte!',
      ],
    },
    {
      tipo: 'dica',
      texto:
        'Anote os problemas e soluções num **diário de bordo** (um caderno do grupo). No 2º semestre, ele vai ser parte dos projetos.',
    },
    { tipo: 'titulo', texto: 'Desafios para ir além' },
    {
      tipo: 'lista',
      itens: [
        '**Botão de pedestre:** o semáforo da lição 4, montado na placa de verdade.',
        '**Modo noturno:** de madrugada, muitos semáforos ficam com o **amarelo piscando**. Faça um programa assim.',
        '**Cruzamento:** dois semáforos, um para cada rua. Quando um está verde, o outro precisa estar vermelho!',
        '**Maquete:** faça um poste de papelão para os LEDs e uma rua desenhada em cartolina.',
      ],
    },
    {
      tipo: 'professor',
      itens: [
        '**Rubrica sugerida** (cada critério de 1 a 3: 1 = iniciando, 2 = quase lá, 3 = conseguiu):',
        '**Funcionamento:** a sequência está certa, repete e nunca acende duas cores juntas.',
        '**Montagem:** circuito organizado, resistor em cada LED, cores de fio combinadas.',
        '**Planejamento:** o fluxograma existe e bate com o programa.',
        '**Explicação:** o grupo explica entrada, processamento e saída e conta um erro que resolveu.',
        '**Trabalho em equipe:** todos participaram e sabem explicar alguma parte.',
        'Fazer as apresentações com a turma toda é um bom **ensaio para a Mostra de Robótica** do fim do ano.',
      ],
    },
    {
      tipo: 'resumo',
      itens: [
        'O semáforo tem **3 LEDs**, sequência certa e **nunca** duas cores juntas.',
        'Leve o **fluxograma** e explique entrada, processamento e saída.',
        'Contar um **erro resolvido** também conta pontos.',
        'Quer mais? Pedestre, modo noturno, cruzamento ou maquete.',
      ],
    },
  ],
  quiz: [
    {
      pergunta: 'Qual é a sequência certa do semáforo?',
      opcoes: ['Verde → vermelho → amarelo', 'Verde → amarelo → vermelho', 'Vermelho → amarelo → verde'],
      certa: 1,
      explicacao: 'O amarelo avisa que vai fechar, então vem **entre o verde e o vermelho**: verde → amarelo → vermelho.',
    },
    {
      pergunta: 'No semáforo, o que é a **saída**?',
      opcoes: ['Os LEDs', 'O programa', 'O fluxograma'],
      certa: 0,
      explicacao: 'Os **LEDs** são os atuadores: é por eles que o projeto **age** no mundo. O programa é o processamento.',
    },
    {
      pergunta: 'No modo noturno, o amarelo fica piscando. Qual bloco ajuda a fazer isso no mBlock?',
      opcoes: ['Só um `espere` bem longo', 'Um `se` sem nada dentro', 'Um `sempre` com acender, esperar, apagar e esperar'],
      certa: 2,
      explicacao: 'Piscar é **acender, esperar, apagar e esperar**, repetindo. É o mesmo pisca-pisca do começo da trilha, agora no amarelo.',
    },
    {
      pergunta: 'Num **cruzamento**, o semáforo da rua A está verde. Como precisa estar o da rua B?',
      opcoes: ['Verde também', 'Vermelho', 'Apagado'],
      certa: 1,
      explicacao: 'Se as duas ruas tivessem verde, os carros bateriam no meio do cruzamento. Quando um está verde, o outro fica **vermelho**.',
    },
  ],
}
