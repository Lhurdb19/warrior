// Footer.jsx
import React from "react";
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear(); // Get current year dynamically
  return (
    <div className="footer-container">
      <span className="footer-link">
        <a href="https://web.facebook.com/hejidev/" className="face">
          Facebook
        </a>
        <a href="" className="linked">
          Linkedin
        </a>
        <a href="wa.me/2348130693571" className="what">
          Whatsapp
        </a>
        <a href="https://x.com/hejidev" className="twit">
          Twitter
        </a>
        <a href="https://github.com/Lhurdb19" className="git">
          Github
        </a>
      </span>

      <div className="footer-wrapper">
        <div className="lets-container">
          <a href="/">WARIOR</a>
          <h1>Let’s create something together</h1>
        </div>

        <div className="get-con">
          <span>
            <h5>Link</h5>
            <span>
              <a href="/about">About</a>
              <a href="/project">Projects</a>
              <a href="/contact">Contact</a>
            </span>
          </span>

          <span>
            <h5>Services</h5>
            <span>
              <a href="/">Web Design</a>
              <a href="/">Web Development</a>
              <a href="/experience">Web3 Solutions</a>
            </span>
          </span>

          <div className="link-container">
            <span>
              <h5>Email:</h5>
              <a href="mailto:222@gmail.com">web3warrior@gmail.com</a>
            </span>
            <span>
              <h5>Phone:</h5>
              <a href="tel:+2348130693571">Whatsapp</a>
              <a href="tel:+2347011560069">Call</a>
            </span>
          </div>
        </div>
      </div>

      <footer className="footer">
        <p>© {currentYear} Warrior. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Footer;
