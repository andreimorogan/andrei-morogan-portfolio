import React from "react";
import Logo from '../assets/logo.svg';
import './Navbar.css';
import { useState } from "react";

const Navbar = () => {

    const [btnState, setBtnState] = useState(false);

    const handleClick = () => {
        setBtnState(btnState => !btnState);
    }

    let toggleClassCheck = btnState ? ' active' : null;

    return (
        <>
            <nav>
                <img src={Logo} alt="The logo." className="logo-img" />
                <div className="group">
                    <ul className= {`navigation ${toggleClassCheck}`}>
                        <li><a href="index.html">About</a></li>
                        <li><a href="projects.html">Projects</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </div>
                <div className={`hamburger ${toggleClassCheck}`} onClick={handleClick}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </nav>
        </>
    );
}

export default Navbar;