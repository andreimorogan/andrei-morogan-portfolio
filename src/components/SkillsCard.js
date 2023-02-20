import React from "react";
import styles from './SkillsCard.module.css'


const SkillsCard = () => {
    return(
        <section className={styles['my-skills']}>
            <h1 className={styles.large}>My Skills</h1>
            <hr></hr>
            <div className={`${styles.gray} ${styles.small}`}>
                <p>Here are some of the technologies and frameworks I've used so far:</p>
                <p className={styles.white}>Frontend Technologies</p>
                <ul className={styles.list}>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                    <li>CSS modules</li>
                </ul>
                <p className={styles.white}>Backend Technologies</p>
                <ul>
                    <li>None yet, but not for long!</li>
                </ul>
                <p className={styles.white}>Auxiliary</p>
                <ul>
                    <li>Version control with Git</li>
                    <li>NPM</li>
                </ul>
            </div>
        </section>
    );
}

export default SkillsCard