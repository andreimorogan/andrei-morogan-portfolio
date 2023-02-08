import React from "react";
import Logo from '../assets/logo.svg';
import './Navbar.css';

const Navbar = () => {
    return (
        <>
            <nav>
                <img src={Logo} alt="The logo." className="logo-img" />
                <div className="group">
                    <ul className="navigation">
                        <li><a href="index.html">About</a></li>
                        <li><a href="projects.html">Projects</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </div>
                <div className="hamburger">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </nav>
        </>
    );
}

export default Navbar;