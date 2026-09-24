import { projects } from '../data/projects'

export default function Projects() {
  const featuredProject = projects.find((p) => p.featured) || projects[0]
  const secondaryProjects = projects.filter((p) => p.id !== featuredProject.id)

  return (
    <section
      id="work"
      aria-label="Selected Projects"
      className="relative border-b border-norse/30 px-4 sm:px-8 lg:px-12 py-16 sm:py-24 bg-poseidon overflow-hidden"
    >
      {/* Editorial registration cross marks */}
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
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-norse/25 pb-4 font-mono text-xs uppercase tracking-wider text-norse">
          <div className="flex items-center gap-3">
            <span className="inline-block h-2 w-2 bg-pumpkin"></span>
            <span className="font-semibold text-paper/90">03 / SELECTED WORK</span>
            <span className="text-norse/40 select-none">|</span>
            <span>SYSTEMS &amp; CODE CATALOGUE</span>
          </div>
          <div className="flex items-center gap-4 text-paper/60 text-[11px]">
            <span>TOTAL: {String(projects.length).padStart(2, '0')} REPOSITORIES</span>
            <span className="hidden sm:inline select-none text-norse/40">|</span>
            <span className="hidden sm:inline">SPEC: ASYMMETRIC CATALOGUE</span>
          </div>
        </div>

        {/* Section Title */}
        <div className="pt-10 pb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <span className="block font-mono text-xs tracking-widest text-norse uppercase mb-2">
              [ SEC. 03 // ARCHIVE ]
            </span>
            <h2 className="font-heading text-6xl sm:text-7xl lg:text-8xl uppercase tracking-tight text-pumpkin leading-[0.88] select-none">
              SELECTED<br className="hidden sm:inline" /> PROJECTS
            </h2>
          </div>
          <p className="font-mono text-xs sm:text-sm text-norse max-w-xs uppercase tracking-wider">
            / Microservices, distributed systems, full-stack applications &amp; cloud automation.
          </p>
        </div>

        {/* ========================================================
            FEATURED PROJECT 01: EVENTPULSE (Visually Dominant)
           ======================================================== */}
        <div className="group relative border-2 border-norse/40 p-6 sm:p-8 lg:p-10 transition-colors duration-300 hover:border-pumpkin/70">
          {/* Top Spec Strip */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-norse/20 pb-4 font-mono text-xs uppercase tracking-wider text-norse">
            <div className="flex items-center gap-3">
              <span className="font-heading text-4xl sm:text-5xl text-pumpkin select-none leading-none">
                {featuredProject.number}
              </span>
              <span className="text-paper/90 font-semibold">// PRIMARY SYSTEM EXHIBIT</span>
            </div>
            <div className="border border-pumpkin/60 px-2 py-0.5 text-[10px] text-pumpkin tracking-widest">
              FEATURED ARCHITECTURE
            </div>
          </div>

          {/* Main Body Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-8">
            {/* Left Col: Info, Description, Highlights */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div>
                <span className="block font-mono text-xs text-norse uppercase tracking-widest mb-1">
                  {featuredProject.subtitle}
                </span>
                <h3 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-paper uppercase tracking-tight transition-transform duration-200 group-hover:translate-x-1">
                  {featuredProject.title}
                </h3>
              </div>

              <p className="font-mono text-sm leading-relaxed text-paper/90">
                {featuredProject.description}
              </p>

              {/* Architectural Highlights */}
              {featuredProject.highlights && (
                <div className="space-y-2 border-l-2 border-pumpkin/70 pl-4 py-1 font-mono text-xs text-paper/80">
                  <span className="block text-[11px] uppercase tracking-wider text-norse mb-1 font-semibold">
                    [ Architecture Highlights ]
                  </span>
                  {featuredProject.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="text-pumpkin select-none font-bold">›</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Technologies Displayed as Printed Metadata */}
              <div className="border-t border-norse/20 pt-4">
                <span className="block font-mono text-[10px] uppercase tracking-widest text-norse mb-2">
                  TECHNOLOGY STACK:
                </span>
                <p className="font-mono text-xs sm:text-sm uppercase tracking-wider text-paper/90 group-hover:text-paper transition-colors">
                  {featuredProject.technologies.join('  /  ')}
                </p>
              </div>

              {/* GitHub Link */}
              <div className="pt-2">
                <a
                  href={featuredProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border-b-2 border-pumpkin pb-1 font-mono text-xs sm:text-sm uppercase tracking-wider text-paper hover:text-pumpkin transition-colors focus-visible:outline-2 focus-visible:outline-pumpkin focus-visible:outline-offset-4"
                >
                  <span className="font-semibold">View Source</span>
                  <span
                    aria-hidden="true"
                    className="text-pumpkin transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
                  >
                    ↗
                  </span>
                </a>
              </div>
            </div>

            {/* Right Col: Intentional Technical Schematic Plate (or screenshot when available) */}
            <div className="lg:col-span-5 flex flex-col">
              {featuredProject.image ? (
                <div className="relative aspect-video w-full overflow-hidden border border-norse/40">
                  <img
                    src={featuredProject.image}
                    alt={`${featuredProject.title} Interface`}
                    className="h-full w-full object-cover"
                  />
                </div>
              ) : (
                /* Intentional Architectural Blueprint Plate */
                <div className="relative flex flex-1 flex-col justify-between border border-norse/30 bg-poseidon/60 p-5 font-mono text-xs">
                  {/* Schematic Header */}
                  <div className="flex items-center justify-between border-b border-norse/25 pb-2 text-[10px] uppercase tracking-widest text-norse">
                    <span>SYS.ARCH // SCHEMATIC</span>
                    <span>SPEC: MICROSERVICES</span>
                  </div>

                  {/* Flow Diagram */}
                  <div className="my-6 space-y-4">
                    <div className="border border-norse/40 p-2.5 text-center text-paper/90 bg-norse/5">
                      CLIENT INTERFACE (REACT SPA)
                    </div>
                    <div className="text-center font-bold text-pumpkin text-sm select-none">
                      ↓ [ HTTPS / REVERSE PROXY ]
                    </div>
                    <div className="border border-pumpkin/60 p-2.5 text-center text-paper font-semibold bg-pumpkin/10">
                      YARP API GATEWAY
                    </div>
                    <div className="text-center font-bold text-pumpkin text-sm select-none">
                      ↓ [ AUTH &amp; ROUTING ]
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-[11px] text-center text-paper/80">
                      <div className="border border-norse/30 p-2">IDENTITY SVC</div>
                      <div className="border border-norse/30 p-2">EVENT SVC</div>
                      <div className="border border-norse/30 p-2">BOOKING SVC</div>
                      <div className="border border-norse/30 p-2">PAYMENT SVC</div>
                    </div>
                  </div>

                  {/* Schematic Footer */}
                  <div className="border-t border-norse/25 pt-2 text-[10px] uppercase tracking-wider text-norse/70 flex items-center justify-between">
                    <span>DB: POSTGRESQL</span>
                    <span>INFRA: AZURE</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ========================================================
            SECONDARY PROJECTS: ASYMMETRIC CATALOGUE
            02 DISTRIBUTED PAYMENT CONSENSUS SYSTEM (Wide Focus)
            03 LEARNLINK & 04 HAPPYHEELS (Split Rhythm)
           ======================================================== */}
        <div className="mt-12 space-y-8">
          
          {/* Project 02: Distributed Payment Consensus System */}
          {secondaryProjects.find((p) => p.id === '02') && (() => {
            const p02 = secondaryProjects.find((p) => p.id === '02')
            return (
              <div
                key={p02.id}
                className="group relative border border-norse/30 p-6 sm:p-8 transition-colors duration-300 hover:border-norse/80"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  {/* Left: Number & Titles */}
                  <div className="lg:w-5/12 space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="font-heading text-4xl sm:text-5xl text-norse/60 group-hover:text-pumpkin transition-colors duration-200 leading-none">
                        {p02.number}
                      </span>
                      <span className="font-mono text-xs uppercase tracking-widest text-norse">
                        {p02.subtitle}
                      </span>
                    </div>
                    <h3 className="font-heading text-3xl sm:text-4xl text-paper uppercase tracking-tight transition-transform duration-200 group-hover:translate-x-1">
                      {p02.title}
                    </h3>
                    <p className="font-mono text-[11px] uppercase tracking-wider text-pumpkin/90 pt-1">
                      {p02.architecture}
                    </p>
                  </div>

                  {/* Center: Description */}
                  <div className="lg:w-4/12 space-y-3 font-mono text-xs sm:text-sm text-paper/85 leading-relaxed">
                    <p>{p02.description}</p>
                  </div>

                  {/* Right: Technologies & Link */}
                  <div className="lg:w-3/12 flex flex-col justify-between border-t border-norse/20 pt-4 lg:border-t-0 lg:border-l lg:border-norse/25 lg:pl-6 lg:pt-0 space-y-4">
                    <div>
                      <span className="block font-mono text-[10px] uppercase tracking-widest text-norse mb-1.5">
                        TECH SPECIFICATION:
                      </span>
                      <p className="font-mono text-xs uppercase tracking-wider text-paper/90 leading-snug">
                        {p02.technologies.join('  •  ')}
                      </p>
                    </div>

                    <a
                      href={p02.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border-b border-pumpkin pb-0.5 font-mono text-xs uppercase tracking-wider text-paper hover:text-pumpkin transition-colors focus-visible:outline-2 focus-visible:outline-pumpkin focus-visible:outline-offset-2 self-start"
                    >
                      <span>View Source</span>
                      <span
                        aria-hidden="true"
                        className="text-pumpkin transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
                      >
                        ↗
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            )
          })()}

          {/* Asymmetric 2-Column Split: Project 03 (LearnLink) & Project 04 (HappyHeels) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {secondaryProjects
              .filter((p) => p.id === '03' || p.id === '04')
              .map((proj) => (
                <div
                  key={proj.id}
                  className="group relative border border-norse/30 p-6 sm:p-8 flex flex-col justify-between space-y-6 transition-colors duration-300 hover:border-norse/80"
                >
                  <div>
                    {/* Top row */}
                    <div className="flex items-center justify-between border-b border-norse/20 pb-3 font-mono text-xs uppercase tracking-wider text-norse">
                      <span className="font-heading text-3xl text-norse/60 group-hover:text-pumpkin transition-colors leading-none">
                        {proj.number}
                      </span>
                      <span>{proj.subtitle}</span>
                    </div>

                    {/* Title & Desc */}
                    <h3 className="mt-4 font-heading text-3xl sm:text-4xl text-paper uppercase tracking-tight transition-transform duration-200 group-hover:translate-x-1">
                      {proj.title}
                    </h3>

                    <p className="mt-4 font-mono text-xs sm:text-sm text-paper/85 leading-relaxed">
                      {proj.description}
                    </p>
                  </div>

                  {/* Bottom: Tech & Link */}
                  <div className="border-t border-norse/20 pt-4 space-y-4">
                    <div>
                      <span className="block font-mono text-[10px] uppercase tracking-widest text-norse mb-1">
                        STACK:
                      </span>
                      <p className="font-mono text-xs uppercase tracking-wider text-paper/90">
                        {proj.technologies.join('  /  ')}
                      </p>
                    </div>

                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border-b border-pumpkin pb-0.5 font-mono text-xs uppercase tracking-wider text-paper hover:text-pumpkin transition-colors focus-visible:outline-2 focus-visible:outline-pumpkin focus-visible:outline-offset-2"
                    >
                      <span>View Source</span>
                      <span
                        aria-hidden="true"
                        className="text-pumpkin transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
                      >
                        ↗
                      </span>
                    </a>
                  </div>
                </div>
              ))}
          </div>

        </div>

      </div>
    </section>
  )
}
