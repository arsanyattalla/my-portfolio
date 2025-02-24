import React, { useEffect, useState } from "react";
import "../styles/App.css";
import "../styles/menu.css";
import profileImg from "../images/profile.jpg";

function AboutMe() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="about-me-container">
      <div className={`about-me-content ${animate ? "animate-fadeIn" : ""}`}>
        {/* Left Section: Profile Image */}
        <div className="about-me-image-container">
          <img
            className="about-me-image"
            src={profileImg}
            alt="Arsany Attalla"
          />
        </div>

        {/* Right Section: Text */}
        <div className="about-me-text-container">
          <h1 className="about-me-header">About Me</h1>
          <p className="about-me-description">
          Hello! I am Arsany Attalla, a software engineer with three years of experience developing and optimizing web applications. With a degree in Computer Science, I have a strong foundation in software development, system performance optimization, and debugging.
          </p>
          <p className="about-me-description">
          In addition to software engineering, I have hands-on experience in IT support, networking, and troubleshooting. I have worked extensively with Linux systems, ensuring smooth server operations, diagnosing network issues, and assisting users with technical challenges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
