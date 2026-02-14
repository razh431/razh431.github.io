import { useReveal } from "../hooks/useReveal";

/* ── Reading ──
   Book spines now use the full palette (matcha, terra, lav, amber).
   Decorated with scattered shapes and a cozy reading photo strip. */

interface Book {
  title: string;
  author: string;
  thought: string;
  color: string;
}

const books: Book[] = [
  {
    title: "Dept. of Speculation",
    author: "Jenny Offill",
    thought: "Tiny, devastating fragments. I read it in one sitting on a train and then immediately read it again.",
    color: "bg-matcha-600",
  },
  {
    title: "Educated",
    author: "Tara Westover",
    thought: "Made me think about all the things I take for granted. Stayed with me for months.",
    color: "bg-terra-400",
  },
  {
    title: "The Art of Travel",
    author: "Alain de Botton",
    thought: "Changed how I look at airports, hotel rooms, and the act of noticing things.",
    color: "bg-lav-400",
  },
  {
    title: "A Swim in a Pond in the Rain",
    author: "George Saunders",
    thought: "Ostensibly about writing Russian short stories. Actually about paying attention to life.",
    color: "bg-amber-400",
  },
  {
    title: "Braiding Sweetgrass",
    author: "Robin Wall Kimmerer",
    thought: "The chapter about sweetgrass made me cry on a park bench. I think about it while gardening.",
    color: "bg-matcha-700",
  },
  {
    title: "Shop Class as Soulcraft",
    author: "Matthew B. Crawford",
    thought: "A philosopher-mechanic on why working with your hands matters. Pushed me toward woodworking.",
    color: "bg-terra-500",
  },
];

/* Reading nook photo strip */
const readingPhotos = [
  "https://picsum.photos/seed/read1/300/200",
  "https://picsum.photos/seed/read2/300/200",
  "https://picsum.photos/seed/read3/300/200",
  "https://picsum.photos/seed/read4/300/200",
  "https://picsum.photos/seed/read5/300/200",
];

export default function Reading() {
  const ref = useReveal();

  return (
    <section id="reading" className="relative py-28 overflow-hidden" ref={ref as React.RefObject<HTMLElement>}>
      {/* Background blobs */}
      <div className="pointer-events-none absolute top-10 left-[5%] h-[250px] w-[250px] rounded-full bg-lav-50/40 blur-3xl" />
      <div className="pointer-events-none absolute bottom-20 right-0 h-[200px] w-[200px] rounded-full bg-amber-50/50 blur-3xl" />
      {/* Decorative shapes */}
      <div className="pointer-events-none absolute top-24 right-[12%] h-10 w-10 rounded-full border-2 border-terra-200/50 animate-drift" />
      <div className="pointer-events-none absolute bottom-32 left-[8%] h-6 w-12 rounded-full bg-lav-100/50 animate-drift delay-300" />

      <div className="reveal px-6 md:px-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-serif text-3xl sm:text-4xl text-matcha-800">
            What I've been reading
          </h2>
          <p className="mt-4 text-[15px] text-warm-gray max-w-lg leading-[1.85]">
            I always have a book going. Usually two. These are some that
            left a mark — the ones I lend out and then worry about getting back.
          </p>
          <p className="mt-3 font-hand text-xl text-lav-400 -rotate-1">
            my nightstand is a fire hazard
          </p>
        </div>
      </div>

      {/* Photo strip — edge-to-edge scrolling reading nook photos */}
      <div className="mt-10 flex gap-4 overflow-x-auto px-6 pb-2 scrollbar-hide">
        {readingPhotos.map((src, i) => (
          <img
            key={i}
            src={src}
            alt="Reading nook"
            className="h-32 w-48 flex-shrink-0 rounded-xl object-cover shadow-sm"
            style={{ transform: `rotate(${i % 2 === 0 ? -1 : 1}deg)` }}
            loading="lazy"
          />
        ))}
      </div>

      {/* Book spines */}
      <div className="mt-12 px-6 md:px-16">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {books.map((book, i) => (
              <div key={book.title} className="group">
                <div
                  className={`${book.color} rounded-lg h-48 flex items-end p-3 shadow-sm group-hover:shadow-md group-hover:-translate-y-2 transition-all duration-300`}
                  style={{ transform: `rotate(${i % 2 === 0 ? -1 : 1}deg)` }}
                >
                  <p className="text-xs font-medium text-white/90 leading-tight [writing-mode:vertical-rl] rotate-180">
                    {book.title}
                  </p>
                </div>
                <div className="mt-3 px-1">
                  <p className="text-xs font-semibold text-matcha-800 leading-tight">
                    {book.title}
                  </p>
                  <p className="mt-0.5 text-[11px] text-warm-gray italic">
                    {book.author}
                  </p>
                  <p className="mt-2 text-[11px] leading-relaxed text-warm-gray hidden sm:block">
                    {book.thought}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Pull quote */}
          <blockquote className="mt-20 max-w-lg mx-auto text-center relative">
            {/* Decorative quote marks */}
            <span className="absolute -top-6 -left-4 font-serif text-6xl text-lav-200/60">"</span>
            <p className="font-serif text-xl italic text-matcha-700 leading-relaxed">
              A reader lives a thousand lives before he dies.
              The man who never reads lives only one.
            </p>
            <cite className="mt-3 block text-sm text-warm-gray not-italic">
              — George R.R. Martin
            </cite>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
