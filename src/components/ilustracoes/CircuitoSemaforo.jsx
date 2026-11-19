// Circuito do semáforo: pinos 12, 11 e 10 → resistor → LED → GND (um fio de GND para os três).
const linhas = [
  { y: 62, pino: '12', cor: '#e8434b', escura: '#c3262f', nome: 'vermelho' },
  { y: 102, pino: '11', cor: '#f5c242', escura: '#c99a1f', nome: 'amarelo' },
  { y: 142, pino: '10', cor: '#3fb36b', escura: '#2a8a4f', nome: 'verde' },
]

export default function CircuitoSemaforo() {
  return (
    <svg viewBox="0 0 320 200" aria-hidden="true">
      {/* "Arduino" simplificado */}
      <rect x="10" y="20" width="86" height="165" rx="8" fill="#1f7a8c" />
      <text x="50" y="38" fontSize="12" fontWeight="800" fill="#fff" textAnchor="middle">
        Arduino
      </text>

      {/* fio de GND comum, que volta ao pino GND */}
      <path d="M304 62 V172 H96" stroke="#2b2f36" strokeWidth="4" fill="none" />
      <rect x="74" y="165" width="22" height="14" rx="2" fill="#e8b04a" />
      <text x="68" y="176" fontSize="11" fontWeight="700" fill="#fff" textAnchor="end">
        GND
      </text>

      {linhas.map((linha) => (
        <g key={linha.pino}>
          {/* pino */}
          <rect x="74" y={linha.y - 7} width="22" height="14" rx="2" fill="#e8b04a" />
          <text x="68" y={linha.y + 4} fontSize="11" fontWeight="700" fill="#fff" textAnchor="end">
            pino {linha.pino}
          </text>
          {/* fio até o resistor, resistor e fio até o LED */}
          <path d={`M96 ${linha.y} H128`} stroke={linha.cor} strokeWidth="4" />
          <rect x="128" y={linha.y - 9} width="46" height="18" rx="8" fill="#e6c98f" stroke="#c9a96b" strokeWidth="2" />
          <rect x="138" y={linha.y - 8} width="5" height="16" fill="#c3262f" />
          <rect x="147" y={linha.y - 8} width="5" height="16" fill="#c3262f" />
          <rect x="156" y={linha.y - 8} width="5" height="16" fill="#7a4a24" />
          <path d={`M174 ${linha.y} H210`} stroke={linha.cor} strokeWidth="4" />
          {/* LED */}
          <circle cx="226" cy={linha.y} r="16" fill={linha.cor} opacity="0.25" />
          <circle cx="226" cy={linha.y} r="10" fill={linha.cor} stroke={linha.escura} strokeWidth="2" />
          <path d={`M242 ${linha.y} H304`} stroke="#2b2f36" strokeWidth="4" />
          <text x="250" y={linha.y - 6} fontSize="10" fontWeight="700" fill={linha.escura}>
            {linha.nome}
          </text>
        </g>
      ))}

      <text x="151" y="44" fontSize="10" fontWeight="700" fill="#4a5361" textAnchor="middle">
        220 Ω
      </text>
    </svg>
  )
}
