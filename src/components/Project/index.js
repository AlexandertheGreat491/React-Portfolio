// imports react
import React from "react";

// imports the title images for each project
// imports the image for the Movie Nerds app
import movieNerds from "../../assets/projects/Movie_Nerds.jpg";

// imports the image for the Julia's Children app
import juliasChildren from "../../assets/projects/Julias_Children_Screenshot_updated.jpg";

// imports the image for the Weather Dashboard app
import weatherDashbord from "../../assets/projects/Weather Dashboard.jpg";

// imports the image for the Social-Network-API
import socialNetwork from "../../assets/projects/Social-Network-API.jpg";

// imports the image for the PWA-Text-Editor app
import textEditor from "../../assets/projects/app_screenshot.jpg";

// imports the image for the E-Commerce-Back-end
import eCommerce from "../../assets/projects/E_Commerce_Backend.jpg";

// imports the GitHub icon
import {FaGithub} from 'react-icons/fa';

function Project() {
  // six projects
  const projects = [
    {
      name: "Movie Nerds",
      imgsrc: movieNerds,
      link: "https://alexanderthegreat491.github.io/solid-octo-funicular",
      repo: "https://github.com/AlexandertheGreat491/solid-octo-funicular.git",
    },
    {
      name: "Julia's Children",
      imgsrc: juliasChildren,
      link: "https://arcane-brushlands-08991.herokuapp.com/",
      repo: "https://github.com/AlexandertheGreat491/Julias_Children.git",
    },
    {
      name: "Weather Dashboard",
      imgsrc: weatherDashbord,
      link: "https://alexanderthegreat491.github.io/furry-octo-succotash/",
      repo: "https://github.com/AlexandertheGreat491/furry-octo-succotash.git",
    },
    {
      name: "Social-Network-API",
      imgsrc: socialNetwork,
      link: "https://vimeo.com/743245394",
      repo: "https://github.com/AlexandertheGreat491/Social-Network-API.git",
    },
    {
      name: "PWA-Text-Editor",
      imgsrc: textEditor,
      link: "https://nameless-dawn-90589.herokuapp.com/",
      repo: "https://github.com/AlexandertheGreat491/PWA-Text-Editor.git",
    },
    {
      name: "E-Commerce-Back-End",
      imgsrc: eCommerce,
      link: "https://vimeo.com/732172741",
      repo: "https://github.com/AlexandertheGreat491/E-Commerce-Back-End.git",
    },
  ];

  return (
    <div>
      <h2 id="six" className="m-4">
        Projects
      </h2>
      <div id="projects">
        {projects.map((project) => (
          <div key={project.name}>
            <div
              className="card mt-5 container align-items-center"
              style={{ backgroundImage: `url(${project.imgsrc})`, width: '18.75em', height: '25em' }} 
            >
              <a className="ml-5 mr-5 mb-5" href={project.link}>
                {project.name}
              </a>
              <a style={{width:'30%', height:'30%'}} href={project.repo}>
                <FaGithub/>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;

// FaGithub icon found at https://react-icons.github.io/react-icons/icons?name=fa