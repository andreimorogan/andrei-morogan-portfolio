import React from "react";
import styles from '../styles/SkillsCard.module.css'
import common from "../styles/Common.module.css"


const SkillsCard = () => {
    return(
        <section className={styles['my-skills']}>
            <h1 className={styles.large}>My Skills</h1>
            <hr></hr>
            <div className={`${common.gray} ${common.small}`}>
                <p>Here are some of the technologies and frameworks I've used so far:</p>
                <p className={common.white}>Frontend Technologies</p>
                <ul className={styles.list}>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                    <li>CSS modules</li>
                </ul>
                <p className={common.white}>Backend Technologies</p>
                <ul>
                    <li>None yet, but not for long!</li>
                </ul>
                <p className={common.white}>Auxiliary</p>
                <ul>
                    <li>Version control with Git</li>
                    <li>NPM</li>
                </ul>
            </div>
        </section>
    );
}

export default SkillsCard