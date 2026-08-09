import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          {/* Futuristic HUD/AI Lab Panel in Upper-Left */}
          <div className="hero-hud-panel">
            <div className="hud-header">
              <span className="hud-num">01</span>
              <span className="hud-divider">/</span>
              <span className="hud-title">DICKEN AI LAB</span>
            </div>
            
            <div className="hud-status">
              <span className="hud-dot"></span>
              <span className="hud-status-text">CURRENTLY BUILDING</span>
            </div>
            
            <ul className="hud-list">
              <li>INTELLIGENT SYSTEMS</li>
              <li>AGENTIC AI</li>
              <li>ROBOTICS</li>
            </ul>
            
            <div className="hud-footer">
              <span className="hud-active-status">ACTIVE / 2026</span>
              <span className="hud-pulse"></span>
            </div>
          </div>

          <div className="landing-intro">
            <h2>HELLO, I'M</h2>
            <h1>
              DICKEN
              <br />
              <span className="name-bold">KUMAR K</span>
            </h1>
            <div className="hero-title">AI & ML ENGINEER</div>
            <p className="hero-subtitles">Agentic AI &bull; Generative AI &bull; Computer Vision</p>
          </div>

          <div className="landing-info">
            <h3 className="hero-action">
              BUILDING
              <br />
              <span className="highlight-text">INTELLIGENT</span>
              <br />
              SYSTEMS.
            </h3>
            <p className="hero-action-sub">
              AI-powered products, autonomous agents
              <br />
              and real-world engineering solutions.
            </p>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
