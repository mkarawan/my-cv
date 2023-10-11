import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "./Projects.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

const Projects: React.FC = () => {
  return (
    <section className="projects" id="projects">
      <h1 className="section-name">Projects </h1>
      <Carousel showArrows={true} infiniteLoop={true} swipeable={true} emulateTouch={true}>
        <div>
          <img src="website.png" />
          <p className="project-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius,
            lorem eu mollis elementum, arcu lacus pretium ipsum, vel auctor
            tellus sapien eu ex. Proin pharet
          </p>
        </div>
        <div>
          <img src="website2.jpg" />
          <p className="project-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius,
            lorem eu mollis elementum, arcu lacus pretium ipsum, vel auctor
            tellus sapien eu ex. Proin pharet
          </p>
        </div>
        <div>
          <img src="website3.jpeg" />
          <p className="project-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius,
            lorem eu mollis elementum, arcu lacus pretium ipsum, vel auctor
            tellus sapien eu ex. Proin pharet
          </p>
        </div>
      </Carousel>
      <button className="up-btn"><a href="#start">UP</a></button>

    </section>
  );
};
export default Projects;
