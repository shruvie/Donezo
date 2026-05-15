import React from "react";
import './hero.css';
import { BsLightningChargeFill } from "react-icons/bs";
import dash from '../../assets/dashboard.jpg';


function Hero(){
    return(
        <div className="hero">
            <div className="allmain">
                <div className="her-cute">
                    <p className="tag"><BsLightningChargeFill className="icon" /> Task Management, Simplified!</p>
                </div>
                <div className="maintxt">
                    <h1 className="heading">Plan smarter, work faster, and <br/>achieve more with Donezo.</h1>
                <p>Donezo is a modern task management platform for organizing tasks, tracking projects, and boosting productivity with a clean, collaborative workspace.</p>
            
                </div>
            </div>
            <div className="herbut">
                <button className="geti">Get Started</button>
                <button className="try">Try Demo</button>
            </div>

            <div>
                <img src={dash} className="dash"></img>
            </div>
        </div>
    )
}

export default Hero;