import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import '../styles/Hero.css';
import profileImg from '../assets/NoahMannoHeadshot.png';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      {/* Background overlay animation */}
      <motion.div
        className="overlay"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 2, ease: 'easeOut' }}
      />

      <div className="hero-inner">
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

        <motion.div
          className="hero-image"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img src={profileImg} alt="Noah Manno" />
        </motion.div>
      </div>
    </section>
  );
}
