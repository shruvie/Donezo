import React from "react";
import "./hero.css";
import { BsLightningChargeFill } from "react-icons/bs";
import {
  FaTasks,
  FaUsers,
  FaChartLine,
  FaClock,
} from "react-icons/fa";
import dash from "../../assets/image.png";

function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="hero">
        <div className="allmain">
          <div className="her-cute">
            <p className="tag">
              <BsLightningChargeFill className="icon" />
              Task Management, Simplified!
            </p>
          </div>

          <div className="maintxt">
            <h1>
              Plan smarter, work faster, and
              <br />
              achieve more with Donezo.
            </h1>

            <p>
              Donezo helps teams organize tasks, manage projects, track
              progress, and collaborate efficiently from one modern workspace.
            </p>
          </div>
        </div>

        <div className="herbut">
          <button className="geti">Get Started</button>
          <button className="try">Try Demo</button>
        </div>

        <img src={dash} alt="Dashboard" className="dash" />
      </section>

      {/* FEATURES */}
      <section className="services">
        <h2>Everything You Need</h2>

        <div className="service-grid">
          <div className="card">
            <FaTasks />
            <h3>Task Management</h3>
            <p>Create, assign and organize tasks effortlessly.</p>
          </div>

          <div className="card">
            <FaUsers />
            <h3>Team Collaboration</h3>
            <p>Work together in real-time and stay aligned.</p>
          </div>

          <div className="card">
            <FaChartLine />
            <h3>Progress Tracking</h3>
            <p>Monitor performance with visual insights.</p>
          </div>

          <div className="card">
            <FaClock />
            <h3>Time Management</h3>
            <p>Meet deadlines and improve productivity.</p>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="why">
        <h2>Why Choose Donezo?</h2>

        <div className="why-content">
          <div>
            <h3>⚡ Faster Workflow</h3>
            <p>
              Reduce manual effort and focus on meaningful work.
            </p>
          </div>

          <div>
            <h3>🚀 Boost Productivity</h3>
            <p>
              Keep projects moving with organized task tracking.
            </p>
          </div>

          <div>
            <h3>🤝 Better Collaboration</h3>
            <p>
              Keep your entire team connected and updated.
            </p>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats">
        <div className="stat">
          <h2>10K+</h2>
          <p>Tasks Managed</p>
        </div>

        <div className="stat">
          <h2>500+</h2>
          <p>Teams</p>
        </div>

        <div className="stat">
          <h2>99%</h2>
          <p>Customer Satisfaction</p>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Ready to Organize Your Work?</h2>
        <p>
          Join thousands of teams using Donezo to stay productive.
        </p>

        <button className="geti">
          Start For Free
        </button>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div>
          <h3>Donezo</h3>
          <p>Modern task management for productive teams.</p>
        </div>

        <div>
          <h4>Product</h4>
          <p>Features</p>
          <p>Pricing</p>
          <p>Updates</p>
        </div>

        <div>
          <h4>Company</h4>
          <p>About</p>
          <p>Contact</p>
          <p>Careers</p>
        </div>
      </footer>
    </>
  );
}

export default Home;