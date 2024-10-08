import Link from "next/link";
import React, { useState } from "react";

const ProjectsDropdown = ({ onProjectHover }) => {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [gradientPosition, setGradientPosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e, index, linkText) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setHoveredLink(index);
    setGradientPosition({ x, y });
    // Pass hovered project to parent component
    onProjectHover(linkText);
  };

  const handleMouseLeave = () => {
    setHoveredLink(null);
    onProjectHover(null); // Clear the hovered project when the mouse leaves
  };

  // Array of projects with corresponding GitHub URLs
  const links = [
    { 
      name: "HOBBY HOP", 
      description: "Is a social media platform designed to help people find their passions and hobbies while connecting with friends and community through swipe matching, user events, and classes.",
      githubUrl: "https://github.com/chdrchz/hobby-hop",
      role: "Front-End"
    },
    { 
      name: "WE ARE ABOUT TO DIE", 
      description: "Is a platform designed to inform and inspire individuals to take meaningful action against climate change.",
      githubUrl: "https://github.com/natewood2/we-are-about-to-die_hack_sprint",
      role: "Back-End"
    },
    { 
      name: "SIMPLE SHELL", 
      description: "Is a simple command-line shell implementation in C.",
      githubUrl: "https://github.com/chdrchz/holbertonschool-simple_shell",
      role: "Lead Developer"
    },
    { 
      name: "PRINTF",
      description: "Is a custom `printf` function for formatting strings, characters, integers, and decimals in C programming.",
      githubUrl: "https://github.com/Cody-j-w/holbertonschool-printf",
      role: "All hands on deck"
    },
  ];

  return (
    <div className="projects-dropdown">
      {links.map((link, index) => (
        <div
          key={index}
          className="projects-dropdown-option"
          onMouseMove={(e) => handleMouseMove(e, index, link)}
          onMouseLeave={handleMouseLeave}
        >
          <Link href={hoveredLink === index ? link.githubUrl : "#"} legacyBehavior>
            <a
              style={{
                background:
                  hoveredLink === index
                    ? `radial-gradient(circle at ${gradientPosition.x}% ${gradientPosition.y}%, rgba(233,254,255,1) 0%, rgba(35,32,32,1) 51%)`
                    : "transparent",
                color: hoveredLink === index ? "#FFA9AB" : "#232020",
                transition: "background 0.5s ease, color 0.3s ease",
                padding: "10px",
              }}
              target="_blank" // Open GitHub link in a new tab
              rel="noopener noreferrer" // Recommended security measure when using target="_blank"
            >
              {link.name}
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProjectsDropdown;