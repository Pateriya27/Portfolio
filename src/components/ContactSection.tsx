"use client";

import { useState, ChangeEvent, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  submit?: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.subject) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    
    try {
      // TODO: Replace with your actual form submission logic
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form submitted:', formData);
      
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setErrors({});
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrors({ submit: 'Failed to send message. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact" className="py-20 relative overflow-hidden bg-gradient-to-b from-background to-background/95">
      {/* Background gradients */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/20 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/20 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary/50 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 text-primary text-sm font-medium mb-4 shadow-sm"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Let's Connect
          </motion.div>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 relative inline-block bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Get In Touch
            <motion.div 
              className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary/50 to-secondary/50 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            />
          </motion.h2>
          <motion.p 
            className="max-w-2xl mx-auto text-foreground/70 mt-6 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Have a project in mind or just want to say hello? I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Contact Information</h3>
            
            <div className="space-y-6">
              <motion.div 
                className="p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg">
                    <FaPhone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-gray-100">Phone</h4>
                    <a href="tel:+917804900019" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                      +91 7804900019
                    </a>
                  </div>
              </div>
              </motion.div>
              
              <motion.div 
                className="p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg">
                    <FaEnvelope className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-gray-100">Email</h4>
                    <a href="mailto:pateriyaji2707@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                      pateriyaji2707@gmail.com
                    </a>
                  </div>
              </div>
              </motion.div>
              
              <motion.div 
                className="p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg">
                    <FaMapMarkerAlt className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-gray-100">Location</h4>
                    <p className="text-gray-600 dark:text-gray-400">Sagar, MP, India</p>
                  </div>
                </div>
              </motion.div>

              <div className="pt-6">
                <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-4">Connect with me</h4>
                <div className="flex space-x-4">
                  <motion.a 
                    href="https://github.com/Pateriya27" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg hover:bg-primary/10 dark:hover:bg-primary/10 transition-all duration-300 border border-gray-100 dark:border-gray-700"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub className="h-6 w-6 text-gray-600 dark:text-gray-400 hover:text-primary transition-colors" />
                  </motion.a>
                  <motion.a 
                    href="https://www.linkedin.com/in/harshit-pateriya27" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg hover:bg-primary/10 dark:hover:bg-primary/10 transition-all duration-300 border border-gray-100 dark:border-gray-700"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaLinkedin className="h-6 w-6 text-gray-600 dark:text-gray-400 hover:text-primary transition-colors" />
                  </motion.a>
                  <motion.a 
                    href="mailto:pateriyaji2707@gmail.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg hover:bg-primary/10 dark:hover:bg-primary/10 transition-all duration-300 border border-gray-100 dark:border-gray-700"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaEnvelope className="h-6 w-6 text-gray-600 dark:text-gray-400 hover:text-primary transition-colors" />
                  </motion.a>
                  {/* <motion.a href="mailto:pateriyaji2707@gmail.com" className="text-foreground/70 hover:text-primary transition-colors duration-300 hover-scale">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </motion.a> */}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
              {isSubmitted ? (
                <motion.div 
                  className="text-center py-8"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-green-100 to-green-50 dark:from-green-900/30 dark:to-green-800/30 rounded-full flex items-center justify-center text-green-500 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">Message Sent!</h3>
                  <p className="text-gray-600 dark:text-gray-400">Thanks for reaching out. I'll get back to you soon!</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Your Name
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      placeholder="John Doe"
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                      } focus:ring-2 focus:ring-primary bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm text-gray-900 dark:text-gray-100 transition-all duration-300`}
                      required 
                      value={formData.name}
                      onChange={handleChange}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Your Email
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      placeholder="john@example.com"
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                      } focus:ring-2 focus:ring-primary bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm text-gray-900 dark:text-gray-100 transition-all duration-300`}
                      required 
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.subject ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                      } focus:ring-2 focus:ring-primary bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm text-gray-900 dark:text-gray-100 transition-all duration-300`}
                      required
                      value={formData.subject}
                      onChange={handleChange}
                    >
                      <option value="">Select a subject</option>
                      <option value="Job Opportunity">Job Opportunity</option>
                      <option value="Project Inquiry">Project Inquiry</option>
                      <option value="Collaboration">Collaboration</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.subject && (
                      <p className="mt-1 text-sm text-red-500">{errors.subject}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Your Message
                    </label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows={5} 
                      placeholder="Hello, I'd like to talk about..."
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                      } focus:ring-2 focus:ring-primary bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm text-gray-900 dark:text-gray-100 transition-all duration-300`}
                      required
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                    )}
                  </div>

                  {errors.submit && (
                    <div className="p-3 bg-red-100 dark:bg-red-900/30 text-red-500 rounded-lg text-sm">
                      {errors.submit}
                    </div>
                  )}
                  
                  <motion.button 
                    type="submit" 
                    className={`w-full bg-gradient-to-r from-primary to-secondary text-white py-3 px-6 rounded-lg transition-all duration-300 font-medium flex items-center justify-center ${
                      isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:shadow-lg hover:shadow-primary/30'
                    }`}
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
