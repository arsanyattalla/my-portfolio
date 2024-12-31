import React, { useEffect, useState } from "react";
import "../styles/App.css";
import "../styles/menu.css";
import profileImg from "../images/profile.jpg";
import DropdownMenu from "../utils/DropdownMenu";

function AboutMe() {
  const [animate, setAnimate] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState(null);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const handleMenuSelection = (component) => {
    setSelectedComponent(component);
  };

  return (
    <div className="backgroun-image">
      
      

        {!selectedComponent && (
          <>
            <div
              className={`about-container ${
                animate ? "animate-slideIn" : ""
              }`}
            >
              <h1 className="header">About Me</h1>
              <div className="profile-pic-container">
                <img className="profile-pic" src={profileImg} alt="Profile" />
              </div>
            </div>

            <div
              className={`about-text-container ${
                animate ? "animate-slideIn" : ""
              }`}
            >
              <p>
                <span>
                  Hello! I am Arsany Attalla, a software engineer with three
                  years of experience developing and optimizing web
                  applications. With a degree in Computer Science, I have a
                  solid foundation in software engineering principles.
                </span>
                <span>
                  Beyond coding, I enjoy soccer, which teaches me teamwork and
                  strategy. I also love traveling, discovering cultures, and
                  drawing inspiration for creative solutions.
                </span>
              </p>
            </div>
          </>
        )}
    </div>
  );
}

export default AboutMe;
