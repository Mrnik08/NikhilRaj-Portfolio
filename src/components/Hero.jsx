import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import { Linkedin, Mail, Phone, MapPin, Globe } from "lucide-react";

export default function Hero() {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-200, 200], [15, -15]);
  const rotateY = useTransform(x, [-200, 200], [-15, 15]);

  const [showContacts, setShowContacts] = useState(false);

  function handleMouseMove(e) {
    const rect = ref.current.getBoundingClientRect();
    const ox = e.clientX - (rect.left + rect.width / 2);
    const oy = e.clientY - (rect.top + rect.height / 2);
    x.set(ox);
    y.set(oy);
  }

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative z-10 flex items-center min-h-[90vh] overflow-hidden"
    >
      {/* 🔥 Background blobs */}
      <motion.div
        className="absolute w-72 h-72 bg-fuchsia-500/30 rounded-full blur-3xl -top-20 -left-20"
        animate={{ x: [0, 50, -50, 0], y: [0, -30, 30, 0] }}
        transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-80 h-80 bg-indigo-500/30 rounded-full blur-3xl bottom-[-100px] right-[-100px]"
        animate={{ x: [0, -60, 60, 0], y: [0, 40, -40, 0] }}
        transition={{ repeat: Infinity, duration: 22, ease: "easeInOut" }}
      />

      {/* Layout */}
      <div className="mx-auto max-w-7xl w-full px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative">
        {/* LEFT: intro */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-6 text-center md:text-left"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight tracking-tight mb-2">
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-indigo-400">
              Nikhil Raj
            </span>
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-200">
            🚀 Full Stack Developer
          </h2>

          <p className="text-gray-300 leading-relaxed max-w-lg text-base sm:text-lg">
            Detail-oriented Computer Science graduate with a strong foundation in{" "}
            <b>Core Java, React.js, Node.js</b>, and database systems. Passionate
            about building scalable websites, apps & seamless user experiences.
          </p>

          {/* Contact row */}
          {/* 👉 Desktop / Tablet */}
          <div className="hidden md:grid gap-2 text-sm md:text-base sm:grid-cols-2">
            <span className="inline-flex items-center gap-2">
              <MapPin size={18} /> Noida, India
            </span>
            <span className="inline-flex items-center gap-2">
              <Phone size={18} /> 9262718449
            </span>
            <a
              className="inline-flex items-center gap-2 hover:text-fuchsia-300"
              href="mailto:nikhil0810raj@gmail.com"
            >
              <Mail size={18} /> nikhil0810raj@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/nikhil-raj08/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 hover:text-fuchsia-300"
            >
              <Linkedin size={18} /> LinkedIn
            </a>
            <a
              href="https://spidermentorlms.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 hover:text-fuchsia-300"
            >
              <Globe size={18} /> spidermentorlms.vercel.app
            </a>
          </div>

          {/* 👉 Mobile: Reach Me button */}
          <div className="md:hidden">
            {!showContacts ? (
              <button
                onClick={() => setShowContacts(true)}
                className="px-6 py-3 bg-gradient-to-r from-fuchsia-500 to-indigo-500 text-white rounded-xl shadow-lg shadow-fuchsia-500/30 hover:scale-105 transition"
              >
                Reach Me
              </button>
            ) : (
              <div className="mt-4 space-y-2 text-sm">
                <span className="block flex items-center gap-2">
                  <MapPin size={18} /> Noida, India
                </span>
                <span className="block flex items-center gap-2">
                  <Phone size={18} /> 9262718449
                </span>
                <a
                  className="block flex items-center gap-2 hover:text-fuchsia-300"
                  href="mailto:nikhil0810raj@gmail.com"
                >
                  <Mail size={18} /> nikhil0810raj@gmail.com
                </a>
                <a
                  href="https://www.linkedin.com/in/nikhil-raj08/"
                  target="_blank"
                  rel="noreferrer"
                  className="block flex items-center gap-2 hover:text-fuchsia-300"
                >
                  <Linkedin size={18} /> LinkedIn
                </a>
                <a
                  href="https://spidermentorlms.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="block flex items-center gap-2 hover:text-fuchsia-300"
                >
                  <Globe size={18} /> spidermentorlms.vercel.app
                </a>
              </div>
            )}
          </div>
        </motion.div>

        {/* RIGHT: orb + tech icons */}
        <motion.div
          ref={ref}
          style={{ rotateX, rotateY }}
          className="relative flex items-center justify-center mt-10 md:mt-0"
        >
          {/* Glowing Orb */}
          <motion.div
            className="w-40 h-40 md:w-56 md:h-56 rounded-full bg-gradient-to-r from-fuchsia-600 to-indigo-600 flex items-center justify-center text-4xl md:text-5xl font-extrabold shadow-[0_0_40px_rgba(217,70,239,0.6)] border-4 border-white/10 backdrop-blur"
            animate={{ scale: [1, 1.07, 1] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            NR
          </motion.div>

          {/* Floating Tech Icons */}
          <motion.div
            className="absolute -left-10 top-8 text-sky-400 text-5xl"
            style={{ rotateX, rotateY }}
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          >
            <FaReact />
          </motion.div>
          <motion.div
            className="absolute -right-10 top-16 text-yellow-400 text-5xl"
            style={{ rotateX, rotateY }}
            animate={{ y: [0, 18, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          >
            <FaJs />
          </motion.div>
          <motion.div
            className="absolute left-0 bottom-10 text-orange-500 text-5xl"
            style={{ rotateX, rotateY }}
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 3.2, ease: "easeInOut" }}
          >
            <FaHtml5 />
          </motion.div>
          <motion.div
            className="absolute right-0 bottom-4 text-blue-400 text-5xl"
            style={{ rotateX, rotateY }}
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
          >
            <FaCss3Alt />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
