import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Articles from './components/Articles';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

const Star = ({ delay, duration, size }) => {
  return (
    <motion.div
      className="absolute rounded-full bg-white/20"
      style={{
        width: size,
        height: size,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
      animate={{
        y: [0, -1000],
        opacity: [0, 1, 0],
      }}
      transition={{
        duration: duration,
        delay: delay,
        repeat: Infinity,
        ease: 'linear',
      }}
    />
  );
};

function App() {
  return (
    <div className="bg-light-bg dark:bg-[#040504] min-h-screen text-gray-800 dark:text-gray-200 font-sans selection:bg-[#22c55e]/30 selection:text-gray-900 dark:selection:text-white transition-colors duration-300 relative overflow-hidden">
      
      {/* Global soft green patches */}
      <div className="fixed inset-0 pointer-events-none hidden dark:block z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#22c55e]/9 rounded-full blur-[130px]" />
        <div className="absolute top-[40%] left-[-10%] w-[600px] h-[600px] bg-[#10b981]/7 rounded-full blur-[160px]" />
        <div className="absolute bottom-[-10%] right-[20%] w-[400px] h-[400px] bg-[#4ade80]/5 rounded-full blur-[110px]" />
        <div className="absolute top-[55%] left-[30%] w-[280px] h-[280px] bg-[#22c55e]/4 rounded-full blur-[100px]" />
        {/* Faint diagonal accent lines */}
        <div className="absolute top-[30%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#22c55e]/5 to-transparent rotate-[-2deg] scale-110" />
        <div className="absolute top-[72%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4ade80]/4 to-transparent rotate-[1deg] scale-110" />

        {/* Animated stars going up */}
        {Array.from({ length: 70 }).map((_, i) => (
          <Star
            key={i}
            delay={Math.random() * 5}
            duration={10 + Math.random() * 10}
            size={4 + Math.random() * 2}
          />
        ))}
      </div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Education />
          <Skills />
          <Projects />
          <Articles />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
