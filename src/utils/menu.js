import Stack from "react-bootstrap/Stack";
import React from "react";
import "../styles/menu.css";
import Modal from "react-modal";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export function Menu() {
  // const navigateTo = (path) => {
  //   fetch(`/api${path}`)
  //     .then(response => {
  //       if (response.redirected) {
  //         window.location.href = response.url;
  //       }
  //     })
  //     .catch(error => console.error('Error:', error));
  // };
  return (
    <Stack direction="horizontal" gap={3}>
      <button
        className="p-2"
        onClick={() => (window.location.href = "/aboutme")}
      >
        About me
      </button>
      <button
        className="p-2"
        onClick={() => (window.location.href = "/experience")}
      >
        Experience
      </button>
      <button 
        className="p-2"
        onClick={() => (window.location.href = "/projects")}
      >Projects</button>
    </Stack>
  );
}
export default Menu;
