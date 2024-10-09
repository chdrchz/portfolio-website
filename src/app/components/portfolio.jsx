import React, { useState } from "react";
import ProjectsDropdown from "./projects-dropdown";
import "../../../styles/portfolio.css";

export default function Portfolio() {
  const [hoveredProject, setHoveredProject] = useState(null);

  const handleProjectHover = (project) => {
    setHoveredProject(project);
  };

  return (
    <div>
      <div className="portfolio-heading" id="portfolio">
        <h2>portfolio</h2>
      </div>
      <div className="portfolio">
        <div className="portfolio-description">
          <h2>
            {hoveredProject
              ? hoveredProject.name // Display project name on hover
              : "hover over a project to learn more, or click to go to each project's GitHub."}
          </h2>
          {hoveredProject && (
            <div>
              <p>{hoveredProject.description}</p>
              <p>Role: {hoveredProject.role}</p>
            </div>
          )}
        </div>
        <ProjectsDropdown onProjectHover={handleProjectHover} />
      </div>
    </div>
  );
}
