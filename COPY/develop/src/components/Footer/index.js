import React from "react";
import githubIcon from "../../assets/icons/github.png";
import twitter from '../../assets/icons/twitter.png';
import linkedin from '../../assets/icons/linkedin.png';

function Footer() {
  return (
    <footer className="container foot">
      <div className="row justify-content-center align-items-center">
        <div className="github col-1">
          <a href="https://github.com/baumerr" alt="Randals Github Page">
            <img src={githubIcon} className="icons"/>
          </a>
        </div>
        <div className="twitter col-1">
        <a href="https://twitter.com/randeezus1" alt="Randals Twitter">
            <img src={twitter} className="icons"/>
          </a>
        </div>
        <div className="linkedin col-1">
        <a href="https://www.linkedin.com/in/randy-baumer-040a27a8/" alt="Randals LinkedIn">
            <img src={linkedin} className="icons"/>
          </a>
        </div>
      </div>
      <div className="row justify-content-center">
          Made With Coffee
      </div>
    </footer>
  );
}

export default Footer;
