import React from "react";
import '../styles/Body.css'

const Body = (props) => {
    return (
        <div className="wrapper">
            {props.children}
        </div>
    );
}

export default Body