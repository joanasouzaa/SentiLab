import styles from '../../styles/Footer.module.css'

export default function Footer(){
    return(
        <footer className={styles.footer}>
            <div>
            <ul>
                <li>Projeto desenvolvido por <span>Joana Amorim de Souza</span></li>
                <li>Discente da Universidade de Marília - UNIMAR</li>
            </ul>
            <div className={styles.copy_right}>
                <p><span>SentiLab</span> &copy;2025</p>
            </div>
            </div>
            
        </footer>
    )
}