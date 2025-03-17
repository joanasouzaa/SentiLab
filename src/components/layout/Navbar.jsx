import { Link } from "react-router-dom";
import Container from "./Container";
import styles from '../../styles/Navbar.module.css';
import logo from '../../assets/images/logo.png';

export default function Navbar(){
    return(
        <nav className={styles.navbar}>
                <div className={styles.logo_sentilab}>
                <img src={logo} alt="SentiLab" />
                <h3>SentiLab</h3>
                </div>
                <ul className={styles.list}>
                <li className={styles.item_login}><Link to="/login">Login</Link></li> 
                <li className={styles.item_sobre}><Link to="#sobre_nos">Sobre</Link></li>
                <li className={styles.item_contato}><Link to="#contato">Contato</Link></li>
                </ul>

        </nav>
    )
}