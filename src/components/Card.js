import React from "react";
import starIcon from "../images/star.png"

export default function Card(props) {
    console.log(props)
    let badgeText; 
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT";
    } else if (props.location === "Online") {
        badgeText = "ONLINE";
    }
    return (
        <div className="card">
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img className="card-image" alt="" src={'./images/' + props.coverImg}/>
            <div className="card-info">
                <img className="star-icon" src={starIcon} alt="star" width="14" height="14"/>
                <span className="star-rating">{props.stats.rating}</span>
                <span className="location">({props.stats.reviewCount}) • {props.location}</span>
            </div>
            <p className="card-desc">{props.title}</p>
            <p>
                <span className="price">From ${props.price}</span>
            </p>
        </div>
    )
}