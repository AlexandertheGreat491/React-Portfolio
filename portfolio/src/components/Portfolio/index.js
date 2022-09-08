// imports react
import React from "react";
// imports the image for the Movie Nerds app
import movieNerds from "../../assets/images/Movie_Nerds.jpg";

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
            </div>
          </div>
          {/* Julias Children */}

        </div>
      </div>
    </article>
  );
}

export default Portfolio;