import React from "react";
import resume from "../../assets/resume.pdf";

function Resume() {
  return (
    <section>
      <div className="words">
        <a download={resume} href={resume}>
          <button type="button" className="btn btn-light">
            Download Resume
          </button>
        </a>
      </div>

      <div>
        <h3>Front End Technologies</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Responsive Design</li>
          <li>Bootstrap</li>
        </ul>
      </div>

      <div>
        <h3>Back-End Technologies</h3>
        <ul>
          <li>JavaScript</li>
          <li>API's</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>SQL, Sequelize</li>
          <li>NOSQL, MongoDB</li>
        </ul>
      </div>
    </section>
  );
}

export default Resume;
