import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Projects: React.FC = () => {
  return (
    <section className="projects">
      <h1>Projects </h1>
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
    </section>
  );
};
export default Projects;
