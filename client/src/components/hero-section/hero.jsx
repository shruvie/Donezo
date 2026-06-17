import React from "react";
import './hero.css';
import { BsLightningChargeFill } from "react-icons/bs";
import {
  FaTasks,
  FaUsers,
  FaChartLine,
  FaRobot,
  FaBell,
  FaCloud
} from "react-icons/fa";
import dash from '../../assets/image.png';

function Hero(){
     const features = [
  {
    title: "Smart Task Management",
    desc: "Create, organize and prioritize tasks with ease.",
    icon: <FaTasks id ="faaa"/>
  },
  {
    title: "Real-Time Collaboration",
    desc: "Work together with your team instantly.",
    icon: <FaUsers id ="faaa"/>
  },
  {
    title: "Progress Tracking",
    desc: "Monitor productivity with detailed insights.",
    icon: <FaChartLine id ="faaa"/>
  },
  {
    title: "AI Assistance",
    desc: "Get intelligent suggestions and automation.",
    icon: <FaRobot id ="faaa"/>
  },
  {
    title: "Deadline Reminders",
    desc: "Never miss an important task again.",
    icon: <FaBell id ="faaa"/>
  },
  {
    title: "Secure Cloud Sync",
    desc: "Access your work anywhere, anytime.",
    icon: <FaCloud id ="faaa"/>
  }
];
    return(
        <div className="hero">
            <div className="allmain">
                <div className="her-cute">
                    <p className="tag"><BsLightningChargeFill className="icon" /> Task Management, Simplified!</p>
                </div>
                <div className="maintxt">
                    <h1 className="heading">Plan smarter, work faster, and <br/>achieve more with Donezo.</h1>
                    <p>
                        Donezo is a modern task management platform for organizing tasks,
                        tracking projects, and boosting productivity with a clean,
                        collaborative workspace.
                    </p>
                </div>
            </div>

            <div className="herbut">
                <button className="geti">Get Started</button>
                <button className="try">Try Demo</button>
            </div>

            <div>
                <img src={dash} className="dash"></img>
            </div>
<div className="features-title">
                    <h5>Features</h5>
                    <h2>What makes donezo unique?</h2>
                </div>
            <div className="features-grid">
                
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">
        {feature.icon}
      </div>
            <div className="glow"></div>
            <h3>{feature.title}</h3>
            <p>{feature.desc}</p>
          </div>
        ))}
      </div>
      <footer className="footer">
  <div className="footer-container">

    <div className="footer-brand">
      <h2>Donezo</h2>
      <p>
        Organize tasks, collaborate with teams, and boost productivity
        with the next generation task management platform.
      </p>
    </div>

    <div className="footer-links">
      <h3>Product</h3>
      <a href="/">Features</a>
      <a href="/">Pricing</a>
      <a href="/">Integrations</a>
      <a href="/">Updates</a>
    </div>

    <div className="footer-links">
      <h3>Company</h3>
      <a href="/">About</a>
      <a href="/">Careers</a>
      <a href="/">Blog</a>
      <a href="/">Contact</a>
    </div>

    <div className="footer-links">
      <h3>Resources</h3>
      <a href="/">Documentation</a>
      <a href="/">Help Center</a>
      <a href="/">Privacy Policy</a>
      <a href="/">Terms of Service</a>
    </div>

  </div>

  <div className="footer-bottom">
    <p>© 2026 Donezo. All rights reserved.</p>
  </div>
</footer>
        </div>
        
    )
}

export default Hero;