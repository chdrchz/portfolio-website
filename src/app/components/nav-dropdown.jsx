import Link from "next/link";
import React, { useState } from "react";

const Dropdown = () => {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [gradientPosition, setGradientPosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e, index) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setHoveredLink(index);
    setGradientPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setHoveredLink(null);
  };

  const links = [
    { text: "ABOUT ME", href: "#about" },
    { text: "PORTFOLIO", href: "#portfolio" },
    { text: "CONTACT", href: "#contact" },
    { text: "RESUME", href: "#resume" },
  ];

  return (
    <div className="dropdown">
      {links.map((link, index) => (
        <div
          key={index}
          className="dropdown-option"
          onMouseMove={(e) => handleMouseMove(e, index)}
          onMouseLeave={handleMouseLeave}
        >
          <Link href={link.href} legacyBehavior>
            <a
              style={{
                background:
                  hoveredLink === index
                    ? `radial-gradient(circle at ${gradientPosition.x}% ${gradientPosition.y}%, rgba(233,254,255,1) 0%, rgba(255,169,171,1) 51%)`
                    : "transparent",
                color: hoveredLink === index ? "#232020" : "#FFA9AB",
                transition: "background 0.5s ease, color 0.3s ease",
                padding: "10px",
                borderRadius: "5px",
              }}
            >
              {link.text}
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Dropdown;
