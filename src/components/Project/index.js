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
import googleBooks from "../../assets/projects/googel_books_screenshot.jpg";

// imports the image for the PWA-Text-Editor app
import textEditor from "../../assets/projects/app_screenshot.jpg";

// imports the image for the E-Commerce-Back-end
import whatsSoap from "../../assets/projects/whats-soap_screenshot.jpg";

// imports the GitHub icon
import { FaGithub } from "react-icons/fa";

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
      name: "Book-Search-Engine",
      imgsrc: googleBooks,
      link: "https://desolate-atoll-15843.herokuapp.com/",
      repo: "https://github.com/AlexandertheGreat491/Book-Search-Engine.git",
    },
    {
      name: "PWA-Text-Editor",
      imgsrc: textEditor,
      link: "https://nameless-dawn-90589.herokuapp.com/",
      repo: "https://github.com/AlexandertheGreat491/PWA-Text-Editor.git",
    },

    {
      name: "What's Soap?",
      imgsrc: whatsSoap,
      link: "https://whats-soap.herokuapp.com/",
      repo: "https://github.com/AlexandertheGreat491/whats_soap.git",
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
              className="card mt-3 mb-2 container"
              style={{
                backgroundImage: `url(${project.imgsrc})`,
                width: "12.5em",
                height: "12.5em",
              }}
            >
              <a
                id="link"
                className="mt-2 ms-3 justify-content-center"
                href={project.link}
              >
                {project.name}
              </a>
              <a
                className="ms-5"
                style={{ width: "30%", height: "30%" }}
                href={project.repo}
              >
                <FaGithub />
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
