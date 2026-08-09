import "./styles/About.css";
import { TbBrain, TbHierarchy2, TbLayersDifference, TbRobot } from "react-icons/tb";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        
        <p className="about-intro">
          I'm <strong>Dicken Kumar K</strong>, an AI & ML Engineer focused on building intelligent systems that move beyond prototypes into practical, real-world applications.
        </p>
        
        <p className="about-sub-intro">
          My work sits at the intersection of AI, ML, Agentic workflows, Full-Stack engineering, and Robotics. I design systems end-to-end — from neural models to interactive user interfaces.
        </p>

        <div className="about-grid">
          <div className="about-card">
            <div className="about-card-header">
              <TbBrain className="about-card-icon" />
              <h4>AI & ML Engineering</h4>
            </div>
            <p>Training and optimizing neural architectures, predictive systems, and deep learning models for production.</p>
            <div className="card-tech-list">
              <span>Python</span>
              <span>PyTorch</span>
              <span>Scikit-Learn</span>
            </div>
          </div>

          <div className="about-card">
            <div className="about-card-header">
              <TbHierarchy2 className="about-card-icon" />
              <h4>Agentic AI</h4>
            </div>
            <p>Designing autonomous AI agents, tool-use systems, multi-agent orchestrations, and RAG pipelines.</p>
            <div className="card-tech-list">
              <span>LangChain</span>
              <span>CrewAI</span>
              <span>LlamaIndex</span>
            </div>
          </div>

          <div className="about-card">
            <div className="about-card-header">
              <TbLayersDifference className="about-card-icon" />
              <h4>Full-Stack Systems</h4>
            </div>
            <p>Architecting user interfaces, scalable API frameworks, database structures, and deploying AI integrations.</p>
            <div className="card-tech-list">
              <span>FastAPI</span>
              <span>React</span>
              <span>Next.js</span>
            </div>
          </div>

          <div className="about-card">
            <div className="about-card-header">
              <TbRobot className="about-card-icon" />
              <h4>Robotics & Vision</h4>
            </div>
            <p>Developing perception pipelines, ROS-based autonomous navigation, and hardware integration.</p>
            <div className="card-tech-list">
              <span>ROS</span>
              <span>OpenCV</span>
              <span>C++</span>
            </div>
          </div>
        </div>

        <div className="about-exploring">
          <h5>CORE COMPETENCIES</h5>
          <div className="exploring-badges">
            <span>Agentic AI</span>
            <span>Generative AI</span>
            <span>Computer Vision</span>
            <span>Autonomous Systems</span>
            <span>AI Product Engineering</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
