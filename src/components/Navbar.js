import React from "react";
import logo from "../images/airbnb-logo.svg";

export default function Navbar() {
    return (
        <nav>
            <img className="logo" src={logo} alt="logo"></img>
        </nav>
    );
}