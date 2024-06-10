import React, { useEffect, useState } from "react";
import "../styles/App.css";
import "../styles/menu.css";
import profimeImg from "../images/profile.jpg";

function AboutMe() {
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
        <div className={`about-container' ${animate ? "animate-slideIn" : ""}`}>
          <p className="header">About Me</p>
          <div className="profile-pic-container">
            <img className="profile-pic" src={profimeImg} alt="Profile" />
          </div>
        </div>
        <div className={`js-text ${animate ? "animate-slideIn" : ""}`}>
          <p>
            <span className="js-texts">
              Hello! I am Arsany Attalla, a passionate computer science graduate
              with a love for technology, soccer, and exploring the world.
              Originally hailing from the vibrant city of Cairo, Egypt, I've
              always been fascinated by how technology can bridge gaps and bring
              people together. My journey in computer science started at a young
              age and has grown into a rewarding career where I continuously
              seek to learn and innovate.
            </span>
            <span className="js-texts">
              When I'm not coding or working on exciting tech projects, you'll
              likely find me on the soccer field. Soccer isn't just a sport to
              me; it's a passion that has taught me the importance of teamwork,
              strategy, and perseverance. The thrill of the game mirrors the
              excitement I find in solving complex problems and developing
              creative solutions in the tech world.
            </span>
            <span className="js-texts">
              Traveling is another major part of my life. Each new destination
              offers a fresh perspective, inspiring me with diverse cultures and
              ideas. Whether I'm wandering through the ancient streets of Rome,
              hiking the scenic trails of the Swiss Alps, or savoring street
              food in Bangkok, I cherish every opportunity to expand my horizons
              and gather experiences that enrich my personal and professional
              life.
            </span>
            <span className="js-texts">
              Combining my love for technology, soccer, and travel, I aim to
              create impactful solutions that improve lives and connect people
              globally. I'm always eager to take on new challenges, collaborate
              with like-minded individuals, and make a difference through
              innovation and creativity.
            </span>
          </p>
        </div>
      </header>
    </div>
  );
}

export default AboutMe;
