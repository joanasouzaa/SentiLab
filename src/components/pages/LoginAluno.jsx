import { Link } from "react-router-dom";
import NavbarTwo from "../layout/NavBarTwo";
import styles from '../../styles/pages/LoginAluno.module.css'
import { useState } from "react";

export default function LoginAluno() {
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');


    return (
        <>
            <NavbarTwo />
            <main >

                <div className={styles.title_center}>
                    <h2>Login Aluno</h2>
                </div>

                <div className={styles.form_center}>
                    <form onSubmit={handleSubmit} className={styles.form_login}>
                        {/* <div className={styles.teste}> */}
                            <label htmlFor="usuario">Usuário</label>
                            <input type="text" name="user" id="user" />

                            <label htmlFor="senha">Senha</label>
                            <input type="password" name="password" id="password" />
                        {/* </div> */}
                    </form>
                </div>

                {/* <div >
                    <ul className={styles.btn_space_between}>
                        <li className={styles.entrarBtn}><Link to="/">Entrar</Link></li>
                        <li className={styles.cadastrarBtn}><Link to="/cadastrar">Cadastrar</Link></li>
                    </ul>
                </div> */}
                <p className={styles.esqueciSenha}>Esqueci minha senha</p>
            </main>

        </>
    )
}