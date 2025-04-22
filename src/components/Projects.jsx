import React, { useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import '../styles/About.css'; // Reuse About styles

export default function Projects({ darkMode, toggleDarkMode }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const secondBlobX = useMotionValue(0);
  const secondBlobY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const springSecondBlobX = useSpring(secondBlobX, { stiffness: 50, damping: 20 });
  const springSecondBlobY = useSpring(secondBlobY, { stiffness: 50, damping: 20 });

  const rotate = useTransform(springX, [0, window.innerWidth], [-15, 15]);
  const translateX = useTransform(springX, [0, window.innerWidth], [-20, 20]);
  const translateY = useTransform(springY, [0, window.innerHeight], [-20, 20]);

  const secondRotate = useTransform(springSecondBlobX, [0, window.innerWidth], [-10, 10]);
  const secondTranslateX = useTransform(secondBlobX, [0, window.innerWidth], [-50, 50]);
  const secondTranslateY = useTransform(secondBlobY, [0, window.innerHeight], [-50, 50]);

  const handleMouseMove = (e) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
    secondBlobX.set(e.clientX);
    secondBlobY.set(e.clientY);
  };

  return (
    <section className="about" id="projects" onMouseMove={handleMouseMove}>
      <button className="dark-toggle" onClick={toggleDarkMode}>
        {darkMode ? '☀️' : '🌙'}
      </button>

      {/* Animated Blob 1 */}
      <motion.div
        className="blob-wrapper"
        style={{ rotate, x: translateX, y: translateY }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#66d9ef"
            d="M46.1,-61.3C59.3,-50.7,68.5,-34.8,71.1,-18.7C73.6,-2.5,69.5,13.8,62.1,28.2C54.7,42.7,44,55.3,30.6,60.7C17.2,66.2,1.1,64.6,-15.3,63.1C-31.6,61.6,-48.2,60.1,-58.3,49.3C-68.5,38.5,-72.3,18.2,-69.5,0.2C-66.7,-17.9,-57.4,-35.8,-44.2,-46.4C-31,-57,-15.5,-60.4,1.7,-62.6C18.9,-64.8,37.8,-65.9,46.1,-61.3Z"
            transform="translate(100 100)"
          />
        </svg>
      </motion.div>

      {/* Animated Blob 2 */}
      <motion.div
        className="blob-wrapper second-blob"
        style={{ rotate: secondRotate, x: secondTranslateX, y: secondTranslateY }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#ff7f50"
            d="M46.1,-61.3C59.3,-50.7,68.5,-34.8,71.1,-18.7C73.6,-2.5,69.5,13.8,62.1,28.2C54.7,42.7,44,55.3,30.6,60.7C17.2,66.2,1.1,64.6,-15.3,63.1C-31.6,61.6,-48.2,60.1,-58.3,49.3C-68.5,38.5,-72.3,18.2,-69.5,0.2C-66.7,-17.9,-57.4,-35.8,-44.2,-46.4C-31,-57,-15.5,-60.4,1.7,-62.6C18.9,-64.8,37.8,-65.9,46.1,-61.3Z"
            transform="translate(100 100)"
          />
        </svg>
      </motion.div>

      {/* Text with animation */}
      <motion.div
        className="about-inner"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2>Projects</h2>
        <div className="about-sections">
  <div className="section">
    <h3>Minigame Masters</h3>
    <p>
      A web app with multiplayer minigames, real-time socket.io communication, and point tracking.
    </p>
    <p><strong>Technologies Used:</strong> Socket.io, CSS, HTML, JavaScript, React.js</p>
    <a href="https://minigame-masters.onrender.com/" target="_blank" rel="noopener noreferrer">
      Visit Project
    </a>
  </div>

  <div className="section">
    <h3>Pokemon Plaza</h3>
    <p>
      A detailed Pokémon data explorer built with HTML, CSS, and JavaScript.
    </p>
    <p><strong>Technologies Used:</strong> JavaScript, CSS, HTML, API Integration</p>
    <a href="https://noah-manno.github.io/pokemon-plaza/" target="_blank" rel="noopener noreferrer">
      Visit Project
    </a>
  </div>

  <div className="section">
    <h3>Taste Harmony</h3>
    <p>
      Recipe suggestions based on taste preferences using a food API and local storage.
    </p>
    <p><strong>Technologies Used:</strong> API Integration, CSS, HTML</p>
    <a href="https://noah-manno.github.io/taste-harmony/" target="_blank" rel="noopener noreferrer">
      Visit Project
    </a>
  </div>
</div>

      </motion.div>
    </section>
  );
}
