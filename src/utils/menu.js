import Stack from "react-bootstrap/Stack";
import "../styles/menu.css";
import Modal from "react-modal";
import React, { useEffect, useState } from "react";


export function Menu() {
  const [loading, setLoading] = useState(false);

  const wait = (path) => {
    setLoading(true); 
    setTimeout(() => {
      setLoading(false); 
      window.location.href = path;
    }, 1000);
  };

  return (
    <div>
  
    <Stack direction="horizontal" gap={3}>
      <button
        className="p-2"
        onClick={()=>wait("/aboutme")}
      >
        About me
      </button>
      <button
        className="p-2"
        onClick={() => wait("/experience")}
      >
        Experience/Skills
      </button>
      <button 
        className="p-2"
        onClick={() => wait("/projects")}
      >Projects</button>
    </Stack>
    </div>
  );
}
export default Menu;
