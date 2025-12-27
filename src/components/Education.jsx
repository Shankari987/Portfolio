export default function Education() {
  return (
    <section
      id="education"
      className="py-20 bg-slate-950 text-center px-6 md:px-16 scroll-mt-20"
    >
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-teal-400 mb-12">
        Education
      </h2>

      {/* Education Cards Grid */}
      <div className="max-w-6xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {/* B.Tech - IT */}
        <div className="bg-neutral-900 border border-gray-800 hover:border-teal-400 p-8 rounded-2xl shadow-md hover:shadow-teal-500/10 transition duration-300">
          <h3 className="text-2xl font-semibold text-white mb-2">
            B.Tech – Information Technology
          </h3>
          <p className="text-gray-400 mb-1">
            Sri Shanmugha College of Engineering and Technology (Autonomous)
          </p>
          <p className="text-gray-500 text-sm">Anna University • 2023 – 2027</p>
          <p className="text-gray-400 text-sm mt-2 italic">Currently Pursuing</p>
        </div>

        {/* Higher Secondary */}
        <div className="bg-neutral-900 border border-gray-800 hover:border-teal-400 p-8 rounded-2xl shadow-md hover:shadow-teal-500/10 transition duration-300">
          <h3 className="text-2xl font-semibold text-white mb-2">
            Higher Secondary
          </h3>
          <p className="text-gray-400 mb-1">SPM Higher Secondary School</p>
          <p className="text-gray-500 text-sm">2021 – 2023</p>
          <p className="text-gray-400 text-sm mt-2">
            <span className="text-teal-400 font-semibold">Percentage:</span> 85%
          </p>
        </div>

        {/* Secondary School */}
        <div className="bg-neutral-900 border border-gray-800 hover:border-teal-400 p-8 rounded-2xl shadow-md hover:shadow-teal-500/10 transition duration-300">
          <h3 className="text-2xl font-semibold text-white mb-2">
            Secondary School
          </h3>
          <p className="text-gray-400 mb-1">SPM Higher Secondary School</p>
          <p className="text-gray-500 text-sm">2020 – 2021</p>
          <p className="text-gray-400 text-sm mt-2">
            <span className="text-teal-400 font-semibold">Percentage:</span> 80%
          </p>
        </div>
      </div>
    </section>
  );
}
