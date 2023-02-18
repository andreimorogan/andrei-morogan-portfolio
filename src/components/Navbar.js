import React from "react";
import Logo from '../assets/logo.svg';
import styles from './Navbar.module.css';
import { useState } from "react";
import { Fade } from "react-awesome-reveal";

const Navbar = () => {

    const [btnState, setBtnState] = useState(false);

    const handleClick = () => {
        setBtnState(btnState => !btnState);
    }

    let toggleClassCheck = btnState ? ` ${styles.active}` : null;
    let navClassCheck = btnState ? ` ${styles['nav-margin']}` : null;

    return (
        <>
            <Fade direction="down" triggerOnce="true">
                <nav className= {navClassCheck}>
                    <img src={Logo} alt="The logo." className={styles['logo-img']} />
                    <div className={styles.group}>
                        <ul className= {`${styles.navigation} ${toggleClassCheck}`}>
                            <li><a href="index.html">About</a></li>
                            <li><a href="projects.html">Projects</a></li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                    </div>
                    <div className={`${styles.hamburger} ${toggleClassCheck}`} onClick={handleClick}>
                        <span className={styles.bar}></span>
                        <span className={styles.bar}></span>
                        <span className={styles.bar}></span>
                    </div>
                </nav>
            </Fade>
        </>
    );
}

export default Navbar;