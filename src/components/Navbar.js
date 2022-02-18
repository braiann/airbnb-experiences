import React from "react";
import logo from "../images/airbnb-logo.png";

export default function Navbar() {
    return (
        <nav>
            <img className="logo" src={logo} alt="logo" height="30px"/>
        </nav>
    );
}