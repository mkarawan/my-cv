import React from "react";
import "./Education.css";
import { IconContext } from "react-icons";
import { MdOutlinePlace } from "react-icons/md";
import { MdOutlineSchool } from "react-icons/md";

const Education: React.FC = () => {
  return (
    <section className="education" id="education">
      <h1 className="section-name">Education</h1>
      <div className="education-grid">
      <div className="education-item">
      <h2>Computer Science</h2>
        <h4 className="spec">Mobile application engineer</h4>

        </div>
        <div className="school-info">
        <div className="date">
          <IconContext.Provider value={{ color: "#E8B0E9", size: "28px" }}>
            <div>
              <MdOutlinePlace />
            </div>
          </IconContext.Provider>
          <p>10.2020-02.2024</p>
        </div>
        <div className="place">
          <IconContext.Provider value={{ color: "#E8B0E9", size: "28px" }}>
            <div>
              <MdOutlineSchool />
            </div>
          </IconContext.Provider>
          <p>WSB Universities in Wrocław</p>
        </div>

       
      </div>



      <div className="education-item">
      <h2 className="python-dev">Python Developer Course</h2>
      </div>

      <div className="school-info">

        <div className="date">
          <IconContext.Provider value={{ color: "#E8B0E9", size: "28px" }}>
            <div>
              <MdOutlinePlace />
            </div>
          </IconContext.Provider>
        <p>02.2022 - 05.2022</p>
        </div>
        <div className="place">
          <IconContext.Provider value={{ color: "#E8B0E9", size: "28px" }}>
            <div>
              <MdOutlineSchool />
            </div>
          </IconContext.Provider>
          <p>CodersLab - IT School</p>
          </div>
        </div>

      </div>

    </section>
  );
};
export default Education;
