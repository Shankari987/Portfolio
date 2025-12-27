export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-[80vh] flex flex-col-reverse md:flex-row justify-center md:justify-between items-center gap-8 px-6 md:px-16 bg-slate-950 text-gray-100 pt-20 md:pt-24 pb-10"
    >
      {/* ===== Left Side (Text) ===== */}
      <div className="flex-1 text-center md:text-left space-y-5 md:space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Hi, I'm <span className="text-teal-400">Shankari</span>
        </h1>

        <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto md:mx-0 leading-relaxed">
          I’m passionate about web development and enjoy building websites and web applications
          using technologies like React, Node.js, and Express. I focus on writing clean code
          and creating simple, responsive designs.
        </p>

        <div className="flex justify-center md:justify-start gap-4 pt-2">
          <a
            href="#contact"
            className="px-6 py-3 bg-teal-500 text-slate-950 font-semibold rounded-lg hover:bg-teal-400 transition duration-300"
          >
            Contact Me
          </a>
          <a
            href="assets/resume/Shankari_Resume.pdf"
            className="px-6 py-3 border border-teal-400 text-teal-400 rounded-lg hover:bg-teal-400/10 transition duration-300"
          >
            View Resume
          </a>
        </div>
      </div>

      {/* ===== Right Side (Profile Image) ===== */}
      <div className="flex-1 flex justify-center md:justify-end">
        <div className="relative w-52 h-52 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-teal-400 shadow-[0_0_25px_rgba(45,212,191,0.3)] bg-neutral-900 animate-float">
          <img
            src="/src/assets/profile.jpg"
            alt="Shankari Sekar"
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>
    </section>
  );
}
