import React, { useEffect, useState } from "react";
import "../styles/App.css";
import "../styles/menu.css";
import "../styles/Skills.css"
import profileImg from "../images/5906160.png";
import { FaHome } from "react-icons/fa";
import DropdownMenu from "../utils/DropdownMenu";

function Skills() {
  const [animate, setAnimate] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleMenuSelection = (component) => {
    setSelectedComponent(component);
  };
  useEffect(() => {
    setAnimate(true);
  }, []);

  const skills = [
    {
      skill: "Javascript",
      image:
        "https://www.citypng.com/public/uploads/preview/js-javascript-round-logo-icon-png-7017516947717339mnyf7eumy.png",
    },
    {
      skill: "Python",
      image:
        "https://image.similarpng.com/very-thumbnail/2021/12/Python-programming-logo-on-transparent-background-PNG.png",
    },
    {
      skill: "Java",
      image:
        "https://banner2.cleanpng.com/20180404/lxe/kisspng-java-class-file-java-platform-standard-edition-ja-coffee-jar-5ac598fd88a730.3981502415228991975597.jpg",
    },
    {
      skill: "HTML",
      image:
        "https://banner2.cleanpng.com/20190125/wpj/kisspng-computer-icons-html5-scalable-vector-graphics-port-socialpack-chocolate-icon-1713904721396.webp",
    },
    {
      skill: "SQL",
      image: "https://banner2.cleanpng.com/20180330/zle/avid709mg.webp",
    },
  ];

  const frameworks = [
    {
      skill: "React",
      image:
        "https://cdn.iconscout.com/icon/free/png-512/free-react-logo-icon-download-in-svg-png-gif-file-formats--company-brand-world-logos-vol-4-pack-icons-282599.png?f=webp&w=256",
    },
    {
      skill: "Node.JS",
      image:
        "https://cdn.iconscout.com/icon/free/png-512/free-node-js-logo-icon-download-in-svg-png-gif-file-formats--nodejs-programming-language-pack-logos-icons-1174925.png?f=webp&w=256",
    },
    {
      skill: "Selenium",
      image:
        "https://banner2.cleanpng.com/20190320/rpt/kisspng-selenium-test-automation-software-testing-computer-1713900348299.webp",
    },
    {
      skill: "ExpressJS",
      image:
        "http://www.jonclawson.com/sites/jonclawson.com/files/imagecache/small/expressjs_logo.png",
    },
    {
      skill: "TestNG",
      image:
        "https://banner2.cleanpng.com/20180816/eej/f5e89d12b09a007df882894bf58820c4.webp",
    },
  ];

  const databases = [
    {
      skill: "MongoDB",
      image: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-2.svg",
    },
    {
      skill: "MySQL",
      image: "https://banner2.cleanpng.com/20180614/bgj/aa7ffc9id.webp",
    },
    {
      skill: "Redis",
      image: "https://banner2.cleanpng.com/20180331/xwe/avh53unx5.webp",
    },
  ];

  return (
    <div className="background-images">
      <header>
      <DropdownMenu
          
          placeholder="Skills"
          onOptionSelected={handleMenuSelection}
        />
        {!selectedComponent && (
            <>
        <div className={`about-container ${animate ? "animate-slideIn" : ""}`}>
          <p className="header">Skills</p>
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
                <br></br>
                <br></br>
              </span>
              <ul>
                <li>
                  <strong>Programming Languages</strong>
                  <div className="icons-container">
                    {skills.map((skill, index) => {
                      return (
                        <div key={index} className="icons">
                          <img src={skill.image}></img>
                          <p>{skill.skill}</p>
                        </div>
                      );
                    })}
                  </div>
                </li>
                <li>
                  <strong>Frameworks and Libraries</strong>
                  <div className="icons-container">
                    {frameworks.map((skill, index) => {
                      return (
                        <div className="icons">
                          <img src={skill.image}></img>
                          <p>{skill.skill}</p>
                        </div>
                      );
                    })}
                  </div>
                </li>
                <li>
                  <strong>Databases</strong>
                  <div className="icons-container">
                    {databases.map((database, index) => {
                      return (
                        <div className="icons">
                          <img src={database.image}></img>
                          <p>{database.skill}</p>
                        </div>
                      );
                    })}
                  </div>
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
        </>
        )}
      </header>
    </div>
  );
}

export default Skills;
