import React from 'react';
import { motion } from 'framer-motion';
import '../styles/About.css';

export default function About({ darkMode, toggleDarkMode }) {
  return (
    <section className="about" id="about">
      {/* Dark Mode Toggle Button */}
      <button className="dark-toggle" onClick={toggleDarkMode}>
        {darkMode ? '☀️' : '🌙'}
      </button>

      <motion.div
        className="about-inner"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2>About Me</h2>
        <p>
          Versatile Full Stack Web Developer with comprehensive training from Rutgers University Coding Bootcamp,
          specializing in JavaScript, HTML, CSS, UI/UX design, and web development. Adept at collaborating within Agile
          environments to deliver clean, efficient code while ensuring optimal user experiences across both front-end
          and back-end technologies. Skilled in building responsive, interactive web applications and integrating APIs.
          Dedicated to continuous learning and problem-solving in the ever-evolving field of web development.
        </p>
      </motion.div>
    </section>
  );
}
