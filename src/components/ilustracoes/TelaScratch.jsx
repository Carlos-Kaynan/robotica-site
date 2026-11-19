// Esquema da tela do Scratch, com as 4 áreas numeradas:
// 1 categorias e blocos, 2 área de código, 3 palco, 4 atores.
const categorias = ['#4c97ff', '#9966ff', '#cf63cf', '#ffbf00', '#ffab19', '#5cb1d6', '#59c059', '#ff8c1a']

function Numero({ x, y, n }) {
  return (
    <g>
      <circle cx={x} cy={y} r="9" fill="#bd5426" stroke="#fff" strokeWidth="2" />
      <text x={x} y={y + 4} fontSize="11" fontWeight="800" fill="#fff" textAnchor="middle">
        {n}
      </text>
    </g>
  )
}

export default function TelaScratch() {
  return (
    <svg viewBox="0 0 320 200" aria-hidden="true">
      {/* barra do topo */}
      <rect x="2" y="2" width="316" height="196" rx="8" fill="#e9eef2" stroke="#c9d1d9" strokeWidth="2" />
      <rect x="2" y="2" width="316" height="16" rx="6" fill="#855cd6" />
      <text x="12" y="14" fontSize="9" fontWeight="800" fill="#fff">
        SCRATCH
      </text>

      {/* 1: categorias (bolinhas coloridas) e blocos */}
      <rect x="6" y="22" width="26" height="172" fill="#fff" />
      {categorias.map((cor, i) => (
        <circle key={cor} cx="19" cy={34 + i * 19} r="6" fill={cor} />
      ))}
      <rect x="34" y="22" width="76" height="172" fill="#f9f9f9" />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <rect key={i} x="40" y={30 + i * 22} width={44 + (i % 3) * 10} height="14" rx="3" fill="#4c97ff" />
      ))}

      {/* 2: área de código, com um pedacinho de programa */}
      <rect x="112" y="22" width="102" height="172" fill="#fff" />
      <rect x="124" y="44" width="70" height="18" rx="7" fill="#ffbf00" />
      <rect x="124" y="62" width="62" height="14" rx="3" fill="#4c97ff" />
      <rect x="124" y="76" width="70" height="14" rx="3" fill="#9966ff" />

      {/* 3: palco, com a bandeira verde e o botão de parar em cima */}
      <path d="M222 26 v10" stroke="#3d7d27" strokeWidth="1.5" />
      <path d="M223 26 h8 v5 h-8 z" fill="#4cbf56" />
      <polygon points="240,26 245,26 248,29 248,34 245,37 240,37 237,34 237,29" fill="#ec5959" />
      <rect x="218" y="42" width="96" height="72" fill="#fff" stroke="#c9d1d9" />
      {/* o gato (bem simplificado) */}
      <circle cx="266" cy="80" r="14" fill="#f9a03f" />
      <polygon points="254,72 256,60 263,68" fill="#f9a03f" />
      <polygon points="278,72 276,60 269,68" fill="#f9a03f" />
      <circle cx="261" cy="78" r="2" fill="#2b2f36" />
      <circle cx="271" cy="78" r="2" fill="#2b2f36" />

      {/* 4: área dos atores */}
      <rect x="218" y="118" width="96" height="76" fill="#fff" stroke="#c9d1d9" />
      <rect x="226" y="130" width="28" height="28" rx="4" fill="#e6f0f2" stroke="#855cd6" strokeWidth="2" />
      <circle cx="240" cy="144" r="8" fill="#f9a03f" />

      <Numero x={72} y={182} n="1" />
      <Numero x={163} y={182} n="2" />
      <Numero x={302} y={54} n="3" />
      <Numero x={302} y={182} n="4" />
    </svg>
  )
}
