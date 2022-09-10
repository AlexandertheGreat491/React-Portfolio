// imports react
import React from "react";

// imports the image of the resume Google Doc
import resumeImage from "../../assets/images/resume_screenshot.jpg";

function Resume() {
  return (
    <section id="Resume">
      <h1>Resume</h1>
      <div>
        <a href="https://docs.google.com/document/d/1R3wSiZQTD-gaosYGYLSGY6oElxLfOdagODPDBNow-64/edit?usp=sharing">
          <img src={resumeImage} style={{ width: "20%" }} alt="resume" />
        </a>
        <h2>Skills</h2>
        <ul style={{listStyle:'none'}}>
            <li>JavaScriptES6+</li>
            <li>CSS3</li>
            <li>HTML5</li>
            <li>MySQL</li>
            <li>SQLite</li>
            <li>GitHub</li>
            <li>Express</li>
            <li>Nodejs</li>
            <li>jQuery</li>
            <li>Bootstrap</li>
            <li>Materialize</li>
            <li>Microsoft Office</li>
            <li>Heroku</li>
            <li>Visual Studio Code</li>
            <li>Handlebars</li>
            <li>Tailwind</li>
            <li>Google Lighthouse</li>
            <li>Webpack</li>
            <li>React</li>
            <li>GitHub Pages</li>
        </ul>
      </div>
    </section>
  );
}

export default Resume;
