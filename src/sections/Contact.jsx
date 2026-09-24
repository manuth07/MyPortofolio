export default function Contact() {
  return (
    <footer
      id="contact"
      aria-label="Contact and Publication Colophon"
      className="relative px-4 sm:px-8 lg:px-12 pt-16 sm:pt-24 lg:pt-32 pb-12 sm:pb-16 bg-poseidon overflow-hidden scroll-mt-16 sm:scroll-mt-20"
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
            <span className="inline-block h-2 w-2 bg-pumpkin"></span>
            <span className="font-semibold text-paper/90">05 // TRANSMISSION</span>
            <span className="text-norse/40 select-none">|</span>
            <span>DIRECT CHANNELS</span>
          </div>
          <div className="flex items-center gap-4 text-paper/60 text-[11px]">
            <span>STATUS: AVAILABLE FOR OPPORTUNITIES</span>
            <span className="hidden sm:inline select-none text-norse/40">|</span>
            <span className="hidden sm:inline">END OF PUBLICATION</span>
          </div>
        </div>

        {/* Closing Main Grid */}
        <div className="grid grid-cols-1 gap-12 pt-12 lg:grid-cols-12 lg:gap-16">
          
          {/* Left Column: Monumental Heading & Supporting Copy */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
            <div>
              <span className="block font-mono text-xs tracking-widest text-norse uppercase mb-3">
                [ INITIATE DIALOGUE ]
              </span>
              <h2 className="font-heading text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] xl:text-[8.5rem] uppercase tracking-tight text-pumpkin leading-[0.86] select-none">
                LET'S BUILD<br />SOMETHING.
              </h2>
            </div>

            <div className="border-l-2 border-pumpkin pl-5 sm:pl-6 max-w-xl">
              <p className="font-mono text-sm sm:text-base text-paper/85 leading-relaxed">
                Have a project, opportunity or idea worth discussing? Feel free to get in touch.
              </p>
            </div>
          </div>

          {/* Right Column: Contrasting Editorial Contact Dispatch Ledger */}
          <div className="lg:col-span-5 flex flex-col justify-between border-t border-norse/30 pt-8 lg:border-t-0 lg:border-l lg:border-norse/30 lg:pl-10 lg:pt-0">
            <div className="space-y-1">
              <div className="border-b border-norse/20 pb-2 text-[10px] font-mono uppercase tracking-widest text-norse">
                <span>COMMUNICATION DIRECTORY</span>
              </div>

              {/* Email Link */}
              <a
                href="mailto:manuthwilegoda@gmail.com"
                className="group flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 border-b border-norse/25 py-4 transition-colors hover:border-pumpkin focus-visible:outline-2 focus-visible:outline-pumpkin focus-visible:outline-offset-2"
              >
                <span className="font-mono text-xs uppercase tracking-widest text-norse group-hover:text-pumpkin transition-colors">
                  EMAIL ↗
                </span>
                <span className="font-mono text-xs sm:text-sm text-paper group-hover:text-pumpkin transition-colors break-all sm:break-normal">
                  manuthwilegoda@gmail.com
                </span>
              </a>

              {/* GitHub Link */}
              <a
                href="https://github.com/manuth07"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 border-b border-norse/25 py-4 transition-colors hover:border-pumpkin focus-visible:outline-2 focus-visible:outline-pumpkin focus-visible:outline-offset-2"
              >
                <span className="font-mono text-xs uppercase tracking-widest text-norse group-hover:text-pumpkin transition-colors">
                  GITHUB ↗
                </span>
                <span className="font-mono text-xs sm:text-sm text-paper group-hover:text-pumpkin transition-colors">
                  github.com/manuth07
                </span>
              </a>

              {/* LinkedIn Link */}
              <a
                href="https://www.linkedin.com/in/manuth-wilegoda/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 border-b border-norse/25 py-4 transition-colors hover:border-pumpkin focus-visible:outline-2 focus-visible:outline-pumpkin focus-visible:outline-offset-2"
              >
                <span className="font-mono text-xs uppercase tracking-widest text-norse group-hover:text-pumpkin transition-colors">
                  LINKEDIN ↗
                </span>
                <span className="font-mono text-xs sm:text-sm text-paper group-hover:text-pumpkin transition-colors">
                  linkedin.com/in/manuth-wilegoda
                </span>
              </a>

              {/* Phone (Subtle Presentation) */}
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 pt-4 text-xs font-mono text-norse/70">
                <span className="text-[10px] uppercase tracking-widest text-norse/50">
                  PHONE DIRECT
                </span>
                <a
                  href="tel:0702473193"
                  className="text-paper/60 hover:text-paper transition-colors focus-visible:outline-2 focus-visible:outline-pumpkin"
                >
                  0702473193
                </a>
              </div>
            </div>

            {/* Back to Top Indicator */}
            <div className="pt-8">
              <a
                href="#top"
                className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-norse/80 hover:text-paper transition-colors focus-visible:outline-2 focus-visible:outline-pumpkin focus-visible:outline-offset-2"
              >
                <span>RETURN TO TOP</span>
                <span aria-hidden="true" className="text-pumpkin">↑</span>
              </a>
            </div>
          </div>

        </div>

        {/* Strong Horizontal Rule & Final Colophon */}
        <div className="mt-16 sm:mt-24 border-t-2 border-norse/30 pt-6 sm:pt-8 font-mono text-xs uppercase tracking-wider text-norse">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-4 text-paper/85">
              <span className="font-semibold text-paper">MANUTH WILEGODA</span>
              <span className="select-none text-norse/40">/</span>
              <span></span>
            </div>

            <div className="text-[11px] text-norse/70">
              <span>DESIGNED &amp; BUILT BY MANUTH WILEGODA</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}
