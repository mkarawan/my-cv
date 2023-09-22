import React, { useState } from "react";
import "./Skills.css";
import { IconContext } from "react-icons";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { BsGit } from "react-icons/bs";
import { SiPython } from "react-icons/si";
import { SiDjango } from "react-icons/si";

const Skills: React.FC = () => {
  const [showMore, setShowMore] = useState<boolean>(false);
  const handleShowMore = () => {
    setShowMore(!showMore);
  };
  return (
    <div className="skills-background">
      <section className="skills" id="skills">
        <h1 className="section-name">Skills</h1>
        <IconContext.Provider value={{ color: "white", size: "100px" }}>
          <div>
            <SiHtml5 />
          </div>
        </IconContext.Provider>
        {/* <p>HTML</p>         */}
        <IconContext.Provider value={{ color: "white", size: "100px" }}>
          <div>
            <SiCss3 />
          </div>
        </IconContext.Provider>{" "}
        <IconContext.Provider value={{ color: "white", size: "100px" }}>
          <div>
            <SiReact />
          </div>
        </IconContext.Provider>
        {!showMore && (
          <button type="button" onClick={handleShowMore}>
            Show More
          </button>
        )}
        {showMore && (
          <>
                    <IconContext.Provider value={{ color: "white", size: "100px" }}>
          <div>
            <SiTypescript />
          </div>
        </IconContext.Provider>
        <IconContext.Provider value={{ color: "white", size: "100px" }}>
          <div>
            <BsGit />
          </div>
        </IconContext.Provider>
        <IconContext.Provider value={{ color: "white", size: "100px" }}>
          <div>
            <SiPython />
          </div>
        </IconContext.Provider>
        <IconContext.Provider value={{ color: "white", size: "100px"}}>
          <div>
            <SiDjango />
          </div>
        </IconContext.Provider>
            <button type="button" onClick={handleShowMore}>
              Show Less
            </button>
          </>
        )}
      </section>
    </div>
  );
};
export default Skills;
