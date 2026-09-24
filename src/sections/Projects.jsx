import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section
      id="work"
      aria-labelledby="projects-heading"
      className="relative border-b border-norse/30 px-4 sm:px-8 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Technical metadata bar */}
        <div className="flex items-center justify-between border-b border-norse/20 pb-4 text-xs font-mono tracking-wider text-norse uppercase">
          <div className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 bg-norse"></span>
            <span>SEC. 03 // ARCHIVE</span>
          </div>
          <span className="text-paper/60">COUNT: {String(projects.length).padStart(2, '0')}</span>
        </div>

        {/* Section Title */}
        <div className="pt-8">
          <h2
            id="projects-heading"
            className="font-heading text-4xl sm:text-6xl uppercase tracking-tight text-pumpkin"
          >
            Selected Projects
          </h2>
          <p className="mt-2 font-mono text-xs text-norse uppercase tracking-widest">
            Engineering Systems &amp; Implementations
          </p>
        </div>

        {/* Projects structural foundation */}
        <div className="mt-12 border border-norse/30 p-8 text-center sm:text-left">
          {projects.length === 0 ? (
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 font-mono text-xs text-norse">
              <span>[ PROJECT REGISTRY INITIALIZED ]</span>
              <span className="text-paper/60">Projects data pipeline ready for phase integration</span>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* Ready for mapped project cards in future phase */}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
