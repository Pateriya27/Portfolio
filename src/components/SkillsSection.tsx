"use client";

import { motion } from 'framer-motion';

export default function SkillsSection() {
  const skills = [
    { name: 'HTML/CSS-', level: 90, color: 'from-[#E44D26] to-[#F16529]' },
    { name: 'JavaScript-', level: 85, color: 'from-[#F0DB4F] to-[#F7DF1E]' },
    { name: 'React-', level: 85, color: 'from-[#61DAFB] to-[#00D8FF]' },
    { name: 'Next.js-', level: 80, color: 'from-[#000000] to-[#333333]' },
    { name: 'C-', level: 95, color: 'from-[#5C6BC0] to-[#3949AB]' },
    { name: 'Java-', level: 90, color: 'from-[#F44336] to-[#D32F2F]' },
    { name: 'SQL-', level: 85, color: 'from-[#2196F3] to-[#1976D2]' },
    { name: 'Firebase-', level: 85, color: 'from-[#FFCA28] to-[#FFB300]' },
  ];

  const technologies = [
    { name: 'Git', icon: 'devicon-git-plain' },
    { name: 'GitHub', icon: 'devicon-github-original' },
    { name: 'PostgreSQL', icon: 'devicon-postgresql-plain' },
    { name: 'Supabase', icon: 'devicon-supabase-plain' },
    { name: 'Firebase', icon: 'devicon-firebase-plain' },
    { name: 'Clerk', icon: 'devicon-clerk-plain' },
    { name: 'Google Gemini AI', icon: 'devicon-gemini-plain' },
    { name: 'ArcJet', icon: 'devicon-arcjet-plain' },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="skills" className="py-20 bg-background/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="mt-6 max-w-2xl mx-auto text-foreground/80">
            I'm skilled in various programming languages and technologies for both front-end and back-end development.
            Here's an overview of my technical skill set:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-6 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 hover-3d"
          >
            <h3 className="text-2xl font-bold mb-6 text-center md:text-left bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary inline-block">Technical Skills</h3>
            <div className="space-y-8">
              {skills.map((skill, index) => (
                <motion.div 
                  key={skill.name}
                  className="group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="flex justify-between mb-3 items-center">
                    <div className="flex items-center">
                      <motion.div 
                        className={`w-8 h-8 rounded-md bg-gradient-to-r ${skill.color} flex items-center justify-center text-white mr-3 shadow-md`}
                        whileHover={{ rotate: 5, scale: 1.1 }}
                      >
                        {skill.name.charAt(0)}
                      </motion.div>
                      <span className="font-medium text-foreground/90 group-hover:text-primary transition-colors duration-300">{skill.name}</span>
                    </div>
                    <motion.span 
                      className="text-foreground/60 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-md text-sm font-medium"
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {skill.level}%
                    </motion.span>
                  </div>
                  <div className="w-full h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden shadow-inner">
                    <motion.div 
                      className={`h-full rounded-full bg-gradient-to-r ${skill.color} relative`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 1.2, delay: 0.3 + index * 0.1 }}
                    >
                      <motion.div 
                        className="absolute top-0 right-0 h-full w-5 bg-white/20"
                        animate={{ x: [-20, 20, -20] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-6 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 hover-3d"
          >
            <h3 className="text-2xl font-bold mb-6 text-center md:text-left bg-clip-text text-transparent bg-gradient-to-r from-accent to-tertiary inline-block">Technologies</h3>
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-5"
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5 flex flex-col items-center justify-center shadow-lg hover:shadow-xl transition-all hover-3d group relative overflow-hidden"
                  variants={item}
                  whileHover={{ y: -8, scale: 1.03, transition: { duration: 0.3 } }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <motion.div
                    className="absolute -inset-full z-0 rounded-full opacity-30 blur-2xl bg-gradient-to-r from-primary to-secondary group-hover:opacity-70 transition-opacity duration-500"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.4, 0.3]
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity,
                      ease: "easeInOut" 
                    }}
                  />
                  
                  <motion.div 
                    className="text-4xl mb-3 text-foreground/80 relative z-10 bg-gray-50 dark:bg-gray-700 p-3 rounded-full shadow-md"
                    whileHover={{ rotate: [0, -10, 10, -10, 0], transition: { duration: 0.5 } }}
                  >
                    <i className={tech.icon}></i>
                  </motion.div>
                  <p className="text-sm font-medium relative z-10 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent group-hover:from-primary group-hover:to-secondary transition-all duration-300">{tech.name}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-6 p-5 rounded-xl border border-accent/20 bg-accent/5 dark:bg-accent/10 shadow-md hover:shadow-lg transition-all duration-300 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.8 }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-center mb-2">
            <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-accent" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-accent to-tertiary">Continuous Learning</h4>
          </div>
          <p className="text-sm text-foreground/80 ml-11">
            I'm constantly updating my skills and learning new technologies to keep up 
            with the fast-paced web development ecosystem.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
