// imports react
import React from "react";

// imports my profile picture
import profileImage from "../../assets/images/profile picture.JPG";

// imports the MERN logo
import mernLogo from "../../assets/images/MERN-LOGO.jpg";

// imports the background image
import cityImage from "../../assets/images/City2.jpg";
// reference https://www.inc.com/logan-chierotti/the-future-of-transportation-is-straight-outta-science-fiction.html

// About-Me section of the portfolio
// reference https://commons.wikimedia.org/wiki/File:MERN-logo.png

function About() {
  return (
    <article id="about" className="container">
      <section>
        <div
          id="top"
          className="col"
          style={{
            backgroundImage: `url(${cityImage})`,
            // backgroundSize: "cover",
            backgroudRepeat: "no-repeat",
            marginTop: "10px",
            height: "100%",
            margin: "10px"
          }}
        >
          <h2 id="me" className="mt-4">
            About Me
          </h2>
          <img
            id="handsome"
            src={profileImage}
            style={{ width: "20%" }}
            alt="profile"
            className="ms-4"
          />
          <div className="col" style={{ position: "relative", top: "-40px" }}>
            <h1 id="bioheader">Who am I?</h1>
            <p id="bio" className="mt-5">
              I am a new developer leveraging a background in education,
              military intelligence, and finance to provide unique perspectives
              on how people interact with technology, providing support to
              customers, and working collaboratively with team members. I
              consider myself to be an innovative problem-solver who is
              passionate about developing apps with a focus on mobile-first
              design and development and is currently completing a full-stack
              web development bootcamp through the University of Minnesota.
              <br></br>
              <img
                id="stack"
                src={mernLogo}
                alt="stack"
                style={{ width: "20%" }}
                className="mt-1 mb-2"
              />
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
