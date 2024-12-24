import Stack from "react-bootstrap/Stack";
import "../styles/menu.css";
import "../styles/App.css";
import "../styles/animation.css";
import React, { useEffect, useState } from "react";
import AboutMe from "../pages/aboutMe";
import Experience from "../pages/experience";
import Projects from "../pages/projects.js";
import Skills from '../pages/skills.js'
import profileImg from "../images/linkedin1.png";
import { FaHome } from "react-icons/fa";


export function Menu() {
  const [loading, setLoading] = useState(false);
  const [slide, setSlide] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [currentComponent, setCurrentComponent] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const handleButtonClick = (component) => {
    setSlide(true);
    setLoading(true);
    setTimeout(() => {
      setCurrentComponent(component);
    }, 500);
  };

  if (currentComponent === "AboutMe") {
    return <AboutMe />;
  }
  if (currentComponent === "Experience") {
    return <Experience />;
  }
  if (currentComponent === "Projects") {
    return <Projects />;
  }
  if (currentComponent === "Skills") {
    return <Skills />;
  }

  return (
    <div className="backgroun-image">
      <div className="shooting-stars">
        {[...Array(5)].map((_, index) => (
          <div className="shooting-star" key={index}></div>
        ))}
      </div>
      <div className={`menu-slide ${slide ? "slide-right" : "slide-reset"}`}>
        <header className={animate ? "animat" : ""}>
          <div className="title">
            <img
              className="rotating-earth"
              src="https://upload.wikimedia.org/wikipedia/commons/7/7f/Rotating_earth_animated_transparent.gif"
              alt="Rotating Earth"
            />
            <h1 className="title-text">Welcome to Arsany's Portfolio</h1>
            <p>Software Engineer</p>
          </div>

          <Stack direction="horizontal" gap={3}>
            <button
              className="p-2"
              onClick={() => handleButtonClick("AboutMe")}
            >
              About me
            </button>
            <button
              className="p-2"
              onClick={() => handleButtonClick("Experience")}
            >
              Experience
            </button>
            <button
              className="p-2"
              onClick={() => handleButtonClick("Projects")}
            >
              Projects
            </button>
            <button
              className="p-2"
              onClick={() => handleButtonClick("Skills")}
            >
              Skills
            </button>
          </Stack>
          <div className="buttonss">
            <a
              href="https://www.linkedin.com/in/arsany-attalla-1330531b1/"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin-button"
            >
              <img src={profileImg} alt="LinkedIn Logo" />
            </a>
            <a
              href="https://github.com/arsanyattalla"
              target="_blank"
              rel="noopener noreferrer"
              className="social-button"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                alt="GitHub Logo"
              />
            </a>
          </div>
        </header>
      </div>
    </div>
  );
}

export default Menu;
