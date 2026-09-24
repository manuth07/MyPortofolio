export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-norse/30 bg-poseidon">
      <div className="mx-auto flex max-w-7xl items-stretch justify-between px-4 sm:px-8">
        <a
          href="#top"
          className="flex items-center py-4 text-xs sm:text-sm font-semibold tracking-widest text-paper hover:text-pumpkin transition-colors focus-visible:outline-2 focus-visible:outline-pumpkin focus-visible:outline-offset-2"
        >
          <span className="text-norse mr-2 select-none">/</span>
          MANUTH WILEGODA
        </a>

        <nav
          aria-label="Primary Navigation"
          className="flex items-stretch text-xs sm:text-sm tracking-wider uppercase"
        >
          <a
            href="#work"
            className="flex items-center border-l border-norse/30 px-3 sm:px-6 py-4 text-paper/80 hover:text-pumpkin hover:bg-norse/5 transition-colors focus-visible:outline-2 focus-visible:outline-pumpkin focus-visible:outline-offset-2"
          >
            Work
          </a>
          <a
            href="#about"
            className="flex items-center border-l border-norse/30 px-3 sm:px-6 py-4 text-paper/80 hover:text-pumpkin hover:bg-norse/5 transition-colors focus-visible:outline-2 focus-visible:outline-pumpkin focus-visible:outline-offset-2"
          >
            About
          </a>
          <a
            href="#contact"
            className="flex items-center border-l border-r border-norse/30 px-3 sm:px-6 py-4 text-paper/80 hover:text-pumpkin hover:bg-norse/5 transition-colors focus-visible:outline-2 focus-visible:outline-pumpkin focus-visible:outline-offset-2"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  )
}
