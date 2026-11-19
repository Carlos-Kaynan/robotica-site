// O palco do Scratch com os eixos x (deitado) e y (em pé).
// O palco tem 480 de largura (x de -240 a 240) e 360 de altura (y de -180 a 180).
// No desenho ele ocupa 280 × 210, com o centro (0, 0) em (160, 117).
export default function PalcoCoordenadas() {
  return (
    <svg viewBox="0 0 320 240" aria-hidden="true">
      <rect x="20" y="12" width="280" height="210" rx="4" fill="#fff" stroke="#c9d1d9" strokeWidth="2" />

      {/* eixo x (azul-petróleo) e eixo y (ferrugem) */}
      <path d="M20 117 H300" stroke="#1f7a8c" strokeWidth="2" strokeDasharray="5 4" />
      <path d="M160 12 V222" stroke="#bd5426" strokeWidth="2" strokeDasharray="5 4" />

      <g fontSize="10" fontWeight="800">
        <text x="24" y="111" fill="#1f7a8c">x: -240</text>
        <text x="296" y="111" fill="#1f7a8c" textAnchor="end">
          x: 240
        </text>
        <text x="166" y="26" fill="#bd5426">y: 180</text>
        <text x="166" y="216" fill="#bd5426">y: -180</text>
        <text x="166" y="131" fill="#13233a">(0, 0)</text>
      </g>
      <circle cx="160" cy="117" r="4" fill="#13233a" />

      {/* um ator no ponto x: 100, y: 50 */}
      <path d="M160 88 H218 V117" stroke="#9aa4b1" strokeWidth="1.5" strokeDasharray="3 3" fill="none" />
      <circle cx="218" cy="88" r="11" fill="#f9a03f" />
      <polygon points="209,82 210,72 216,79" fill="#f9a03f" />
      <polygon points="227,82 226,72 220,79" fill="#f9a03f" />
      <text x="232" y="76" fontSize="10" fontWeight="800" fill="#13233a">
        x: 100, y: 50
      </text>
    </svg>
  )
}
