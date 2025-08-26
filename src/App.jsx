import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { Download, Github, Linkedin, Menu, X } from "lucide-react";

import Hero from "./components/Hero.jsx";
import ThreeScene from "./components/ThreeScene.jsx";
import ResumeBlock from "./components/ResumeBlock.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Experience from "./components/Experience.jsx";
import Contact from "./components/Contact.jsx";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const handleDownload = () => {
    window.dispatchEvent(new CustomEvent("export-pdf"));
  };

  return (
    <div className="font-display app-bg min-h-screen">
      {/* 🌟 NAVBAR */}
      <header
        data-aos="fade-down"
        className="no-print sticky top-0 z-50 backdrop-blur-xl 
                   bg-gradient-to-r from-fuchsia-600/20 via-black/40 to-indigo-600/20 
                   border-b border-white/10 shadow-[0_0_15px_rgba(217,70,239,0.25)]"
      >
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="#"
            className="font-extrabold tracking-tight text-lg md:text-xl flex items-center gap-2"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-indigo-400 drop-shadow">
              Nikhil Raj
            </span>
          </motion.a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a className="hover:text-fuchsia-300 transition" href="#skills">Skills</a>
            <a className="hover:text-fuchsia-300 transition" href="#projects">Projects</a>
            <a className="hover:text-fuchsia-300 transition" href="#experience">Experience</a>
            <a className="hover:text-fuchsia-300 transition" href="#contact">Contact</a>
          </nav>

          {/* Right Icons */}
          <div className="flex items-center gap-2">
            <a
              href="https://www.linkedin.com/in/nikhil-raj08/"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:bg-gradient-to-r hover:from-fuchsia-500 hover:to-indigo-500 hover:text-white transition"
              title="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://github.com/Mrnik08"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-fuchsia-500 hover:text-white transition"
              title="GitHub"
            >
              <Github size={18} />
            </a>
            <button
              onClick={handleDownload}
              className="ml-1 hidden sm:inline-flex items-center gap-2 px-4 py-2 
                         rounded-xl bg-gradient-to-r from-fuchsia-600 to-indigo-600 
                         text-white font-semibold shadow-lg shadow-fuchsia-500/30 
                         hover:scale-105 transition"
            >
              <Download size={16} /> <span>Resume</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="ml-2 md:hidden p-2 rounded-lg bg-white/5 hover:bg-white/10"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden px-6 py-4 flex flex-col gap-4 bg-black/70 backdrop-blur-xl border-t border-white/10"
            >
              <a className="hover:text-fuchsia-300 transition" href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
              <a className="hover:text-fuchsia-300 transition" href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
              <a className="hover:text-fuchsia-300 transition" href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
              <a className="hover:text-fuchsia-300 transition" href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
              <button
                onClick={() => {
                  handleDownload();
                  setMenuOpen(false);
                }}
                className="mt-2 flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-fuchsia-600 to-indigo-600 text-white shadow-md shadow-fuchsia-500/30"
              >
                <Download size={16} /> Resume PDF
              </button>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      {/* 🌈 Rest Sections */}
      <main className="snap-parent h-full overflow-x-hidden">
        <section className="snap-child min-h-[90vh] relative">
          <div className="absolute inset-0">
            <ThreeScene />
          </div>
          <Hero />
        </section>

        <section className="snap-child mx-auto max-w-7xl px-4 py-16">
          <ResumeBlock />
        </section>

        <section id="skills" className="snap-child mx-auto max-w-7xl px-4 py-16">
          <Skills />
        </section>

        <section id="projects" className="snap-child mx-auto max-w-7xl px-4 py-16">
          <Projects />
        </section>

        <section id="experience" className="snap-child mx-auto max-w-7xl px-4 py-16">
          <Experience />
        </section>

        <section id="contact" className="snap-child mx-auto max-w-7xl px-4 py-20">
          <Contact />
        </section>
      </main>
    </div>
  );
}
