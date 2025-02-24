import React, { useEffect, useState } from "react";
import "../styles/App.css";
import "../styles/menu.css";
import "../styles/Skills.css";
import profileImg from "../images/5906160.png";

function Skills() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const skills = [
    { skill: "JavaScript", image: "https://www.citypng.com/public/uploads/preview/js-javascript-round-logo-icon-png-7017516947717339mnyf7eumy.png" },
    { skill: "Python", image: "https://image.similarpng.com/very-thumbnail/2021/12/Python-programming-logo-on-transparent-background-PNG.png" },
    { skill: "Java", image: "https://e7.pngegg.com/pngimages/405/878/png-clipart-java-logo-java-runtime-environment-computer-icons-java-platform-standard-edition-java-miscellaneous-text-thumbnail.png" },
    { skill: "HTML", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmArE5CqNcP0VLcoElm9sTeWgl3XEB0gNIzxSmiSLd_lnoMbSTOyH4DHXPDIUqVxHn2Vs&usqp=CAU" },
    { skill: "SQL", image: "https://e7.pngegg.com/pngimages/167/148/png-clipart-microsoft-azure-sql-database-microsoft-sql-server-database-blue-text-thumbnail.png" },
  ];

  const frameworks = [
    { skill: "React", image: "https://cdn.iconscout.com/icon/free/png-512/free-react-logo-icon-download-in-svg-png-gif-file-formats--company-brand-world-logos-vol-4-pack-icons-282599.png?f=webp&w=256" },
    { skill: "Node.JS", image: "https://cdn.iconscout.com/icon/free/png-512/free-node-js-logo-icon-download-in-svg-png-gif-file-formats--nodejs-programming-language-pack-logos-icons-1174925.png?f=webp&w=256" },
    { skill: "Selenium", image: "https://e7.pngegg.com/pngimages/175/494/png-clipart-selenium-computer-icons-test-automation-software-testing-selenium-angle-text.png" },
    { skill: "ExpressJS", image: "https://e7.pngegg.com/pngimages/925/447/png-clipart-express-js-node-js-javascript-mongodb-node-js-text-trademark-thumbnail.png" },
    { skill: "TestNG", image: "https://e7.pngegg.com/pngimages/640/776/png-clipart-testng-logo-software-testing-software-framework-computer-icons-automation-testing-angle-text-thumbnail.png" },
  ];

  const databases = [
    { skill: "MongoDB", image: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-2.svg" },
    { skill: "MySQL", image: "https://e7.pngegg.com/pngimages/747/798/png-clipart-mysql-mysql-thumbnail.png" },
    { skill: "Redis", image: "https://e7.pngegg.com/pngimages/66/424/png-clipart-redis-distributed-cache-database-caching-wrapper-angle-logo.png" },
  ];

  return (
    <div className={`skills-page ${animate ? "animate-fadeIn" : ""}`}>
      {/* Floating Profile Image */}
      <h1 className="skills-header">Skills</h1>

      <div className="profile-image-container">
        <img src={profileImg} alt="Arsany Attalla" className="profile-image" />
      </div>

      {/* Skills Section */}
      <div className="skills-content">
        
        <div className="skills-section">
          <h2>Programming Languages</h2>
          <div className="skills-grid">
            {skills.map((item, index) => (
              <div key={index} className="skill-card">
                <img src={item.image} alt={item.skill} className="skill-image" />
                <p className="skill-name">{item.skill}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-section">
          <h2>Frameworks & Libraries</h2>
          <div className="skills-grid">
            {frameworks.map((item, index) => (
              <div key={index} className="skill-card">
                <img src={item.image} alt={item.skill} className="skill-image" />
                <p className="skill-name">{item.skill}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-section">
          <h2>Databases</h2>
          <div className="skills-grid">
            {databases.map((item, index) => (
              <div key={index} className="skill-card">
                <img src={item.image} alt={item.skill} className="skill-image" />
                <p className="skill-name">{item.skill}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-section">
          <h2>Other Technical Skills</h2>
          <ul className="skills-list">
            <li>Git</li>
            <li>AWS</li>
            <li>Jenkins</li>
            <li>Agile Methodologies</li>
            <li>CI/CD Pipelines</li>
            <li>System Administration</li>
            <li>Networking</li>
            <li>Linux</li>
            <li>Shell Scripting</li>
            <li>Technical Troubleshooting</li>
            <li>Web Development</li>

          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
