import { IconContext } from "react-icons";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineAudit } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import styles from '../styles/ContactIcons.module.css';
import { Fade } from "react-awesome-reveal";



const ContactIcons = () => {
    return (
        <Fade triggerOnce="true">
            <IconContext.Provider value={{size: '1.8em' }}>
                <div className={styles.container}>
                    <a href="https://www.github.com/andreymorogan" target="_blank"><AiOutlineGithub className={styles.icon} /></a>
                    <a href="https://www.linkedin.com/in/george-andrei-morogan-041217267" target="_blank"><AiFillLinkedin className={styles.icon} /></a>
                    <a href="https://drive.google.com/file/d/1oevEdl9GW5j_YGFjM7H0Bus80_NmRrZK/view" target="_blank"><AiOutlineAudit className={styles.icon} /></a>
                    <a href="mailto:andreymorogan@gmail.com"><AiOutlineMail className={styles.icon} /></a>
                </div>
            </IconContext.Provider>
        </Fade>
    );
}

export default ContactIcons;