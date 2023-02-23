import React from "react"
import styles from "../styles/InlineContainer.module.css"

const InlineContainer = (props) => {
    return(
        <div className={styles['inline-container']}>
            {props.children}
        </div>
    );
}

export default InlineContainer