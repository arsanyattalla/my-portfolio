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
    <div className="background">
      <header>
        <div className="title">
          <button className="p-3" onClick={() => (window.location.href = "/")}>
            Home
          </button>
        </div>
        <div className={`about-container ${animate ? "animate-slideIn" : ""}`}>
          <p className="header">Experience/Skills</p>
          <div className="profile-pic-container">
            <img className="profile-pic" src={profileImg} alt="Profile" />
          </div>
        </div>
        <div
          className={`experience-content ${animate ? "animate-slideIn" : ""}`}
        >
          <div className="experience-block">
            <p>
              <span className="js-texts">
                <strong className="title">Work Experience</strong>
                <br></br>
                <br></br>
                <strong>Software Engineer - Quality Assurance</strong>
                <br />
                Qureez, Inc. [11/2022] – [05/2024]
                <br />
                Full-time
              </span>
              <ul>
              <li>Improved defect detection by 30% through the implementation of a structured bug tracking system using Jira.</li>
              <li>Led a negative testing program, identifying 500+ failure points to enhance system resilience and user experience.</li>
              <li>Optimized Linux systems, increasing performance by 30%, which reduced testing downtime and enhanced overall test efficiency.</li>
              <li>Developed and maintained API testing frameworks with Postman, boosting the reliability and accuracy of backend service validation.</li>
              <li>Integrated Appium automated tests into Jenkins CI/CD pipelines, accelerating regression testing and enabling early defect identification.</li>
              <li>Managed cloud infrastructure on AWS/GCP, optimizing resources for better performance and integration with QA workflows.</li>
              <li>Streamlined communication between QA and development teams, reducing critical bug resolution times by 20%.</li>
              <li>Orchestrated automated test runs in Jenkins, improving test coverage and speeding up the feedback loop between QA and development.</li>
              <li>Stack: JavaScript (React); Express.js; Node.js; Linux (Ubuntu); MongoDB; AWS</li>
              </ul>
            </p>
            <p>
              <span className="js-texts">
                <strong>IT Support Engineer</strong>
                <br />
                Qureez, Inc, [10/2021] – [1/2022]
                <br />
                Full-Time
              </span>
              <ul>
              <li>Achieved 90% first-call resolution for complex Linux server issues, optimizing system performance.</li>
              <li>Automated server maintenance tasks, reducing manual workload by 40% and minimizing system downtime.</li>
              <li>Enhanced server response times by 30% through effective troubleshooting and performance tuning.</li>
              <li>Provided clear guidance to users, boosting satisfaction scores and reducing repeat inquiries.</li>
              <li>Trained support team members in Linux and server troubleshooting, building a skilled, self-sufficient team.</li>
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
                  Introduced code review practices that improved code quality
                  and reduced bugs by 15%.
                </li>
                <li>
                  Led a successful migration to React, improving maintainability
                  and developer productivity.
                </li>
              </ul>
            </p>
          </div>
          <div className="experience-block">
            <p>
              <span className="js-texts">
                <strong className="title">Skills</strong>
                <br></br>
                <br></br>
              </span>
              <ul>
                <li>
                  <strong>Programming Languages</strong>
                  <ul>
                    <li>Python</li>
                    <li>Java</li>
                    <li>JavaScript</li>
                    <li>SQL</li>
                  </ul>
                </li>
                <li>
                  <strong>Frameworks and Libraries</strong>
                  <ul>
                    <li>React</li>
                    <li>Node.js</li>
                    <li>Spring Boot</li>
                  </ul>
                </li>
                <li>
                  <strong>Databases</strong>
                  <ul>
                    <li>MySQL</li>
                    <li>MongoDB</li>
                  </ul>
                </li>
                <li>
                  <strong>Tools and Platforms</strong>
                  <ul>
                    <li>Git</li>
                    <li>AWS</li>
                    <li>Jenkins</li>
                  </ul>
                </li>
                <li>
                  <strong>Other Technical Skills</strong>
                  <ul>
                    <li>Agile Methodologies</li>
                    <li>Test-Driven Development (TDD)</li>
                    <li>CI/CD Pipelines</li>
                    <li>RESTful APIs</li>
                    <li>Microservices Architecture</li>
                  </ul>
                </li>
              </ul>
            </p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Experience;
