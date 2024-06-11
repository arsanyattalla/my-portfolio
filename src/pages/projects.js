import React, { useEffect, useState } from "react";
import "../styles/App.css";
import "../styles/menu.css";
import profileImg from "../images/projects.png";

function Projects() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="background">
      <header>
        <div className="title">
          <button className="p-3" onClick={() => (window.location.href = "/")}>
            Home
          </button>
        </div>
        <div className={`about-container ${animate ? "animate-slideIn" : ""}`}>
          <p className="header">Projects</p>
          <div className="profile-pic-container">
            <img className="profile-pic" src={profileImg} alt="Profile" />
          </div>
        </div>
        <div className={`js-text ${animate ? "animate-slideIn" : ""}`}>
        <p>
          <button
              onClick={() =>
                (window.location.href =
                  "https://github.com/arsanyattalla/DrillShare-webapp/tree/main")
              }
              className="p-2"
            >
              <strong>DrillShare - Tool rental webapp</strong>
            </button>
            <ul>
              <li>
              DrillShare is an innovative web application designed to connect users with a vast network of rentable tools, offering a convenient, cost-effective, and eco-friendly alternative to purchasing equipment for both individuals and businesses.
              </li>
            </ul>
          </p>
          <p>
            <button
              onClick={() =>
                (window.location.href =
                  "https://github.com/arsanyattalla/file_system_C/tree/main")
              }
              className="p-2"
            >
              <strong>File System in C</strong>
            </button>
            <ul>
              <li>
              Developed a C-based file system capable of executing various file operations and commands, such as creating, reading, writing, deleting, and listing files and directories, while ensuring data integrity and efficient storage management.
              </li>
            </ul>
          </p>
          <p>
            <button
              onClick={() =>
                (window.location.href =
                  "https://github.com/arsanyattalla/my-portfolio/tree/master")
              }
              className="p-2"
            >
              <strong>My Portfolio</strong>
            </button>
            <ul>
              <li>
                Crafted a dynamic portfolio website showcasing projects, skills,
                and achievements, with a focus on minimalist design, intuitive
                navigation, and responsive layout, aimed at effectively
                presenting professional expertise and fostering engagement with
                visitors.
              </li>
            </ul>
          </p>
         
        </div>
      </header>
    </div>
  );
}

export default Projects;
