import React from 'react';
import styles from './SkillsCard.module.css';
import common from '../../styles/Common.module.css';


const SkillsCard = () => {
    return(
        <section className={styles['my-skills']}>
            <h1 className={styles.large}>My Skills</h1>
            <hr></hr>
            <div className={`${common.gray} ${common.small}`}>
                <p>Here are some of the technologies and frameworks I've used so far:</p>
                <p className={common.white}>Frontend Technologies</p>
                <ul className={styles.list}>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>SASS</li>
                    <li>CSS modules</li>
                    <li>{`Javascript (ES6+)`}</li>
                    <li>React.js</li>
                    <li>Bootstrap</li>
                </ul>
                <p className={common.white}>Backend Technologies</p>
                <ul>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>{`PostgreSQL (basics)`}</li>
                </ul>
                <p className={common.white}>Auxiliary</p>
                <ul>
                    <li>Version control with Git</li>
                    <li>{`Linux (RHEL/Fedora based distros)`}</li>
                    <li>NPM</li>
                    <li>Heroku</li>
                </ul>
            </div>
        </section>
    );
}

export default SkillsCard