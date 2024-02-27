import React from "react";
import "./Greeting.css";
const Greeting: React.FC = () => {
  return (
    <section className="hello" data-aos="fade-up" data-aos-delay="600">
      <h1 className="section-name">Hello</h1>
      <p>
      I'm currently in my third year of studies, pursuing a degree in Computer Engineering. 
      I have a genuine interest in design and enjoy 
      discovering new things. 
      I am genuinely passionate about coding, and it is my aspiration to become a proficient programmer. 
      I'm eager to continue my learning journey, work on exciting projects,
       and contribute to the world of software development.
      </p>
    </section>
  );
};
export default Greeting;
