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
              I am a new developer leveraging a background in education, military
              intelligence, and finance to provide unique perspectives on how
              people interact with technology, providing support to
              customers, and working collaboratively with team members. I consider myself to be an innovative problem-solver who is passionate about
              developing apps with a focus on mobile-first design and
              development and is currently completing a full-stack web
              development bootcamp through the University of Minnesota.
              My strengths are in creativity, teamwork, building projects,
              customer service, and research as a result of spending four years in Naval intelligence, working collaboratively on a team and witnessing how people of all ages interact with technology while teaching in the classroom, and honing my research skills in my post-secondary education and in my learning of new coding languages.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}

export default About;
