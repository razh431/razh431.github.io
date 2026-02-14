import { useReveal } from "../hooks/useReveal";
import Carousel from "./Carousel";

/* ── About ──
   Photo carousel on the left, real bio on the right.
   Decorated with terracotta and lavender shapes. */

const photos = [
  { src: "https://picsum.photos/seed/portrait1/400/500", alt: "Portrait" },
  { src: "https://picsum.photos/seed/workshop7/400/500", alt: "At the workshop" },
  { src: "https://picsum.photos/seed/cafe22/400/500", alt: "Coffee shop sketching" },
  { src: "https://picsum.photos/seed/hike88/400/500", alt: "On a trail" },
];

export default function About() {
  const ref = useReveal();

  return (
    <section id="about" className="relative py-28 px-6 md:px-16 overflow-hidden" ref={ref as React.RefObject<HTMLElement>}>
      {/* Background decorations */}
      <div className="pointer-events-none absolute -top-10 right-0 h-[250px] w-[250px] rounded-full bg-terra-50/60 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-[10%] h-[200px] w-[200px] rounded-full bg-lav-50/50 blur-2xl" />

      <div className="reveal mx-auto max-w-5xl grid md:grid-cols-5 gap-14 items-center">
        {/* Photo carousel — styled as a Polaroid frame */}
        <div className="md:col-span-2 relative">
          <div className="bg-white p-3 pb-12 rounded-sm shadow-lg -rotate-1">
            <Carousel
              images={photos}
              rounded={false}
              aspectRatio="aspect-[4/5]"
              interval={5000}
            />
            <p className="absolute bottom-3 left-0 w-full text-center font-hand text-lg text-warm-gray">
              snapshots of my life
            </p>
          </div>

          {/* Floating decorative bits */}
          <div className="absolute -top-6 -right-6 h-14 w-14 rounded-full border-2 border-terra-200/60 animate-drift" />
          <div className="absolute -bottom-4 -left-4 h-8 w-8 bg-lav-100/70 rounded-lg rotate-12 animate-drift delay-300" />
          <div className="absolute top-1/2 -right-8 h-4 w-10 rounded-full bg-amber-200/50 animate-wiggle" />
        </div>

        {/* Bio */}
        <div className="md:col-span-3">
          <h2 className="font-serif text-3xl sm:text-4xl text-matcha-800">
            A little about me
          </h2>
          <div className="mt-3 flex gap-2">
            <div className="h-px w-12 bg-matcha-300 mt-2" />
            <div className="h-px w-6 bg-terra-300 mt-2" />
            <div className="h-px w-4 bg-lav-300 mt-2" />
          </div>

          <p className="mt-8 text-[15px] leading-[1.85] text-warm-gray">
            I'm a software engineer at Amazon AWS, where I work on
            infrastructure tooling — database migrations, firmware deployment
            pipelines, and the kind of systems that keep millions of EC2 servers
            running. I studied Computer Science at Cornell, with minors in
            Electrical Engineering and China &amp; Asia-Pacific Studies.
          </p>

          <p className="mt-5 text-[15px] leading-[1.85] text-warm-gray">
            Outside of work, I'm probably on a trail somewhere, sewing a new
            tote bag from thrifted fabric, or deep in a novel at a coffee shop
            I've never been to before. I travel solo most of the time — there's
            a particular kind of freedom in figuring out a new city on your own,
            getting lost on purpose, eating dinner alone with a good book.
          </p>

          <p className="mt-5 text-[15px] leading-[1.85] text-warm-gray">
            Lately I've been learning woodworking. There's a satisfying
            overlap between writing software and shaping wood — you measure,
            you plan, you adjust, and sometimes you just have to start over.
          </p>

          {/* Tags in mixed colors */}
          <div className="mt-8 flex flex-wrap gap-2">
            {[
              { label: "Python", bg: "bg-matcha-50", border: "border-matcha-200", text: "text-matcha-700" },
              { label: "TypeScript", bg: "bg-matcha-50", border: "border-matcha-200", text: "text-matcha-700" },
              { label: "React", bg: "bg-matcha-50", border: "border-matcha-200", text: "text-matcha-700" },
              { label: "AWS", bg: "bg-amber-50", border: "border-amber-200", text: "text-amber-500" },
              { label: "Java", bg: "bg-lav-50", border: "border-lav-200", text: "text-lav-500" },
              { label: "Spark", bg: "bg-lav-50", border: "border-lav-200", text: "text-lav-500" },
              { label: "Sewing", bg: "bg-terra-50", border: "border-terra-200", text: "text-terra-500" },
              { label: "Woodworking", bg: "bg-amber-50", border: "border-amber-200", text: "text-amber-500" },
              { label: "Solo Travel", bg: "bg-terra-50", border: "border-terra-200", text: "text-terra-500" },
              { label: "Hiking", bg: "bg-matcha-50", border: "border-matcha-200", text: "text-matcha-700" },
            ].map((tag) => (
              <span key={tag.label} className={`rounded-full ${tag.bg} px-4 py-1.5 text-xs font-medium ${tag.text} border ${tag.border}`}>
                {tag.label}
              </span>
            ))}
          </div>

          <p className="mt-6 font-hand text-xl text-terra-400 -rotate-1">
            i think making things with your hands makes you a better engineer
          </p>
        </div>
      </div>
    </section>
  );
}
