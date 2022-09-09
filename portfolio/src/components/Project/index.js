import React from "react";

const Project = ({ project }) => {
  const { name, imgsrc, link, repo } = project;

  return (
    <div key={name}>
      <p className="project-title">
        {name} | <a href={repo}>GitHub</a> |{" "}
        <a href={link}>View Project</a>
      </p>
      <img
        className="project-img"
        src={require(`../../assets/projects/${imgsrc}`)}
        alt={name}
      />
    </div>
  );
};

export default Project;
