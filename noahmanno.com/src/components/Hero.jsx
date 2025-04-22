import React, { useEffect } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import '../styles/Hero.css';
import profileImg from '../assets/NewProfilePic.png';

export default function Hero({ darkMode, toggleDarkMode }) {
  // Mouse-based motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const rotate = useTransform(springX, [0, window.innerWidth], [-15, 15]);
  const translateX = useTransform(springX, [0, window.innerWidth], [-20, 20]);
  const translateY = useTransform(springY, [0, window.innerHeight], [-20, 20]);

  const handleMouseMove = (e) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  return (
    <section className="hero" id="hero" onMouseMove={handleMouseMove}>
      {/* Dark Mode Toggle */}
      <button className="dark-toggle" onClick={toggleDarkMode}>
        {darkMode ? '☀️' : '🌙'}
      </button>

      <div className="hero-inner">
        {/* Text */}
        <motion.div
          className="hero-text"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1>Hi, I'm Noah Manno</h1>
          <div className="typewriter">
            <Typewriter
              options={{
                strings: [
                  'Full Stack Web Developer',
                  'UI/UX Problem Solver',
                  'Creative Technologist',
                ],
                autoStart: true,
                loop: true,
                delay: 60,
              }}
            />
          </div>
          <a href="#contact" className="btn">Let’s Connect</a>
        </motion.div>

        {/* Image + Blob */}
        <motion.div
          className="hero-image-wrapper"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Animated Blob */}
          <motion.div
            className="blob-wrapper"
            style={{
              rotate,
              x: translateX,
              y: translateY,
            }}
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 30,
              ease: "linear",
            }}
          >
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                fill={darkMode ? "#66d9ef" : "#007bff"}
                d="M46.1,-61.3C59.3,-50.7,68.5,-34.8,71.1,-18.7C73.6,-2.5,69.5,13.8,62.1,28.2C54.7,42.7,44,55.3,30.6,60.7C17.2,66.2,1.1,64.6,-15.3,63.1C-31.6,61.6,-48.2,60.1,-58.3,49.3C-68.5,38.5,-72.3,18.2,-69.5,0.2C-66.7,-17.9,-57.4,-35.8,-44.2,-46.4C-31,-57,-15.5,-60.4,1.7,-62.6C18.9,-64.8,37.8,-65.9,46.1,-61.3Z"
                transform="translate(100 100)"
              >
                <animate
                  attributeName="d"
                  dur="15s"
                  repeatCount="indefinite"
                  values="
                    M46.1,-61.3C59.3,-50.7,68.5,-34.8,71.1,-18.7C73.6,-2.5,69.5,13.8,62.1,28.2C54.7,42.7,44,55.3,30.6,60.7C17.2,66.2,1.1,64.6,-15.3,63.1C-31.6,61.6,-48.2,60.1,-58.3,49.3C-68.5,38.5,-72.3,18.2,-69.5,0.2C-66.7,-17.9,-57.4,-35.8,-44.2,-46.4C-31,-57,-15.5,-60.4,1.7,-62.6C18.9,-64.8,37.8,-65.9,46.1,-61.3Z;
                    M39.5,-51.7C52.5,-40.4,64.3,-27.3,65.6,-13.7C67,0,57.9,13.9,48.4,27.4C38.9,41,29,54.2,15.5,59.3C2,64.5,-15.1,61.5,-28.9,53.7C-42.6,45.9,-52.9,33.2,-59.1,18.2C-65.3,3.2,-67.4,-14.2,-59.5,-26.7C-51.6,-39.1,-33.7,-46.5,-17.3,-55.1C-1,-63.6,13.8,-73.1,26.8,-68.6C39.8,-64.1,51.3,-45.5,39.5,-51.7Z;
                    M46.1,-61.3C59.3,-50.7,68.5,-34.8,71.1,-18.7C73.6,-2.5,69.5,13.8,62.1,28.2C54.7,42.7,44,55.3,30.6,60.7C17.2,66.2,1.1,64.6,-15.3,63.1C-31.6,61.6,-48.2,60.1,-58.3,49.3C-68.5,38.5,-72.3,18.2,-69.5,0.2C-66.7,-17.9,-57.4,-35.8,-44.2,-46.4C-31,-57,-15.5,-60.4,1.7,-62.6C18.9,-64.8,37.8,-65.9,46.1,-61.3Z;
                  "
                />
              </path>
            </svg>
          </motion.div>

          {/* Profile Image */}
          <img src={profileImg} alt="Noah Manno" loading="lazy" />
        </motion.div>
      </div>
    </section>
  );
}
