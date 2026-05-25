import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaStar, FaChevronDown, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss } from 'react-icons/si';
import { Link } from 'react-scroll';
import { BiFontSize } from 'react-icons/bi';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const heroStats = [
    { value: '4+', label: 'Projects', sub: 'Completed' },
    { value: '10+', label: 'Technologies', sub: null },
    { value: '11+', label: 'Months', sub: 'Experience' },
    { value: '🇱🇰', label: 'Based in', sub: 'Sri Lanka' },
  ];

  return (
    <section id="home" className="relative isolate min-h-[90vh] lg:min-h-screen flex items-center justify-center overflow-hidden">

      {/* Section back layer — glows & design elements */}
      <div className="absolute inset-0 -z-20 pointer-events-none overflow-hidden" aria-hidden>
        {/* Large Decorative Circle */}
        <div className="absolute left-[-28%] md:left-[-15%] top-[20%] aspect-square w-[min(130%,750px)] max-w-none -translate-y-1/2 rounded-full border border-white/5 bg-gradient-to-br from-white/[0.02] to-transparent shadow-[inset_0_0_60px_rgba(255,255,255,0.02)]" />
        <div className="absolute -right-24 top-10 h-[26rem] w-[26rem] rounded-full bg-[#22c55e]/12 blur-[140px] hidden lg:block" />
        <div className="absolute right-16 top-0 h-24 w-24 rounded-full bg-[#22c55e]/20 blur-[40px] hidden lg:block" />
        
        {/* Subtle Glows */}
        <div className="absolute -left-24 top-[-5%] h-[min(70vh,520px)] w-[min(70vh,520px)] rounded-full bg-[#061208]/50 blur-[80px]" />
        <div className="absolute top-[20%] right-[-10%] w-[50%] h-[60%] lg:w-[40%] rounded-full bg-[#0d2f13]/16 blur-[120px]" />
      </div>

      <div className="relative w-full max-w-[1360px] mx-auto px-6 md:px-12 lg:pl-4 xl:pl-6">
        {/* Invisible card container for hero content */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-10 pt-28 pb-16 lg:pb-12">

          {/* ── LEFT PANEL ────────────────────────────────── */}
          <div className="relative lg:col-span-7 overflow-visible pl-4 md:pl-8 lg:pl-12">

          <motion.div
            className="relative z-10 flex flex-col justify-center text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="relative z-10 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#22c55e]/25 bg-[#0a0a0a]/90 text-gray-300 text-xs md:text-sm font-medium mb-7 w-fit shadow-[0_0_20px_rgba(0,0,0,0.4)]"
          >
            <FaStar className="text-[#4ade80] shrink-0" size={12} />
            <span>Full Stack Developer <span className="mx-2 text-[#4ade80]">|</span> Project Management Enthusiast</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={itemVariants}
            className="relative z-10 text-[2.35rem] sm:text-5xl lg:text-[3.25rem] xl:text-[3.5rem] font-heading font-bold mb-6 text-white leading-[1.12] tracking-tight"
          >
            <span style={{fontFamily:'Inter'}}>Lochithya</span>
            <br />
            <span className="text-[#349E5D]" style={{fontFamily:'Inter', fontSize:'75px'}}>Hettiarachchi</span>
          </motion.h1>

          {/* Bio */}
          <motion.p
            variants={itemVariants}
            className="relative z-10 text-gray-400 max-w-lg mb-9 text-[0.9375rem] md:text-base leading-relaxed"
          >
            Building modern, scalable web applications with React, JavaScript, and cutting-edge technologies. Transforming ideas into exceptional digital experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="relative z-10 mb-14 flex flex-wrap items-center gap-4">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="inline-flex items-center justify-center px-9 py-3.5 rounded-full bg-white text-black font-semibold text-sm tracking-wide hover:bg-gray-100 hover:shadow-[0_0_28px_rgba(255,255,255,0.25)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer"
            >
              Get in Touch
            </Link>
            <a
              href="/resume/Lochithya_Hettiarachchi_Resume.pdf"
              download="Lochithya_Hettiarachchi_Resume.pdf"
              className="inline-flex items-center justify-center gap-2 px-9 py-3.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/40 text-white font-semibold text-sm tracking-wide hover:bg-white/20 hover:border-white/50 hover:shadow-[0_8px_32px_0_rgba(255,255,255,0.28)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </a>
          </motion.div>

          {/* Stats — Projects & Technologies only */}
          <motion.div
            variants={itemVariants}
            className="relative z-10 flex flex-wrap items-center gap-4 md:gap-8 border-t border-white/[0.06] pt-8"
          >
            {heroStats.map((stat, index) => (
              <div
                key={stat.label}
                className={`${index > 0 ? 'pl-6 md:pl-10 border-l border-[#22c55e]/35' : ''}`}
              >
                <h3 className="text-3xl md:text-[2rem] font-bold text-[#4ade80] mb-1.5 leading-none tabular-nums">
                  {stat.value}
                </h3>
                <p className="text-[10px] md:text-[11px] text-gray-500 uppercase tracking-[0.14em] leading-snug font-medium">
                  {stat.label}
                  {stat.sub && (
                    <>
                      <br />
                      {stat.sub}
                    </>
                  )}
                </p>
              </div>
            ))}
          </motion.div>
          </motion.div>
        </div>

        {/* ── RIGHT PANEL — profile + animated border ── */}
        <motion.div
          className="relative z-10 lg:col-span-5 flex justify-center lg:justify-end lg:pr-8"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
        >
          <div className="relative w-full max-w-[360px] sm:max-w-[420px] lg:max-w-[450px]">
            {/* Ambient glow behind portrait */}
            <div
              className="pointer-events-none absolute -inset-4 rounded-[2rem] bg-[#22c55e]/8 blur-3xl opacity-50"
              aria-hidden
            />

            <div className="hero-profile-border-wrap w-full">
              <div className="hero-profile-border-spinner hero-profile-border-spinner--forward" aria-hidden>
                <div className="hero-profile-border-beam" />
              </div>
              <div className="hero-profile-border-spinner hero-profile-border-spinner--reverse" aria-hidden>
                <div className="hero-profile-border-beam hero-profile-border-beam--opposite" />
              </div>

              <div className="relative z-10 overflow-hidden rounded-[1.35rem] bg-[#030303]">
                <div className="relative aspect-[4/5] w-full max-h-[calc(100%-20px)]">
                  <img
                    src="/images/hero/profile.jpeg"
                    alt="Profile"
                    className="w-full h-full object-cover object-center"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />

                  {/* Subtle edge blend */}
                  <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#030303]/25 to-transparent pointer-events-none" />
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#030303]/70 to-transparent pointer-events-none" />
                </div>

                {/* Tech icons bar */}
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-4 px-5 py-2.5 rounded-full border border-[#4ade80]/25 bg-black/70 backdrop-blur-md shadow-[0_0_30px_rgba(74,222,128,0.2)] z-10">
                  <FaReact className="text-[#4ade80] text-lg hover:scale-125 transition-transform cursor-pointer" />
                  <FaNodeJs className="text-[#4ade80] text-lg hover:scale-125 transition-transform cursor-pointer" />
                  <SiNextdotjs className="text-[#4ade80] text-lg hover:scale-125 transition-transform cursor-pointer" />
                  <SiTailwindcss className="text-[#4ade80] text-lg hover:scale-125 transition-transform cursor-pointer" />
                  <FaGithub className="text-[#4ade80] text-lg hover:scale-125 transition-transform cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      </div>

      {/* Down arrow */}
      <div className="absolute bottom-[27px] left-1/2 -translate-x-1/2 z-20">
        <Link to="about" smooth={true} duration={500} className="cursor-pointer block">
          <FaChevronDown className="text-[#22c55e] text-lg animate-bounce opacity-100 hover:opacity-80 transition-opacity" />
        </Link>
      </div>

    </section>
  );
};

export default Hero;
