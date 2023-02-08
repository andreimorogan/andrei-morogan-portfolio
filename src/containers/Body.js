import React from "react";
import './Body.css'

const Body = (props) => {
    return (
        <div className="wrapper">
            {props.children}
        </div>
    );
}

export default Body