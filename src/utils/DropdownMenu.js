import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import "../styles/DropdownMenu.css"; // Add your styles here
import Projects from "../pages/projects";
import Skills from "../pages/skills";
import AboutMe from "../pages/aboutMe";
import Experience from "../pages/experience";

const DropdownMenu = ({ placeholder, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const dropdownRef = useRef(null);
 const aboutMeRef = useRef(null);
  const homeRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
   

    if (option.action) {
      option.action() 
    } 

    setIsOpen(false);

    
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div>
      {!selectedOption?.component ? (
        <div className={`dropdown`} ref={dropdownRef}>
          <button className="p-3" onClick={handleToggle}>
            {selectedOption ? selectedOption.label : placeholder}
            <div className="dropdown-arrow"></div>
          </button>
          {isOpen && (
            <ul className={`dropdown-menu ${isOpen ? "open" : ""}`}>
              {options.map((option, index) => (
                <li
                  key={index}
                  className="dropdown-item"
                  onClick={() => handleOptionClick(option)}
                >
                  {option.label}
                </li>
              ))}
            </ul>
          )}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default DropdownMenu;
