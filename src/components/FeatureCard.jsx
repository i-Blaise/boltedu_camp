import "../css/FeatureCard.css"
import ArrowRight from "../assets/arrow-right.png"
// import React, { useState } from 'react';

function FeatureCard({ icon, title, description, linkText }) {


    return(
        <div className="card-container">
            <img className="card-icon" src={icon} alt="time icon" />
            <h2>{title}</h2>
            <p>{description}</p>
            <div className="cta-link">
            <h4>View integration</h4>
            <img src={ArrowRight} alt="right arrow icon" />
            </div>
        </div>
    )
}

export default FeatureCard