import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './pages/Services';
import About from './pages/About';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Contact from './pages/Contact';
import Home from './pages/Home';


function App() {
  useEffect(() => {
  AOS.init({
    once: true, // animate only once per scroll
    duration: 1000, // global default if not set inline
    offset: 100, // how far before the element comes into view
  });
}, []);
  return (
    <Router>
      <Routes>
         <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
