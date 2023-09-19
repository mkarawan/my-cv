import React from "react";
import "./Header.css";
import { IconContext } from "react-icons";
import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { FaFileDownload } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";

const Header: React.FC = () => {
  return (
    <>
      <section className="header">
        <div className="name">
          <h1 className="my-name">Monika </h1>
          <h1 className="my-name">Karawan</h1>
        </div>
        <p>Computer Science Student</p>
        <ul>
          <li>
            <IconContext.Provider value={{ color: "black", size: "22px" }}>
              <div>
                <SiGithub />
              </div>
            </IconContext.Provider>
            <p>Github</p>
          </li>
          <li>
            <IconContext.Provider value={{ color: "black", size: "22px" }}>
              <div>
                <SiLinkedin />
              </div>
            </IconContext.Provider>
            <p>LinkedIn</p>
          </li>
          <li>
            <IconContext.Provider value={{ color: "black", size: "22px" }}>
              <div>
                <FaFileDownload />
              </div>
            </IconContext.Provider>
            <p>Resume</p>
          </li>
          <li>
            <IconContext.Provider value={{ color: "black", size: "22px" }}>
              <div>
                <SiMinutemailer />
              </div>
            </IconContext.Provider>
            <p>Email me</p>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Header;

// rsc
