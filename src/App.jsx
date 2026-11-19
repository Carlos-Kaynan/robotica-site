import { Link, Route, Routes } from 'react-router-dom'
import Inicio from './pages/Inicio.jsx'
import Licao from './pages/Licao.jsx'
import NaoEncontrado from './pages/NaoEncontrado.jsx'
import Trilha from './pages/Trilha.jsx'
import './App.css'

export default function App() {
  return (
    <>
      <header className="topo">
        <Link to="/" className="logo">
          <img src="./favicon.svg" alt="" width="34" height="34" />
          <span>
            Robótica <em>na Escola</em>
          </span>
        </Link>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/trilha/:trilhaId" element={<Trilha />} />
          <Route path="/trilha/:trilhaId/:licaoId" element={<Licao />} />
          <Route path="*" element={<NaoEncontrado />} />
        </Routes>
      </main>
      <footer className="rodape">Programação e robótica para alunos do 6º ao 9º ano e professores.</footer>
    </>
  )
}
