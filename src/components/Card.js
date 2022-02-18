import React from "react";
import cardImage from "../images/katie-zaferes.png"
import starIcon from "../images/star.png"

export default function Card() {
    return (
        <div className="card">
            <img className="card-image" src={cardImage}/>
            <div className="card-info">
                <img className="star-icon" src={starIcon} width="14" height="14"/>
                <span className="star-rating">5.0</span>
                <span className="location">(6) • USA</span>
            </div>
            <p className="card-desc">Life lessons with Katie Zaferes</p>
            <p>
                <span className="price">From $136</span> / person
            </p>
        </div>
    )
}