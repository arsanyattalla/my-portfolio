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
    <div>
      <header>
        <div className="title">
          <button className="p-3" onClick={() => (window.location.href = "/")}>
            Home
          </button>
        </div>
        <div className={`about-container ${animate ? "animate-slideIn" : ""}`}>
          <p className="header">Experience</p>
          <div className="profile-pic-container">
            <img className="profile-pic" src={profileImg} alt="Profile" />
          </div>
        </div>
        <div className={`js-text ${animate ? "animate-slideIn" : ""}`}>
          <p>
            <span className="js-texts">
              <strong>Software Engineer</strong>
              <br />
              Qureez, Inc. [10/2021] – [5/2024]
              <br />
                Full-time
            </span>
            <ul>
              <li>
                Accumulated three years of comprehensive software engineering
                experience in a fast-paced startup environment.
              </li>
              <li>
                Spearheaded full stack development in a startup environment,
                utilizing TypeScript, AWS, Node.js, and MongoDB to create web
                and mobile applications for IoT smart devices, aimed at reducing
                energy consumption in various settings such as offices,
                apartments, and refrigeration warehouses.
              </li>
              <li>
                Architected and implemented a microservices-based backend,
                reducing system downtime by 40% and enhancing scalability.
              </li>
              <li>
                Worked extensively with Linux-based systems, optimizing server
                performance and reliability.
              </li>
              <li>
                Played a key role in the adoption of continuous integration and
                deployment (CI/CD) practices, cutting release times by 50%.
              </li>
              <li>
                Designed and executed a comprehensive testing strategy that
                decreased production bugs by 30%.
              </li>
            </ul>
          </p>
          <p>
            <span className="js-texts">
              <strong>Software Engineer-Frontend Developer Intern</strong>
              <br />
              Ratica, [05/2021] – [08/2021]
              <br />
                  Internship  
                </span>
            <ul>
              <li>
                Developed and launched a new user interface for the company’s
                flagship product, resulting in a 20% increase in user
                engagement.
              </li>
              <li>
                Optimized web applications for speed and scalability, reducing
                page load times by 35%.
              </li>
              <li>
                Implemented responsive design techniques, enhancing user
                experience across all devices.
              </li>
              <li>
                Introduced code review practices that improved code quality and
                reduced bugs by 15%.
              </li>
              <li>
                Led a successful migration to React, improving maintainability
                and developer productivity.
              </li>
            </ul>
          </p>
        </div>
      </header>
    </div>
  );
}

export default Experience;
