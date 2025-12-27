export default function Footer() {
  return (
    <footer className="bg-slate-950 text-center py-6 border-t border-gray-800 text-gray-400">
      <p className="text-sm md:text-base">
        © {new Date().getFullYear()}{" "}
        <span className="text-teal-400 font-medium">Shankari Sekar</span> — All
        rights reserved.
      </p>
    </footer>
  );
}
