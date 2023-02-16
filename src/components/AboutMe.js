import React from "react";
import './AboutMe.css'


const AboutMe = () => {
    return(
        <section className="about-me">
            <h1 className="large">About Me</h1>
            <div className="gray small">
                <p>I enjoy building websites, solving issues and creating applications that tailor towards the need of the user.</p>
                <p>My end goal is becoming a full-stack developer.</p>
                <p>In my free time I enjoy learning new languages, tinkering with technology and occasionally hiking or just taking a plain old walk.</p>
                <p>My favorite color is <span className="purple">purple</span>.</p>
            </div>
        </section>
    );
}

export default AboutMe