import React from "react";
import styles from './SectionCard.module.css'


const SectionCard = () => {
    return(
        <section className={styles['about-me']}>
            <h1 className={styles.large}>About Me</h1>
            <hr></hr>
            <div className={`${styles.gray} ${styles.small}`}>
                <p>I enjoy building websites, solving issues and creating applications that tailor towards the need of the user.</p>
                <p>My end goal is becoming a full-stack developer.</p>
                <p>In my free time I enjoy learning new languages, tinkering with technology and occasionally hiking or just taking a plain old walk.</p>
                <p>My favorite color is <span className={styles.purple}>purple</span>.</p>
            </div>
        </section>
    );
}

export default SectionCard