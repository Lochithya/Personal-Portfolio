import React, { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaGithub,
  FaExternalLinkAlt,
  FaChevronLeft,
  FaChevronRight,
  FaGlobe,
  FaLayerGroup,
  FaCode,
  FaTh,
} from 'react-icons/fa';
import { SectionTitle } from './ui/SectionTitle';
import { SectionDecor } from './ui/SectionDecor';
import { projects } from '../data/projects';

const CARDS_PER_PAGE = 3;

const filters = [
  { id: 'All', label: 'All', icon: FaTh },
  { id: 'Web Development', label: 'Web Apps', icon: FaGlobe },
  { id: 'UI/UX Design', label: 'UI/UX', icon: FaLayerGroup },
  { id: 'Other', label: 'Full Stack', icon: FaCode },
];

const categoryBadge = {
  'Web Development': 'Web Apps',
  'UI/UX Design': 'UI/UX',
  Other: 'Other',
};

const ProjectCard = ({ project }) => {
  const [imgError, setImgError] = useState(false);
  const imageSrc = project.image;

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0c0c0c]/90 shadow-[0_12px_40px_rgba(0,0,0,0.45)] backdrop-blur-sm">
      <div className="relative h-52 overflow-hidden bg-[#111] sm:h-56">
        {!imgError && imageSrc ? (
          <img
            src={imageSrc}
            alt={project.title}
            className="h-full w-full object-cover"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#1a1a2e] via-[#0f0f14] to-[#0a0a0a]">
            <span className="px-4 text-center font-heading text-sm text-gray-500">{project.title}</span>
          </div>
        )}

        <span className="absolute left-3 top-3 rounded-full border border-white/15 bg-black/70 px-4 py-1.5 text-xs font-medium text-gray-200 backdrop-blur-sm">
          {categoryBadge[project.category] || project.category}
        </span>

        <div className="absolute bottom-3 right-3 flex gap-2">
          <a
            href={project.demo || '#'}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => {
              if (!project.demo || project.demo === '#') {
                e.preventDefault();
              }
            }}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-black/75 text-gray-200 transition-colors hover:border-[#22c55e]/40 hover:text-[#4ade80]"
            aria-label={`${project.title} live demo`}
          >
            <FaExternalLinkAlt className="text-sm" />
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-black/75 text-gray-200 transition-colors hover:border-[#22c55e]/40 hover:text-[#4ade80]"
            aria-label={`${project.title} GitHub`}
          >
            <FaGithub className="text-sm" />
          </a>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 md:p-6">
        <h3 className="mb-2 font-heading text-lg font-bold text-white md:text-xl">{project.title}</h3>
        <p className="mb-4 line-clamp-3 flex-1 text-sm leading-relaxed text-gray-400">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tech.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-[#22c55e]/35 bg-[#22c55e]/5 px-2.5 py-0.5 text-[11px] font-medium text-gray-200"
            >
              {tech}
            </span>
          ))}
        </div>

        {project.highlight && (
          <p className="mt-4 text-sm font-medium text-[#4ade80]">
            {project.highlight.split('|').map((part, index) => (
              <React.Fragment key={index}>
                {part.trim()}
                {index < project.highlight.split('|').length - 1 && (
                  <span className="mx-2 text-[#4ade80]/60">|</span>
                )}
              </React.Fragment>
            ))}
          </p>
        )}
      </div>
    </article>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredProjects = useMemo(
    () => (filter === 'All' ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  );

  const maxIndex = Math.max(0, filteredProjects.length - CARDS_PER_PAGE);

  const visibleProjects = filteredProjects.slice(
    currentIndex,
    currentIndex + CARDS_PER_PAGE
  );

  useEffect(() => {
    setCurrentIndex(0);
  }, [filter]);

  useEffect(() => {
    if (currentIndex > maxIndex) setCurrentIndex(Math.max(0, maxIndex));
  }, [currentIndex, maxIndex]);

  const goPrev = () => setCurrentIndex((p) => Math.max(0, p - 1));
  const goNext = () => setCurrentIndex((p) => Math.min(maxIndex, p + 1));

  return (
    <section id="projects" className="relative overflow-hidden py-12 transition-colors duration-300">
      <SectionDecor flip />
      <div className="container relative z-0 mx-auto px-6 md:px-12">
        <SectionTitle
          title="Featured Projects"
          subtitle="A showcase of my recent work and technical projects."
        />

        {/* Filter pills */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {filters.map(({ id, label, icon: Icon }) => {
            const active = filter === id;
            return (
              <button
                key={id}
                type="button"
                onClick={() => setFilter(id)}
                className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                  active
                    ? 'bg-[#22c55e] text-black shadow-[0_0_28px_rgba(34,197,94,0.45)]'
                    : 'border border-white/10 bg-[#141414] text-gray-300 hover:border-white/20 hover:text-white'
                }`}
              >
                <Icon className={`text-sm ${active ? 'text-black' : 'text-gray-400'}`} />
                {label}
              </button>
            );
          })}
        </div>

        {/* Carousel */}
        <div className="relative mx-auto max-w-[85rem]">
          {/* Desktop: Arrows on sides */}
          <div className="hidden md:flex items-center gap-6 md:gap-8">
            {/* Left Arrow */}
            <button
              type="button"
              onClick={goPrev}
              disabled={currentIndex === 0}
              className="flex-shrink-0 flex h-11 w-11 md:h-12 md:w-12 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white backdrop-blur-md transition-all hover:border-[#22c55e] hover:bg-[#22c55e]/20 disabled:pointer-events-none disabled:opacity-30"
              aria-label="Previous projects"
            >
              <FaChevronLeft />
            </button>

            {/* Cards Container */}
            <motion.div
              layout
              className="flex-1 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7"
            >
              <AnimatePresence mode="popLayout">
                {visibleProjects.map((project) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.95, x: 30 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.95, x: -30 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    key={project.id}
                  >
                    <ProjectCard project={project} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Right Arrow */}
            <button
              type="button"
              onClick={goNext}
              disabled={currentIndex >= maxIndex}
              className="flex-shrink-0 flex h-11 w-11 md:h-12 md:w-12 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white backdrop-blur-md transition-all hover:border-[#22c55e] hover:bg-[#22c55e]/20 disabled:pointer-events-none disabled:opacity-30"
              aria-label="Next projects"
            >
              <FaChevronRight />
            </button>
          </div>

          {/* Mobile: Cards full width, arrows below */}
          <div className="md:hidden">
            <motion.div
              layout
              className="grid grid-cols-1 gap-6"
            >
              <AnimatePresence mode="popLayout">
                {visibleProjects.map((project) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -20 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    key={project.id}
                  >
                    <ProjectCard project={project} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Mobile Navigation Arrows */}
            {maxIndex > 0 && (
              <div className="mt-6 flex items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={goPrev}
                  disabled={currentIndex === 0}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white backdrop-blur-md transition-all hover:border-[#22c55e] hover:bg-[#22c55e]/20 disabled:pointer-events-none disabled:opacity-30"
                  aria-label="Previous projects"
                >
                  <FaChevronLeft />
                </button>
                <span className="text-sm text-gray-400">
                  {currentIndex + 1} / {maxIndex + 1}
                </span>
                <button
                  type="button"
                  onClick={goNext}
                  disabled={currentIndex >= maxIndex}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white backdrop-blur-md transition-all hover:border-[#22c55e] hover:bg-[#22c55e]/20 disabled:pointer-events-none disabled:opacity-30"
                  aria-label="Next projects"
                >
                  <FaChevronRight />
                </button>
              </div>
            )}
          </div>

          {/* Pagination dots */}
          {maxIndex > 0 && (
            <div className="mt-10 flex items-center justify-center gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setCurrentIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === currentIndex ? 'w-8 bg-[#4ade80]' : 'w-2 bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
