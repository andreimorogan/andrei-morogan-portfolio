import React from "react";
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer id={styles.footer}>
            <ul id={styles['footer-items']}>
                <li><a href="https://www.github.com/andreymorogan" target='blank'>GitHub</a></li>
                <li><a href="#">LinkedIn</a></li>
                <li><a href="#">My Resume</a></li>
                <li><a href="#">Email</a></li>
            </ul>
        </footer>
    );
}

export default Footer;