import React, { useState } from "react";
import Image from "next/image";
import PropTypes from "prop-types";

import "../../../styles/button.css";

import { Bodoni_Moda } from "@next/font/google";

const bodoni = Bodoni_Moda({
  weight: ["400", "700"], // Specify the weights you want to use
  subsets: ["latin"], // Specify the subsets you need
});

const Button = ({ text, icon = null, color, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [gradientPosition, setGradientPosition] = useState({ x: 50, y: 50 });

  // Update the gradient position based on mouse movement
  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setGradientPosition({ x, y });
  };

  // Define the hover styles
  const buttonStyle = {
    background: isHovered
      ? `radial-gradient(circle at ${gradientPosition.x}% ${gradientPosition.y}%, rgba(255,222,223,1) 0%, rgba(255,169,171,1) 51%)`
      : color,
    cursor: 'pointer',
    width: 'auto',
  };

  return (
    <button
      className={`${bodoni.className} button`}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      style={buttonStyle}
    >
      {icon && (
        <span className="button-icon">
          <Image src={icon} alt="Icon" />
        </span>
      )}
      {text}
    </button>
  );
};

// Define PropTypes for type checking
Button.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.node,
};

export default Button;
