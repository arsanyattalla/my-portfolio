import React, { useEffect, useState } from "react";
import "../styles/App.css";
import "../styles/menu.css";
import profileImg from "../images/5906160.png";
import DropdownMenu from "../utils/DropdownMenu";

function Experience() {
  const [animate, setAnimate] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState(null);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const handleMenuSelection = (component) => {
    setSelectedComponent(component);
  };

  return (
    <div className="background-image">
      <header>
        <DropdownMenu
          placeholder="Experience"
          onOptionSelected={handleMenuSelection}
        />

        {!selectedComponent && (
          <>
            <div
              className={`about-container ${animate ? "animate-slideIn" : ""}`}
            >
              <p className="header">Experience</p>
              <div className="profile-pic-container">
                <img className="profile-pic" src={profileImg} alt="Profile" />
              </div>
              <div className="timeline">
              <div className="timeline-item">
                  <span className="timeline-date">09/2024 – Present</span>
                  <strong>Software Engineer For AI Data Training</strong>
                  <br />
                  Outlier (contract)
                </div>
                <div className="timeline-item">
                  <span className="timeline-date">10/2021 – 05/2024</span>
                  <strong>Software Engineer</strong>
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
          </>
        )}
      </header>
    </div>
  );
}

export default Experience;
