import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="antialiased bg-gradient-to-b from-slate-950 via-slate-900 to-black text-gray-200">
      {/* Fixed Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="mt-16 space-y-0">
        <Hero />
        <About />
        <Education />
        <Skills /> 
        <Experience />
        <Certifications />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
