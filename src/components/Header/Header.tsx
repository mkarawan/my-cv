import React from "react";
import "./Header.css";
import { IconContext } from "react-icons";
import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { FaFileDownload } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";

const Header: React.FC = () => {
  return (
    <div className="background">
      <section className="header">
        <div className="name">
          <h1 className="my-name">Monika </h1>
          <h1 className="my-name">Karawan</h1>
        </div>
        <p>Computer Science Student</p>
        <ul>
          <li>
            <a href="https://github.com/mkarawan">
              <IconContext.Provider value={{ color: "white", size: "30px" }}>
                <div>
                  <SiGithub />
                </div>
              </IconContext.Provider>
              <p>Github</p>
            </a>
          </li>
          <li>
          <a href="https://github.com/mkarawan">

            <IconContext.Provider value={{ color: "white", size: "30px" }}>
              <div>
                <SiLinkedin />
              </div>
            </IconContext.Provider>
            <p>LinkedIn</p>
            </a>
          </li>
          <li>

            <IconContext.Provider value={{ color: "white", size: "30px" }}>
              <div>
                <FaFileDownload />
              </div>
            </IconContext.Provider>
            <p>Resume</p>
          </li>
          <li>

            <IconContext.Provider value={{ color: "white", size: "30px" }}>
              <div>
                <SiMinutemailer />
              </div>
            </IconContext.Provider>
            <p>Email me</p>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Header;

// rsc
