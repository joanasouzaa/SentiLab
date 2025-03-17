import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Container from "./components/layout/Container"
import Navbar from "./components/layout/Navbar"
import Home from "./components/pages/Home"
import PageLogin from "./components/pages/PageLogin"
import LoginAluno from "./components/pages/LoginAluno"
import LoginProfessor from "./components/pages/LoginProfessor"
import CadastroLogin from "./components/pages/CadastroLogin"
import EsqueceuSenha from "./components/pages/EsqueceuSenha"
import Perfil from "./components/pages/Perfil"
import Footer from "./components/layout/Footer"

function App() {
    return (
        <Router>
            {/* <Container custumClass="min-height"> */}
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/login" element={<PageLogin />} />
                    <Route path="/login_professor" element={<LoginProfessor />} />
                    <Route path="/login_aluno" element={<LoginAluno />} />
                    <Route path="/cadastrar" element={<CadastroLogin />} />
                    <Route path="/esqueceusenha" element={<EsqueceuSenha />} />
                    <Route path="/perfil" element={<Perfil />} />
                </Routes>
            {/* </Container> */}
            <Footer />
        </Router>
    );
}

export default App
