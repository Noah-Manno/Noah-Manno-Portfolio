import React, { useEffect } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { FaCode, FaUniversity, FaTools, FaUserAlt } from 'react-icons/fa';  // For icons
import '../styles/About.css';

export default function About({ darkMode, toggleDarkMode }) {
  // Mouse-based motion values for both blobs
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
  const secondTranslateX = useTransform(springSecondBlobX, [0, window.innerWidth], [-50, 50]);
  const secondTranslateY = useTransform(springSecondBlobY, [0, window.innerHeight], [-50, 50]);

  const handleMouseMove = (e) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
    secondBlobX.set(e.clientX);
    secondBlobY.set(e.clientY);
  };

  return (
    <section className="about" id="about" onMouseMove={handleMouseMove}>
      {/* Dark Mode Toggle Button */}
      <button className="dark-toggle" onClick={toggleDarkMode}>
        {darkMode ? '☀️' : '🌙'}
      </button>

      <div className="about-inner">
        {/* Text */}
        <motion.div
          className="about-text"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2>About Me</h2>
          <p>
            Versatile Full Stack Web Developer with comprehensive training from Rutgers University Coding Bootcamp, specializing in JavaScript, HTML, CSS, UI/UX design, and web development. Adept at collaborating within Agile environments to deliver clean, efficient code while ensuring optimal user experiences across both front-end and back-end technologies. Skilled in building responsive, interactive web applications and integrating APIs. Dedicated to continuous learning and problem-solving in the ever-evolving field of web development.
          </p>

          <div className="about-sections">
            {/* Professional Experience */}
            <div className="section">
              <FaUserAlt className="section-icon" />
              <h3>Professional Experience</h3>
              <ul>
                <li>
                  <strong>Web and Content Developer | Summit Area YMCA</strong>
                  <br />June 2024–Present
                  <p>
                    Redesigned the organization's website using WordPress, HTML, CSS, and JavaScript, improving mobile responsiveness and UX.
                    Launched a Google Ads campaign with over 1,000,000 impressions within six months.
                    Developed a custom event calendar tool saving staff 10+ hours/month.
                  </p>
                </li>
                <li>
                  <strong>Technology Educator, Music Educator | Barnegat High School</strong>
                  <br />June 2023–June 2024
                  <p>
                    Developed and taught technology and music curriculum. Directed a school Acapella group to become quarterfinalists in an international competition.
                  </p>
                </li>
              </ul>
            </div>

            {/* Education */}
            <div className="section">
              <FaUniversity className="section-icon" />
              <h3>Education</h3>
              <ul>
                <li>
                  <strong>Rutgers University</strong> - Full Stack Coding Certificate | 2023
                </li>
                <li>
                  <strong>Millersville University</strong> - BSE in Music Education, BA in Music Performance | 2019–2023
                  <br />Summa Cum Laude (3.98 GPA)
                </li>
              </ul>
            </div>

            {/* Skills */}
            <div className="section">
              <FaTools className="section-icon" />
              <h3>Relevant Skills</h3>
              <ul>
                <li>Languages: HTML, CSS, JavaScript</li>
                <li>Technologies/Frameworks: PostgreSQL, React, Node.js, Express.js, Handlebars.js, jQuery, Bootstrap, Materialize</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Animated Blob 1 (Response to Mouse) */}
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

        {/* Animated Blob 2 (Response to Mouse and Positioned Left) */}
        <motion.div
          className="blob-wrapper second-blob"
          style={{
            rotate: secondRotate,
            x: secondTranslateX,
            y: secondTranslateY,
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
              fill={darkMode ? "#ff7f50" : "#ff4500"}
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
      </div>
    </section>
  );
}
