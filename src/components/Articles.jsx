import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMedium, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { SectionTitle } from './ui/SectionTitle';
import { SectionDecor } from './ui/SectionDecor';
import { articles } from '../data/articles';

const CARDS_PER_PAGE = 3;

const ArticleCard = ({ article }) => {
  const [imgError, setImgError] = useState(false);
  const imageSrc = article.image;

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0c0c0c]/90 shadow-[0_12px_40px_rgba(0,0,0,0.45)] backdrop-blur-sm">
      <div className="relative h-52 overflow-hidden bg-[#111] sm:h-56 flex items-center justify-center">
        {!imgError && imageSrc ? (
          <img
            src={imageSrc}
            alt={article.title}
            className="h-full w-full object-cover"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#1a1a2e] via-[#0f0f14] to-[#0a0a0a]">
            <FaMedium size={64} className="text-gray-700" />
          </div>
        )}

        <span className="absolute left-3 top-3 rounded-full border border-white/15 bg-black/70 px-4 py-1.5 text-xs font-medium text-gray-200 backdrop-blur-sm">
          Article
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 md:p-6">
        <h3 className="mb-2 font-heading text-lg font-bold text-white md:text-xl line-clamp-2">{article.title}</h3>
        <p className="mb-4 line-clamp-3 flex-1 text-sm leading-relaxed text-gray-400">
          {article.description}
        </p>

        <a
          href={article.url}
          target="_blank"
          rel="noreferrer"
          className="mx-auto inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-[#4ade80] border border-white/10 bg-white/5 backdrop-blur-md transition-all hover:border-[#22c55e]/50 hover:bg-[#22c55e]/20 hover:text-[#22c55e] hover:shadow-[0_0_18px_rgba(34,197,94,0.25)]"
        >
          Read on Medium
          <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </article>
  );
};

const Articles = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const maxIndex = Math.max(0, Math.ceil(articles.length / CARDS_PER_PAGE) - 1);

  const visibleArticles = useMemo(() => {
    const start = currentIndex * CARDS_PER_PAGE;
    return articles.slice(start, start + CARDS_PER_PAGE);
  }, [currentIndex]);

  const goPrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const goNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <section id="articles" className="relative overflow-hidden py-12 transition-colors duration-300">
      <SectionDecor flip />
      <div className="pointer-events-none absolute inset-0 hidden lg:block -z-10">
        <div className="absolute left-[-20%] top-[15%] aspect-square w-[min(100%,550px)] rounded-full border border-white/5 bg-gradient-to-br from-white/[0.02] to-transparent shadow-[inset_0_0_60px_rgba(255,255,255,0.02)]" />
      </div>
      <div className="container relative z-0 mx-auto px-6 md:px-12">
        <SectionTitle
          title="Technical Writing"
          subtitle="Sharing my knowledge and thoughts on software engineering."
        />

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
              aria-label="Previous articles"
            >
              <FaChevronLeft />
            </button>

            {/* Cards Container */}
            <motion.div
              layout
              className="flex-1 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8"
            >
              <AnimatePresence mode="popLayout">
                {visibleArticles.map((article) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.95, x: 30 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.95, x: -30 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    key={article.id}
                  >
                    <ArticleCard article={article} />
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
              aria-label="Next articles"
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
                {visibleArticles.map((article) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -20 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    key={article.id}
                  >
                    <ArticleCard article={article} />
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
                  aria-label="Previous articles"
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
                  aria-label="Next articles"
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

export default Articles;
