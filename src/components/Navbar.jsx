import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { personalInfo } from '../data/personalInfo';
import { FaSun, FaMoon } from 'react-icons/fa';

const SCROLL_DURATION = 200; // ms — must match duration prop on <Link>

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [activeSection, setActiveSection] = useState('about');

  // While this ref is true, the scroll handler won't touch activeSection
  // so intermediate sections are never highlighted during programmatic scroll
  const isProgrammaticScroll = useRef(false);
  const programmaticScrollTimer = useRef(null);
  const scrollEndTimer = useRef(null);

  const navLinks = [
    { name: 'About', to: 'about' },
    { name: 'Education', to: 'education' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Articles', to: 'articles' },
    { name: 'Experience', to: 'experience' },
    { name: 'Contact', to: 'contact' },
  ];

  // Initialize theme
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    } else {
      setIsDark(true);
      document.documentElement.classList.add('dark');
      if (!savedTheme) localStorage.setItem('theme', 'dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  // Called when a nav link is clicked.
  // - Immediately sets the destination active section (200ms transition)
  // - Lock out scroll-based updates for the duration of the programmatic scroll
  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    isProgrammaticScroll.current = true;

    if (programmaticScrollTimer.current) clearTimeout(programmaticScrollTimer.current);
    // Unlock slightly after scroll completes so manual scroll detection resumes
    programmaticScrollTimer.current = setTimeout(() => {
      isProgrammaticScroll.current = false;
    }, SCROLL_DURATION + 100);
  };

  // Scroll handler — only updates active section when the user is
  // manually scrolling (not during a programmatic nav-click scroll)
  useEffect(() => {
    const getActiveSection = () => {
      const scrollPosition = window.scrollY + 120;
      for (const link of navLinks) {
        const el = document.getElementById(link.to);
        if (el) {
          const top = el.offsetTop;
          const bottom = top + el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < bottom) {
            return link.to;
          }
        }
      }
      return null;
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Skip section detection while a nav-click scroll is in progress
      if (isProgrammaticScroll.current) return;

      if (scrollEndTimer.current) clearTimeout(scrollEndTimer.current);
      scrollEndTimer.current = setTimeout(() => {
        const section = getActiveSection();
        if (section) setActiveSection(section);
      }, 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollEndTimer.current) clearTimeout(scrollEndTimer.current);
      if (programmaticScrollTimer.current) clearTimeout(programmaticScrollTimer.current);
    };
  }, []);

  const linkLabelClass = (isActive) =>
    isActive
      ? 'nav-link-glitter relative z-10 font-semibold'
      : 'relative z-10 text-gray-600 transition-colors duration-300 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white';

  return (
    <motion.header
      initial={false}
      animate={{ paddingTop: isScrolled ? 12 : 20, paddingBottom: isScrolled ? 12 : 20 }}
      transition={{ duration: 0.22 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300`}
    >
      {/* Glassmorphism background — fades in on scroll */}
      <motion.div
        aria-hidden
        initial={false}
        animate={{ opacity: isScrolled ? 1 : 0 }}
        transition={{ duration: 0.22 }}
        className="absolute inset-0 -z-10 bg-white/10 dark:bg-black/20 backdrop-blur-xl border-b border-white/20 dark:border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.1)]"
      />

      <div className="container mx-auto px-6 md:px-12 relative">
        <div className="flex items-center justify-between h-14">

          {/* Left: Logo */}
          <div className="flex-shrink-0">
            <Link
              to="home"
              smooth={true}
              duration={300}
              className="text-xl md:text-2xl font-heading font-bold flex items-center gap-2 cursor-pointer text-gray-900 dark:text-white"
            >
              <span className="text-[#22c55e]">&lt;&gt;</span>
              {personalInfo.name.split(' ')[0]}
            </Link>
          </div>

          {/* Center: Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-1 absolute left-1/2 transform -translate-x-1/2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                duration={SCROLL_DURATION}
                offset={-80}
                onClick={() => handleNavClick(link.to)}
                className="relative px-4 py-2 text-sm font-medium cursor-pointer transition-all duration-300 group"
              >
                <span className={linkLabelClass(activeSection === link.to)}>{link.name}</span>
                {activeSection === link.to && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full bg-gradient-to-r from-[#22c55e] via-[#bbf7d0] to-[#4ade80] shadow-[0_0_8px_rgba(74,222,128,0.6)]"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Right: Actions */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <button
              onClick={toggleTheme}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              className="theme-toggle-btn text-[#22c55e]"
            >
              {isDark ? <FaSun size={15} /> : <FaMoon size={15} />}
            </button>
            <Link
              to="contact"
              smooth={true}
              duration={SCROLL_DURATION}
              offset={-80}
              onClick={() => handleNavClick('contact')}
              className="px-8 py-3 rounded-full bg-white dark:bg-white text-black font-semibold text-sm border border-gray-300 dark:border-transparent shadow-sm dark:shadow-none cursor-pointer transition-all duration-300 hover:shadow-md dark:hover:shadow-white/20 hover:scale-105 active:scale-95"
            >
              Hire Me
            </Link>
          </div>

          {/* Mobile Menu Controls */}
          <div className="lg:hidden flex items-center gap-3 flex-shrink-0">
            <button
              onClick={toggleTheme}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              className="theme-toggle-btn text-[#22c55e]"
            >
              {isDark ? <FaSun size={14} /> : <FaMoon size={14} />}
            </button>
            <button
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="lg:hidden overflow-hidden glass mt-4 mx-4 rounded-xl"
      >
        <div className="px-6 py-4 flex flex-col space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={SCROLL_DURATION}
              offset={-80}
              onClick={() => { handleNavClick(link.to); setIsOpen(false); }}
              className="relative px-4 py-3 text-sm font-medium cursor-pointer transition-all duration-300 rounded-lg group"
            >
              <span className={linkLabelClass(activeSection === link.to)}>{link.name}</span>
              {activeSection === link.to && (
                <motion.div
                  layoutId="mobileActiveIndicator"
                  className="absolute left-0 top-0 bottom-0 w-1 rounded-r-full bg-gradient-to-b from-[#22c55e] via-[#bbf7d0] to-[#4ade80] shadow-[0_0_8px_rgba(74,222,128,0.5)]"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </Link>
          ))}
          <Link
            to="contact"
            smooth={true}
            duration={SCROLL_DURATION}
            offset={-80}
            onClick={() => { handleNavClick('contact'); setIsOpen(false); }}
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#22c55e] to-[#4ade80] text-black text-center transition-all duration-300 font-medium text-sm cursor-pointer hover:shadow-lg hover:shadow-[#22c55e]/30"
          >
            Hire Me
          </Link>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Navbar;
