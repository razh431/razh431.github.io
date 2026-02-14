import { useReveal } from "../hooks/useReveal";

/* ── Experience ──
   Timeline-style work experience section with accent colors
   and decorative elements matching the site's aesthetic. */

interface Role {
  company: string;
  title: string;
  period: string;
  highlights: string[];
  accent: { dot: string; line: string; tag: string; tagText: string };
}

const roles: Role[] = [
  {
    company: "Amazon AWS",
    title: "Software Engineer",
    period: "Aug 2023 – Present",
    highlights: [
      "Led migration from DynamoDB to Amazon RDS (MySQL), redesigning APIs and JavaScript clients to support firmware deployments for millions of EC2 servers.",
      "Centralized GPU firmware distribution with ODMs using AWS Lambda & S3, enabling vendor access to updated BOMs within 1 hour.",
      "Reduced weekly on-call workload by 2+ hours by automating hardware loan management — service onboarded by 7 other teams.",
      "Increased failed sensor detection by 200% by building a high-availability ticketing system using AWS SQS & Lambda.",
      "Reduced job failures by 15% by redesigning ETL pipelines running Spark to solve race conditions between jobs.",
      "Spearheaded Amazon region build with IaC, debugging VPC routing, TCP/IP, DNS, and ports.",
    ],
    accent: { dot: "bg-matcha-400", line: "bg-matcha-200", tag: "bg-matcha-50 border-matcha-200", tagText: "text-matcha-700" },
  },
  {
    company: "Amazon AWS",
    title: "Software Engineer Intern",
    period: "May 2022 – Aug 2022",
    highlights: [
      "Enabled bulk reruns of ETL jobs in React UI, Athena, and EMR Spark pipelines, reducing on-call operational burden by 10%.",
      "Redesigned the ETL website UI after completing the last internship stretch goal.",
    ],
    accent: { dot: "bg-terra-400", line: "bg-terra-200", tag: "bg-terra-50 border-terra-200", tagText: "text-terra-500" },
  },
  {
    company: "Oracle",
    title: "Software Engineering Intern",
    period: "Jun 2021 – Aug 2021",
    highlights: [
      "Built dashboard using OJET, JS/CSS, and Python Flask to centralize GitLab project pipeline tracking and user preferences.",
    ],
    accent: { dot: "bg-lav-400", line: "bg-lav-200", tag: "bg-lav-50 border-lav-200", tagText: "text-lav-500" },
  },
  {
    company: "Collective Embodied Intelligence Lab",
    title: "Undergrad Researcher — Cornell",
    period: "Oct 2019 – Dec 2020",
    highlights: [
      "Analyzed honeybee behaviors using DeepLabCut, Python, and OpenCV, quantifying motion and plume-tracking metrics.",
      "Received the Engineering Learning Initiatives Research Award.",
    ],
    accent: { dot: "bg-amber-400", line: "bg-amber-200", tag: "bg-amber-50 border-amber-200", tagText: "text-amber-500" },
  },
  {
    company: "CU SAIL",
    title: "Software (Nav) Team — Cornell",
    period: "Oct 2019 – May 2021",
    highlights: [
      "Developed autonomous boat navigation system integrating anemometers, lidar, and IMU with PIC32 microcontroller for obstacle avoidance and waypoint navigation.",
    ],
    accent: { dot: "bg-matcha-400", line: "bg-matcha-200", tag: "bg-matcha-50 border-matcha-200", tagText: "text-matcha-700" },
  },
];

const teaching = [
  { course: "Embedded Operating Systems (ECE 5725)", period: "Jan – May 2023", note: "Led labs for 20 students — Git, VIM, Linux, Raspberry Pis" },
  { course: "Digital Logic & Organization (ECE 2300)", period: "Jan – May 2022", note: "Boolean algebra, circuits, FSMs, processor pipelines" },
];

export default function Experience() {
  const ref = useReveal();

  return (
    <section id="experience" className="relative py-28 px-6 md:px-16 overflow-hidden" ref={ref as React.RefObject<HTMLElement>}>
      {/* Background decorations */}
      <div className="pointer-events-none absolute -top-10 -left-20 h-[300px] w-[300px] rounded-full bg-matcha-50/50 blur-3xl" />
      <div className="pointer-events-none absolute bottom-20 -right-16 h-[250px] w-[250px] rounded-full bg-lav-50/40 blur-3xl" />
      <div className="pointer-events-none absolute top-40 right-[10%] h-10 w-10 rounded-full border-2 border-terra-200/50 animate-drift" />

      <div className="reveal mx-auto max-w-4xl">
        <h2 className="font-serif text-3xl sm:text-4xl text-matcha-800">
          Where I've worked
        </h2>
        <p className="mt-3 text-[15px] text-warm-gray max-w-md leading-relaxed">
          From research labs to large-scale cloud infrastructure.
        </p>
        <div className="mt-3 flex gap-2">
          <div className="h-px w-12 bg-matcha-300 mt-2" />
          <div className="h-px w-6 bg-terra-300 mt-2" />
          <div className="h-px w-4 bg-lav-300 mt-2" />
        </div>

        {/* Education callout */}
        <div className="mt-12 flex items-start gap-4 p-5 rounded-xl bg-cream-dark/50 border border-matcha-100/50">
          <div className="mt-1 h-3 w-3 rounded-full bg-terra-300 shrink-0" />
          <div>
            <p className="font-serif text-lg text-matcha-800">Cornell University</p>
            <p className="text-sm text-warm-gray mt-1">B.S. Computer Science, May 2023</p>
            <p className="text-sm text-warm-gray">Double minors in Electrical Engineering and China & Asia-Pacific Studies</p>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-16 relative">
          {/* Vertical timeline line */}
          <div className="absolute left-[11px] top-2 bottom-2 w-px bg-matcha-100 hidden md:block" />

          <div className="space-y-14">
            {roles.map((role) => (
              <div key={`${role.company}-${role.period}`} className="relative md:pl-12">
                {/* Timeline dot */}
                <div className={`hidden md:block absolute left-0 top-1.5 h-[22px] w-[22px] rounded-full border-[3px] border-cream ${role.accent.dot}`} />

                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <div>
                    <h3 className="font-serif text-xl text-matcha-800">{role.company}</h3>
                    <p className="text-sm text-terra-500 font-medium">{role.title}</p>
                  </div>
                  <span className="text-xs text-warm-gray/70 tracking-wide shrink-0">{role.period}</span>
                </div>

                <ul className="mt-4 space-y-2.5">
                  {role.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-3 text-[14px] leading-[1.75] text-warm-gray">
                      <span className={`mt-2 h-1.5 w-1.5 rounded-full ${role.accent.dot} shrink-0`} />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Teaching */}
        <div className="mt-20">
          <h3 className="font-serif text-xl text-matcha-800">Teaching</h3>
          <div className="mt-2 flex gap-2">
            <div className="h-px w-8 bg-lav-300 mt-2" />
            <div className="h-px w-4 bg-amber-300 mt-2" />
          </div>

          <div className="mt-6 space-y-5">
            {teaching.map((t) => (
              <div key={t.course} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                <p className="text-[14px] text-matcha-700 font-medium">{t.course}</p>
                <span className="text-xs text-warm-gray/60">{t.period}</span>
                <p className="text-[13px] text-warm-gray hidden sm:block">— {t.note}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 font-hand text-lg text-lav-400 rotate-1">
            teaching made me a better engineer
          </p>
        </div>
      </div>
    </section>
  );
}
