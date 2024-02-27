import React from "react";
import { Carousel } from "react-responsive-carousel";
import "./Projects.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

const Projects: React.FC = () => {
  return (
    <section className="projects" id="projects" data-aos="fade-up">
      <h1 className="section-name">Projects </h1>
      <Carousel showArrows={true} infiniteLoop={true} swipeable={true} emulateTouch={true} autoPlay={true}>
        <div >
          <img src="fintegro.png" alt="Screenshot of 'MiniCRM'- PWA App" />
          <p className="project-description">
          PWA app made during Fintegrow intership to make monitoring conversation durations easier. <a href="https://minicrm.toadres.pl/"><button className="up-btn visit-btn">Visit</button></a>
          </p>
          </div>
        <div>
          <img src="ccv.png" alt="Screenshot of Resume"/>
          <p className="project-description">
            First resume based on HTML, CSS and a little bit of JavaScript. <a href="https://mkarawan.netlify.app/"><button className="up-btn visit-btn">Visit</button></a>
          </p>
        </div>
        <div>
          <img src="blog.png" alt="Screenshot of Django based blog" />
          <p className="project-description">
            Blog created with Django 4.2.1
          </p>
        </div>
        <div>
          <img src="swapi.png" alt="Screenshot of SWAPI based website" />
          <p className="project-description">
          A website designed for searching information about Star Wars, created using Django and SWAPI. <a href="https://star-wars-swapi.herokuapp.com/"><button className="up-btn visit-btn">Visit</button></a>
          </p>
        </div>
      </Carousel>
      <a href="#start"><button className="up-btn">UP</button></a>

    </section>
  );
};
export default Projects;
