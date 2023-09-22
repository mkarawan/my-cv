import React, { useState } from "react";
import ExpItem from "./ExpItem";
import "./Exp.css";

const Experience: React.FC = () => {
  return (
    <section className="experience" id="experience">
      <h1 className="section-name">Experience</h1>
      <section className="exp-timeline">
      <ExpItem
        jobName="Front-end Developer Intership"
        date="2023"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Vivamus erat tortor, tincidunt et venenatis eget, malesuada vel velit. 
        Vestibulum vitae tortor quis urna placerat convallis id non est. Praesent condimentum 
        in ipsum vitae viverra. Nunc vitae arcu nec justo accumsan fermentum. Morbi sed lacus 
        et nibh porta pretium. Phasellus hendrerit suscipit tincidunt."
      />
      <ExpItem
        jobName="Customer Advisor"
        date="2022"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Vivamus erat tortor, tincidunt et venenatis eget, malesuada vel velit. 
        Vestibulum vitae tortor quis urna placerat convallis id non est. Praesent condimentum 
        in ipsum vitae viverra. Nunc vitae arcu nec justo accumsan fermentum. Morbi sed lacus 
        et nibh porta pretium. Phasellus hendrerit suscipit tincidunt."
      />
      <ExpItem
        jobName="Customer Advisor"
        date="2021"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Vivamus erat tortor, tincidunt et venenatis eget, malesuada vel velit. 
        Vestibulum vitae tortor quis urna placerat convallis id non est. Praesent condimentum 
        in ipsum vitae viverra. Nunc vitae arcu nec justo accumsan fermentum. Morbi sed lacus 
        et nibh porta pretium. Phasellus hendrerit suscipit tincidunt."
      />
      </section>
    </section>
  );
};
export default Experience;
