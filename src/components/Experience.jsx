import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from './ui/SectionTitle';
import { SectionDecor } from './ui/SectionDecor';
import { CircleArcAccent } from './ui/CircleArcAccent';
import { experience } from '../data/experience';
import {
  FaBriefcase,
  FaMedal,
  FaMapMarkerAlt,
  FaClock,
  FaStar,
  FaUserTie,
  FaArrowRight,
  FaCheckCircle,
} from 'react-icons/fa';

const typeConfig = {
  internship: {
    icon: FaBriefcase,
    label: 'Internship',
    color: 'from-emerald-500 to-green-400',
    glow: 'shadow-[0_0_20px_rgba(34,197,94,0.35)]',
    badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
  },
  leadership: {
    icon: FaUserTie,
    label: 'Leadership',
    color: 'from-sky-500 to-cyan-400',
    glow: 'shadow-[0_0_20px_rgba(56,189,248,0.35)]',
    badge: 'bg-sky-500/10 text-sky-400 border-sky-500/30',
  },
  achievement: {
    icon: FaMedal,
    label: 'Achievement',
    color: 'from-amber-500 to-yellow-400',
    glow: 'shadow-[0_0_20px_rgba(245,158,11,0.35)]',
    badge: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
  },
};

const getConfig = (exp) => {
  const title = exp.title.toLowerCase();
  if (title.includes('intern')) return typeConfig.internship;
  if (title.includes('prefect') || title.includes('leader') || title.includes('head'))
    return typeConfig.leadership;
  return typeConfig.achievement;
};

const TimelineCard = ({ exp, index }) => {
  const cfg = getConfig(exp);
  const Icon = cfg.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "50px" }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-8">
        {/* Timeline dot and connector */}
        <div className="flex md:flex-col items-start md:items-center gap-4 md:gap-0 flex-shrink-0">
          {/* Dot */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, margin: "50px" }}
            transition={{ duration: 0.4, delay: index * 0.15 + 0.1 }}
            className={`w-12 h-12 rounded-full bg-gradient-to-br ${cfg.color} ${cfg.glow} flex items-center justify-center z-10 flex-shrink-0 ring-4 ring-[#0c0c0c]`}
          >
            <Icon className="text-white text-lg" />
          </motion.div>
          
          {/* Vertical connector line (hidden on mobile, shown between cards on md+) */}
          {index < experience.length - 1 && (
            <div className="hidden md:block absolute left-[23px] top-12 h-24 w-0.5 bg-gradient-to-b from-white/20 to-transparent" />
          )}
        </div>

        {/* Card content */}
        <div className="flex-1 group md:pt-1">
          <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.015] backdrop-blur-[32px] shadow-[0_8px_32px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.05)] transition-all duration-500 hover:border-white/[0.12] hover:bg-white/[0.025] hover:shadow-[0_12px_40px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.06)] hover:-translate-y-1 p-6 md:p-7">
            
            {/* Top accent gradient bar */}
            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cfg.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            
            {/* Left accent bar */}
            <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${cfg.color} opacity-40 group-hover:opacity-100 transition-opacity duration-300`} />

            {/* Content grid */}
            <div className="space-y-4">
              {/* Header section */}
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div className="flex-1">
                    <span className={`inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-widest uppercase border rounded-full px-3 py-1 mb-3 ${cfg.badge}`}>
                      <FaStar className="text-[8px]" />
                      {cfg.label}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">{exp.title}</h3>
                  </div>
                  
                  {/* Time badge */}
                  <motion.div 
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "50px" }}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
                    className="flex-shrink-0 inline-flex items-center gap-2 text-xs font-medium text-gray-300 bg-white/[0.06] border border-white/[0.12] rounded-full px-3.5 py-1.5 backdrop-blur-sm"
                  >
                    <FaClock className="text-[#4ade80] text-xs" />
                    {exp.period}
                  </motion.div>
                </div>

                {/* Company and duration */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-1">
                  <div className="flex items-center gap-1.5">
                    <FaMapMarkerAlt className="text-[#4ade80] text-sm flex-shrink-0" />
                    <p className="text-sm font-semibold text-[#4ade80]">{exp.company}</p>
                  </div>
                  <div className="hidden sm:block w-1 h-1 rounded-full bg-white/20" />
                  <span className="text-xs text-gray-400 font-medium">{exp.duration}</span>
                </div>
              </div>

              {/* Description with better typography */}
              <div className="pt-2 space-y-2">
                <div className="flex items-start gap-2">
                  <FaCheckCircle className="text-[#22c55e]/60 text-xs mt-1 flex-shrink-0" />
                  <p className="text-sm leading-relaxed text-gray-300">{exp.description}</p>
                </div>
              </div>

              {/* Subtle hover indicator */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.3 }}
                whileHover={{ opacity: 0.6 }}
                transition={{ duration: 0.3 }}
                className={`hidden sm:flex items-center gap-2 text-xs text-gray-500 group-hover:text-[#4ade80] mt-3 transition-colors duration-300`}
              >
              </motion.div>
            </div>

            {/* Animated background glow on hover */}
            <motion.div 
              className={`pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${cfg.color}`}
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.02 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-12 relative overflow-hidden transition-colors duration-300">
      <SectionDecor />
      <CircleArcAccent side="left" />

      <div className="container mx-auto px-6 md:px-12 relative z-0">
        <SectionTitle
          title="Experience & Achievements"
          subtitle="My professional journey and key milestones."
        />

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8 md:space-y-12">
            {experience.map((exp, index) => (
              <TimelineCard key={exp.id} exp={exp} index={index} />
            ))}
          </div>
        </div>

        {/* Enhanced Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-20 max-w-4xl mx-auto"
        >
          <div className="mb-8">
            <h4 className="text-center text-sm font-semibold text-gray-400 uppercase tracking-widest">Quick Stats</h4>
          </div>
          
          <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            {[
              { value: '11+', label: 'Months Industry Experience', icon: FaBriefcase, color: 'from-emerald-500 to-green-400' },
              { value: '1', label: 'Leadership Role', icon: FaUserTie, color: 'from-sky-500 to-cyan-400' },
              { value: '2+', label: 'Key Milestones', icon: FaMedal, color: 'from-amber-500 to-yellow-400' },
            ].map(({ value, label, icon: Icon, color }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.85, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "50px" }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ translateY: -8, transition: { duration: 0.3 } }}
                className="group relative"
              >
                <div className="relative h-full overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.015] backdrop-blur-[32px] shadow-[0_8px_32px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.05)] p-4 sm:p-6 md:p-7 transition-all duration-500 hover:border-white/[0.12] hover:bg-white/[0.025] hover:shadow-[0_12px_40px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.06)]">
                  
                  {/* Top accent bar */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  
                  {/* Icon container */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "50px" }}
                    transition={{ duration: 0.5, delay: i * 0.15, ease: "backOut" }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full ${
                      i === 0 ? 'bg-gradient-to-br from-emerald-500 to-green-400' :
                      i === 1 ? 'bg-gradient-to-br from-sky-500 to-cyan-400' :
                      'bg-gradient-to-br from-amber-500 to-yellow-400'
                    } flex items-center justify-center mb-3 sm:mb-4 transition-all duration-300 mx-auto`}
                  >
                    <Icon className={`text-base sm:text-lg text-white`} />
                  </motion.div>

                  {/* Stats content */}
                  <div className="space-y-2 text-center">
                    <motion.span 
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: "50px" }}
                      transition={{ duration: 0.5, delay: i * 0.15 + 0.05, ease: "easeOut" }}
                      className="block text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-heading"
                    >
                      {value}
                    </motion.span>
                    <p className="text-[10px] sm:text-xs md:text-sm text-gray-400 font-medium leading-snug">{label}</p>
                  </div>

                  {/* Background glow */}
                  <motion.div 
                    className={`pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${color}`}
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.02 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
