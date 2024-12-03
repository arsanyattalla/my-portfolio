import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import "../styles/DropdownMenu.css"; // Add your styles here
import Projects from "../pages/projects";
import Skills from "../pages/skills";
import AboutMe from "../pages/aboutMe";
import Experience from "../pages/experience";
const DropdownMenu = ({ placeholder, className, onOptionSelected }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const dropdownRef = useRef(null);
  const options=[
    {
      label: "Home",
      onClick: () => {
        window.location.href = "/";
      },
    },
    { label: "About Me", component: <AboutMe /> },
    { label: "Experience", component: <Experience /> },
    { label: "Skills", component: <Skills /> },
    { label: "Projects", component: <Projects /> },
  ]
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    if (option.onClick) {
      option.onClick(); // Call the onClick function if it exists
    } else {
      setSelectedOption(option);
    }
    setIsOpen(false);
    if (onOptionSelected) {
        onOptionSelected(option.component || null); // Pass the component or null
      }
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
      {!selectedOption || !selectedOption.component ? (
        <div className={`dropdown ${className}`} ref={dropdownRef}>
          <button className="p-3" onClick={handleToggle}>
            {selectedOption ? selectedOption.label : placeholder}
            <span className="dropdown-arrow">{isOpen ? "▲" : "▼"}</span>
          </button>
          {isOpen && (
            <ul className="">
              {options.map((option, index) => (
                <li
                  key={index}
                  className="p-3"
                  onClick={() => handleOptionClick(option)}
                >
                  {option.label}
                </li>
              ))}
            </ul>
          )}
        </div>
      ) : (
        <div>{selectedOption.component}</div>
      )}
    </div>
  );
};



export default DropdownMenu;
