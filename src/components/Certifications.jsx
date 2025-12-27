import { useState } from "react";

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  const certs = [
    {
      title: "React JS Workshop",
      org: "Nandha Engineering College",
      img: "/assets/certificates/workshop.jpg",
    },
    {
      title: "The Joy of Computing Using Python",
      org: "NPTEL",
      img: "/assets/certificates/nptel.jpg",
    },
    {
      title: "30-Day Masterclass: Full Stack Development",
      org: "Novitech",
      img: "/assets/certificates/fullstack.jpg",
    },
  ];

  // 🧠 Close modal when clicking outside
  const handleOutsideClick = (e) => {
    if (e.target.id === "modalOverlay") {
      setSelectedCert(null);
    }
  };

  return (
    <section
      id="certifications"
      className="py-20 bg-slate-950 text-center px-6 md:px-16 scroll-mt-20"
    >
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-teal-400 mb-12">
        Certifications
      </h2>

      {/* Certification Cards */}
      <div className="max-w-6xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {certs.map((c, i) => (
          <div
            key={i}
            className="bg-neutral-900 border border-gray-800 hover:border-teal-400 p-8 rounded-2xl shadow-md hover:shadow-teal-500/10 transition duration-300 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {c.title}
              </h3>
              <p className="text-gray-400 mb-4">{c.org}</p>
            </div>
            <button
              onClick={() => setSelectedCert(c.img)}
              className="mt-auto inline-flex items-center justify-center gap-2 text-teal-400 font-medium hover:text-white transition"
            >
              View Certificate
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12l-7.5 7.5M21 12H3"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>

      {/* Modal Preview */}
      {selectedCert && (
        <div
          id="modalOverlay"
          onClick={handleOutsideClick}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
        >
          <div className="relative bg-neutral-900 rounded-2xl shadow-2xl p-4 max-w-4xl w-full max-h-[90vh] overflow-auto border border-teal-500/40">
            {/* Close Button */}
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-3 right-4 text-gray-300 hover:text-white text-3xl font-bold transition duration-200"
              aria-label="Close certificate preview"
            >
              ×
            </button>

            {/* Image Preview */}
            <img
              src={selectedCert}
              alt="Certificate"
              className="w-full h-auto rounded-lg object-contain max-h-[80vh] mx-auto"
            />
          </div>
        </div>
      )}
    </section>
  );
}
