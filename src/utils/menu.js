import React, { useEffect, useState, useRef } from "react";
import Stack from "react-bootstrap/Stack";
import "../styles/menu.css";
import "../styles/App.css";
import "../styles/animation.css";
import AboutMe from "../pages/aboutMe";
import Experience from "../pages/experience";
import Projects from "../pages/projects.js";
import Skills from "../pages/skills.js";
import DropdownMenu from "../utils/DropdownMenu";
import { FaListUl } from "react-icons/fa";
import profileImg from "../images/linkedin1.png";

export function Menu() {
  const [slide, setSlide] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showIntro, setShowIntro] = useState(true); // State for the intro canvas
  const aboutMeRef = useRef(null);
  const homeRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const canvasRef = useRef(null);

  const dropdownOptions = [
    { label: "Home", action: () => scrollToSection(homeRef) },
    { label: "About Me", action: () => scrollToSection(aboutMeRef) },
    { label: "Experience", action: () => scrollToSection(experienceRef) },
    { label: "Projects", action: () => scrollToSection(projectsRef) },
    { label: "Skills", action: () => scrollToSection(skillsRef) },
  ];
  useEffect(() => {
    const handleScroll = () => {
      const isAtTop = window.pageYOffset <= 500;
      console.log("Scroll detected. Is at top:", isAtTop);

      if (isAtTop) {
        setShowMenu(false);
      } else {
        setShowMenu(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const scrollToSection = (ref) => {
    if (ref.current === homeRef.current) {
      setShowMenu(false);
      ref.current.scrollIntoView({ behavior: "smooth" });
    } else {
      setShowMenu(true);
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };



  return (
    <>
      
      {showMenu && (
      
        <div ref={homeRef}>
            <DropdownMenu
              placeholder={<FaListUl />}
              options={dropdownOptions}
              onToggle={() => {}}
            />
        </div>
        )}
          <div className="menu"></div>
          <div className={`menu-slide ${slide ? "slide-right" : "slide-reset"}`}>
            <header className={"animat" }>
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
                <button className="p-2" onClick={() => scrollToSection(aboutMeRef)}>
                  About me
                </button>
                <button className="p-2" onClick={() => scrollToSection(experienceRef)}>
                  Experience
                </button>
                <button className="p-2" onClick={() => scrollToSection(projectsRef)}>
                  Projects
                </button>
                <button className="p-2" onClick={() => scrollToSection(skillsRef)}>
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

          <div ref={aboutMeRef} data-section="About Me">
            <AboutMe />
          </div>
          <div ref={experienceRef} data-section="Experience">
            <Experience />
          </div>
          <div ref={projectsRef} data-section="Projects">
            <Projects />
          </div>
          <div ref={skillsRef} data-section="Skills">
            <Skills />
          </div>
    </>
  );
}

export default Menu;
