"use client";

import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-16 relative overflow-hidden">
      {/* Enhanced background accent with shimmer effect */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary/60 via-secondary/60 to-accent/60 overflow-hidden"
        initial={{ opacity: 0.5 }}
        animate={{ opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.div 
          className="absolute inset-0 w-1/3 h-full bg-white/30"
          animate={{ x: ["-100%", "400%"] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
      <motion.div 
        className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-accent/60 via-tertiary/60 to-primary/60 overflow-hidden"
        initial={{ opacity: 0.5 }}
        animate={{ opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      >
        <motion.div 
          className="absolute inset-0 w-1/3 h-full bg-white/30"
          animate={{ x: ["400%", "-100%"] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
      
      {/* Enhanced background animations */}
      <BackgroundAnimations type="nebula" opacity={0.3} />
      <BackgroundAnimations type="waves" opacity={0.25} />
      <BackgroundAnimations type="particles" count={30} opacity={0.4} speed="medium" interactive={true} />
      <BackgroundAnimations type="stars" count={50} opacity={0.7} speed="slow" />
      
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

      <div className="container mx-auto px-4">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div 
            variants={itemVariants}
            className="flex flex-col space-y-4"
          >
            <div className="inline-block">
              <motion.h3 
                className="text-xl font-bold bg-gradient-to-r from-primary via-tertiary to-secondary bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Harshit Pateriya
              </motion.h3>
              <motion.div 
                className="h-1 w-1/2 bg-gradient-to-r from-primary to-secondary rounded-full mt-1"
                whileInView={{ width: ["0%", "50%"] }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              ></motion.div>
            </div>
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <p className="text-gray-700 dark:text-gray-300 text-sm mt-2 backdrop-blur-sm bg-white/30 dark:bg-gray-800/30 p-3 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300">Full Stack Developer passionate about creating interactive, user-friendly applications.</p>
            </motion.div>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-4">Portfolio © {new Date().getFullYear()}</p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col space-y-4"
          >
            <div className="inline-block">
              <motion.h3 
                className="text-base font-semibold text-gray-800 dark:text-gray-100 uppercase tracking-wider"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Quick Links
              </motion.h3>
              <motion.div 
                className="h-1 w-1/3 bg-gradient-to-r from-accent to-tertiary rounded-full mt-1"
                whileInView={{ width: ["0%", "33.333%"] }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              ></motion.div>
            </div>
            <motion.div 
              className="flex flex-col space-y-2 backdrop-blur-sm bg-white/20 dark:bg-gray-800/20 p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a href="#home" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-all text-sm py-1 flex items-center group">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2 group-hover:scale-150 transition-all duration-300"></span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">Home</span>
              </a>
              <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-secondary dark:hover:text-secondary transition-all text-sm py-1 flex items-center group">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary mr-2 group-hover:scale-150 transition-all duration-300"></span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">About</span>
              </a>
              <a href="#skills" className="text-gray-700 dark:text-gray-300 hover:text-accent dark:hover:text-accent transition-all text-sm py-1 flex items-center group">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mr-2 group-hover:scale-150 transition-all duration-300"></span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">Skills</span>
              </a>
              <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-tertiary dark:hover:text-tertiary transition-all text-sm py-1 flex items-center group">
                <span className="w-1.5 h-1.5 rounded-full bg-tertiary mr-2 group-hover:scale-150 transition-all duration-300"></span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">Projects</span>
              </a>
              <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-quaternary dark:hover:text-quaternary transition-all text-sm py-1 flex items-center group">
                <span className="w-1.5 h-1.5 rounded-full bg-quaternary mr-2 group-hover:scale-150 transition-all duration-300"></span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">Contact</span>
              </a>
            </div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col space-y-4"
          >
            <div className="inline-block">
              <motion.h3 
                className="text-base font-semibold text-gray-800 dark:text-gray-100 uppercase tracking-wider"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Connect
              </motion.h3>
              <motion.div 
                className="h-1 w-1/3 bg-gradient-to-r from-secondary to-quinary rounded-full mt-1"
                whileInView={{ width: ["0%", "33.333%"] }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              ></motion.div>
            </div>
            
            <motion.div 
              className="backdrop-blur-sm bg-white/20 dark:bg-gray-800/20 p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div 
                className="flex space-x-4"
                initial="hidden"
                whileInView="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.1
                    }
                  }
                }}
              >
                <motion.a 
                  href="https://github.com/Pateriya27" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group"
                  variants={{
                    hidden: { scale: 0, opacity: 0 },
                    visible: { 
                      scale: 1, 
                      opacity: 1,
                      transition: { type: "spring", stiffness: 300 }
                    }
                  }}
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="p-3 rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 shadow-md group-hover:shadow-lg group-hover:shadow-primary/20 dark:group-hover:shadow-primary/20 transition-all duration-300 transform group-hover:-translate-y-1">
                    <span className="sr-only">GitHub</span>
                    <svg className="h-6 w-6 text-gray-700 dark:text-gray-300 group-hover:text-primary dark:group-hover:text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </div>
                </a>
                <motion.a 
                  href="https://www.linkedin.com/in/harshit-pateriya27" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group"
                  variants={{
                    hidden: { scale: 0, opacity: 0 },
                    visible: { 
                      scale: 1, 
                      opacity: 1,
                      transition: { type: "spring", stiffness: 300 }
                    }
                  }}
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="p-3 rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 shadow-md group-hover:shadow-lg group-hover:shadow-secondary/20 dark:group-hover:shadow-secondary/20 transition-all duration-300 transform group-hover:-translate-y-1">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-6 w-6 text-gray-700 dark:text-gray-300 group-hover:text-secondary dark:group-hover:text-secondary transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                </a>
                <motion.a 
                  href="mailto:pateriyaji2707@gmail.com" 
                  className="group"
                  variants={{
                    hidden: { scale: 0, opacity: 0 },
                    visible: { 
                      scale: 1, 
                      opacity: 1,
                      transition: { type: "spring", stiffness: 300 }
                    }
                  }}
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="p-3 rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 shadow-md group-hover:shadow-lg group-hover:shadow-accent/20 dark:group-hover:shadow-accent/20 transition-all duration-300 transform group-hover:-translate-y-1">
                    <span className="sr-only">Email</span>
                    <svg className="h-6 w-6 text-gray-700 dark:text-gray-300 group-hover:text-accent dark:group-hover:text-accent transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </a>
              </div>
              
              <motion.div 
                className="mt-6"
                whileInView={{ opacity: [0, 1], scale: [0.9, 1] }}
                transition={{ delay: 0.5, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Link 
                  href="#contact" 
                  className="relative overflow-hidden group bg-gradient-to-r from-primary to-tertiary hover:from-tertiary hover:to-primary text-white px-6 py-3 rounded-lg transition-all duration-500 shadow-md hover:shadow-lg hover:shadow-primary/30 flex items-center justify-center text-sm font-medium"
                >
                  <span className="relative z-10">Get In Touch</span>
                  <span className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative mt-8 pt-8 text-center"
        >
          {/* Decorative divider with gradient */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
          
          {/* Animated dots */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex space-x-1.5">
            <motion.div 
              className="h-1.5 w-1.5 rounded-full bg-primary"
              animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0 }}
            />
            <motion.div 
              className="h-1.5 w-1.5 rounded-full bg-secondary"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
            />
            <motion.div 
              className="h-1.5 w-1.5 rounded-full bg-accent"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
            />
          </div>
          
          <div className="flex items-center justify-center space-x-2">
            <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">Designed & Built with</p>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-secondary"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
            </motion.div>
            <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">by Harshit Pateriya</p>
          </div>
          
          <p className="text-gray-500 dark:text-gray-500 text-xs mt-2">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{new Date().getFullYear()}</span> © All Rights Reserved
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;