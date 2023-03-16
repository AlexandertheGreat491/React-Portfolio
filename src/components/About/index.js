// imports react
import React from "react";

// imports my profile picture
import profileImage from "../../assets/images/profile picture.JPG";

// About-Me section of the portfolio

// imports the Earlybirds icon
import { FaEarlybirds } from "react-icons/fa";

function About() {
  return (
    <article
      id="about"
      className="container"
      style={{ width: "60%", height: "60%" }}
    >
      <section>
        <div className="col">
          <h2 id="me" className="mt-4">
            About Me
          </h2>

          <div
            className="col ms-5"
            style={{ position: "relative", height: "45%" }}
          >
            <img
              id="handsome"
              src={profileImage}
              style={{ width: "25%", height: "25%" }}
              alt="profile"
              className="mt-3"
            />
            <p id="bio" className="mt-5">
              I am a new developer leveraging a background in education,
              military intelligence, and finance to provide unique perspectives
              on how people interact with technology, providing support to
              customers, and working collaboratively with team members. I
              consider myself to be an innovative problem-solver who is
              passionate about developing apps with a focus on mobile-first
              design and development and is currently completing a full-stack
              web development bootcamp through the University of Minnesota.
              <FaEarlybirds
                id="bird"
                className="align-self-center m-2"
                style={{ width: "15%", height: "15%" }}
              ></FaEarlybirds>
              My strengths are in creativity, teamwork, building projects,
              customer service, and research as a result of spending four years
              in Naval intelligence, working collaboratively on a team and
              witnessing how people of all ages interact with technology while
              teaching in the classroom, and honing my research skills in my
              post-secondary education and in my learning of new coding
              languages.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}

export default About;
