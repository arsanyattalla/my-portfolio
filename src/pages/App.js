import React, { useEffect, useState } from "react";
import Globe from "react-globe.gl";
import { Menu } from "../utils/menu.js";
import profileImg from "../images/linkedin1.png";
import githubImg from "../images/github.jpg";
import Stack from "react-bootstrap/Stack";
import "../styles/animation.css";
import ShootingStarsBackground from "../utils/shootingStars.js"

function App() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);
  
  return (
    <div>
      <div className="shooting-stars">
  <div className="shooting-star"></div>
  <div className="shooting-star"></div>
  <div className="shooting-star"></div>
  <div className="shooting-star"></div>
  <div className="shooting-star"></div>
</div>

      <div className='background-image' >
      <header className={`${animate ? "animat" : ""}`}>
        <div className="title">
          <img
            className="rotating-earth"
            src="https://upload.wikimedia.org/wikipedia/commons/7/7f/Rotating_earth_animated_transparent.gif"
            alt="Rotating Earth"
          />

          <h1 className="title-text">Welcome to Arsany's Portfolio</h1>
          <div classname="texts">
            <p>Software Engineer</p>
          </div>
        </div>
        <div>
          <Menu />
        </div>

        <div className="buttonss" >
          <a
            href="https://www.linkedin.com/in/arsany-attalla-1330531b1/"
            target="_blank"
            class="linkedin-button"
          >
            <img src={profileImg} alt="LinkedIn Logo" />
          </a>
          <a
            href="https://github.com/arsanyattalla"
            target="_blank"
            class="social-button"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
              alt="GitHub Logo"
            />
          </a>
        </div>
      </header>
      </div>
    </div>
  );
}

export default App;
