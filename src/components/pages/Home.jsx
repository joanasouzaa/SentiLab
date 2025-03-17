import { Link } from "react-router-dom";
import Navbar from "../layout/Navbar";
import styles from "../../styles/Home.module.css"

export default function Home() {
    return (
        <>
            <Navbar />

            <section className={styles.container_introducao}>
                <div className={styles.introduction_title}>
                    <div>
                        <h1 className={styles.titulo_introducao}>SentiLab</h1>
                        <p className={styles.paragrafo_titulo}>seu laboratório de sentimentos e emoções</p>
                        <p className={styles.link_login}><Link to="/login">Vamos lá</Link></p>
                    </div>
                </div>
            </section>
            <section id="sobre_nos" className={styles.sobre}>
                <h2 className={styles.titulo_sobre_nos}>Sobre nós</h2>
                <p className={styles.paragrafo_sobre_nos}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales elementum felis, ac mattis urna vehicula eget. Donec a ex vel nisl maximus efficitur eu a ligula. Quisque molestie magna vitae est sodales dapibus. Etiam lacinia vel arcu vel pellentesque. Donec auctor augue lorem, vitae posuere dolor ullamcorper scelerisque. Nam aliquet sem mi, vel commodo est sollicitudin auctor. Proin vel tincidunt metus, vel bibendum ipsum. Nam scelerisque, ligula sodales fermentum volutpat, elit massa cursus orci, id efficitur lacus felis non justo. Nunc suscipit rutrum auctor. Etiam gravida, arcu at dapibus venenatis, velit lectus feugiat mi, sed lacinia est enim vitae magna. Donec consequat velit id augue pharetra efficitur.</p>
            </section>
            <section id="contato" className={styles.contato}>
                <h2 className={styles.titulo_contato}>Entre em contato</h2>
                <p className={styles.paragrafo_contato}>Tem alguma dúvida? Nós adorariamos de ouvir!</p>
                <form action="" className={styles.formulario_home}>
                    <div className={styles.form_home}>
                        <input type="email" name="" id="" placeholder="Seu e-mail" className={styles.input_email_home} />
                        <textarea name="" id="" placeholder="Escreva uma mensagem" className={styles.mensagem_home}></textarea>
                    </div>
                </form>
            </section>

        </>
    )
}