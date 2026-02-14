import { useReveal } from "../hooks/useReveal";

/* ── Projects ──
   Alternating layout with real placeholder screenshots.
   Accent colors now vary per project using the expanded palette. */

interface Project {
  title: string;
  description: string;
  note: string;
  tech: string[];
  github: string;
  demo?: string;
  image: string;
  accent: { dot: string; tag: string; tagText: string };
}

const projects: Project[] = [
  {
    title: "Medicine Mirror",
    description:
      "An interactive smart mirror with Wi-Fi calling and fingerprint authentication that displays personalized prescription schedules. Built as a senior project at Cornell — the idea was to make medication management feel effortless, especially for elderly users.",
    note: "hardware meets healthcare",
    tech: ["Python", "Raspberry Pi", "Wi-Fi", "Fingerprint Sensor"],
    github: "https://github.com",
    image: "https://picsum.photos/seed/mirror42/800/500",
    accent: { dot: "bg-matcha-400", tag: "bg-matcha-50 border-matcha-200", tagText: "text-matcha-700" },
  },
  {
    title: "Perler Bead Printer",
    description:
      "A 3-axis robot that prints patterns with Perler beads. I 3D modeled and designed all the moving parts, then programmed the stepper system in C/C++. Basically a tiny, colorful 3D printer that makes pixel art in real life.",
    note: "my most ambitious build",
    tech: ["C/C++", "3D Modeling", "Stepper Motors", "Embedded"],
    github: "https://github.com",
    demo: "https://example.com",
    image: "https://picsum.photos/seed/beadbot/800/500",
    accent: { dot: "bg-terra-400", tag: "bg-terra-50 border-terra-200", tagText: "text-terra-500" },
  },
  {
    title: "BeatSaber",
    description:
      "A rhythm game running on a Raspberry Pi with a TFT display and an IMU joystick for input. Inspired by the VR game, but built from scratch in Python on a tiny screen. Surprisingly fun to play.",
    note: "the fun one",
    tech: ["Python", "Raspberry Pi", "IMU", "TFT Display"],
    github: "https://github.com",
    demo: "https://example.com",
    image: "https://picsum.photos/seed/beatsaber7/800/500",
    accent: { dot: "bg-lav-400", tag: "bg-lav-50 border-lav-200", tagText: "text-lav-500" },
  },
  {
    title: "Hilton Hackathon",
    description:
      "Won first place overall at the Hilton Hackathon as a freshman. A whirlwind 24 hours of building, pitching, and way too much coffee. The project that made me realize I love building things under pressure.",
    note: "first place as a freshman!",
    tech: ["Hackathon", "Full Stack"],
    github: "https://github.com",
    image: "https://picsum.photos/seed/hackathon9/800/500",
    accent: { dot: "bg-amber-400", tag: "bg-amber-50 border-amber-200", tagText: "text-amber-500" },
  },
];

export default function Projects() {
  const ref = useReveal();

  return (
    <section id="projects" className="relative py-28 px-6 md:px-16 overflow-hidden" ref={ref as React.RefObject<HTMLElement>}>
      {/* Background shapes */}
      <div className="pointer-events-none absolute top-20 -left-20 h-[300px] w-[300px] rounded-full bg-lav-50/40 blur-3xl" />
      <div className="pointer-events-none absolute bottom-40 -right-20 h-[250px] w-[250px] rounded-full bg-terra-50/40 blur-3xl" />

      <div className="reveal mx-auto max-w-5xl">
        <h2 className="font-serif text-3xl sm:text-4xl text-matcha-800">
          Things I've built
        </h2>
        <p className="mt-3 text-[15px] text-warm-gray max-w-md leading-relaxed">
          A mix of practical tools and creative experiments.
          Most of them started as "what if I just..."
        </p>

        <div className="mt-16 space-y-24">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`grid md:grid-cols-2 gap-10 items-center`}
              style={i % 2 === 1 ? { direction: "rtl" } : undefined}
            >
              {/* Screenshot */}
              <div style={{ direction: "ltr" }} className="relative">
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="w-full rounded-2xl shadow-md object-cover aspect-[16/10]"
                  loading="lazy"
                />
                {/* Floating shape behind the image */}
                <div className={`absolute -z-10 -bottom-4 ${i % 2 === 0 ? "-right-4" : "-left-4"} h-full w-full rounded-2xl ${i % 2 === 0 ? "bg-terra-100/30" : "bg-lav-100/30"}`} />
              </div>

              {/* Details */}
              <div style={{ direction: "ltr" }}>
                <div className="flex items-center gap-3">
                  <span className="font-hand text-3xl text-matcha-300">0{i + 1}.</span>
                  <div className={`h-2 w-2 rounded-full ${project.accent.dot}`} />
                </div>
                <h3 className="mt-2 font-serif text-2xl text-matcha-800">
                  {project.title}
                </h3>
                <p className="mt-3 text-[14px] leading-[1.8] text-warm-gray">
                  {project.description}
                </p>

                <p className="mt-3 font-hand text-lg text-terra-400 -rotate-1">
                  — {project.note}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className={`text-xs ${project.accent.tagText} ${project.accent.tag} px-3 py-1 rounded-full border`}>
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex gap-5">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-1.5 text-sm text-matcha-600 hover:text-matcha-800 transition-colors">
                    Code <span className="h-px w-4 bg-matcha-400 group-hover:w-6 transition-all" />
                  </a>
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-1.5 text-sm text-terra-400 hover:text-terra-600 transition-colors">
                      Demo <span className="h-px w-4 bg-terra-300 group-hover:w-6 transition-all" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
