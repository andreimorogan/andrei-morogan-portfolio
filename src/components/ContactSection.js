import styles from "../styles/ContactSection.module.css"
import common from "../styles/Common.module.css"

const ContactSection = () => {
    return (
        <div className={`${common.small} ${common.aligned} ${styles.container}`}>
            <p>You can get a hold of me @ <span className={styles.highlight}><a href="mailto:andreymorogan@gmail.com">andreymorogan@gmail.com</a></span></p>
            <p>I will do my best to reply as soon as possible!</p>
            <p>Other relevant info can be found in my resume <span className={styles.highlight}><a href="https://drive.google.com/file/d/1oevEdl9GW5j_YGFjM7H0Bus80_NmRrZK/view" target="_blank">here</a></span>.</p>
            <p className={`${styles.note} ${common.gray}`}>Disregard the contact form for now, please. It doesn't have any functionality yet.</p>
        </div>
    );
}

export default ContactSection;