import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav>
      {/* Logo */}
      <Link to="/">Warrior</Link>

      {/* Desktop & Mobile Links */}
      <div className={`nav-link ${isOpen ? 'mobile active' : ''}`}>
        <Link to="/about" onClick={closeMenu}>About</Link>
        <Link to="/projects" onClick={closeMenu}>Projects</Link>
        <Link to="/contact" onClick={closeMenu}>Contact</Link>
      </div>

      {/* Toggle Menu Icon */}
      <div className="toggle-menu" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
}

export default Navbar;
