// imports react
import React from "react";

// imports my profile picture
import profileImage from "../../assets/images/profile picture.JPG";

// imports the MERN logo
import mernLogo from "../../assets/images/MERN-LOGO.jpg";

// imports the asterisk icon
import { FaAsterisk } from "react-icons/fa";

// About-Me section of the portfolio
// reference https://commons.wikimedia.org/wiki/File:MERN-logo.png

function About() {
  return (
    <article id="about" className="container mt-3">
      <section className="my-2">
        <div className="col m-2">
          <h2 id="me" className="mb-5">
            About Me
          </h2>
          <h1 id="stackheader">What's in my stack?</h1>
          <img
            id="stack"
            src={mernLogo}
            alt="stack"
            style={{ width: "20%" }}
            className="mt-1 mb-2"
          />
          <img
            id="handsome"
            src={profileImage}
            style={{ width: "20%" }}
            alt="profile"
          />
          <div
            className="col"
            style={{ position: "relative", top: "-10.9375em" }}
          >
            <h1 id="bioheader">Who am I?</h1>
            <p id="bio" className="mt-4 ms-3">
              I am a new developer leveraging a background in education,
              military intelligence, and finance to provide unique perspectives
              on how people interact with technology, providing support to
              customers, and working collaboratively with team members. I
              consider myself to be an innovative problem-solver who is
              passionate about developing apps with a focus on mobile-first
              design and development and is currently completing a full-stack
              web development bootcamp through the University of Minnesota.
              <FaAsterisk id="bioicon" size={15} className="mt-4"/>  
            </p>
            
          </div>
          
          <div
            className="col"
            style={{ position: "relative", top: "-10.9375em" }}
          >
            <p id="bio" className="mt-4 ms-3">
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
