import { Mail, Linkedin, Github } from "lucide-react"; // install lucide-react if not already

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-slate-950 text-center px-6 md:px-16 scroll-mt-20"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-teal-400 mb-4">
        Contact Me
      </h2>
      <p className="text-gray-400 mb-8 text-lg">
        Let’s connect and build something amazing together.
      </p>

      <div className="flex justify-center gap-8">
        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/shankari987"
          target="_blank"
          className="text-teal-400 hover:text-white transition"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-8 h-8" />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/Shankari987"
          target="_blank"
          className="text-teal-400 hover:text-white transition"
          aria-label="GitHub"
        >
          <Github className="w-8 h-8" />
        </a>

        {/* Email */}
        <a
          href="mailto:shankarisekar2005@gmail.com"
          className="text-teal-400 hover:text-white transition"
          aria-label="Email"
        >
          <Mail className="w-8 h-8" />
        </a>
      </div>
    </section>
  );
}
