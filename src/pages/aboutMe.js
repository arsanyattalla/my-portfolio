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
            Hello! I am Arsany Attalla, a software engineer with three years of
            experience developing and optimizing web applications. With a
            degree in Computer Science, I have a solid foundation in software
            engineering principles.
          </p>
          <p className="about-me-description">
            Beyond coding, I enjoy soccer, which teaches me teamwork and
            strategy. I also love traveling, discovering cultures, and drawing
            inspiration for creative solutions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
