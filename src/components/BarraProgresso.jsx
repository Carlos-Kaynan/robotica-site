// Barra que mostra quantas lições de uma trilha já foram lidas.
export default function BarraProgresso({ lidas, total }) {
  const porcentagem = total ? Math.round((lidas / total) * 100) : 0
  return (
    <div className="progresso">
      <div className="progresso-trilho" role="progressbar" aria-valuenow={porcentagem} aria-valuemin={0} aria-valuemax={100}>
        <div className="progresso-preenchido" style={{ width: `${porcentagem}%` }} />
      </div>
      <span>
        {lidas} de {total} lições
      </span>
    </div>
  )
}
