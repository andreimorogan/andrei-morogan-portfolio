import React from "react";
import styles from './Placeholder.module.css'

const Placeholder = () => {
    return (
        <div className={styles.placeholder}>
            <h1 className={styles.small}>Sorry, I'm still working on my courses and my portofolio website.
                <br/>
                Check back soon though!
            </h1>
        </div>
    );
}

export default Placeholder