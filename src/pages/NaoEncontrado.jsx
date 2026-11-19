import { Link } from 'react-router-dom'

export default function NaoEncontrado() {
  return (
    <div className="pagina">
      <h1>Página não encontrada</h1>
      <p className="subtitulo">Esse endereço não existe (ou essa trilha ainda não tem lições).</p>
      <Link to="/" className="botao botao-principal">
        Voltar para o início
      </Link>
    </div>
  )
}
