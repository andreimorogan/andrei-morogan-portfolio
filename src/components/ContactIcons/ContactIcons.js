import { IconContext } from 'react-icons';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiOutlineGithub } from 'react-icons/ai';
import { AiOutlineAudit } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';
import styles from './ContactIcons.module.css';
import { Fade } from 'react-awesome-reveal';



const ContactIcons = () => {
    return (
        <Fade triggerOnce="true">
            <IconContext.Provider value={{size: '1.8em' }}>
                <div className={styles.container}>
                    <a href="https://www.github.com/andreimorogan" target="_blank"><AiOutlineGithub className={styles.icon} /></a>
                    <a href="https://www.linkedin.com/in/andreimorogan" target="_blank"><AiFillLinkedin className={styles.icon} /></a>
                    <a href="https://drive.google.com/file/d/1B740WXkSntA-jwWjnX4gWOZ84gnQqxt3/view" target="_blank"><AiOutlineAudit className={styles.icon} /></a>
                    <a href="mailto:dev.andreimorogan@gmail.com"><AiOutlineMail className={styles.icon} /></a>
                </div>
            </IconContext.Provider>
        </Fade>
    );
}

export default ContactIcons;