import React, { useEffect, useState } from "react";
import "../styles/App.css";
import "../styles/menu.css";
import profileImg from "../images/5906160.png";

function Experience() {
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
        <div className="experience-text-container">
          <h1 className="about-me-header">Experience</h1>
          <div className="timeline">
            <div className="timeline-item">
              <span className="timeline-date">09/2024 – Present</span>
              <strong>Software Engineer For AI Data Training</strong>
              <br />
              Outlier (contract)
            </div>
            <div className="timeline-item">
              <span className="timeline-date">10/2021 – 05/2024</span>
              <strong>IT Support Engineer/Software Engineer</strong>
              <br />
              Qureez, Inc. (Full-Time)
            </div>
            <div className="timeline-item">
              <span className="timeline-date">05/2021 – 08/2021</span>
              <strong>UI Developer Intern</strong>
              <br />
              Ratica (Internship)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
