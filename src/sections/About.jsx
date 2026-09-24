export default function About() {
  return (
    <section
      id="about"
      aria-label="About Manuth Wilegoda"
      className="relative border-b border-norse/30 px-4 sm:px-8 lg:px-12 py-16 sm:py-24 bg-poseidon overflow-hidden scroll-mt-16 sm:scroll-mt-20"
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
        {/* Top Technical Metadata Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-norse/25 pb-4 font-mono text-xs uppercase tracking-wider text-norse">
          <div className="flex items-center gap-3">
            <span className="inline-block h-2 w-2 border border-pumpkin"></span>
            <span className="font-semibold text-paper/90">02 / ABOUT</span>
            <span className="text-norse/40 select-none">|</span>
            <span>PROFILE &amp; SCOPE</span>
          </div>
          <div className="flex items-center gap-4 text-paper/60 text-[11px]">
            <span>ENGINEERING / SYSTEMS</span>
            <span className="hidden sm:inline select-none text-norse/40">|</span>
            <span className="hidden sm:inline">SYS.ID: MW-PROFILE</span>
          </div>
        </div>

        {/* Editorial Layout Grid */}
        <div className="grid grid-cols-1 gap-10 pt-10 lg:grid-cols-12 lg:gap-16">
          
          {/* Left Column: Heading & Role Metadata */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            <div>
              <span className="block font-mono text-xs tracking-widest text-norse uppercase mb-2">
                [ SEC. 02 // BRIEF ]
              </span>
              <h2 className="font-heading text-6xl sm:text-7xl lg:text-8xl uppercase tracking-tight text-pumpkin leading-[0.88] select-none">
                ABOUT
              </h2>
            </div>

            {/* Technical Index Details */}
            <div className="space-y-3 border-t border-norse/20 pt-6 font-mono text-xs uppercase tracking-wider text-norse/80">
              <div className="flex items-center justify-between">
                <span className="text-norse">ROLE:</span>
                <span className="text-paper/90">CS UNDERGRADUATE</span>
              </div>
              <div className="flex items-center justify-between border-t border-norse/15 pt-2">
                <span className="text-norse">DISCIPLINE:</span>
                <span className="text-paper/90">SOFTWARE / CLOUD / DEVOPS</span>
              </div>
              <div className="flex items-center justify-between border-t border-norse/15 pt-2">
                <span className="text-norse">APPROACH:</span>
                <span className="text-paper/90">SYSTEMS &amp; ARCHITECTURE</span>
              </div>
            </div>
          </div>

          {/* Right Column: Statement, Supporting Copy, and Scope Rule */}
          <div className="lg:col-span-8 flex flex-col justify-between border-t border-norse/30 pt-8 lg:border-t-0 lg:border-l lg:pl-12 lg:pt-0">
            <div className="space-y-8">
              {/* Primary Statement */}
              <div className="border-l-2 border-pumpkin pl-5 sm:pl-8 py-1">
                <p className="font-mono text-lg sm:text-xl lg:text-2xl text-paper leading-relaxed font-normal">
                  Computer Science undergraduate interested in building practical software systems across application development, distributed systems, cloud infrastructure and DevOps.
                </p>
              </div>

              {/* Supporting Line */}
              <div className="border-t border-norse/20 pt-6">
                <p className="font-mono text-sm sm:text-base text-paper/80 leading-relaxed">
                  I enjoy working across the full path from implementation and APIs to deployment, automation and infrastructure.
                </p>
              </div>
            </div>

            {/* Mechanical Capabilities Strip */}
            <div className="mt-10 border-t border-norse/25 pt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs uppercase tracking-wider text-norse">
                <div className="flex items-center gap-2">
                  <span className="text-pumpkin select-none font-bold">/01</span>
                  <span className="text-paper/85">Application &amp; API Architecture</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-pumpkin select-none font-bold">/02</span>
                  <span className="text-paper/85">Distributed Systems &amp; Concurrency</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-pumpkin select-none font-bold">/03</span>
                  <span className="text-paper/85">Cloud Infrastructure &amp; Deployment</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-pumpkin select-none font-bold">/04</span>
                  <span className="text-paper/85">DevOps &amp; Continuous Automation</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
