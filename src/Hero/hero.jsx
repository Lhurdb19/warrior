import React from "react";
import "./Hero.css";
import Typewriter from "typewriter-effect";
import About from "../Pages/about";
import ProjectCard from "../Projects/project";
import Experience from "../Experience/experience";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-text">
          <h1>I am <span>Horlatech</span></h1>
          <h2>Crafting Digital Experiences with Precision & Creativity</h2>
          <p>
            I specialize in{" "}
            <span className="typewriter">
              <Typewriter
                options={{
                  strings: ["Frontend Development", "Web3 Solutions", "Scalable Web Applications", "Web3 Space Host", "Ambassador"],
                  autoStart: true,
                  loop: true,
                  delay: 70,
                  deleteSpeed: 50,
                }}
              />
            </span>
          </p>
          <p className="desc">
            Building sleek, user-friendly, and scalable digital products.
            Let's collaborate and turn your ideas into seamless experiences.
          </p>
          <div className="hero-buttons">
            <a href="/" className="btn-primary">View My Work</a>
            <a href="/contacts" className="btn-secondary">Let's Collaborate</a>
          </div>
        </div>

        <div className="hero-image" />
      </div>
      <About/>
      <ProjectCard/>

      <Experience/>
    </section>
  );
};

export default Hero;
