// Desenhos (SVG) das peças do kit Arduino.
// Cada componente desenha uma peça; o tamanho é controlado pelo CSS (.figura svg).
// "Array.from({ length: n }, ...)" é um jeito curto de repetir um desenho n vezes (pinos, furos...).

const repetir = (n) => Array.from({ length: n }, (_, i) => i)

export function PlacaArduino() {
  return (
    <svg viewBox="0 0 220 150" aria-hidden="true">
      <rect x="12" y="8" width="200" height="134" rx="8" fill="#1f7a8c" stroke="#155e6c" strokeWidth="2" />
      {/* furos de fixação */}
      <circle cx="24" cy="20" r="3.5" fill="#f4f1ea" />
      <circle cx="24" cy="130" r="3.5" fill="#f4f1ea" />
      <circle cx="200" cy="20" r="3.5" fill="#f4f1ea" />
      {/* entrada USB e entrada de energia */}
      <rect x="0" y="28" width="38" height="30" rx="2" fill="#c5ccd3" stroke="#8f99a3" strokeWidth="2" />
      <rect x="6" y="34" width="26" height="18" fill="#a7b0b9" />
      <rect x="2" y="96" width="30" height="28" rx="4" fill="#2b2f36" />
      <circle cx="17" cy="110" r="6" fill="#5c6470" />
      {/* barras de pinos (em cima e embaixo) */}
      <rect x="72" y="13" width="132" height="10" rx="1" fill="#2b2f36" />
      {repetir(16).map((i) => (
        <rect key={`c${i}`} x={76 + i * 8} y="16" width="4" height="4" fill="#e8b04a" />
      ))}
      <rect x="96" y="127" width="108" height="10" rx="1" fill="#2b2f36" />
      {repetir(13).map((i) => (
        <rect key={`b${i}`} x={100 + i * 8} y="130" width="4" height="4" fill="#e8b04a" />
      ))}
      {/* chip pequeno, botão de reset, cristal e LEDs */}
      <rect x="62" y="38" width="20" height="14" rx="1" fill="#2b2f36" />
      <circle cx="68" cy="78" r="7" fill="#d9534f" stroke="#a83a37" strokeWidth="2" />
      <ellipse cx="108" cy="58" rx="12" ry="5" fill="#e4e7ea" />
      <rect x="148" y="38" width="8" height="5" rx="1" fill="#7bd389" />
      <rect x="148" y="48" width="8" height="5" rx="1" fill="#f2a65a" />
      <rect x="148" y="58" width="8" height="5" rx="1" fill="#f2a65a" />
      <rect x="164" y="40" width="36" height="2.5" rx="1" fill="#8fc6d0" />
      <rect x="164" y="50" width="26" height="2.5" rx="1" fill="#8fc6d0" />
      <rect x="164" y="60" width="32" height="2.5" rx="1" fill="#8fc6d0" />
      {/* microcontrolador (o "cérebro") */}
      <rect x="112" y="88" width="82" height="24" rx="2" fill="#2b2f36" />
      {repetir(14).map((i) => (
        <g key={`p${i}`} fill="#c5ccd3">
          <rect x={115 + i * 5.6} y="84" width="2.4" height="4" />
          <rect x={115 + i * 5.6} y="112" width="2.4" height="4" />
        </g>
      ))}
      <circle cx="120" cy="100" r="2" fill="#5c6470" />
    </svg>
  )
}

export function Protoboard() {
  const colunas = repetir(18)
  return (
    <svg viewBox="0 0 220 150" aria-hidden="true">
      <rect x="4" y="4" width="212" height="142" rx="6" fill="#f4f1ea" stroke="#cfc9bc" strokeWidth="2" />
      {/* linhas de energia de cima e de baixo */}
      {[
        { y: 14, cor: '#d9534f' },
        { y: 30, cor: '#3b6fc4' },
        { y: 120, cor: '#d9534f' },
        { y: 136, cor: '#3b6fc4' },
      ].map(({ y, cor }, linha) => (
        <g key={linha}>
          <line x1="16" x2="204" y1={linha % 2 === 0 ? y - 5 : y + 5} y2={linha % 2 === 0 ? y - 5 : y + 5} stroke={cor} strokeWidth="2" />
          {colunas.map((i) => (
            <rect key={i} x={20 + i * 10.4} y={y - 1.5} width="3" height="3" fill="#8a8578" />
          ))}
        </g>
      ))}
      {/* área do meio: grupos de 5 furos, separados pelo canal */}
      {[46, 88].map((inicio) =>
        repetir(5).map((linha) =>
          colunas.map((i) => <rect key={`${inicio}-${linha}-${i}`} x={20 + i * 10.4} y={inicio + linha * 6.5} width="3" height="3" fill="#8a8578" />),
        ),
      )}
      <rect x="10" y="78" width="200" height="6" rx="2" fill="#e2ddd1" />
      {/* dois fios encaixados, para dar a ideia de uso */}
      <path d="M41 47 C 48 30, 70 30, 72 47" fill="none" stroke="#7bd389" strokeWidth="3" strokeLinecap="round" />
      <path d="M93 102 C 100 122, 130 122, 135 102" fill="none" stroke="#e8a33d" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}

export function Led() {
  return (
    <svg viewBox="0 0 140 150" aria-hidden="true">
      <circle cx="70" cy="48" r="40" fill="#fde3cf" />
      <path d="M48 76 V44 a22 22 0 0 1 44 0 V76 Z" fill="#e8434b" />
      <rect x="44" y="74" width="52" height="9" rx="2" fill="#c3262f" />
      <ellipse cx="60" cy="42" rx="5" ry="11" fill="#f58a90" />
      {/* perna curta (−) e perna comprida (+) */}
      <rect x="57" y="83" width="4" height="40" fill="#9aa3ac" />
      <rect x="80" y="83" width="4" height="58" fill="#9aa3ac" />
      <text x="42" y="116" fontSize="16" fontWeight="700" fill="#3b6fc4">
        −
      </text>
      <text x="90" y="128" fontSize="16" fontWeight="700" fill="#d9534f">
        +
      </text>
    </svg>
  )
}

export function Resistor() {
  return (
    <svg viewBox="0 0 220 80" aria-hidden="true">
      <line x1="6" x2="214" y1="40" y2="40" stroke="#9aa3ac" strokeWidth="4" strokeLinecap="round" />
      <rect x="60" y="22" width="100" height="36" rx="14" fill="#e6c98f" stroke="#c9a96b" strokeWidth="2" />
      {/* vermelho, vermelho, marrom = 220 Ω; dourado = tolerância */}
      <rect x="76" y="23" width="9" height="34" fill="#c3262f" />
      <rect x="94" y="23" width="9" height="34" fill="#c3262f" />
      <rect x="112" y="23" width="9" height="34" fill="#7a4a24" />
      <rect x="140" y="23" width="7" height="34" fill="#d4a73c" />
    </svg>
  )
}

export function Botao() {
  return (
    <svg viewBox="0 0 140 130" aria-hidden="true">
      {/* pernas */}
      {[
        [18, 30],
        [18, 96],
        [108, 30],
        [108, 96],
      ].map(([x, y]) => (
        <rect key={`${x}-${y}`} x={x} y={y} width="14" height="5" fill="#9aa3ac" />
      ))}
      <rect x="28" y="20" width="84" height="88" rx="8" fill="#2b2f36" />
      <circle cx="70" cy="64" r="30" fill="#c96f22" />
      <circle cx="70" cy="64" r="26" fill="#f2a65a" />
      <circle cx="61" cy="55" r="6" fill="#f8c89a" />
    </svg>
  )
}

export function SensorUltrassonico() {
  const olho = (cx) => (
    <g>
      <circle cx={cx} cy="58" r="30" fill="#c5ccd3" stroke="#8f99a3" strokeWidth="2" />
      <circle cx={cx} cy="58" r="21" fill="#5c6470" />
      <circle cx={cx} cy="58" r="8" fill="#2b2f36" />
    </g>
  )
  return (
    <svg viewBox="0 0 220 140" aria-hidden="true">
      <rect x="8" y="16" width="204" height="86" rx="8" fill="#2f6db5" stroke="#1f4f87" strokeWidth="2" />
      {olho(62)}
      {olho(158)}
      {/* 4 pinos: VCC, Trig, Echo, GND */}
      {['VCC', 'Trig', 'Echo', 'GND'].map((nome, i) => (
        <g key={nome}>
          <rect x={71 + i * 26} y="102" width="5" height="18" fill="#e8b04a" />
          <text x={73.5 + i * 26} y="134" fontSize="9" fontWeight="700" fill="#4a5361" textAnchor="middle">
            {nome}
          </text>
        </g>
      ))}
    </svg>
  )
}

export function Servo() {
  return (
    <svg viewBox="0 0 220 140" aria-hidden="true">
      {/* fios: marrom (GND), vermelho (5V), laranja (sinal) */}
      <path d="M166 84 C 186 90, 192 110, 206 132" fill="none" stroke="#7a4a24" strokeWidth="4" />
      <path d="M166 90 C 182 98, 186 114, 198 134" fill="none" stroke="#d9534f" strokeWidth="4" />
      <path d="M166 96 C 178 104, 180 118, 190 136" fill="none" stroke="#f2a65a" strokeWidth="4" />
      {/* corpo e abas de fixação */}
      <rect x="34" y="58" width="152" height="12" rx="3" fill="#2f6db5" />
      <rect x="54" y="40" width="112" height="76" rx="6" fill="#2f6db5" stroke="#1f4f87" strokeWidth="2" />
      {/* eixo e braço */}
      <circle cx="84" cy="40" r="14" fill="#2f6db5" stroke="#1f4f87" strokeWidth="2" />
      <rect x="62" y="16" width="96" height="14" rx="7" fill="#f4f1ea" stroke="#cfc9bc" strokeWidth="2" />
      <circle cx="84" cy="23" r="8" fill="#f4f1ea" stroke="#cfc9bc" strokeWidth="2" />
    </svg>
  )
}

export function MotorRoda() {
  return (
    <svg viewBox="0 0 220 140" aria-hidden="true">
      {/* motor (cinza) e caixa de redução (amarela) */}
      <rect x="6" y="52" width="70" height="38" rx="8" fill="#c5ccd3" stroke="#8f99a3" strokeWidth="2" />
      <rect x="70" y="42" width="56" height="58" rx="8" fill="#f2b632" stroke="#c98f12" strokeWidth="2" />
      {/* roda */}
      <circle cx="158" cy="71" r="56" fill="#2b2f36" />
      {repetir(16).map((i) => {
        const angulo = (i * Math.PI) / 8
        return <circle key={i} cx={158 + Math.cos(angulo) * 50} cy={71 + Math.sin(angulo) * 50} r="3" fill="#4a5361" />
      })}
      <circle cx="158" cy="71" r="26" fill="#f2b632" />
      <circle cx="158" cy="71" r="10" fill="#2b2f36" />
    </svg>
  )
}

export function Robo() {
  return (
    <svg viewBox="0 0 260 180" aria-hidden="true">
      <ellipse cx="128" cy="168" rx="100" ry="8" fill="#000" opacity="0.08" />
      {/* fio do sensor */}
      <path d="M150 34 C 200 20, 220 50, 212 92" fill="none" stroke="#2b2f36" strokeWidth="5" />
      {/* corpo */}
      <rect x="22" y="92" width="200" height="56" rx="10" fill="#f2b632" stroke="#c98f12" strokeWidth="2" />
      <rect x="30" y="80" width="18" height="14" rx="3" fill="#f2b632" stroke="#c98f12" strokeWidth="2" />
      <rect x="194" y="80" width="18" height="14" rx="3" fill="#f2b632" stroke="#c98f12" strokeWidth="2" />
      {/* placa com tela de LEDs */}
      <rect x="66" y="22" width="112" height="96" rx="12" fill="#f4f1ea" stroke="#b9b4a8" strokeWidth="3" />
      {repetir(25).map((i) => {
        const linha = Math.floor(i / 5)
        const coluna = i % 5
        const aceso = [1, 3, 10, 14, 16, 17, 18].includes(i)
        return <rect key={i} x={86 + coluna * 15} y={36 + linha * 14} width="9" height="8" rx="2" fill={aceso ? '#f2a65a' : '#c9d1d8'} />
      })}
      {/* sensor ultrassônico na frente */}
      <rect x="216" y="92" width="34" height="48" rx="6" fill="#f4f1ea" stroke="#9aa3ac" strokeWidth="3" />
      <circle cx="233" cy="105" r="8" fill="#13233a" />
      <circle cx="233" cy="127" r="8" fill="#13233a" />
      {/* rodas */}
      {[62, 184].map((cx) => (
        <g key={cx}>
          <circle cx={cx} cy="140" r="32" fill="#2b2f36" />
          <circle cx={cx} cy="140" r="15" fill="#9aa3ac" />
          <circle cx={cx} cy="140" r="6" fill="#2b2f36" />
        </g>
      ))}
    </svg>
  )
}
