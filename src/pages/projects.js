import React, { useEffect, useState } from "react";
import "../styles/projects.css";
import "../styles/menu.css";
import profileImg from "../images/projects.png";
import profile from "../images/profile.jpg";
import logo from "../images/logo.png";
import filesystemimg from "../images/2345453.png";

function Projects() {
  const [animate, setAnimate] = useState(false);


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
  ];

  return (
    <div className="background-image">
      <header>
      <div className={`title ${animate ? "animate-slideIn" : ""}`}>
          <button className="p-3" onClick={() => (window.location.href = "/")}>
            Home
          </button>
        </div>
        <div className={`about-container ${animate ? "animate-slideIn" : ""}`}>
          <p className="header">Projects</p>
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
        </div>
      </header>
    </div>
  );
}

export default Projects;
