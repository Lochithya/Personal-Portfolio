import React from 'react';

/**
 * Subtle green patches & accent lines for section backgrounds.
 * @param {boolean} flip - mirror patches to the opposite side (alternate sections)
 */
export const SectionDecor = ({ flip = false }) => {
  const patchPrimary = flip ? 'right-[4%] md:right-[6%]' : 'left-[3%] md:left-[5%]';
  const patchSecondary = flip ? 'left-[6%] md:left-[10%]' : 'right-[5%] md:right-[8%]';
  const lineVertical = flip ? 'right-[10%] md:right-[14%]' : 'left-[5%] md:left-[8%]';
  const corner = flip ? 'right-6 md:right-12' : 'left-6 md:left-12';

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10" aria-hidden>
      {/* Soft green patches */}
      <div
        className={`absolute top-[18%] ${patchPrimary} h-44 w-44 rounded-full bg-[#22c55e]/8 blur-[72px] md:h-52 md:w-52`}
      />
      <div
        className={`absolute bottom-[12%] ${patchSecondary} h-32 w-32 rounded-full bg-[#4ade80]/6 blur-[64px] md:h-40 md:w-40`}
      />

      {/* Horizontal accent lines removed as per request */}

      {/* Vertical hairline */}
      <div
        className={`absolute top-[22%] bottom-[28%] ${lineVertical} hidden w-px bg-gradient-to-b from-transparent via-[#22c55e]/14 to-transparent lg:block`}
      />

      {/* Corner bracket accents */}
      <div className={`absolute top-12 ${corner} h-px w-10 bg-gradient-to-r from-[#22c55e]/20 to-transparent md:w-14`} />
      <div className={`absolute top-12 ${corner} h-10 w-px bg-gradient-to-b from-[#22c55e]/20 to-transparent md:h-14`} />
    </div>
  );
};
