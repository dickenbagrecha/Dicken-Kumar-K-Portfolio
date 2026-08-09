import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
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
