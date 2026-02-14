import { useRef, useState, useEffect, useCallback } from "react";

/* ── Carousel ──
   Horizontal photo carousel with scroll-snap, auto-advance,
   prev/next arrows, and dot indicators. Accepts any images as children
   or takes an `images` array of {src, alt} objects. */

interface CarouselProps {
  images: { src: string; alt: string }[];
  autoAdvance?: boolean;
  interval?: number;
  rounded?: boolean;
  aspectRatio?: string;
}

export default function Carousel({
  images,
  autoAdvance = true,
  interval = 4000,
  rounded = true,
  aspectRatio = "aspect-[16/9]",
}: CarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const total = images.length;

  const scrollTo = useCallback(
    (index: number) => {
      const track = trackRef.current;
      if (!track) return;
      const wrapped = ((index % total) + total) % total;
      track.scrollTo({ left: wrapped * track.offsetWidth, behavior: "smooth" });
      setCurrent(wrapped);
    },
    [total]
  );

  /* Auto-advance */
  useEffect(() => {
    if (!autoAdvance) return;
    const timer = setInterval(() => scrollTo(current + 1), interval);
    return () => clearInterval(timer);
  }, [autoAdvance, interval, current, scrollTo]);

  /* Sync indicator on manual scroll */
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () => {
      const idx = Math.round(track.scrollLeft / track.offsetWidth);
      setCurrent(idx);
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative group">
      {/* Track */}
      <div
        ref={trackRef}
        className={`carousel-track ${rounded ? "rounded-2xl" : ""} overflow-hidden`}
      >
        {images.map((img, i) => (
          <div key={i} className={`carousel-slide ${aspectRatio}`}>
            <img
              src={img.src}
              alt={img.alt}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Prev / Next arrows — visible on hover */}
      {total > 1 && (
        <>
          <button
            onClick={() => scrollTo(current - 1)}
            className="absolute left-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-white/80 backdrop-blur-sm shadow-md flex items-center justify-center text-bark opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white cursor-pointer"
            aria-label="Previous"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => scrollTo(current + 1)}
            className="absolute right-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-white/80 backdrop-blur-sm shadow-md flex items-center justify-center text-bark opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white cursor-pointer"
            aria-label="Next"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Dot indicators */}
      {total > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                i === current
                  ? "w-6 bg-matcha-400"
                  : "w-2 bg-matcha-200 hover:bg-matcha-300"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
