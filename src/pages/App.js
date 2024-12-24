import React, { useEffect, useState } from "react";
import { Menu } from "../utils/menu.js";
import profileImg from "../images/linkedin1.png";
import "../styles/animation.css";

function App() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div>
      <div className="background-image">
        <header className={`${animate ? "animat" : ""}`}>
       

          <div className="buttonss">
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
