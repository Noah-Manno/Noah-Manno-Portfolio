import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import ActorHome from './pages/ActorHome';
import ActorGallery from './pages/ActorGallery'
import ActorResume from './pages/ActorResume'
import './styles/ActorLayout.css'; // This is where the "New Website" look starts

const ActorLayout = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className={`actor-root ${darkMode ? 'actor-dark' : 'actor-light'}`}>
      {/* Unique Actor Navigation - Completely different from SideMenu */}
      <nav className="actor-navbar">
        <div className="actor-logo">NOAH MANNO</div>
        <div className="actor-links">
            <Link title="Portfolio Home" to="/actor">Home</Link>
            <Link title="Portfolio Gallery" to="/actor/gallery">Gallery</Link>
            <Link title="Portfolio Resume" to="/actor/resume">Resume</Link>
          <button onClick={toggleDarkMode} className="theme-toggle">
            {darkMode ? '🌙' : '☀️'}
          </button>
        </div>
      </nav>

      {/* Internal Routing for /actor/* */}
      <main className="actor-main-content">
        <Routes>
          <Route path="/" element={<ActorHome />} />
          <Route path="/gallery" element={<ActorGallery />} />
          <Route path="/resume" element={<ActorResume />} />
        </Routes>
      </main>
    </div>
  );
};

export default ActorLayout;