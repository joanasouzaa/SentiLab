import { Link } from "react-router-dom";
import Container from "./Container";
import styles from '../../styles/NavbarTwo.module.css';
import logo from '../../assets/images/logo.png';

export default function NavbarTwo(){
    return(
        <nav className={styles.navbar_two}>
                <div className={styles.logo_sentilab_center}>
                <img src={logo} alt="SentiLab" />
                <h3>SentiLab</h3>
                </div>
        </nav>
    )
}