// Liga o "nome" usado nos blocos { tipo: 'figura', nome } ao desenho certo.
// Para um desenho novo: crie o componente e acrescente o nome aqui.
import CircuitoLed from './CircuitoLed.jsx'
import { Botao, Led, MotorRoda, PlacaArduino, Protoboard, Resistor, Robo, SensorUltrassonico, Servo } from './Pecas.jsx'
import CircuitoSemaforo from './CircuitoSemaforo.jsx'
import EntradaSaida from './EntradaSaida.jsx'
import FluxogramaSemaforo from './FluxogramaSemaforo.jsx'
import PalcoCoordenadas from './PalcoCoordenadas.jsx'
import TelaScratch from './TelaScratch.jsx'

export const ilustracoes = {
  'placa-arduino': PlacaArduino,
  protoboard: Protoboard,
  led: Led,
  resistor: Resistor,
  botao: Botao,
  'sensor-ultrassonico': SensorUltrassonico,
  servo: Servo,
  'motor-roda': MotorRoda,
  robo: Robo,
  'circuito-led': CircuitoLed,
  'tela-scratch': TelaScratch,
  'palco-coordenadas': PalcoCoordenadas,
  'entrada-saida': EntradaSaida,
  'fluxograma-semaforo': FluxogramaSemaforo,
  'circuito-semaforo': CircuitoSemaforo,
}
