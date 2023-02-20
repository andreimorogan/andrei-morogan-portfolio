import React from "react";
import styles from "./Me.module.css"
import me from '../assets/me.jpg'

const Me = () => {
    return (
        <img className={styles.me} src={me} alt="Myself"/>
    );
}

export default Me