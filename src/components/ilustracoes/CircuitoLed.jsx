// Desenho do circuito básico: pino 13 → resistor → LED → GND.
export default function CircuitoLed() {
  return (
    <svg viewBox="0 0 320 170" aria-hidden="true">
      {/* "Arduino" simplificado */}
      <rect x="10" y="20" width="96" height="130" rx="8" fill="#1f7a8c" />
      <text x="58" y="44" fontSize="13" fontWeight="800" fill="#fff" textAnchor="middle">
        Arduino
      </text>
      <rect x="84" y="64" width="22" height="14" rx="2" fill="#e8b04a" />
      <text x="78" y="75" fontSize="11" fontWeight="700" fill="#fff" textAnchor="end">
        pino 13
      </text>
      <rect x="84" y="116" width="22" height="14" rx="2" fill="#e8b04a" />
      <text x="78" y="127" fontSize="11" fontWeight="700" fill="#fff" textAnchor="end">
        GND
      </text>

      {/* fios */}
      <path d="M106 71 H150" stroke="#d9534f" strokeWidth="4" fill="none" />
      <path d="M206 71 H246 V92" stroke="#d9534f" strokeWidth="4" fill="none" />
      <path d="M246 116 V123 H106" stroke="#2b2f36" strokeWidth="4" fill="none" />

      {/* resistor */}
      <rect x="150" y="60" width="56" height="22" rx="9" fill="#e6c98f" stroke="#c9a96b" strokeWidth="2" />
      <rect x="160" y="61" width="6" height="20" fill="#c3262f" />
      <rect x="171" y="61" width="6" height="20" fill="#c3262f" />
      <rect x="182" y="61" width="6" height="20" fill="#7a4a24" />
      <text x="178" y="52" fontSize="11" fontWeight="700" fill="#4a5361" textAnchor="middle">
        220 Ω
      </text>

      {/* LED (triângulo = símbolo do LED) */}
      <circle cx="246" cy="104" r="20" fill="#fde3cf" />
      <path d="M234 92 H258 L246 112 Z" fill="#e8434b" />
      <rect x="234" y="112" width="24" height="4" fill="#c3262f" />
      <text x="272" y="96" fontSize="11" fontWeight="700" fill="#d9534f">
        + longa
      </text>
      <text x="272" y="122" fontSize="11" fontWeight="700" fill="#3b6fc4">
        − curta
      </text>
    </svg>
  )
}
