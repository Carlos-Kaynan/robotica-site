// Esquema entrada → processamento → saída, com exemplos de peças em cada caixa.
const caixas = [
  { x: 6, cor: '#1f7a8c', fundo: '#e6f0f2', titulo: 'ENTRADA', subtitulo: 'sensores', itens: ['botão', 'sensor de', 'distância'] },
  { x: 116, cor: '#13233a', fundo: '#e3e8ef', titulo: 'PROCESSAMENTO', subtitulo: 'Arduino', itens: ['o programa', 'decide o que', 'fazer'] },
  { x: 226, cor: '#bd5426', fundo: '#fbe9e1', titulo: 'SAÍDA', subtitulo: 'atuadores', itens: ['LED', 'servo', 'motor'] },
]

export default function EntradaSaida() {
  return (
    <svg viewBox="0 0 320 130" aria-hidden="true">
      {caixas.map((caixa) => (
        <g key={caixa.titulo}>
          <rect x={caixa.x} y="10" width="88" height="110" rx="10" fill={caixa.fundo} stroke={caixa.cor} strokeWidth="2" />
          <rect x={caixa.x} y="10" width="88" height="28" rx="10" fill={caixa.cor} />
          <rect x={caixa.x} y="28" width="88" height="10" fill={caixa.cor} />
          <text x={caixa.x + 44} y="29" fontSize={caixa.titulo.length > 8 ? 9 : 11} fontWeight="800" fill="#fff" textAnchor="middle">
            {caixa.titulo}
          </text>
          <text x={caixa.x + 44} y="56" fontSize="10" fontWeight="800" fill={caixa.cor} textAnchor="middle">
            {caixa.subtitulo}
          </text>
          {caixa.itens.map((item, i) => (
            <text key={item} x={caixa.x + 44} y={78 + i * 14} fontSize="10" fill="#1b2433" textAnchor="middle">
              {item}
            </text>
          ))}
        </g>
      ))}
      {/* setas entre as caixas */}
      {[96, 206].map((x) => (
        <g key={x} fill="#f2a65a">
          <rect x={x} y="61" width="12" height="8" />
          <polygon points={`${x + 10},55 ${x + 18},65 ${x + 10},75`} />
        </g>
      ))}
    </svg>
  )
}
