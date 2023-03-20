import React from 'react';
import styles from './SectionCard.module.css';
import me from '../../assets/me.jpg';
import common from '../../styles/Common.module.css';


const SectionCard = () => {
    return(
        <section className={styles['about-me']}>
            <h1 className={styles.large}>About Me</h1>
            <hr></hr>
            <div className={`${common.gray} ${common.small}`}>
                <p>I enjoy building websites, solving issues and creating applications that tailor towards the need of the user.</p>
                <p>Currently I'm working at Mega Image SRL, as a Data Quality Controller.</p>
                <p>Long term I'm looking to refine my skills and add C# to my stack.</p>
                <p>In my free time I enjoy learning new languages, tinkering with technology and occasionally hiking or just taking a plain old walk.</p>
                <p>My favorite color is <span className={common.purple}>purple</span>.</p>
                <img className={styles.me} src={me} alt="Myself"/>
            </div>
        </section>
    );
}

export default SectionCard