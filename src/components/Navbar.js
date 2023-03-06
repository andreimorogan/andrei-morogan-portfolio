import Logo from '../assets/logo.svg';
import styles from '../styles/Navbar.module.css';
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

    const [btnState, setBtnState] = useState(false);

    const handleClick = () => {
        setBtnState(btnState => !btnState);
    }

    let toggleClassCheck = btnState ? ` ${styles.active}` : null;
    let navClassCheck = btnState ? ` ${styles['nav-margin']}` : null;

    return (
        <>
            <nav className= {navClassCheck}>
                <img src={Logo} alt="The logo." className={styles['logo-img']} />
                <div className={styles.group}>
                    <ul className= {`${styles.navigation} ${toggleClassCheck}`}>
                        <li><Link to="/">About</Link></li>
                        <li><Link to="../projects">Projects</Link></li>
                        <li><Link to="../contact">Contact</Link></li>
                    </ul>
                </div>
                <div className={`${styles.hamburger} ${toggleClassCheck}`} onClick={handleClick}>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                </div>
            </nav>
        </>
    );
}

export default Navbar;