// imports react
import React from "react";
// imports my profile picture
import profileImage from "../../assets/images/profile picture.JPG";

// About-Me section of the portfolio
function About() {
  return (
    <article id="about"  className="container">
      <section className="row">
        <div className="col m-3">
          <h2 id="me">About Me</h2>
          <img src={profileImage} style={{ width: "20%" }} alt="profile" />
          <div className="col mt-4 border border-light border-4 rounded">
            <p id="bio" className="p-1 m-2">
              A new developer leveraging a background in education, military
              intelligence, and finance to provide unique perspectives on how
              people interact with technology and in providing support to
              customers. Innovative problem-solver who is passionate about
              developing apps with a focus on mobile-first design and
              development and is currently completing a full-stack web
              development bootcamp through the University of Minnesota.
              Strengths in creativity, teamwork, and building projects, and
              customer service.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}

export default About;
