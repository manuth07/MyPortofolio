export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative border-b border-norse/30 px-4 sm:px-8 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Technical metadata bar */}
        <div className="flex items-center justify-between border-b border-norse/20 pb-4 text-xs font-mono tracking-wider text-norse uppercase">
          <div className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 border border-pumpkin"></span>
            <span>SEC. 02 // PROFILE</span>
          </div>
          <span className="text-paper/60">INDEX: ABOUT</span>
        </div>

        {/* Section layout grid */}
        <div className="grid grid-cols-1 gap-8 pt-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2
              id="about-heading"
              className="font-heading text-4xl sm:text-6xl uppercase tracking-tight text-pumpkin"
            >
              About
            </h2>
            <p className="mt-2 font-mono text-xs text-norse uppercase tracking-widest">
              Background &amp; Direction
            </p>
          </div>

          <div className="lg:col-span-8 space-y-6 font-mono text-sm leading-relaxed text-paper">
            {/* Structural placeholder for profile narrative */}
            <p>
              Computer Science Undergraduate focused on building reliable software and distributed systems.
            </p>
            <div className="border-l-2 border-norse pl-4 text-paper/80">
              <p className="text-xs uppercase tracking-wider text-norse mb-1">[ Focus Areas ]</p>
              <p>Software Engineering • Distributed Systems • Cloud Infrastructure • DevOps</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
