// Fluxograma do semáforo: início, três passos em sequência e a seta que volta ao começo.
const passos = [
  { y: 62, cor: '#2e9a5c', texto: 'Verde aceso · espera 5 s' },
  { y: 122, cor: '#e8b04a', texto: 'Amarelo aceso · espera 2 s' },
  { y: 182, cor: '#d9534f', texto: 'Vermelho aceso · espera 5 s' },
]

function SetaBaixo({ y }) {
  return (
    <g fill="#586477">
      <rect x="159" y={y} width="2" height="12" />
      <polygon points={`154,${y + 10} 166,${y + 10} 160,${y + 17}`} />
    </g>
  )
}

export default function FluxogramaSemaforo() {
  return (
    <svg viewBox="0 0 320 230" aria-hidden="true">
      {/* início (forma oval) */}
      <rect x="115" y="8" width="90" height="28" rx="14" fill="#13233a" />
      <text x="160" y="27" fontSize="12" fontWeight="800" fill="#fff" textAnchor="middle">
        Início
      </text>
      <SetaBaixo y={38} />

      {/* passos (retângulos) */}
      {passos.map((passo, i) => (
        <g key={passo.texto}>
          <rect x="70" y={passo.y} width="180" height="34" rx="4" fill="#fffdf8" stroke={passo.cor} strokeWidth="3" />
          <circle cx="88" cy={passo.y + 17} r="7" fill={passo.cor} />
          <text x="170" y={passo.y + 21} fontSize="11" fontWeight="700" fill="#1b2433" textAnchor="middle">
            {passo.texto}
          </text>
          {i < passos.length - 1 && <SetaBaixo y={passo.y + 36} />}
        </g>
      ))}

      {/* seta que volta ao verde: a repetição */}
      <path d="M250 199 H290 V79 H258" stroke="#bd5426" strokeWidth="2.5" fill="none" />
      <polygon points="258,73 258,85 250,79" fill="#bd5426" />
      <text x="296" y="142" fontSize="10" fontWeight="800" fill="#bd5426" transform="rotate(90 296 142)" textAnchor="middle">
        repete
      </text>
    </svg>
  )
}
