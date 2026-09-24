import { useState } from 'react'
import profileImg from '../assets/manuth-profile.jpg'

export default function Hero() {
  const [imgError, setImgError] = useState(false)

  return (
    <section
      id="top"
      aria-label="Introduction &amp; Hero"
      className="relative min-h-[calc(100vh-60px)] min-h-[calc(100svh-60px)] border-b border-norse/30 px-4 sm:px-8 lg:px-12 pt-3 sm:pt-4 pb-3 sm:pb-4 flex flex-col justify-between overflow-hidden"
    >
      {/* Editorial registration cross marks in corners */}
      <span aria-hidden="true" className="absolute top-2 left-3 select-none font-mono text-xs text-norse/40">
        +
      </span>
      <span aria-hidden="true" className="absolute top-2 right-3 select-none font-mono text-xs text-norse/40">
        +
      </span>
      <span aria-hidden="true" className="absolute bottom-2 left-3 select-none font-mono text-xs text-norse/40">
        +
      </span>
      <span aria-hidden="true" className="absolute bottom-2 right-3 select-none font-mono text-xs text-norse/40">
        +
      </span>

      {/* Top Technical Metadata Bar */}
      <div className="w-full border-b border-norse/25 pb-2.5 sm:pb-3">
        <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-[11px] sm:text-xs uppercase tracking-wider text-norse">
          <div className="flex items-center gap-3 anim-entrance">
            <span className="inline-block h-2 w-2 bg-pumpkin"></span>
            <span className="font-semibold text-paper/90">01 / INTRO</span>
            <span className="text-norse/40 select-none">|</span>
            <span>MW // 2026</span>
          </div>

          <div className="flex items-center gap-4 text-norse/70 anim-fade">
            <span className="hidden md:inline">SYSTEM: ACTIVE</span>
            <span className="hidden sm:inline">GRID: 58/42 ASYM</span>
            <span className="text-paper/60">SYS.ID: MW-PORTFOLIO</span>
          </div>
        </div>
      </div>

      {/* Main Asymmetric Composition */}
      <div className="flex-1 pt-3 sm:pt-4 lg:pt-5 pb-3 sm:pb-4">
        {/* On mobile: Flex column with explicit order. On desktop: 2-track asymmetric grid (minmax(0,1fr) left / auto right) */}
        <div className="flex flex-col lg:grid lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-10 xl:gap-12 2xl:gap-16 lg:items-start">
          
          {/* ========================================================
              LEFT COLUMN (65–70% on desktop — open, wide & stretched)
             ======================================================== */}
          <div className="contents lg:block min-w-0">
            
            {/* 1. Name — Enlarged dominant poster typography */}
            <div className="order-1 w-full min-w-0 anim-entrance">
              <h1 className="font-heading text-5xl sm:text-7xl md:text-8xl lg:text-[clamp(6.5rem,7.8vw,8.5rem)] xl:text-[clamp(7.5rem,8.6vw,10.5rem)] 2xl:text-[clamp(9rem,9.8vw,12rem)] tracking-tight text-pumpkin uppercase leading-[0.84] select-none">
                MANUTH<br />WILEGODA
              </h1>
            </div>

            {/* 2. Main Statement — Stays on a single line on desktop, extending towards portrait */}
            <div className="order-2 w-full min-w-0 mt-6 sm:mt-7 lg:mt-7 xl:mt-8 anim-entrance anim-delay-1">
              <div className="relative border-l-2 border-pumpkin pl-4 sm:pl-5 py-0.5">
                <p className="font-heading text-lg sm:text-xl lg:text-[clamp(1.35rem,1.85vw,1.68rem)] xl:text-[clamp(1.8rem,2.28vw,2.35rem)] 2xl:text-[clamp(2.45rem,2.65vw,3.15rem)] tracking-tight text-paper uppercase leading-tight whitespace-normal lg:whitespace-nowrap break-words">
                  I build practical software and turn ideas into working systems.
                </p>
              </div>
            </div>

            {/* 3. Role Metadata — Elevated visual presence with square technical containers */}
            <div className="order-3 w-full min-w-0 mt-6 sm:mt-7 lg:mt-8 xl:mt-9 anim-entrance anim-delay-2">
              <div className="flex flex-wrap items-center gap-2 sm:gap-4 lg:gap-5 font-mono text-[11px] sm:text-[13px] lg:text-sm uppercase tracking-wider">
                <span className="border border-norse/60 px-3 sm:px-4 lg:px-5 py-1.5 sm:py-2 text-norse bg-norse/5">
                  Computer Science Undergraduate
                </span>
                <span className="border border-norse/40 px-3 sm:px-4 lg:px-5 py-1.5 sm:py-2 text-paper/85 bg-poseidon/60">
                  Software Engineering / Cloud &amp; DevOps
                </span>
              </div>
            </div>

            {/* 5. Supporting Copy & CTAs — Stretched horizontal width & confident vertical rhythm */}
            <div className="order-5 w-full min-w-0 mt-7 sm:mt-8 lg:mt-9 xl:mt-10 anim-entrance anim-delay-3">
              <p className="max-w-none xl:max-w-5xl font-mono text-xs sm:text-sm lg:text-[15px] leading-relaxed text-paper/85">
                Interested in software engineering, distributed systems, cloud infrastructure and DevOps.
              </p>

              {/* Editorial CTAs - directional marks and text links */}
              <div className="flex flex-wrap items-center gap-6 sm:gap-8 pt-6 sm:pt-7 lg:pt-8 font-mono text-xs sm:text-sm lg:text-[15px] uppercase tracking-wider">
                <a
                  href="#work"
                  className="group inline-flex items-center gap-2 border-b-2 border-pumpkin pb-1 text-paper hover:text-pumpkin transition-colors focus-visible:outline-2 focus-visible:outline-pumpkin focus-visible:outline-offset-4"
                >
                  <span className="font-semibold">View Work</span>
                  <span
                    aria-hidden="true"
                    className="text-pumpkin transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                  >
                    ↘
                  </span>
                </a>

                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 border-b border-norse/60 pb-1 text-paper/80 hover:text-paper hover:border-paper transition-colors focus-visible:outline-2 focus-visible:outline-pumpkin focus-visible:outline-offset-4"
                >
                  <span>Contact</span>
                  <span
                    aria-hidden="true"
                    className="text-norse group-hover:text-paper transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  >
                    ↗
                  </span>
                </a>
              </div>
            </div>

          </div>

          {/* ========================================================
              RIGHT COLUMN / PORTRAIT (30–35% on desktop, order-4 on mobile)
             ======================================================== */}
          <div className="order-4 mt-8 lg:mt-0 shrink-0 anim-fade anim-delay-2">
            <div className="group relative mx-auto lg:mr-0 w-full max-w-[270px] sm:max-w-sm lg:max-w-[310px] xl:max-w-[340px] 2xl:max-w-[365px] pr-3 sm:pr-4 pt-3 sm:pt-4">
              
              {/* Large faint decorative background letterform */}
              <span
                aria-hidden="true"
                className="absolute -top-10 -left-6 sm:-top-14 sm:-left-10 font-heading text-[150px] sm:text-[200px] lg:text-[250px] leading-none text-norse/10 select-none pointer-events-none z-0"
              >
                M
              </span>

              {/* Offset industrial backing frame with subtle hover shift */}
              <div
                aria-hidden="true"
                className="absolute top-0 right-0 w-[calc(100%-12px)] sm:w-[calc(100%-16px)] h-[calc(100%-12px)] sm:h-[calc(100%-16px)] border border-norse/35 rounded-tr-[70px] sm:rounded-tr-[90px] rounded-bl-[35px] sm:rounded-bl-[45px] pointer-events-none z-0 transition-transform duration-500 ease-out group-hover:translate-x-1 group-hover:-translate-y-1"
              />

              {/* Decorative accent geometry */}
              <div
                aria-hidden="true"
                className="absolute top-1.5 left-1.5 h-3 w-3 bg-pumpkin z-20 transition-transform duration-300 group-hover:scale-125"
              />
              <div
                aria-hidden="true"
                className="absolute bottom-1.5 right-1.5 h-3 w-3 bg-norse z-20 transition-transform duration-300 group-hover:scale-125"
              />

              {/* Technical crop frame */}
              <div className="relative z-10 overflow-hidden border border-norse/50 bg-poseidon rounded-tr-[70px] sm:rounded-tr-[90px] rounded-bl-[35px] sm:rounded-bl-[45px] transition-colors duration-300 group-hover:border-norse">
                
                {/* Upper technical header strip */}
                <div className="flex items-center justify-between border-b border-norse/30 bg-poseidon/90 px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-norse">
                  <span>FIG. 01 // SPECIMEN</span>
                  <span>ASPECT 4:5</span>
                </div>

                {/* Portrait Image container with subtle hover movement */}
                <div className="relative aspect-[4/5] w-full bg-poseidon overflow-hidden">
                  {!imgError ? (
                    <img
                      src={profileImg}
                      alt="Manuth Wilegoda - Computer Science Undergraduate"
                      onError={() => setImgError(true)}
                      className="h-full w-full object-cover object-[center_20%] origin-top grayscale contrast-105 hover:grayscale-0 scale-100 group-hover:scale-[1.025] transition-all duration-700 ease-out"
                    />
                  ) : (
                    /* Fallback placeholder if image load fails */
                    <div className="flex h-full w-full flex-col items-center justify-center p-6 text-center font-mono">
                      <div className="border border-pumpkin/60 p-4 bg-pumpkin/5">
                        <p className="text-xs uppercase tracking-wider text-pumpkin font-semibold">
                          [ PORTRAIT PLACEHOLDER ]
                        </p>
                        <p className="mt-2 text-[11px] text-paper/70">
                          src/assets/manuth-profile.jpg
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Lower technical frame metadata */}
                <div className="flex items-center justify-between border-t border-norse/30 bg-poseidon/90 px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-norse/80">
                  <span>SYS: MW-SPEC</span>
                  <span className="text-paper/60">DEV // ENG</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom Row / Scroll Indicator & System Index */}
      <div className="order-6 w-full border-t border-norse/25 pt-3 sm:pt-4">
        <div className="flex items-center justify-between font-mono text-xs uppercase tracking-widest text-norse">
          <a
            href="#about"
            className="group inline-flex items-center gap-2 hover:text-paper transition-colors focus-visible:outline-2 focus-visible:outline-pumpkin focus-visible:outline-offset-2"
          >
            <span>SCROLL / 02</span>
            <span
              aria-hidden="true"
              className="text-pumpkin transition-transform duration-200 group-hover:translate-y-1"
            >
              ↓
            </span>
          </a>

          <div className="hidden sm:flex items-center gap-4 text-norse/60 text-[11px]">
            <span>LOC: SRI LANKA / GLOBAL</span>
            <span className="select-none">|</span>
            <span>NEXT // ABOUT</span>
          </div>
        </div>
      </div>
    </section>
  )
}
