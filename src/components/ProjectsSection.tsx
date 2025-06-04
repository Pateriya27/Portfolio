"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function ProjectsSection() {
  // Project categories
  const categories = ['All', 'Web Development', 'Finance', 'E-commerce'];
  const [activeCategory, setActiveCategory] = useState('All');

  // Project data
  const projects = [
    {
      id: 1,
      title: 'Swadeshi - E-commerce Website',
      description: 'A fully responsive front-end e-commerce platform with secure user authentication and authorization via APIs.',
      category: 'E-commerce',
      image: '/img/ecom.png',
      technologies: ['JavaScript', 'HTML/CSS', 'Firebase'],
      githubLink: 'https://github.com/Pateriya27/E-Commerce-Swadeshi',
    },
    {
      id: 2,
      title: 'Paisa - AI-Powered Finance Platform',
      description: 'Finance management platform with secure authentication, AI-driven insights, dashboards, and transaction tracking.',
      category: 'Finance',
      image: '/img/paisa.png',
      technologies: ['Next.js', 'React', 'PostgreSQL', 'Supabase', 'Clerk', 'Google Gemini AI'],
      githubLink: 'https://github.com/Pateriya27/Paisa-Ai-Finance-Plateform',
    },
  ];

  // Filter projects based on active category
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="mt-6 max-w-2xl mx-auto text-foreground/80">
            Here are some of my recent projects. Each one was carefully crafted to solve specific problems
            and deliver exceptional user experiences.
          </p>
        </motion.div>

        {/* Filter Categories */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-foreground/5 hover:bg-foreground/10'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map(project => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="relative group bg-gradient-to-br from-white to-gray-50 dark:from-gray-800/80 dark:to-gray-900/80 rounded-xl overflow-hidden border border-gray-200/20 dark:border-gray-700/30 shadow-lg transition-all duration-500"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                {/* Improved background glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 opacity-0 group-hover:opacity-20 rounded-xl blur-md transition-all duration-300 group-hover:duration-200 -z-10"></div>
                
                {/* Glass overlay effect */}
                <div className="absolute inset-0 backdrop-blur-[1px] bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                
                {/* Project image with hover zoom effect */}
                <div className="h-48 relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
                  <motion.div
                    className="w-full h-full"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  >
                    {project.id === 1 ? (
                      <Image 
                        src="/img/ecom.png" 
                        alt="Swadeshi E-commerce Website" 
                        fill 
                        style={{ objectFit: 'cover' }}
                        className="transition-transform duration-500 group-hover:scale-105" 
                      />
                    ) : project.id === 2 ? (
                      <Image 
                        src="/img/paisa.png" 
                        alt="Paisa - AI-Powered Finance Platform" 
                        fill 
                        style={{ objectFit: 'cover' }}
                        className="transition-transform duration-500 group-hover:scale-105" 
                      />
                    ) : (
                      <div className="h-full w-full bg-gradient-to-r from-primary/10 to-secondary/10 flex items-center justify-center text-foreground/40 text-lg font-medium">
                        Project Image
                      </div>
                    )}
                  </motion.div>
                  
                  {/* Project category badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-xs font-medium text-white/90 shadow-lg">
                    {project.category}
                  </div>
                </div>
                
                <div className="p-6 relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <span className="text-xs py-1 px-2 bg-foreground/5 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  
                  <p className="text-foreground/70 text-sm mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map(tech => (
                      <span key={tech} className="text-xs py-1 px-2 bg-primary/10 text-primary rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block w-full py-2 text-center text-sm bg-primary hover:bg-primary-dark text-white rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group relative z-20"
                  >
                    <span>View on GitHub</span>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill="currentColor"
                      className="group-hover:translate-x-1 transition-transform duration-300"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Call to action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <a 
            href="https://github.com/Pateriya27" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-foreground/5 hover:bg-foreground/10 rounded-full transition-colors duration-300 group"
          >
            <span>View More on GitHub</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
