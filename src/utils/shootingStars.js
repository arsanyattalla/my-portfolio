import React from "react";
import "../styles/App.css";

function ShootingStarsBackground() {
  const stars = Array.from({ length: 20 }).map((_, index) => {
    const delay = `${Math.random() * 5}s`;  // Random delay to stagger appearances
    const startX = `${Math.random() * 100}vw`; // Random starting horizontal position
    const startY = `${Math.random() * 100}vh`; // Random starting vertical position
    const directionX = Math.random() < 0.5 ? 1 : -1; // Random direction for x-axis
    const directionY = Math.random() < 0.5 ? 1 : -1; // Random direction for y-axis

    return (
      <div
        key={index}
        className="shooting-star"
        style={{
          top: startY,
          left: startX,
          animationDelay: delay,
          "--x": directionX,
          "--y": directionY,
        }}
      ></div>
    );
  });

  return <div className="shooting-stars">{stars}</div>;
}

export default ShootingStarsBackground;
