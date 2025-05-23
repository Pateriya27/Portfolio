"use client";

import { motion } from 'framer-motion';
import React from 'react';
import { BackgroundAnimations } from './BackgroundAnimations';
import { FaHeart, FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaArrowUp } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative py-16 bg-gradient-to-b from-background/95 to-background border-t border-gray-200 dark:border-gray-800">
      {/* Background gradients */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-primary/20 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-secondary/20 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Enhanced background accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/60 via-secondary/60 to-accent/60"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-accent/60 via-tertiary/60 to-primary/60"></div>
      
      {/* Enhanced background animations */}
      <BackgroundAnimations type="nebula" opacity={0.4} />
      <BackgroundAnimations type="waves" opacity={0.3} />
      <BackgroundAnimations type="particles" count={25} opacity={0.4} speed="medium" interactive={true} />
      <BackgroundAnimations type="stars" count={40} opacity={0.7} speed="slow" />
      
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-20 right-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl -z-10"
        animate={{
          x: [0, 30, 0],
          y: [0, 40, 0]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute bottom-20 left-10 w-72 h-72 rounded-full bg-secondary/5 blur-3xl -z-10"
        animate={{
          x: [0, -30, 0],
          y: [0, -40, 0]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      <motion.div 
        className="absolute top-40 left-1/3 w-48 h-48 rounded-full bg-accent/5 blur-3xl -z-10"
        animate={{
          x: [0, 20, 0],
          y: [0, -30, 0],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-8">
          {/* Main content */}
          <motion.div 
            className="flex items-center space-x-3 text-foreground/70 text-lg md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span>Designed & Built with</span>
            <motion.span
              className="text-primary"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
            >
              <FaHeart className="w-6 h-6 md:w-7 md:h-7" />
            </motion.span>
            <span>by</span>
            <motion.span
              className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary text-xl md:text-2xl"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Harshit Pateriya
            </motion.span>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex items-center space-x-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.a
              href="https://github.com/Pateriya27"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-primary transition-colors p-3 rounded-full bg-white/5 hover:bg-white/10 backdrop-blur-sm"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub className="w-7 h-7 md:w-8 md:h-8" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/harshit-pateriya27"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-primary transition-colors p-3 rounded-full bg-white/5 hover:bg-white/10 backdrop-blur-sm"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin className="w-7 h-7 md:w-8 md:h-8" />
            </motion.a>
            <motion.a
              href="mailto:pateriyaji2707@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-primary transition-colors p-3 rounded-full bg-white/5 hover:bg-white/10 backdrop-blur-sm"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaEnvelope className="w-7 h-7 md:w-8 md:h-8" />
            </motion.a>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 text-sm md:text-base"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a href="#home" className="text-foreground/70 hover:text-primary transition-colors">Home</a>
            <span className="text-foreground/30">•</span>
            <a href="#about" className="text-foreground/70 hover:text-primary transition-colors">About</a>
            <span className="text-foreground/30">•</span>
            <a href="#skills" className="text-foreground/70 hover:text-primary transition-colors">Skills</a>
            <span className="text-foreground/30">•</span>
            <a href="#projects" className="text-foreground/70 hover:text-primary transition-colors">Projects</a>
            <span className="text-foreground/30">•</span>
            <a href="#contact" className="text-foreground/70 hover:text-primary transition-colors">Contact</a>
          </motion.div>
        
          {/* Copyright */}
        <motion.div 
            className="flex flex-col items-center space-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-base md:text-lg text-foreground/50">
              © {currentYear} All rights reserved
            </p>
            <motion.button
              onClick={scrollToTop}
              className="p-3 rounded-full bg-white/5 hover:bg-white/10 backdrop-blur-sm text-foreground/70 hover:text-primary transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaArrowUp className="w-5 h-5" />
            </motion.button>
            </motion.div>
          </div>
      </div>
    </footer>
  );
}