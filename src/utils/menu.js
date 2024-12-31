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

export function Menu() {
  const [slide, setSlide] = useState(false);
  const [animate, setAnimate] = useState(false);
  const aboutMeRef = useRef(null);
  const homeRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const canvasRef = useRef(null);
  const [showMenu, setShowMenu] = useState(false);
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

  useEffect(() => {
    setAnimate(true);
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const shootingStars = [];

    function createShootingStar() {
      if (Math.random() < 0.01) {
        const x = Math.random() * canvas.width;
        const y = (Math.random() * canvas.height) / 2;
        const length = Math.random() * 100 + 50;
        const speed = Math.random() * 1.5 + 1;
        const angle = (Math.random() * Math.PI) / 4;
        shootingStars.push({ x, y, length, speed, angle });
      }
    }

    function drawShootingStar(star) {
      ctx.beginPath();
      ctx.moveTo(star.x, star.y);
      ctx.lineTo(
        star.x - Math.cos(star.angle) * star.length,
        star.y - Math.sin(star.angle) * star.length
      );
      ctx.strokeStyle = "white";
      ctx.lineWidth = 2;
      ctx.stroke();
    }

    function updateShootingStar(star) {
      star.x += Math.cos(star.angle) * star.speed;
      star.y += Math.sin(star.angle) * star.speed;
      star.length -= 0.5;
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      createShootingStar();

      for (let i = 0; i < shootingStars.length; i++) {
        const star = shootingStars[i];
        drawShootingStar(star);
        updateShootingStar(star);
        if (star.length <= 0) shootingStars.splice(i, 1);
      }
      requestAnimationFrame(animate);
    }

    animate();
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
    <div ref={homeRef}>
      {showMenu && (
        <>
 <DropdownMenu
        placeholder={<FaListUl />}
        options={dropdownOptions}
      />        </>
      )}

      <div></div>
      <canvas
        ref={canvasRef}
        className="shooting-star-canvas"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: -1,
          width: "100%",
          height: "100%",
        }}
      ></canvas>
      <div className="menu"></div>
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
            <button className="p-2" onClick={() => scrollToSection(aboutMeRef)}>
              About me
            </button>
            <button
              className="p-2"
              onClick={() => scrollToSection(experienceRef)}
            >
              Experience
            </button>
            <button
              className="p-2"
              onClick={() => scrollToSection(projectsRef)}
            >
              Projects
            </button>
            <button className="p-2" onClick={() => scrollToSection(skillsRef)}>
              Skills
            </button>
          </Stack>
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
    </div>
  );
}

export default Menu;
