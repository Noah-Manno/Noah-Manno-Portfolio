import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import '../styles/SideMenu.css';
import lightModeLogo from '../assets/lightModeLogo.png';
import darkModeLogo from '../assets/darkModeLogo.png';

export default function SideMenu({ darkMode, toggleDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();


  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isOpen && menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const logo = darkMode ? darkModeLogo : lightModeLogo;

  return (
    <>
      <button className="menu-toggle" onClick={() => setIsOpen(true)}>
        <FaBars />
      </button>

      <div className={`overlay-blur ${isOpen ? 'active' : ''}`}></div>

      <div className={`side-menu ${isOpen ? 'open' : ''}`} ref={menuRef}>
        <button className="close-btn" onClick={() => setIsOpen(false)}>
          <FaTimes />
        </button>

        <div className="menu-content">
          <Link to="/" onClick={() => setIsOpen(false)}>
            <img src={logo} alt="Logo" className="menu-logo" />
          </Link>

          <nav>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </nav>

          <div className="social-icons">
            <a href="https://github.com/Noah-Manno" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/noah-manno" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
