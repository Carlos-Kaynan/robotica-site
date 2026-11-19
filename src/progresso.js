// Guarda no próprio navegador (localStorage) quais lições já foram lidas.
// Tudo fica dentro de try/catch porque o navegador pode bloquear o localStorage
// (ex.: janela anônima); nesse caso o site continua funcionando, só não lembra.
// A chave de cada lição é "<trilha>/<lição>", por exemplo "pecas-arduino/led-e-resistor".
const CHAVE_LIDAS = 'robotica:licoes-lidas'

function lerLidas() {
  try {
    return JSON.parse(localStorage.getItem(CHAVE_LIDAS)) ?? {}
  } catch {
    return {}
  }
}

export function estaLida(chave) {
  return Boolean(lerLidas()[chave])
}

export function marcarLida(chave, lida) {
  try {
    const lidas = lerLidas()
    if (lida) lidas[chave] = true
    else delete lidas[chave]
    localStorage.setItem(CHAVE_LIDAS, JSON.stringify(lidas))
  } catch {
    // sem localStorage: ignora
  }
}

// Quantas lições de uma trilha já foram lidas.
export function contarLidas(trilha) {
  return trilha.licoes.filter((licao) => estaLida(`${trilha.id}/${licao.id}`)).length
}
