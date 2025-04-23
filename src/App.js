import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import SideMenu from './components/SideMenu';
import './styles/Hero.css';
import './styles/About.css';
import './styles/SideMenu.css';

function RedirectHandler() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const raw = location.search;
    if (raw.startsWith('?/')) {
      const redirectPath = raw.substring(2); // Remove "?/"
      navigate('/' + redirectPath, { replace: true });
    }
  }, [location, navigate]);

  return null; // No UI needed—just runs logic
}

function App() {
  const storedDarkMode = localStorage.getItem('darkMode') === 'true';
  const [darkMode, setDarkMode] = useState(storedDarkMode);

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(prev => !prev);

  return (
    <Router>
      <RedirectHandler />
      <SideMenu darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Routes>
        <Route path="/" element={<Hero darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
        <Route path="/about" element={<About darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
        <Route path="/projects" element={<Projects darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
        <Route path="/contact" element={<Contact darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
      </Routes>
    </Router>
  );
}

export default App;
