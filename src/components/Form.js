import React from "react";
import styles from "../styles/Form.module.css"
import common from "../styles/Common.module.css"

const Form = () => {
    return (
        <div>
            <form className={`${styles.container} ${common.aligned} ${common.small}`}>
                <label htmlFor="name" >Your name<span className={common.purple}>*</span></label>
                <input id="name" type="text" placeholder="Whichever name you wish." required={true}></input>
                <label htmlFor="email">Your email address<span className={common.purple}>*</span></label>  
                <input id="email" type="email" placeholder="example@domain.com"></input>
                <label htmlFor="message">Your message for me<span className={common.purple}>*</span></label>
                <textarea type="textarea" id="message" placeholder="Say hello!" rows="10" cols="50"></textarea>
                <input type='submit' value="Submit"/>
            </form>
        </div>
    );
}

export default Form