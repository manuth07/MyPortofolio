export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-norse/30 bg-poseidon">
      <div className="mx-auto flex max-w-7xl items-stretch justify-between px-3 sm:px-8 lg:px-12">
        <a
          href="#top"
          className="flex items-center py-4 text-xs sm:text-sm font-semibold tracking-wider sm:tracking-widest text-paper hover:text-pumpkin transition-colors focus-visible:outline-2 focus-visible:outline-pumpkin focus-visible:outline-offset-2 shrink-0"
        >
          <span className="text-norse mr-1.5 sm:mr-2 select-none">/</span>
          MANUTH WILEGODA
        </a>

        <nav
          aria-label="Primary Navigation"
          className="flex items-stretch text-[10px] sm:text-xs md:text-sm tracking-normal sm:tracking-wider uppercase font-mono shrink-0"
        >
          <a
            href="#work"
            className="relative flex items-center border-l border-norse/30 px-1.5 sm:px-3.5 md:px-5 lg:px-6 py-4 text-paper/80 hover:text-pumpkin hover:bg-norse/5 transition-colors focus-visible:outline-2 focus-visible:outline-pumpkin focus-visible:outline-offset-2 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-pumpkin after:transition-all after:duration-300 hover:after:w-full shrink-0"
          >
            Work
          </a>
          <a
            href="#about"
            className="relative flex items-center border-l border-norse/30 px-1.5 sm:px-3.5 md:px-5 lg:px-6 py-4 text-paper/80 hover:text-pumpkin hover:bg-norse/5 transition-colors focus-visible:outline-2 focus-visible:outline-pumpkin focus-visible:outline-offset-2 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-pumpkin after:transition-all after:duration-300 hover:after:w-full shrink-0"
          >
            About
          </a>
          <a
            href="#education"
            className="relative flex items-center border-l border-norse/30 px-1.5 sm:px-3.5 md:px-5 lg:px-6 py-4 text-paper/80 hover:text-pumpkin hover:bg-norse/5 transition-colors focus-visible:outline-2 focus-visible:outline-pumpkin focus-visible:outline-offset-2 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-pumpkin after:transition-all after:duration-300 hover:after:w-full shrink-0"
          >
            Education
          </a>
          <a
            href="#contact"
            className="relative flex items-center border-l border-norse/30 px-1.5 sm:px-3.5 md:px-5 lg:px-6 py-4 text-paper/80 hover:text-pumpkin hover:bg-norse/5 transition-colors focus-visible:outline-2 focus-visible:outline-pumpkin focus-visible:outline-offset-2 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-pumpkin after:transition-all after:duration-300 hover:after:w-full shrink-0"
          >
            Contact
          </a>
          {/* CV file expected at: public/Manuth_Wilegoda_CV.pdf */}
          <a
            href="/Manuth_Wilegoda_CV.pdf"
            download="Manuth_Wilegoda_CV.pdf"
            className="relative flex items-center border-l border-r border-norse/30 px-1.5 sm:px-3.5 md:px-5 lg:px-6 py-4 text-paper/80 hover:text-pumpkin hover:bg-norse/5 transition-colors focus-visible:outline-2 focus-visible:outline-pumpkin focus-visible:outline-offset-2 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-pumpkin after:transition-all after:duration-300 hover:after:w-full shrink-0"
          >
            <span>CV</span>
            <span aria-hidden="true" className="ml-1 text-pumpkin select-none">↘</span>
          </a>
        </nav>
      </div>
    </header>
  )
}
