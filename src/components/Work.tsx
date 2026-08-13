import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Awaaz",
    category: "Multilingual AI-Powered Civic Grievance & Transparency Platform",
    description: "A multilingual AI-powered civic grievance platform that lets citizens report civic issues through voice or text, automatically classifies and prioritizes complaints, supports evidence and location data, and provides transparent complaint tracking.",
    tools: "React • FastAPI • PostgreSQL • AI/NLP • Speech Recognition • Multilingual Processing • PWA • SHA-256",
    image: "/images/awaaz.png",
    github: "https://github.com/dickenbagrecha/Awaaz"
  },
  {
    title: "Sign-Health",
    category: "Sign Language Translator",
    description: "An intelligent healthcare communication tool that translates real-time sign language gestures into audio and text. Engineered with computer vision and MediaPipe, it ensures seamless and accurate accessibility for hearing-impaired patients communicating with medical professionals.",
    tools: "React • Python • Computer Vision • MediaPipe",
    image: "/images/signhealth.png",
    github: "https://github.com/dickenbagrecha/Sign-Health"
  },
  {
    title: "HydroIntel-Control",
    category: "IoT Control System",
    description: "An advanced IoT dashboard and control platform designed for precision agriculture and water infrastructure management. It empowers operators to monitor real-time telemetry, control remote valves, manage pumps, and execute over-the-air firmware updates.",
    tools: "React 19 • Vite • Tailwind CSS v4 • Chart.js • Leaflet • IoT",
    image: "/images/hydrointel.png",
    github: "https://github.com/dickenbagrecha/HydroIntel-Control"
  },
  {
    title: "Marine-Orchestration-Platform",
    category: "Autonomous Multi-Agent System",
    description: "An autonomous multi-agent framework designed to manage vessel landing operations, cold storage dynamics, and fish auctions end-to-end. By combining time-series price forecasting and machine-learning-based spoilage risk modeling, it autonomously orchestrates storage-versus-sale decisions.",
    tools: "React • Vite • 3D UI • FastAPI • Machine Learning • Multi-Agent System",
    image: "/images/marine.png",
    github: "https://github.com/dickenbagrecha/Marine-Orchestration-Platform"
  },
  {
    title: "Home-Inventory-Agent",
    category: "AI-Assisted Inventory",
    description: "A smart household inventory management system utilizing Google Gemini AI to automatically categorize items, generate organizational insights, and maintain digital records via a streamlined FastAPI and React architecture.",
    tools: "React • FastAPI • Google Gemini AI • aiosqlite",
    image: "/images/homeinventory.png",
    github: "https://github.com/dickenbagrecha/Home-Inventory-Agent"
  },
  {
    title: "Pragna-Vistara-AV26",
    category: "AI-Powered Learning Platform",
    description: "An AI-powered offline-first personalized education platform for Classes 9 to 12. It combines a state-of-the-art Multi-Agentic Tutors Pipeline with a robust Offline-First Multi-Student Isolation System for high-performance execution on shared school devices.",
    tools: "React • Vite • FastAPI • Multi-Agent AI • PostgreSQL",
    image: "/images/pragna.png",
    github: "https://github.com/dickenbagrecha/Pragna-Vistara-AV26"
  },
  {
    title: "Cognivis",
    category: "AI Codebase Visualizer",
    description: "An AI-powered codebase visualizer that translates source code into interactive architecture maps, dynamic flowcharts, and intelligent debug analysis in real time. It leverages Google Gemini AI to reduce developer cognitive overhead.",
    tools: "Python 3.10+ • FastAPI • React 19 • Vite 7 • Tailwind CSS v4 • Google Gemini AI",
    image: "/images/cognivis.png",
    github: "https://github.com/dickenbagrecha/Cognivis"
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Active Project Timeline */}
          <div className="work-timeline-container">
            <div className="work-timeline-line"></div>
            <div 
              className="work-timeline-dot"
              style={{ left: `calc(${(currentIndex / (projects.length - 1)) * 100}% - 12px)` }}
            />
          </div>

          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <p className="carousel-description">
                          {project.description}
                        </p>
                        <hr className="carousel-divider" />
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="github-button"
                          data-cursor="disable"
                        >
                          <FaGithub /> View Repository ↗
                        </a>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage image={project.image} alt={project.title} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
