import React, { useState, useEffect } from "react";
import "./Skills.css";
import { IconContext } from "react-icons";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { BsGit } from "react-icons/bs";
import { SiPython } from "react-icons/si";
import { SiDjango } from "react-icons/si";
import { SiSass } from "react-icons/si";

const Skills: React.FC = () => {
  const [showMore, setShowMore] = useState<boolean>(false);
  const [layout, setLayout] = useState<boolean>(false);
  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  useEffect(() => {
    const checkScreenWidth = () =>{
      setLayout(window.innerWidth > 768);
    }
    window.addEventListener("resize", checkScreenWidth);
    checkScreenWidth();
    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, []);

  return (
    <div className="skills-background">
      <section className="skills" id="skills">
        <h1 className="section-name">Skills</h1>
        <div className="grid">
          <IconContext.Provider value={{ color: "white", size: "70px" }}>
            <div>
              <SiHtml5 />
              <p>HTML5</p>
            </div>
          </IconContext.Provider>
          <IconContext.Provider value={{ color: "white", size: "70px" }}>
            <div>
              <SiCss3 />
              <p>CSS3</p>
            </div>
          </IconContext.Provider>{" "}
          <IconContext.Provider value={{ color: "white", size: "70px" }}>
            <div>
              <SiReact />
              <p>React</p>
            </div>
          </IconContext.Provider>
          <IconContext.Provider value={{ color: "white", size: "70px" }}>
            <div>
              <SiTypescript />
              <p>Typescript</p>
            </div>
          </IconContext.Provider>
          {layout && (
            <>
              <IconContext.Provider value={{ color: "white", size: "70px" }}>
                <div>
                  <BsGit />
                  <p>Git</p>
                </div>
              </IconContext.Provider>
              <IconContext.Provider value={{ color: "white", size: "70px" }}>
                <div>
                  <SiPython />
                  <p>Python</p>
                </div>
              </IconContext.Provider>
              <IconContext.Provider value={{ color: "white", size: "70px" }}>
                <div>
                  <SiDjango />
                  <p>Django</p>
                </div>
              </IconContext.Provider>
              <IconContext.Provider value={{ color: "white", size: "70px" }}>
                <div>
                  <SiSass />
                  <p>Sass</p>
                </div>
              </IconContext.Provider>
            </>
          )}
        </div>
        {!showMore && (
          <button type="button" onClick={handleShowMore} className="button">
            More
          </button>
        )}
        {showMore && (
          <>
            <div className="grid grid-more">
              <IconContext.Provider value={{ color: "white", size: "70px" }}>
                <div>
                  <BsGit />
                  <p>Git</p>
                </div>
              </IconContext.Provider>
              <IconContext.Provider value={{ color: "white", size: "70px" }}>
                <div>
                  <SiPython />
                  <p>Python</p>
                </div>
              </IconContext.Provider>
              <IconContext.Provider value={{ color: "white", size: "70px" }}>
                <div>
                  <SiDjango />
                  <p>Django</p>
                </div>
              </IconContext.Provider>
              <IconContext.Provider value={{ color: "white", size: "70px" }}>
                <div>
                  <SiSass />
                  <p>Sass</p>
                </div>
              </IconContext.Provider>
            </div>

            <button className="button" type="button" onClick={handleShowMore}>
              Less
            </button>
          </>
        )}
      </section>
    </div>
  );
};
export default Skills;
