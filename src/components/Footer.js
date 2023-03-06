import styles from "../styles/Footer.module.css"
const Footer = () => {
    return (
        <footer id={styles.footer}>
            <ul id={styles['footer-items']}>
                <li><a href="https://www.github.com/andreymorogan" target='blank'>GitHub</a></li>
                <li><a href="#">LinkedIn</a></li>
                <li><a href="https://drive.google.com/file/d/1oevEdl9GW5j_YGFjM7H0Bus80_NmRrZK/view" target="_blank">My Resume</a></li>
                <li><a href="mailto:andreymorogan@gmail.com">Email</a></li>
            </ul>
        </footer>
    );
}

export default Footer;