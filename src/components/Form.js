import React from "react";
import styles from "../styles/Form.module.css"
import common from "../styles/Common.module.css"

const Form = () => {
    return (
        <form className={`${styles.contact} ${common.small}`}>
            <label htmlFor="name" >Your name:</label>
            <input id="name" type="text" placeholder="Whichever name you wish." ></input>
            <label htmlFor="email">Your email address:</label>  
            <input id="email" type="email" placeholder="example@domain.com"></input>
            <label htmlFor="message">Your message for me:</label>
            <input type="textarea" id="message" placeholder="Say hello!"></input>
            <input type='submit' value="Submit"/>
        </form>
    );
}

export default Form