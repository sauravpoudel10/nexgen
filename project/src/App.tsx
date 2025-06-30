import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import AdminPanel from './components/AdminPanel';

function App() {
  const [currentSection, setCurrentSection] = useState('home');
  const [showAdmin, setShowAdmin] = useState(false);

  // Handle navigation
  const handleNavigation = (section: string) => {
    if (section === 'admin') {
      setShowAdmin(true);
      setCurrentSection('admin');
      return;
    }
    
    setShowAdmin(false);
    setCurrentSection(section);
    
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Update current section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (showAdmin) return;

      const sections = ['home', 'products', 'about', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setCurrentSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showAdmin]);

  // Handle back to main site from admin
  const handleBackToMain = () => {
    setShowAdmin(false);
    setCurrentSection('home');
  };

  if (showAdmin) {
    return <AdminPanel onBackToMain={handleBackToMain} />;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {/* Navbar */}
      <Navbar currentSection={currentSection} onNavigate={handleNavigation} />

      {/* Main Content */}
      <main>
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Hero onNavigate={handleNavigation} />
            <Products />
            <About />
            <Testimonials />
            <Footer />
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;