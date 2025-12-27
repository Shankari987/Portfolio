export default function Experience() {
  return (
    <section
  id="experience"
  className="py-20 bg-slate-950 text-center px-6 md:px-16 scroll-mt-20"
>
  <h2 className="text-3xl md:text-4xl font-bold text-teal-400 mb-12">
    Experience
  </h2>

  <div className="max-w-4xl mx-auto space-y-8">
    {/* Current Internship - Aakam 360 */}
    <div className="bg-neutral-900 border border-gray-800 hover:border-teal-400 p-8 rounded-2xl shadow-md hover:shadow-teal-500/10 transition duration-300 text-left">
      <h3 className="text-2xl font-semibold text-white mb-1">
        Full-Stack Developer Intern
      </h3>
      <p className="text-gray-400 mb-2">Aakam 360 • Oct 2025 – Present</p>
      <p className="text-gray-400 leading-relaxed">
        Currently working on building and maintaining full-stack web applications
        using <span className="text-white font-semibold">React.js</span>,{" "}
        <span className="text-white font-semibold">Node.js</span>, and{" "}
        <span className="text-white font-semibold">MySQL</span>. Focused on
        creating responsive UIs, integrating RESTful APIs, and optimizing
        performance across both front-end and back-end systems.
      </p>
    </div>
  </div>
</section>

  );
}
