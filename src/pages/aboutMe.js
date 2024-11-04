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
    <div className="background-image">
      <header>
        <div className={`title ${animate ? "animate-slideIn" : ""}`}>
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
              Hello! I am Arsany Attalla, I am a software engineer with three years of experience in developing and optimizing web applications in a fast-paced startup environment. Holding a degree in Computer Science, I have a strong foundation in various software engineering principles and practices. My expertise includes building responsive and user-friendly web applications using JavaScript frameworks like React, alongside backend technologies such as Node.js and Express. My experience in system architecture enables me to design scalable solutions that handle high traffic while ensuring reliability and efficiency.In addition, I am skilled in database management, working with both SQL and NoSQL databases, including PostgreSQL and MongoDB, to manage data effectively and optimize query performance. I have developed and integrated RESTful APIs and microservices to enhance application functionality and facilitate seamless communication between systems.
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
              ideas.
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
