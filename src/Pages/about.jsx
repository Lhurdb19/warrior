import React from 'react';
import { FaXTwitter, FaInstagram, FaFacebookF, FaWhatsapp, FaLinkedinIn, FaGithub } from "react-icons/fa6";
import { LiaDownloadSolid } from "react-icons/lia";
import './About.css';
import Getintouch from './getintouch';

function About() {
  const handleDownload = () => {
      const link = document.createElement("a");
      link.href =
        "https://www.dropbox.com/scl/fi/2rgz8emhm3hq2bf4ew9hi/Horlatech__web.pdf?rlkey=4nrl3qek0x1i7cvoui6gyv9ev&st=c8e1utnd&dl=0";
      link.download = "Horlatech_web.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
    };

  return (
    <>
    <div className="about-container">
        <div className="about-image">
          <img
            src="https://res.cloudinary.com/damamkuye/image/upload/v1745862949/web3_xlwe5z.jpg"
            alt=""
          />
        </div>
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I’m a Front-End Developer with a passion for turning ideas into
            interactive, user-friendly experiences. With a year of experience, I
            specialize in designing and developing intuitive interfaces that
            strike the perfect balance between aesthetics and functionality.
            Every project I build is driven by a deep focus on usability,
            innovation, and performance, ensuring that users don’t just navigate
            but truly connect with the digital world.
          </p>
          <div className="my-design">
            <h3>My Stacks</h3>
            <div className="stack-box">
              <span>HTML
                <div className="html-percent">
                  85%
                </div>
              </span>
              <span>CSS
              <div className="css-percent">78%</div>
              </span>
              <span>JavaScript
              <div className="java-percent">50%</div>

              </span>
              <span>React
              <div className="react-percent">60%</div>
              </span>
            </div>
            {/* <h4>HTML / CSS / JavaScript / React / Github </h4> */}
          </div>

          <div className="resume-link-con">
          <button onClick={handleDownload} className="download-btn" target='_blank'>
            <p>Download Resume</p> <LiaDownloadSolid className="down-icon" style={{color: 'ebc9a0'}}/>
          </button>
          <div className="my-link">
            <a href="https://web.faceboo.com" ><FaFacebookF /></a>
            <a href="https://x.com/Web3warrior_7" ><FaXTwitter /></a>
            <a href="wa.me/" ><FaWhatsapp /></a>
            <a href="" ><FaLinkedinIn /></a>
            <a href="/" ><FaInstagram /></a>
            <a href="https://github.com/" ><FaGithub /></a>
          </div>
          </div>
        </div>
      </div>
        <Getintouch/>
      </>
  )
}

export default About;
