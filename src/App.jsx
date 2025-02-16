// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/ProjectDetail';
import Header from './components/Header';
import { useState, useEffect } from 'react';
import './index.css';
import Contact from "./pages/Contact";
import Floatingsection from './components/floating';
import Footer from './components/Footer';

function App() {
  // States for scroll detection
  const [isScrolled, setIsScrolled] = useState(false);

  // Listen for scroll events to toggle the "isScrolled" state
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <div className="min-h-screen">
        {/* The Header is placed outside of the Routes so it shows on all pages */}
        <Header isScrolled={isScrolled} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>

        <Footer />
        <Floatingsection 
          githubLink="https://github.com/Vineetha1312"
          linkedinLink="https://www.linkedin.com/in/vineethabandi/"
          emailLink="vineetha.vinny312@gmail.com"
        />
      </div>
    </Router>
  );
}

export default App;