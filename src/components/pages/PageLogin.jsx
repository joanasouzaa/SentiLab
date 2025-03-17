import { Link } from "react-router-dom";
import NavbarTwo from "../layout/NavBarTwo";
import styles from '../../styles/PageLogin.module.css'
import Container from "../layout/Container";

export default function PageLogin() {
    return (
        <>
    <NavbarTwo/>
        <main>

            <div className={styles.left}>
                <h2>Escolha seu perfil</h2>
                <p>Selecione como deseja acessar nosso sistema</p>
            </div>

            <div className={styles.button_login_center}>
                <ul className={styles.list_buttons}>
                    <li className={styles.bg_azul}><Link to="/login_professor">Entrar como Professor</Link></li>
                    <li className={styles.bg_branco}><Link to="/login_aluno">Entrar como Aluno</Link></li>
                </ul>
            </div>

            <div >
                <ul className={styles.space_between}>
                    <li><Link to="/">Voltar</Link></li>
                    <li><Link to="/cadastrar">Cadastrar</Link></li>
                </ul>
            </div>

        </main>

        </>
    )
}