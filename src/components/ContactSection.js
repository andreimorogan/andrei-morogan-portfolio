import React from "react";
import styles from "./ContactSection.module.css"

const ContactSection = () => {
    return (
        <div className={styles['contact-section']}>
            <h1 className={styles.small}>You can get a hold of me @ <span className={styles.highlight}><a href="mailto:andreymorogan@gmail.com">andreymorogan@gmail.com</a></span>
            <br/>
            I will do my best to reply as soon as possible!
            <br/>
            Other relevant info can be found in my resume <span className={styles.highlight}><a href="https://drive.google.com/file/d/1oevEdl9GW5j_YGFjM7H0Bus80_NmRrZK/view" target="_blank">here</a></span>.
            </h1>
        </div>
    );
}

export default ContactSection;