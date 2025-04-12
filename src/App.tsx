import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Github, Linkedin, Mail, Terminal, Download, ArrowRight } from 'lucide-react';
import { fadeIn, staggerContainer, buttonHover, glowingButton } from './animations';
import { useTypewriter } from './hooks/useTypewriter';
import { Scene3D } from './components/Scene3D';

function App() {
  const role = useTypewriter("Builder | Engineer | AI Enthusiast", 100);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100">
      <nav className="fixed w-full backdrop-blur-md bg-black/30 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2"
          >
            <Terminal className="w-6 h-6 text-blue-400" />
            <span className="font-bold">Portfolio</span>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex space-x-6"
          >
            <a href="#about" className="nav-link">About</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#contact" className="nav-link">Contact</a>
          </motion.div>
        </div>
      </nav>

      <motion.main
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="pt-24 px-4"
      >
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto py-20">
          <motion.div variants={fadeIn('up', 'tween', 0, 1)} className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Hi, I'm <span className="gradient-text">Jhansi Chintalapati</span>
              </h1>
              <div className="h-8 mb-8">
                <span className="text-xl text-blue-400">{role}</span>
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                  className="inline-block ml-1 w-[2px] h-6 bg-blue-400"
                />
              </div>
            </motion.div>

            <motion.div 
              variants={fadeIn('up', 'tween', 0.4, 1)}
              className="flex justify-center space-x-6 mb-12"
            >
              <motion.a
                href="#contact"
                initial="rest"
                whileHover="hover"
                whileTap="tap"
                variants={buttonHover}
                className="px-8 py-3 bg-blue-600 rounded-md font-medium relative overflow-hidden group"
              >
                <motion.div
                  variants={glowingButton}
                  className="absolute inset-0"
                />
                <span className="relative flex items-center">
                  Let's Connect
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.a>

              <motion.a
                href="/resume.pdf"
                download
                initial="rest"
                whileHover="hover"
                whileTap="tap"
                variants={buttonHover}
                className="px-8 py-3 border-2 border-blue-400 text-blue-400 rounded-md font-medium flex items-center space-x-2 hover:bg-blue-400/10 transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </motion.a>
            </motion.div>

            <div className="flex justify-center space-x-4">
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
              >
                <Github className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="mailto:your.email@example.com"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
              >
                <Mail className="w-6 h-6" />
              </motion.a>
            </div>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="max-w-6xl mx-auto py-20">
          <motion.div variants={fadeIn('up', 'tween', 0.2, 1)} className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">About Me</h2>
              <p className="text-gray-400 mb-4">
                I'm passionate about exploring the frontiers of Artificial Intelligence and its applications in solving real-world problems. Currently pursuing my undergraduate degree, I focus on machine learning, deep learning, and their practical implementations.
              </p>
              <div className="flex items-center space-x-4">
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  <Brain className="w-12 h-12 text-blue-400" />
                </motion.div>
                <div>
                  <h3 className="font-semibold">AI Enthusiast</h3>
                  <p className="text-sm text-gray-400">Deep Learning & Neural Networks</p>
                </div>
              </div>
            </div>
            <Scene3D />
          </motion.div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="max-w-6xl mx-auto py-20">
          <motion.h2 
            variants={fadeIn('up', 'tween', 0.3, 1)}
            className="text-3xl font-bold mb-12 text-center"
          >
            Featured Projects
          </motion.h2>
          <motion.div 
            variants={fadeIn('up', 'tween', 0.4, 1)}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-gray-900 rounded-lg overflow-hidden"
              >
                <img 
                  src={`https://images.unsplash.com/photo-${1600000000000 + i}?auto=format&fit=crop&q=80&w=400`}
                  alt={`Project ${i}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold mb-2">Project Title {i}</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    A brief description of the project and its impact on AI research.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-blue-600 rounded-md text-sm hover:bg-blue-700 transition-colors"
                  >
                    Learn More
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="max-w-6xl mx-auto py-20">
          <motion.div 
            variants={fadeIn('up', 'tween', 0.5, 1)}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-blue-600 rounded-md font-medium hover:bg-blue-700 transition-colors"
            >
              Say Hello
            </motion.button>
          </motion.div>
        </section>
      </motion.main>

      <footer className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;