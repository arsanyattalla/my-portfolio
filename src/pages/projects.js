import React, { useEffect, useState } from "react";
import "../styles/projects.css";
import "../styles/menu.css";
import profileImg from "../images/projects.png";
import profile from "../images/154-1545805_portfolio-icons-code-web-development-logo.png";
import logo from "../images/logo.png";
import filesystemimg from "../images/2345453.png";
import weather from "../images/clouds-1768967_1280.jpg"
import social from "../images/Screenshot.png"
import { FaHome } from "react-icons/fa";
import DropdownMenu from "../utils/DropdownMenu";

function Projects() {
  const [animate, setAnimate] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleMenuSelection = (component) => {
    setSelectedComponent(component);
  };
  useEffect(() => {
    setAnimate(true);
  }, []);

  const projects = [
    {
      title: "DrillShare - Tool rental webapp",
      description:
        "DrillShare is an innovative web application designed to connect users with a vast network of rentable tools, offering a convenient, cost-effective, and eco-friendly alternative to purchasing equipment for both individuals and businesses.",
      link: "https://github.com/arsanyattalla/DrillShare-webapp/tree/main",
      image: logo,
    },
    {
      title: "File System in C",
      description:
        "Developed a C-based file system capable of executing various file operations and commands, such as creating, reading, writing, deleting, and listing files and directories, while ensuring data integrity and efficient storage management.",
      link: "https://github.com/arsanyattalla/file_system_C/tree/main",
      image: filesystemimg,
    },
    {
      title: "My Portfolio",
      description:
        "Crafted a dynamic portfolio website showcasing projects, skills, and achievements, with a focus on minimalist design, intuitive navigation, and responsive layout, aimed at effectively presenting professional expertise and fostering engagement with visitors.",
      link: "https://github.com/arsanyattalla/my-portfolio/tree/master",
      image: profile,
      web: 'https://arsanyattallaportfolio.com'
    },
    {
      title: "Weather App",
      description:
        "A real-time weather app built with React on the frontend and Python on the backend. It fetches weather data from an API and displays current conditions and forecasts for any location. The app demonstrates my skills in integrating frontend and backend technologies for a seamless user experience.",
      link: "https://github.com/arsanyattalla/Weather-App/tree/master",
      image: weather,
      web: 'https://weatherapp-status.netlify.app'
    },
    {
      title: "Social Media App - Momentia",
      description:
        "Developed a social media app that allows users to share posts, like, and comment on content, promoting interaction and community engagement. Implemented a user-friendly interface with smooth navigation to enhance the overall experience",
      link: "https://github.com/arsanyattalla/Social-Media-App",
      image: social,
      web: 'http://18.191.91.187:3000/'
    },
  ];

  return (
    <div className="background-image">
      <header>
      <DropdownMenu
          
          placeholder="Menu"
          onOptionSelected={handleMenuSelection}
        />
      <div className={`titl ${animate ? "animate-slideIn" : ""}`}>
        
          {!selectedComponent && (
          <>
          <p className="header">Projects</p>
          <div className="profile-pic-container">
                <img className="profile-pic" src='https://www.springboard.com/blog/wp-content/uploads/2022/03/what-is-a-coding-project.png' alt="Profile" />
              </div>
          <div className="projects-container">
            {projects.map((project, index) => {
              const imageClassName = index === 0 ? "project-image drillshare-image" : "project-image";
              const blockClassName = index === 0 ? "project-block drillshare-special" : "project-block";

              return (
                <div key={index} className={blockClassName}>
                  <img className={imageClassName} src={project.image} alt={project.title} />
                  <div className="project-content">
                    <div className="project-title">
                      <strong>{project.title}</strong>
                    </div>
                    <p className="project-description">{project.description}</p>
                  </div>
                  <div className="social-container">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="social-button">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="GitHub Logo" />
                    </a>
                    {project.web && (
                      <a href={project.web} target="_blank" rel="noopener noreferrer" className="social-button">
                        <img src={profileImg} alt="WEB" />
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        
        </>
      )}
              </div>

      </header>
    </div>
  );
}

export default Projects;
