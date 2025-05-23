"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import DarkModeToggle from './DarkModeToggle';
import { BackgroundAnimations } from './BackgroundAnimations';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [scrolled]);

  const navLinks = [
    { title: 'Home', path: '#home' },
    { title: 'About', path: '#about' },
    { title: 'Skills', path: '#skills' },
    { title: 'Projects', path: '#projects' },
    { title: 'Contact', path: '#contact' }
  ];

  return (
    <motion.header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      role="banner"
    >
      {/* Background animations - only visible when scrolled */}
      {scrolled && (
        <>
          <BackgroundAnimations type="waves" opacity={0.1} />
          <BackgroundAnimations type="nebula" opacity={0.1} />
        </>
      )}
      <div className="container mx-auto px-4 py-4 flex justify-between items-center relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hover-scale"
          whileHover={{ rotate: [0, -5, 5, -5, 0] }}
        >
          <Link 
            href="#home" 
            className="text-2xl font-bold text-primary dark:text-blue-400 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md"
            aria-label="Go to home section"
          >
            Portfolio
          </Link>
        </motion.div>

        {/* Desktop menu */}
        <nav className="hidden md:flex space-x-8" role="navigation" aria-label="Main navigation">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.title}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
            >
              <Link 
                href={link.path} 
                className="relative font-medium text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-blue-400 transition-colors group px-2 py-1 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md"
                aria-label={`Go to ${link.title.toLowerCase()} section`}
              >
                {link.title}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Dark Mode Toggle - Desktop */}
        <div className="hidden md:block absolute right-20">
          <DarkModeToggle />
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md p-2"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
              aria-hidden="true"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
        <motion.div
          ref={mobileMenuRef}
          id="mobile-menu"
          className="md:hidden bg-background/95 backdrop-blur-md shadow-lg"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          role="navigation"
          aria-label="Mobile navigation"
        >
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    href={link.path}
                    className="block py-2 text-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2"
                    onClick={() => setMobileMenuOpen(false)}
                    aria-label={`Go to ${link.title.toLowerCase()} section`}
                  >
                    {link.title}
                  </Link>
                </motion.div>
              ))}
            </nav>
            {/* Dark Mode Toggle - Mobile */}
            <div className="mt-4 flex justify-center">
              <DarkModeToggle />
            </div>
          </div>
        </motion.div>
      )}
      </AnimatePresence>
    </motion.header>
  );
}
