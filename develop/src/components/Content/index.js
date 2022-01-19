import React from "react";
import About from "../About";
import Contact from "../Contact";
import Projects from "../Projects";
import Resume from "../Resume";

function Content({ currentCategory }) {
  const { name, description } = currentCategory;
  return (
    <section>
      {name === "About" && (
        <div className="info">
          <h4 className="info">{name}</h4>
          <h6 className="info">{description}</h6>
          <About />
        </div>
      )}

      {name === "Projects" && (
        <div className="info">
          <h4 className="info">{name}</h4>
          <h6 className="info">{description}</h6>
          <Projects />
        </div>
      )}

      {name === "Contact" && (
        <div className="info">
          <h4 className="info">{name}</h4>
          <h6 className="info">{description}</h6>
          <Contact />
        </div>
      )}

      {name === "Resume" && (
        <div className="info">
          <h4 className="info">{name}</h4>
          <h6 className="info">{description}</h6>
          <Resume />
        </div>
      )}
    </section>
  );
}

export default Content;
