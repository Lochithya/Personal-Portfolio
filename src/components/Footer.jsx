import React from 'react';
import { FaGithub, FaLinkedin, FaMedium, FaHeart, FaEnvelope, FaMapMarkerAlt, FaCode, FaBriefcase, FaUser, FaArrowRight } from 'react-icons/fa';
import { personalInfo } from '../data/personalInfo';
import { Link } from 'react-scroll';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-gray-200 dark:border-[#22c55e]/15 pt-12 sm:pt-16 pb-8 transition-colors duration-300">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#22c55e]/35 to-transparent" aria-hidden />
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-12">
          
          {/* Brand & Bio */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-heading font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
              {personalInfo.name}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 transition-colors duration-300 leading-relaxed">
              {personalInfo.tagline}
            </p>
            <div className="flex space-x-4">
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-[#22c55e] hover:text-white dark:hover:bg-[#22c55e] dark:hover:text-white transition-all duration-300">
                <FaGithub />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-[#0a66c2] hover:text-white dark:hover:bg-[#0a66c2] dark:hover:text-white transition-all duration-300">
                <FaLinkedin />
              </a>
              <a href={personalInfo.medium} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all duration-300">
                <FaMedium />
              </a>
            </div>
          </div>

          {/* Navigation and Socials side by side on mobile */}
          <div className="grid grid-cols-2 gap-8 sm:gap-10 lg:col-span-2 lg:grid-cols-2">
            {/* Quick Navigation */}
            <div>
              <h4 className="text-gray-900 dark:text-white font-semibold mb-8 uppercase tracking-wider text-sm transition-colors duration-300 flex items-center gap-2">
                <FaCode className="text-[#22c55e]" /> Navigation
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link to="about" smooth={true} duration={500} className="text-gray-600 dark:text-gray-400 hover:text-[#22c55e] dark:hover:text-[#22c55e] cursor-pointer transition-colors text-sm flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-600 group-hover:bg-[#22c55e] transition-colors"></span>
                    About
                  </Link>
                </li>
                <li>
                  <Link to="education" smooth={true} duration={500} className="text-gray-600 dark:text-gray-400 hover:text-[#22c55e] dark:hover:text-[#22c55e] cursor-pointer transition-colors text-sm flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-600 group-hover:bg-[#22c55e] transition-colors"></span>
                    Education
                  </Link>
                </li>
                <li>
                  <Link to="skills" smooth={true} duration={500} className="text-gray-600 dark:text-gray-400 hover:text-[#22c55e] dark:hover:text-[#22c55e] cursor-pointer transition-colors text-sm flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-600 group-hover:bg-[#22c55e] transition-colors"></span>
                    Skills
                  </Link>
                </li>
                <li>
                  <Link to="projects" smooth={true} duration={500} className="text-gray-600 dark:text-gray-400 hover:text-[#22c55e] dark:hover:text-[#22c55e] cursor-pointer transition-colors text-sm flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-600 group-hover:bg-[#22c55e] transition-colors"></span>
                    Projects
                  </Link>
                </li>
                <li>
                  <Link to="articles" smooth={true} duration={500} className="text-gray-600 dark:text-gray-400 hover:text-[#22c55e] dark:hover:text-[#22c55e] cursor-pointer transition-colors text-sm flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-600 group-hover:bg-[#22c55e] transition-colors"></span>
                    Articles
                  </Link>
                </li>
                <li>
                  <Link to="experience" smooth={true} duration={500} className="text-gray-600 dark:text-gray-400 hover:text-[#22c55e] dark:hover:text-[#22c55e] cursor-pointer transition-colors text-sm flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-600 group-hover:bg-[#22c55e] transition-colors"></span>
                    Experience
                  </Link>
                </li>
                <li>
                  <Link to="contact" smooth={true} duration={500} className="text-gray-600 dark:text-gray-400 hover:text-[#22c55e] dark:hover:text-[#22c55e] cursor-pointer transition-colors text-sm flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-600 group-hover:bg-[#22c55e] transition-colors"></span>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Socials */}
            <div>
              <h4 className="text-gray-900 dark:text-white font-semibold mb-8 uppercase tracking-wider text-sm transition-colors duration-300 flex items-center gap-2">
                <FaBriefcase className="text-[#22c55e]" /> Socials
              </h4>
              <ul className="space-y-4 mb-10">
                <li>
                  <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm flex items-center justify-center gap-2 group">
                    <FaGithub className="text-lg" />
                    <span className="hidden sm:inline">GitHub Profile</span>
                  </a>
                </li>
                <li>
                  <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-[#0a66c2] transition-colors text-sm flex items-center justify-center gap-2 group">
                    <FaLinkedin className="text-lg" />
                    <span className="hidden sm:inline">LinkedIn Profile</span>
                  </a>
                </li>
                <li>
                  <a href={personalInfo.medium} target="_blank" rel="noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm flex items-center justify-center gap-2 group">
                    <FaMedium className="text-lg" />
                    <span className="hidden sm:inline">Medium Articles</span>
                  </a>
                </li>
              </ul>

              {/* Contact section below socials */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
                <h4 className="text-gray-900 dark:text-white font-semibold mb-4 uppercase tracking-wider text-xs transition-colors duration-300">
                  Contact
                </h4>
                <a href={`mailto:${personalInfo.email}`} className="text-gray-600 dark:text-gray-400 hover:text-[#22c55e] dark:hover:text-[#22c55e] transition-colors text-sm flex items-center justify-center gap-2 group">
                  <FaEnvelope className="text-lg text-[#22c55e]" />
                  <span className="hidden sm:inline">{personalInfo.email}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 dark:text-gray-500 text-sm transition-colors duration-300">
              &copy; {currentYear} {personalInfo.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-gray-500 dark:text-gray-500 text-sm transition-colors duration-300">
              Built with <FaHeart className="text-red-500" /> and React
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
