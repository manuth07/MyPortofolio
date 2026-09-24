export default function Contact() {
  return (
    <footer
      id="contact"
      aria-labelledby="contact-heading"
      className="relative px-4 sm:px-8 py-16 sm:py-24 bg-poseidon"
    >
      <div className="mx-auto max-w-7xl">
        {/* Technical metadata bar */}
        <div className="flex items-center justify-between border-b border-norse/20 pb-4 text-xs font-mono tracking-wider text-norse uppercase">
          <div className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 border border-pumpkin"></span>
            <span>SEC. 04 // TRANSMISSION</span>
          </div>
          <span className="text-paper/60">STATUS: AVAILABLE</span>
        </div>

        {/* Contact content foundation */}
        <div className="grid grid-cols-1 gap-12 pt-8 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <h2
              id="contact-heading"
              className="font-heading text-4xl sm:text-6xl uppercase tracking-tight text-pumpkin"
            >
              Contact
            </h2>
            <p className="mt-2 font-mono text-xs text-norse uppercase tracking-widest">
              Direct Inquiries &amp; Collaboration
            </p>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-end space-y-6 font-mono text-sm text-paper">
            <p>
              Open to conversations regarding software engineering, cloud infrastructure, and distributed systems.
            </p>
            <div className="border-t border-norse/20 pt-4 flex flex-wrap gap-6 text-xs uppercase tracking-wider text-norse">
              <span>MANUTH WILEGODA</span>
              <span>© {new Date().getFullYear()}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
