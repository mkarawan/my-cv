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
import { MdDevicesOther } from "react-icons/md";



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
        <h1 className="section-name" data-aos="fade-up" data-aos-duration="1000">Skills</h1>
        <div className="grid">
          <IconContext.Provider value={{ color: "white", size: "60px" }}>
            <div data-aos="fade-left" data-aos-duration="600">
              <SiHtml5 />
              <p>HTML5</p>
            </div>
          </IconContext.Provider>
          <IconContext.Provider value={{ color: "white", size: "60px" }}>
            <div data-aos="fade-left" data-aos-duration="600" data-aos-delay="100" >
              <SiCss3 />
              <p>CSS3</p>
            </div>
          </IconContext.Provider>{" "}
          <IconContext.Provider value={{ color: "white", size: "60px" }}>
            <div data-aos="fade-left" data-aos-duration="600" data-aos-delay="200">
              <SiReact />
              <p>React</p>
            </div>
          </IconContext.Provider>
          <IconContext.Provider value={{ color: "white", size: "60px" }}>
            <div data-aos="fade-left" data-aos-duration="600" >
              <SiTypescript />
              <p>Typescript</p>
            </div>
          </IconContext.Provider>
          {layout && (
            <>
              <IconContext.Provider value={{ color: "white", size: "60px" }}>
                <div data-aos="fade-left" data-aos-duration="600" data-aos-delay="100">
                  <BsGit />
                  <p>Git</p>
                </div>
              </IconContext.Provider>
              <IconContext.Provider value={{ color: "white", size: "60px" }}>
                <div data-aos="fade-left" data-aos-duration="600" data-aos-delay="200">
                  <SiPython />
                  <p>Python</p>
                </div>
              </IconContext.Provider>
              <IconContext.Provider value={{ color: "white", size: "60px" }}>
                <div data-aos="fade-left" data-aos-duration="600"  >
                  <SiDjango />
                  <p>Django</p>
                </div>
              </IconContext.Provider>
              <IconContext.Provider value={{ color: "white", size: "60px" }}>
                <div data-aos="fade-left" data-aos-duration="600" data-aos-delay="100">
                  <SiSass />
                  <p>Sass</p>
                </div>
              </IconContext.Provider>
              <IconContext.Provider value={{ color: "white", size: "60px" }}>
                <div data-aos="fade-left" data-aos-duration="600" data-aos-delay="200">
                <MdDevicesOther />

                  <p>RWD</p>
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
              <IconContext.Provider value={{ color: "white", size: "60px" }}>
                <div data-aos="fade-left" data-aos-duration="600">
                  <BsGit />
                  <p>Git</p>
                </div>
              </IconContext.Provider>
              <IconContext.Provider value={{ color: "white", size: "60px" }}>
                <div data-aos="fade-left" data-aos-duration="600">
                  <SiPython />
                  <p>Python</p>
                </div>
              </IconContext.Provider>
              <IconContext.Provider value={{ color: "white", size: "60px" }}>
                <div data-aos="fade-left" data-aos-duration="600">
                  <SiDjango />
                  <p>Django</p>
                </div>
              </IconContext.Provider>
              <IconContext.Provider value={{ color: "white", size: "60px" }}>
                <div data-aos="fade-left" data-aos-duration="600">
                  <SiSass />
                  <p>Sass</p>
                </div>
              </IconContext.Provider>
              <IconContext.Provider value={{ color: "white", size: "60px" }}>
                <div data-aos="fade-left" data-aos-duration="600">
                <MdDevicesOther />

                  <p>RWD</p>
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
