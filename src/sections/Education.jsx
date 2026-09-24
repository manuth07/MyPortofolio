export default function Education() {
  return (
    <section
      id="education"
      aria-label="Academic Background & Education"
      className="relative border-b border-norse/30 px-4 sm:px-8 lg:px-12 py-16 sm:py-24 bg-poseidon overflow-hidden"
    >
      {/* Editorial registration cross marks in corners */}
      <span aria-hidden="true" className="absolute top-3 left-3 select-none font-mono text-xs text-norse/30">
        +
      </span>
      <span aria-hidden="true" className="absolute top-3 right-3 select-none font-mono text-xs text-norse/30">
        +
      </span>
      <span aria-hidden="true" className="absolute bottom-3 left-3 select-none font-mono text-xs text-norse/30">
        +
      </span>
      <span aria-hidden="true" className="absolute bottom-3 right-3 select-none font-mono text-xs text-norse/30">
        +
      </span>

      <div className="mx-auto max-w-7xl">
        {/* Section Metadata Header */}
        <header className="border-b border-norse/25 pb-4 font-mono text-xs uppercase tracking-wider text-norse">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="inline-block h-2 w-2 bg-pumpkin"></span>
              <span className="font-semibold text-paper/90">03 / EDUCATION</span>
              <span className="text-norse/40 select-none">|</span>
              <span>ACADEMIC RECORD</span>
            </div>
            <div className="flex items-center gap-4 text-paper/60 text-[11px]">
              <span>COLOMBO / MALABE</span>
              <span className="hidden sm:inline select-none text-norse/40">|</span>
              <span className="hidden sm:inline">2009 — PRESENT</span>
            </div>
          </div>
        </header>

        {/* Section Title Block */}
        <div className="pt-10 pb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <span className="block font-mono text-xs tracking-widest text-norse uppercase mb-2">
              [ SEC. 03 // ACADEMICS ]
            </span>
            <h2 className="font-heading text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight text-pumpkin leading-[0.88] select-none">
              EDUCATION
            </h2>
          </div>
          <p className="font-mono text-xs sm:text-sm text-norse max-w-sm uppercase tracking-wider">
            / Formal academic trajectory, credentials &amp; institutional records.
          </p>
        </div>

        {/* ========================================================
            ACADEMIC TIMELINE / EDITORIAL RECORDS LEDGER
           ======================================================== */}
        <div className="divide-y divide-norse/25 border-y border-norse/25">

          {/* --------------------------------------------------------
              ENTRY 01: ST. PETER'S COLLEGE
             -------------------------------------------------------- */}
          <article className="group py-8 sm:py-10 transition-colors duration-200 hover:bg-norse/[0.03]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
              
              {/* Left Column: Index & Study Period */}
              <div className="lg:col-span-3 flex lg:flex-col justify-between items-baseline lg:items-start gap-2">
                <div className="flex items-center gap-3">
                  <span className="font-heading text-3xl sm:text-4xl lg:text-5xl text-pumpkin select-none leading-none">
                    01
                  </span>
                  <span className="font-mono text-[10px] tracking-widest text-norse uppercase border border-norse/30 px-1.5 py-0.5">
                    G.C.E. O/L
                  </span>
                </div>
                <div className="font-mono text-xs text-norse tracking-wider lg:mt-2">
                  <span>2009 — 2019</span>
                </div>
              </div>

              {/* Center Column: Institution, Location & Qualification */}
              <div className="lg:col-span-6 space-y-2">
                <div className="space-y-1">
                  <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tight text-paper group-hover:text-pumpkin transition-colors">
                    ST. PETER&apos;S COLLEGE
                  </h3>
                  <div className="flex items-center gap-2 font-mono text-xs text-norse tracking-wider uppercase">
                    <span>COLOMBO 04</span>
                    <span className="text-norse/40 select-none">•</span>
                    <span>SRI LANKA</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-norse/15">
                  <span className="font-mono text-xs text-norse/70 uppercase tracking-widest block mb-0.5">
                    QUALIFICATION
                  </span>
                  <p className="font-mono text-sm sm:text-base text-paper/90 font-medium">
                    G.C.E. Ordinary Level
                  </p>
                </div>
              </div>

              {/* Right Column: Emphasized Academic Result */}
              <div className="lg:col-span-3 flex flex-col lg:items-end justify-start pt-2 lg:pt-0">
                <span className="font-mono text-[10px] tracking-widest text-norse uppercase mb-1">
                  OFFICIAL RESULT
                </span>
                <div className="border border-pumpkin/60 bg-pumpkin/10 px-4 py-2 text-center lg:text-right">
                  <span className="font-heading text-3xl sm:text-4xl text-pumpkin tracking-tight block leading-none select-none">
                    9 A&apos;S
                  </span>
                  <span className="font-mono text-[10px] text-paper/70 uppercase tracking-wider block mt-1">
                    9 DISTINCTIONS
                  </span>
                </div>
              </div>

            </div>
          </article>

          {/* --------------------------------------------------------
              ENTRY 02: ANANDA COLLEGE
             -------------------------------------------------------- */}
          <article className="group py-8 sm:py-10 transition-colors duration-200 hover:bg-norse/[0.03]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
              
              {/* Left Column: Index & Level Marker */}
              <div className="lg:col-span-3 flex lg:flex-col justify-between items-baseline lg:items-start gap-2">
                <div className="flex items-center gap-3">
                  <span className="font-heading text-3xl sm:text-4xl lg:text-5xl text-pumpkin select-none leading-none">
                    02
                  </span>
                  <span className="font-mono text-[10px] tracking-widest text-norse uppercase border border-norse/30 px-1.5 py-0.5">
                    G.C.E. A/L
                  </span>
                </div>
                <div className="font-mono text-xs text-norse/60 tracking-wider lg:mt-2">
                  <span>ADVANCED LEVEL</span>
                </div>
              </div>

              {/* Center Column: Institution, Location & Qualification */}
              <div className="lg:col-span-5 space-y-2">
                <div className="space-y-1">
                  <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tight text-paper group-hover:text-pumpkin transition-colors">
                    ANANDA COLLEGE
                  </h3>
                  <div className="flex items-center gap-2 font-mono text-xs text-norse tracking-wider uppercase">
                    <span>COLOMBO 10</span>
                    <span className="text-norse/40 select-none">•</span>
                    <span>SRI LANKA</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-norse/15">
                  <span className="font-mono text-xs text-norse/70 uppercase tracking-widest block mb-0.5">
                    QUALIFICATION
                  </span>
                  <p className="font-mono text-sm sm:text-base text-paper/90 font-medium">
                    G.C.E. Advanced Level
                  </p>
                </div>
              </div>

              {/* Right Column: Neat Technical Subject/Result Ledger */}
              <div className="lg:col-span-4 flex flex-col justify-start pt-2 lg:pt-0">
                <span className="font-mono text-[10px] tracking-widest text-norse uppercase mb-1.5 lg:text-right">
                  SUBJECT GRADES
                </span>
                
                {/* Compact Academic Ledger Grid */}
                <div className="border border-norse/30 bg-poseidon/80 font-mono text-xs uppercase divide-y divide-norse/20">
                  <div className="flex items-center justify-between px-3.5 py-2">
                    <span className="text-paper/85 tracking-wider">Chemistry</span>
                    <span className="border border-norse/50 px-2 py-0.5 text-pumpkin font-semibold bg-norse/10">
                      B
                    </span>
                  </div>
                  <div className="flex items-center justify-between px-3.5 py-2">
                    <span className="text-paper/85 tracking-wider">Physics</span>
                    <span className="border border-norse/50 px-2 py-0.5 text-norse font-semibold bg-norse/10">
                      C
                    </span>
                  </div>
                  <div className="flex items-center justify-between px-3.5 py-2">
                    <span className="text-paper/85 tracking-wider">Combined Mathematics</span>
                    <span className="border border-norse/50 px-2 py-0.5 text-norse font-semibold bg-norse/10">
                      C
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </article>

          {/* --------------------------------------------------------
              ENTRY 03: SLIIT (Visually Primary Higher Education Entry)
             -------------------------------------------------------- */}
          <article className="group relative py-8 sm:py-10 bg-norse/[0.04] transition-colors duration-200 hover:bg-norse/[0.07] px-4 sm:px-6 -mx-4 sm:-mx-6 border-l-4 border-l-pumpkin">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
              
              {/* Left Column: Index & Active Status Indicator */}
              <div className="lg:col-span-3 flex lg:flex-col justify-between items-baseline lg:items-start gap-2">
                <div className="flex items-center gap-3">
                  <span className="font-heading text-4xl sm:text-5xl lg:text-6xl text-pumpkin select-none leading-none">
                    03
                  </span>
                  <div className="flex items-center gap-1.5 border border-pumpkin/60 bg-pumpkin/15 px-2 py-0.5 text-[10px] font-mono text-pumpkin tracking-widest uppercase">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-pumpkin animate-pulse"></span>
                    <span>ACTIVE</span>
                  </div>
                </div>
                <div className="font-mono text-xs text-paper/70 tracking-wider lg:mt-2">
                  <span>HIGHER EDUCATION</span>
                </div>
              </div>

              {/* Center Column: Institution, Acronym & Degree */}
              <div className="lg:col-span-6 space-y-3">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-baseline gap-2.5">
                    <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tight text-paper group-hover:text-pumpkin transition-colors">
                      SRI LANKA INSTITUTE OF INFORMATION TECHNOLOGY
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 font-mono text-xs text-norse tracking-wider uppercase">
                    <span className="font-semibold text-pumpkin">SLIIT</span>
                    <span className="text-norse/40 select-none">•</span>
                    <span>MALABE</span>
                    <span className="text-norse/40 select-none">•</span>
                    <span>SRI LANKA</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-norse/20">
                  <span className="font-mono text-xs text-norse/70 uppercase tracking-widest block mb-1">
                    DEGREE PROGRAMME
                  </span>
                  <p className="font-heading text-xl sm:text-2xl lg:text-[1.65rem] text-paper uppercase tracking-tight leading-tight">
                    BSc (Hons) in Computer Science
                  </p>
                </div>
              </div>

              {/* Right Column: Undergraduate Status Badge & Architecture */}
              <div className="lg:col-span-3 flex flex-col lg:items-end justify-start pt-2 lg:pt-0">
                <span className="font-mono text-[10px] tracking-widest text-norse uppercase mb-1">
                  CURRENT STATUS
                </span>
                <div className="border border-pumpkin/70 bg-poseidon px-4 py-2.5 text-center lg:text-right w-full lg:w-auto shadow-sm">
                  <div className="flex items-center justify-center lg:justify-end gap-2">
                    <span className="inline-block h-2 w-2 bg-pumpkin"></span>
                    <span className="font-mono text-xs sm:text-sm font-semibold text-paper tracking-wider uppercase">
                      UNDERGRADUATE
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-norse tracking-widest uppercase block mt-1">
                    COMP. SCI. CANDIDATE
                  </span>
                </div>
              </div>

            </div>
          </article>

        </div>

        {/* Bottom Technical Status Line */}
        <div className="pt-6 flex flex-wrap items-center justify-between gap-4 font-mono text-xs uppercase tracking-widest text-norse/70 border-t border-norse/20 mt-6">
          <div className="flex items-center gap-2">
            <span className="text-pumpkin select-none font-bold">STATUS:</span>
            <span className="text-paper/80">RECORDS VERIFIED // ACCREDITED</span>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>TOTAL STAGES: 03</span>
            <span className="select-none text-norse/40">|</span>
            <a
              href="#work"
              className="text-norse hover:text-paper transition-colors inline-flex items-center gap-1 focus-visible:outline-1 focus-visible:outline-pumpkin"
            >
              <span>NEXT // SELECTED PROJECTS</span>
              <span aria-hidden="true" className="text-pumpkin">↓</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
