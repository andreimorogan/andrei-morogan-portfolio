import React from "react";
import styles from './Greeting.module.css';

const Greeting = () => {
    return (
        <section className={styles['main-greeting']}>
            <h1 className={`${styles.purple} ${styles.small}`}>
                Hello, I'm
            </h1>
            <h3 className={styles.large}>
                Andrei Morogan. 
            </h3>
            <p className={`${styles.large} ${styles.gray}`}>An aspiring web developer.</p>
        </section>
    );
}

export default Greeting;
