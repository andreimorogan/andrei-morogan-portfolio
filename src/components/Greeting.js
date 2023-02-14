import React from "react";
import './Greeting.css';

const Greeting = () => {
    return (
        <section className="main-greeting">
            <h1 className="purple small">
                Hello, I'm
            </h1>
            <h3 className="large">
                Andrei Morogan. 
            </h3>
            <p className="large gray">An aspiring web developer.</p>
        </section>
    );
}

export default Greeting;
