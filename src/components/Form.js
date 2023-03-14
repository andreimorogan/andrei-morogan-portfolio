import React, { useState } from 'react';
import styles from '../styles/Form.module.css';
import common from '../styles/Common.module.css';

const Form = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');


    const onNameChange = (e) => {
        setName(e.target.value);
    }

    const onEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const onMessageChange = (e) => {
        setMessage(e.target.value);
    }


    const onMessageSubmit = () => {
        if (name !== '' && email !== '' && message !== '') {
            fetch('http://localhost:3001/submit', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    name: name,
                    email: email,
                    message: message
                })
            })
            .catch((err) => console.log(err));

            alert('Thank you! The message has been sent.')
            
            document.getElementById('contact-form').reset();
        } 
    }


    return (
        <div>
            <form id='contact-form' className={`${styles.container} ${common.aligned} ${common.small}`}>
                <label htmlFor="name" >Your name<span className={common.purple}>*</span></label>
                <input id="name" type="text" placeholder="Whichever name you wish." required={true} onChange={onNameChange}></input>
                <label htmlFor="email">Your email address<span className={common.purple}>*</span></label>  
                <input id="email" type="email" placeholder="example@domain.com" onChange={onEmailChange}></input>
                <label htmlFor="message">Your message for me<span className={common.purple}>*</span></label>
                <textarea type="textarea" id="message" placeholder="Say hello!" rows="10" cols="50" onChange={onMessageChange}></textarea>
                <input type='submit' value="Submit" onClick={onMessageSubmit} />
            </form>
        </div>
    );
}


export default Form;