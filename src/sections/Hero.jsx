export default function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative border-b border-norse/30 px-4 sm:px-8 py-16 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Technical metadata row */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-norse/20 pb-4 text-xs font-mono tracking-wider text-norse uppercase">
          <div className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 bg-pumpkin"></span>
            <span>SEC. 01 // PERSPECTIVE</span>
          </div>
          <div className="flex items-center gap-4 text-paper/60">
            <span>SYS.ID: MW-2026</span>
            <span>LOC: GLOBAL / REMOTE</span>
          </div>
        </div>

        {/* Hero content grid foundation */}
        <div className="grid grid-cols-1 gap-12 pt-8 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-8 flex flex-col justify-between">
            <div>
              <p className="font-mono text-xs sm:text-sm tracking-widest text-norse uppercase mb-4">
                Computer Science Undergraduate — Software Engineering / Cloud &amp; DevOps
              </p>
              <h1
                id="hero-heading"
                className="font-heading text-5xl sm:text-7xl lg:text-8xl xl:text-9xl uppercase tracking-tight text-pumpkin leading-[0.9]"
              >
                I build practical software and turn ideas into working systems.
              </h1>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-end border-t border-norse/30 pt-6 lg:border-t-0 lg:border-l lg:pl-8 lg:pt-0">
            <div className="space-y-4">
              <span className="font-mono text-xs text-norse uppercase tracking-widest block">
                [ Overview ]
              </span>
              <p className="font-mono text-sm sm:text-base leading-relaxed text-paper">
                Interested in software engineering, distributed systems, cloud infrastructure and DevOps.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
