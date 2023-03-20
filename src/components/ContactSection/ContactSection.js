import styles from './ContactSection.module.css';
import common from '../../styles/Common.module.css';

const ContactSection = () => {
    return (
        <div className={`${common.small} ${common.aligned} ${styles.container}`}>
            <p>You can get a hold of me @ <span className={styles.highlight}><a href="mailto:dev.andreimorogan@gmail.com">dev.andreimorogan@gmail.com</a></span></p>
            <p>I will do my best to reply as soon as possible!</p>
            <p>Other relevant info can be found in my resume <span className={styles.highlight}><a href="https://drive.google.com/file/d/1B740WXkSntA-jwWjnX4gWOZ84gnQqxt3/view" target="_blank">here</a></span>.</p>
            <p>The form below will also send me a message via nodemailer.</p>
        </div>
    );
}

export default ContactSection;