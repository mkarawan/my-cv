import React, { useState } from "react";
import ExpItem from "./ExpItem";
import "./Exp.css";

const Experience: React.FC = () => {
  return (
    <section className="experience" id="experience">
      <h1 className="section-name">Experience</h1>
      <div className="exp-timeline">
        <ExpItem
          jobName="Front-end Developer Intership"
          date="2023"
          description="During my internship, I dived into JavaScript,
           TypeScript, and React, starting from the basics. My main goal
            was to create a Progressive Web App (PWA) to make handling customer 
            interactions more efficient. This mobile app allowed us to keep
             track of customer inquiries, monitor conversation durations,
              and simplify billing procedures. Throughout the internship,
              I gained insights into PWAs and learned the fundamentals of 
              React, all while improving my teamwork skills by working 
              alongside other developers."
          show={true}
        />
        <ExpItem
          jobName="Customer Advisor"
          date="2022"
          description="I maintained the optician's appearance 
        and offered expert guidance for frame, glasses, and contact lens selection."
          show={false}
        />
        <ExpItem
          jobName="Customer Advisor"
          date="2021"
          description="I provided professional assistance in assortment selection and 
        strived to increase revenue in my section of the store."
          show={false}
        />
      </div>
    </section>
  );
};
export default Experience;
