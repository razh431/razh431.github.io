import { useReveal } from "../hooks/useReveal";
import Carousel from "./Carousel";

/* ── Making Things ──
   Each hobby now has a photo carousel alongside the description.
   Cards use varied accent colors. Decorative shapes throughout. */

interface Craft {
  title: string;
  description: string;
  note: string;
  detail: string;
  accent: { bg: string; border: string; text: string; dot: string };
  photos: { src: string; alt: string }[];
}

const crafts: Craft[] = [
  {
    title: "Sewing",
    description:
      "I learned to sew out of frustration with fast fashion and stayed for the meditative rhythm of it. There's a particular calm in feeding fabric through a machine, watching a flat piece of cloth become something wearable.",
    note: "currently obsessed with linen",
    detail: "Recent make: a moss-green tote bag with hand-stitched leather handles",
    accent: { bg: "bg-terra-50", border: "border-terra-200", text: "text-terra-500", dot: "bg-terra-400" },
    photos: [
      { src: "https://picsum.photos/seed/sew1/600/400", alt: "Fabric and thread" },
      { src: "https://picsum.photos/seed/sew2/600/400", alt: "Sewing machine" },
      { src: "https://picsum.photos/seed/sew3/600/400", alt: "Finished tote bag" },
      { src: "https://picsum.photos/seed/sew4/600/400", alt: "Pattern cutting" },
    ],
  },
  {
    title: "Woodworking",
    description:
      "Still a beginner, still making mistakes. But the smell of fresh-cut wood and the satisfaction of a tight joint are addictive. I work out of a shared community workshop on weekends.",
    note: "my dovetails are getting better (slowly)",
    detail: "Recent make: a small walnut shelf for my books",
    accent: { bg: "bg-amber-50", border: "border-amber-200", text: "text-amber-500", dot: "bg-amber-400" },
    photos: [
      { src: "https://picsum.photos/seed/wood1/600/400", alt: "Wood shavings" },
      { src: "https://picsum.photos/seed/wood2/600/400", alt: "Dovetail joint" },
      { src: "https://picsum.photos/seed/wood3/600/400", alt: "Workshop bench" },
    ],
  },
  {
    title: "Hiking",
    description:
      "Day hikes, mostly. Sometimes overnight. I like the kind where you're alone for long enough that your brain finally goes quiet, and then something shifts and you start thinking clearly for the first time in weeks.",
    note: "no headphones. just footsteps.",
    detail: "Favorite trail: the one you find by accident",
    accent: { bg: "bg-matcha-50", border: "border-matcha-200", text: "text-matcha-700", dot: "bg-matcha-400" },
    photos: [
      { src: "https://picsum.photos/seed/hike1/600/400", alt: "Mountain trail" },
      { src: "https://picsum.photos/seed/hike2/600/400", alt: "Forest path" },
      { src: "https://picsum.photos/seed/hike3/600/400", alt: "Summit view" },
      { src: "https://picsum.photos/seed/hike4/600/400", alt: "Wildflowers" },
    ],
  },
];

export default function Hobbies() {
  const ref = useReveal();

  return (
    <section id="making" className="relative py-28 px-6 md:px-16 overflow-hidden" ref={ref as React.RefObject<HTMLElement>}>
      {/* Background decorations */}
      <div className="pointer-events-none absolute top-10 -right-20 h-[280px] w-[280px] rounded-full bg-amber-50/50 blur-3xl" />
      <div className="pointer-events-none absolute bottom-20 left-[5%] h-[200px] w-[200px] rounded-full bg-terra-50/40 blur-2xl" />
      <div className="pointer-events-none absolute top-[40%] -left-10 h-16 w-16 rounded-full border-2 border-lav-200/50 animate-drift" />
      <div className="pointer-events-none absolute top-20 right-[15%] h-8 w-8 bg-terra-100/50 rotate-45 animate-drift delay-300" />

      <div className="reveal mx-auto max-w-5xl">
        <h2 className="font-serif text-3xl sm:text-4xl text-matcha-800">
          Making things by hand
        </h2>
        <p className="mt-4 text-[15px] text-warm-gray max-w-lg leading-[1.85]">
          Software is one kind of making. But I need the other kind too —
          the kind where you end up with sawdust in your hair or thread
          tangled around your fingers.
        </p>

        <div className="mt-16 space-y-20">
          {crafts.map((craft, i) => (
            <div
              key={craft.title}
              id={craft.title.toLowerCase()}
              className="grid md:grid-cols-2 gap-10 items-center scroll-mt-24"
              style={i % 2 === 1 ? { direction: "rtl" } : undefined}
            >
              {/* Photo carousel */}
              <div style={{ direction: "ltr" }}>
                <Carousel
                  images={craft.photos}
                  interval={4500 + i * 500}
                  aspectRatio="aspect-[3/2]"
                />
              </div>

              {/* Description */}
              <div style={{ direction: "ltr" }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`h-3 w-3 rounded-full ${craft.accent.dot}`} />
                  <div className={`h-px flex-1 ${craft.accent.border} border-t border-dashed`} />
                </div>

                <h3 className="font-serif text-2xl text-matcha-800">
                  {craft.title}
                </h3>
                <p className="mt-4 text-[14px] leading-[1.85] text-warm-gray">
                  {craft.description}
                </p>

                <p className={`mt-4 text-xs tracking-wide uppercase ${craft.accent.text}`}>
                  {craft.detail}
                </p>

                <p className="mt-4 font-hand text-lg text-terra-400 -rotate-1">
                  {craft.note}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
