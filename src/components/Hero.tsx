/* ── Hero ──
   Editorial opener with scattered polaroid photos, multi-color
   floating blobs, and handwritten annotations. */

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden px-6 md:px-16">
      {/* Multi-color floating blobs */}
      <div className="pointer-events-none absolute -top-20 -right-32 h-[420px] w-[420px] rounded-full bg-matcha-100/50 blur-3xl animate-drift" />
      <div className="pointer-events-none absolute bottom-32 -left-24 h-[300px] w-[300px] rounded-full bg-terra-100/40 blur-3xl animate-drift delay-300" />
      <div className="pointer-events-none absolute top-1/4 right-[15%] h-[200px] w-[200px] rounded-full bg-lav-100/30 blur-2xl animate-drift delay-500" />
      <div className="pointer-events-none absolute bottom-[15%] right-[35%] h-[160px] w-[160px] rounded-full bg-amber-100/30 blur-2xl animate-drift delay-200" />

      {/* Decorative shapes */}
      <div className="pointer-events-none absolute top-20 left-[8%] h-12 w-12 rounded-full border-2 border-terra-200/60 animate-drift" />
      <div className="pointer-events-none absolute top-[60%] left-[5%] h-8 w-8 bg-lav-100/50 rotate-45 animate-drift delay-400" />
      <div className="pointer-events-none absolute top-32 right-[5%] h-6 w-14 rounded-full bg-amber-100/50 animate-wiggle" />

      <div className="mx-auto max-w-6xl w-full grid md:grid-cols-5 gap-8 items-center">
        {/* Left: text content */}
        <div className="md:col-span-3">
          <p className="animate-fade-in-up font-hand text-2xl text-terra-400 -rotate-2 ml-1">
            hi, i'm
          </p>

          <h1 className="animate-fade-in-up delay-100 mt-2 font-serif text-6xl sm:text-7xl md:text-8xl font-semibold text-matcha-800 tracking-tight leading-[0.95]">
            Rachel
            <br />
            <span className="italic text-matcha-600">Zhou</span>
          </h1>

          <p className="animate-fade-in-up delay-200 mt-8 text-lg sm:text-xl text-warm-gray max-w-lg leading-relaxed">
            I write code, sew things by hand, wander alone
            through unfamiliar cities, and read way too many books.
            <span className="underline-hand ml-1">Software engineer & maker of things.</span>
          </p>

          <p className="animate-fade-in-up delay-300 mt-4 font-hand text-lg text-lav-400 rotate-1">
            currently: building at AWS & planning the next solo trip
          </p>

          <div className="animate-fade-in-up delay-400 mt-12 flex flex-wrap gap-5">
            <a href="#experience" className="group flex items-center gap-2 text-sm font-medium text-matcha-700 hover:text-matcha-900 transition-colors">
              <span className="h-px w-8 bg-matcha-400 group-hover:w-12 transition-all" />
              See my work
            </a>
            <a href="#about" className="group flex items-center gap-2 text-sm font-medium text-terra-500 hover:text-terra-600 transition-colors">
              <span className="h-px w-8 bg-terra-300 group-hover:w-12 transition-all" />
              More about me
            </a>
          </div>
        </div>

        {/* Right: scattered photo collage */}
        <div className="md:col-span-2 relative h-[420px] hidden md:block">
          <div className="absolute top-4 left-4 animate-fade-in-up delay-200">
            <div className="bg-white p-2 pb-10 rounded-sm shadow-lg -rotate-3 hover:rotate-0 transition-transform duration-500">
              <img
                src="https://picsum.photos/seed/trail42/280/200"
                alt="Mountain trail"
                className="w-[220px] h-[160px] object-cover rounded-sm"
              />
              <p className="absolute bottom-2.5 left-0 w-full text-center font-hand text-sm text-warm-gray">morning hike</p>
            </div>
          </div>

          <div className="absolute top-40 right-0 animate-fade-in-up delay-300">
            <div className="bg-white p-2 pb-10 rounded-sm shadow-lg rotate-2 hover:rotate-0 transition-transform duration-500">
              <img
                src="https://picsum.photos/seed/sewing17/180/140"
                alt="Sewing project"
                className="w-[160px] h-[120px] object-cover rounded-sm"
              />
              <p className="absolute bottom-2.5 left-0 w-full text-center font-hand text-sm text-warm-gray">weekend project</p>
            </div>
          </div>

          <div className="absolute bottom-8 left-12 animate-fade-in-up delay-400">
            <div className="bg-white p-2 pb-10 rounded-sm shadow-lg rotate-4 hover:rotate-0 transition-transform duration-500">
              <img
                src="https://picsum.photos/seed/books99/160/120"
                alt="Stack of books"
                className="w-[140px] h-[100px] object-cover rounded-sm"
              />
              <p className="absolute bottom-2.5 left-0 w-full text-center font-hand text-sm text-warm-gray">always reading</p>
            </div>
          </div>

          <div className="absolute -top-4 right-12 h-16 w-16 rounded-full border-2 border-terra-200/60 animate-drift" />
          <div className="absolute bottom-20 right-4 h-8 w-8 bg-lav-100/60 rounded-md rotate-12 animate-drift delay-200" />
        </div>
      </div>

      {/* Scroll hint */}
      <div className="animate-fade-in-up delay-600 absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-matcha-300">
          <span className="text-[11px] tracking-widest uppercase">scroll</span>
          <div className="h-8 w-px bg-matcha-300 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
