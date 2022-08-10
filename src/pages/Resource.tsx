import React from "react";
import logo from '../images/logo.svg';

export const Resource: React.FC = () => {

    return(
        <div className="main">
            <img src={logo} alt="logo" className="logo"/>
            <p style={{color:"white"}}>Resource</p>
        </div>
    )

};