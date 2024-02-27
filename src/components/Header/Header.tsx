import React, { useEffect, useState } from "react";
import "./Header.css";
import { IconContext } from "react-icons";
import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { FaFileDownload } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";

const Header: React.FC = () => {
  const [iconColor1, setIconColor1] = useState<string>("white");
  const [iconColor2, setIconColor2] = useState<string>("white");
  const [iconColor3, setIconColor3] = useState<string>("white");
  const [iconColor4, setIconColor4] = useState<string>("white");
  useEffect(() => {
    const icon1 = document.getElementById("ico1");
    const icon2 = document.getElementById("ico2");
    const icon3 = document.getElementById("ico3");
    const icon4 = document.getElementById("ico4");

    if (window.innerWidth >= 1024) {
      icon1?.addEventListener("mouseover", () => {
        setIconColor1("#FFB3F7");
      });
      icon2?.addEventListener("mouseover", () => {
        setIconColor2("#E6B6FF");
      });
      icon3?.addEventListener("mouseover", () => {
        setIconColor3("#BEB8FF");
      });
      icon4?.addEventListener("mouseover", () => {
        setIconColor4("#A9DEFF");
      });
      icon1?.addEventListener("mouseleave", () => {
        setIconColor1("white");
      });
      icon2?.addEventListener("mouseleave", () => {
        setIconColor2("white");
      });
      icon3?.addEventListener("mouseleave", () => {
        setIconColor3("white");
      });
      icon4?.addEventListener("mouseleave", () => {
        setIconColor4("white");
      });
    }
  }, []);
  return (
    <div className="background"  id="start">
      <section className="header" >
        <div className="name" data-aos="zoom-in">
          <h1 className="my-name">Monika </h1>
          <h1 className="my-name">Karawan</h1>
        </div>
        <p data-aos="fade-up" data-aos-delay='400'>Computer Science Student</p>
        <ul>
          <li id="ico1" className="icon" data-aos="fade-down" data-aos-delay='400'>
            <a href="https://github.com/mkarawan">
              <IconContext.Provider value={{ color: iconColor1, size: "30px"  }}>
                <div>
                  <SiGithub  className="icons" title="https://github.com/mkarawan"/>
                </div>
              </IconContext.Provider>
              <p>Github</p>
            </a>
          </li>
          <li className="icon" id="ico2" data-aos="fade-down" data-aos-delay='450'>
            <a href="https://www.linkedin.com/in/mkarawan/">
              <IconContext.Provider value={{ color: iconColor2, size: "30px" }}>
                <div>
                  <SiLinkedin className="icons" title="https://www.linkedin.com/in/mkarawan/"/>
                </div>
              </IconContext.Provider>
              <p>LinkedIn</p>
            </a>
          </li>
          <li className="icon" id="ico3"data-aos="fade-down" data-aos-delay='500'>
            <IconContext.Provider value={{ color: iconColor3, size: "30px" }}>
              <div>
                <FaFileDownload className="icons" title="Download resume"/>
              </div>
            </IconContext.Provider>
            <p>Resume</p>
          </li>
          <li className="icon" id="ico4"data-aos="fade-down" data-aos-delay='550'>
            <IconContext.Provider value={{ color: iconColor4, size: "30px" }}>
              <div>
                <SiMinutemailer className="icons" title="Email me"/>
              </div>
            </IconContext.Provider>
            <p>Email</p>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Header;


