import styles from "../styles/Button.module.css"
import { Link } from "react-router-dom";

const Button = ({text, link}) => {
    return (
        <Link to={`../${link}`}><button className={styles['styled-button']}>{text}</button></Link>
    );
}  

export default Button;