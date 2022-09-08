// imports react
import React from "react";
// imports the image for the Movie Nerds app
import movieNerds from "../../assets/images/Movie_Nerds.jpg";
// imports the image for the Julia's Children app
import juliasChildren from "../../assets/images/Julias_Children_Screenshot_updated.jpg";

function Portfolio() {
  // six projects
  return (
    <article className="container">
      {/* Movie Nerds */}
      <div className="row">
        <div>
          <div className="row d-inline-flex">
            <div className="card border border-dark border-3 rounded mb-3 col align-items-center">
              <h2 className="card-header bg-dark text-light d-flex-inline">
                Movie Nerds
              </h2>
              <a href="https://alexanderthegreat491.github.io/solid-octo-funicular">
                <img src={movieNerds} style={{ width: "20%" }} alt="nerds" />
              </a>
              <a href="https://github.com/AlexandertheGreat491/solid-octo-funicular.git">
                Movie Nerds Repository
              </a>
            </div>
          </div>
          {/* Julias Children */}
          <div className="row d-inline-flex">
            <div className="card border border-dark border-3 rounded mb-3 align-items-center col">
              <h2 className="card-header bg-dark text-light d-flex-inline">
                Julia's Children
              </h2>
              <a href="https://arcane-brushlands-08991.herokuapp.com/">
                <img
                  src={juliasChildren}
                  style={{ width: "20%" }}
                  alt="julia"
                />
              </a>
              <a href="https://github.com/AlexandertheGreat491/Julias_Children.git">Julia's Children Repository</a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Portfolio;
