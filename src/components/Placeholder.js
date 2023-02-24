import React from "react";
import styles from '../styles/Placeholder.module.css'
import common from '../styles/Common.module.css'

const Placeholder = () => {
    return (
        <div className={`${common.aligned} ${common.small} ${styles.container}`}>
            <p>Sorry, I'm still working on my courses and my portofolio website.</p>
            <p>Check back soon though!</p>
        </div>
    );
}

export default Placeholder