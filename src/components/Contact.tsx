import { useReveal } from "../hooks/useReveal";

/* ── Contact ──
   Warm sign-off with decorative shapes in all palette colors.
   Scattered photo memories in the background. */

export default function Contact() {
  const ref = useReveal();

  return (
    <section id="contact" className="relative py-28 px-6 md:px-16 overflow-hidden" ref={ref as React.RefObject<HTMLElement>}>
      {/* Background decorations */}
      <div className="pointer-events-none absolute top-0 left-[10%] h-[250px] w-[250px] rounded-full bg-matcha-50/40 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 right-[5%] h-[200px] w-[200px] rounded-full bg-terra-50/30 blur-3xl" />
      <div className="pointer-events-none absolute top-20 right-[20%] h-12 w-12 rounded-full border-2 border-lav-200/50 animate-drift" />
      <div className="pointer-events-none absolute bottom-24 left-[15%] h-6 w-6 bg-amber-100/60 rotate-45 animate-drift delay-200" />
      <div className="pointer-events-none absolute top-1/2 left-[8%] h-4 w-10 rounded-full bg-terra-100/40 animate-drift delay-400" />

      {/* Scattered tiny memory photos */}
      <img
        src="https://picsum.photos/seed/mem1/120/80"
        alt=""
        className="pointer-events-none absolute top-16 right-[8%] w-20 h-14 object-cover rounded-lg shadow-sm opacity-30 -rotate-6"
      />
      <img
        src="https://picsum.photos/seed/mem2/120/80"
        alt=""
        className="pointer-events-none absolute bottom-28 left-[6%] w-16 h-12 object-cover rounded-lg shadow-sm opacity-25 rotate-3"
      />

      <div className="reveal mx-auto max-w-2xl text-center relative">
        <p className="font-hand text-2xl text-terra-400 -rotate-1">
          don't be a stranger
        </p>

        <h2 className="mt-4 font-serif text-3xl sm:text-4xl text-matcha-800">
          Say hi
        </h2>

        {/* Multi-color accent line */}
        <div className="mt-4 flex justify-center gap-1">
          <div className="h-1 w-8 rounded-full bg-matcha-300" />
          <div className="h-1 w-4 rounded-full bg-terra-300" />
          <div className="h-1 w-3 rounded-full bg-lav-300" />
          <div className="h-1 w-2 rounded-full bg-amber-300" />
        </div>

        <p className="mt-6 text-[15px] text-warm-gray leading-[1.85] max-w-md mx-auto">
          Whether you want to talk about a project, trade book recommendations,
          or share a hiking trail — I'd love to hear from you.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-6">
          <a href="mailto:razhou43@gmail.com" className="group flex items-center justify-center gap-3 text-sm text-matcha-700 hover:text-matcha-900 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            razhou43@gmail.com
            <span className="h-px w-0 bg-matcha-400 group-hover:w-4 transition-all" />
          </a>

          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-3 text-sm text-terra-500 hover:text-terra-600 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
            GitHub
            <span className="h-px w-0 bg-terra-300 group-hover:w-4 transition-all" />
          </a>

          <a href="https://linkedin.com/in/rachelz4301" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-3 text-sm text-lav-500 hover:text-lav-400 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
            <span className="h-px w-0 bg-lav-300 group-hover:w-4 transition-all" />
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-28 text-center">
        <div className="mx-auto mb-6 flex justify-center gap-1">
          <div className="h-px w-6 bg-matcha-200" />
          <div className="h-px w-4 bg-terra-200" />
          <div className="h-px w-3 bg-lav-200" />
          <div className="h-px w-2 bg-amber-200" />
        </div>
        <p className="font-hand text-lg text-matcha-300">
          made with care & too much matcha
        </p>
        <p className="mt-2 text-[11px] text-warm-gray/50">
          &copy; {new Date().getFullYear()} Rachel Zhou
        </p>
      </footer>
    </section>
  );
}
