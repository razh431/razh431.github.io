import { useReveal } from "../hooks/useReveal";
import Carousel from "./Carousel";

/* ── Solo Travel ──
   Full-width photo carousel at the top, then a scrapbook grid
   of Polaroid cards with real photos below. Warm decorations. */

const carouselImages = [
  { src: "https://picsum.photos/seed/kyoto1/1200/600", alt: "Bamboo grove in Kyoto" },
  { src: "https://picsum.photos/seed/lisbon3/1200/600", alt: "Lisbon rooftops" },
  { src: "https://picsum.photos/seed/patag5/1200/600", alt: "Patagonia glacier" },
  { src: "https://picsum.photos/seed/bali9/1200/600", alt: "Bali rice terraces" },
  { src: "https://picsum.photos/seed/hallst2/1200/600", alt: "Hallstatt lake" },
  { src: "https://picsum.photos/seed/taipei6/1200/600", alt: "Taipei night market" },
];

interface TravelEntry {
  place: string;
  moment: string;
  note: string;
  image: string;
  rotate: string;
  accent: string;
}

const entries: TravelEntry[] = [
  {
    place: "Kyoto, Japan",
    moment: "Sitting alone in a moss garden at 7am, the only sound was water dripping from bamboo",
    note: "i cried a little, it was that quiet",
    image: "https://picsum.photos/seed/kyoto44/400/300",
    rotate: "-rotate-2",
    accent: "bg-matcha-400",
  },
  {
    place: "Lisbon, Portugal",
    moment: "Getting lost in Alfama's alleyways with a pastel de nata in each hand, laundry drying overhead",
    note: "best city for getting lost",
    image: "https://picsum.photos/seed/lisbon7/400/300",
    rotate: "rotate-1",
    accent: "bg-terra-400",
  },
  {
    place: "Taipei, Taiwan",
    moment: "Night market steam, a stranger recommending their favorite stall, eating something I couldn't name but loved",
    note: "solo dining = brave dining",
    image: "https://picsum.photos/seed/taipei88/400/300",
    rotate: "-rotate-1",
    accent: "bg-amber-400",
  },
  {
    place: "Patagonia, Argentina",
    moment: "Hours of hiking without seeing another person, just wind and glacial blue and the sound of my own breathing",
    note: "this changed something in me",
    image: "https://picsum.photos/seed/patag11/400/300",
    rotate: "rotate-2",
    accent: "bg-lav-400",
  },
  {
    place: "Hallstatt, Austria",
    moment: "Morning fog lifting off the lake while I journaled on a dock, wrapped in every layer I had",
    note: "the cold was worth it",
    image: "https://picsum.photos/seed/hallst55/400/300",
    rotate: "-rotate-1",
    accent: "bg-matcha-300",
  },
  {
    place: "Bali, Indonesia",
    moment: "Watching rice terraces turn gold at sunrise from a borrowed scooter on a road I definitely should not have taken",
    note: "got lost. no regrets.",
    image: "https://picsum.photos/seed/bali33/400/300",
    rotate: "rotate-1",
    accent: "bg-terra-300",
  },
];

export default function Travel() {
  const ref = useReveal();

  return (
    <section id="travel" className="relative py-28 overflow-hidden" ref={ref as React.RefObject<HTMLElement>}>
      {/* Background shapes */}
      <div className="pointer-events-none absolute top-0 right-0 h-[300px] w-[300px] rounded-full bg-amber-50/50 blur-3xl" />
      <div className="pointer-events-none absolute bottom-20 -left-20 h-[250px] w-[250px] rounded-full bg-terra-50/40 blur-3xl" />

      <div className="reveal px-6 md:px-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-serif text-3xl sm:text-4xl text-matcha-800">
            Solo wandering
          </h2>
          <p className="mt-4 text-[15px] text-warm-gray max-w-lg leading-[1.85]">
            I travel alone. Not because I don't like people, but because there's
            something about navigating a strange city by yourself — the quiet meals,
            the wrong turns that lead somewhere better, the journal entries
            written in airport lounges at 2am.
          </p>
          <p className="mt-3 font-hand text-xl text-terra-400 rotate-1">
            every trip teaches me something I didn't know I needed to learn
          </p>
        </div>
      </div>

      {/* Full-width photo carousel */}
      <div className="mt-12 px-4 sm:px-8 md:px-16">
        <div className="mx-auto max-w-6xl">
          <Carousel
            images={carouselImages}
            interval={5000}
            aspectRatio="aspect-[2/1] sm:aspect-[16/7]"
          />
        </div>
      </div>

      {/* Scrapbook Polaroid grid */}
      <div className="mt-16 px-6 md:px-16">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {entries.map((entry) => (
              <div
                key={entry.place}
                className={`${entry.rotate} hover:rotate-0 transition-transform duration-500`}
              >
                <div className="bg-white p-3 pb-6 rounded-sm shadow-md">
                  <img
                    src={entry.image}
                    alt={entry.place}
                    className="w-full aspect-[4/3] object-cover rounded-sm"
                    loading="lazy"
                  />
                  {/* Washi tape accent */}
                  <div className={`absolute top-1 left-1/2 -translate-x-1/2 h-4 w-16 ${entry.accent} opacity-40 -rotate-2 rounded-sm`} />

                  <div className="mt-3 px-1">
                    <p className="font-serif text-sm font-semibold text-matcha-800">
                      {entry.place}
                    </p>
                    <p className="mt-1.5 text-xs leading-relaxed text-warm-gray">
                      {entry.moment}
                    </p>
                    <p className="mt-2 font-hand text-base text-terra-400">
                      {entry.note}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
