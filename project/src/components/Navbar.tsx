import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, MessageCircle, Cpu, Shield } from 'lucide-react';

interface NavbarProps {
  currentSection: string;
  onNavigate: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Products' },
    { id: 'about', label: 'About' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' },
    { id: 'admin', label: 'Admin', icon: Shield }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/9779851175969?text=Hi%20Nexgen,%20I%20want%20to%20know%20more%20about%20your%20products', '_blank');
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-gray-900/90 backdrop-blur-md border-b border-blue-500/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-2 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => onNavigate('home')}
          >
            <div className="relative">
              <Cpu className="h-8 w-8 text-blue-400" />
              <div className="absolute inset-0 bg-blue-400 blur-md opacity-50"></div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Nexgen
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center space-x-1 ${
                  currentSection === item.id
                    ? 'text-blue-400'
                    : 'text-gray-300 hover:text-blue-400'
                } ${item.id === 'admin' ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg border border-blue-500/30' : ''}`}
                whileHover={{ scale: 1.05 }}
              >
                {item.icon && <item.icon className="w-4 h-4" />}
                <span>{item.label}</span>
                {currentSection === item.id && item.id !== 'admin' && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400"
                    initial={false}
                  />
                )}
                <div className={`absolute inset-0 rounded-md bg-blue-400/10 opacity-0 transition-opacity duration-200 ${
                  currentSection === item.id ? 'opacity-100' : 'hover:opacity-50'
                }`}></div>
              </motion.button>
            ))}
          </div>

          {/* WhatsApp Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <motion.button
              onClick={handleWhatsAppClick}
              className="hidden sm:flex items-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-500 text-white rounded-full text-sm font-medium transition-all duration-200 hover:shadow-lg hover:shadow-green-500/25"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="h-4 w-4" />
              <span>Order via WhatsApp</span>
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-300 hover:text-blue-400 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gray-900/95 backdrop-blur-md border-t border-blue-500/20"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`flex items-center space-x-2 w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    currentSection === item.id
                      ? 'text-blue-400 bg-blue-400/10'
                      : 'text-gray-300 hover:text-blue-400 hover:bg-blue-400/5'
                  } ${item.id === 'admin' ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30' : ''}`}
                >
                  {item.icon && <item.icon className="w-4 h-4" />}
                  <span>{item.label}</span>
                </button>
              ))}
              <button
                onClick={handleWhatsAppClick}
                className="w-full flex items-center justify-center space-x-2 px-3 py-2 mt-4 bg-green-600 hover:bg-green-500 text-white rounded-md text-sm font-medium transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Order via WhatsApp</span>
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;