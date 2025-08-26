import { useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { ExternalLink, FolderGit2 } from "lucide-react";

const data = [
  {
    title: "Amazon Clone",
    desc: "Static front-end clone using HTML & CSS. Replicates core Amazon layout.",
    tech: ["HTML", "CSS"],
    link: "https://mrnik08.github.io/Amazon/"
  },
  {
    title: "BloodVault — Online Blood Bank",
    desc: "Donor/Recipient flows, real-time stock, admin dashboard.",
    tech: ["React", "Node", "Express", "MySQL", "JWT"],
  },
  {
    title: "SpiderMentor — LMS",
    desc: "Courses, quizzes, notifications, progress. Dev with JSON Server.",
    tech: ["React", "Axios", "Bootstrap", "AOS", "Framer Motion"],
    link: "https://spidermentorlms.vercel.app/"
  },
  {
    title: "Portfolio Website",
    desc: "React, Tailwind CSS • Personal portfolio showcasing projects and skills.",
    link: "https://nikhilRaj-portfolio.vercel.app/"
  },
  {
    title: "RoupanNaturals",
    desc: "Full-Stack Project • E-commerce website with Stripe payment gateway & deployment.",
    // link: "https://nikhil-portfolio.vercel.app/"
  }
];

// 🔥 Magnetic Card Wrapper
function Magnetic({ children }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rX = useTransform(y, [-60, 60], [8, -8]);
  const rY = useTransform(x, [-60, 60], [-8, 8]);
  return (
    <motion.div
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - (r.left + r.width / 2));
        y.set(e.clientY - (r.top + r.height / 2));
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ rotateX: rX, rotateY: rY }}
      className="relative group glass p-6 rounded-2xl 
                 border border-white/10 backdrop-blur-xl
                 bg-gradient-to-br from-white/5 to-white/0 
                 hover:shadow-[0_0_30px_rgba(217,70,239,0.25)] 
                 transition-all duration-300"
    >
      {/* Glow overlay */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-fuchsia-500/30 to-indigo-500/30 opacity-0 group-hover:opacity-100 blur-xl transition duration-500"></div>
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

export default function Projects() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <section className="relative py-20 overflow-hidden">
      {/* 🌈 Background Blobs */}
      <motion.div
        className="absolute w-80 h-80 bg-fuchsia-500/20 rounded-full blur-3xl -top-24 -left-24"
        animate={{ x: [0, 40, -40, 0], y: [0, -30, 30, 0] }}
        transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[28rem] h-[28rem] bg-indigo-500/20 rounded-full blur-3xl bottom-[-150px] right-[-150px]"
        animate={{ x: [0, -50, 50, 0], y: [0, 20, -20, 0] }}
        transition={{ repeat: Infinity, duration: 24, ease: "easeInOut" }}
      />

      {/* Section Title */}
      <div className="relative text-center mb-12" data-aos="fade-up">
        <h3 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-indigo-400">
          Projects
        </h3>
        <p className="text-slate-400 mt-2">Some of the works I’ve built & contributed to</p>
      </div>

      {/* Project Cards Grid */}
      <div className="relative grid sm:grid-cols-2 lg:grid-cols-3 gap-8 z-10 max-w-6xl mx-auto px-6">
        {data.map((p, idx) => (
          <div key={idx} data-aos="zoom-in" data-aos-delay={idx * 100}>
            <Magnetic>
              <div className="flex items-center gap-3 mb-3 text-fuchsia-300">
                <FolderGit2 size={20} />
                <h4 className="font-semibold text-lg">{p.title}</h4>
              </div>
              <p className="text-slate-300/90">{p.desc}</p>

              {p.tech && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {p.tech.map((t, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ y: -3, scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="px-3 py-1 rounded-full border border-white/10 bg-gradient-to-r from-fuchsia-500/10 to-indigo-500/10 text-xs text-slate-200 shadow-inner hover:shadow-[0_0_15px_rgba(217,70,239,0.4)] transition"
                    >
                      {t}
                    </motion.span>
                  ))}
                </div>
              )}

              {p.link && (
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 mt-4 text-sm text-fuchsia-300 hover:text-indigo-300 transition"
                >
                  <ExternalLink size={16} /> Visit Project
                </motion.a>
              )}
            </Magnetic>
          </div>
        ))}
      </div>
    </section>
  );
}
