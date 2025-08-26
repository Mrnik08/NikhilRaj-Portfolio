import { useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { Briefcase } from "lucide-react";

const jobs = [
  {
    company: "Jspider/Qspider - Noida, India",
    time: "March 2025 - Current",
    role: "Full Stack Developer (Intern)",
    points: [
      "Training: Core Java, JDBC, Servlets, Hibernate, Spring Boot, React.js, Node.js",
      "Development: Responsive apps, APIs, backend modules",
      "Quality: Production-ready, optimized, debugged apps",
      "Team: Cross-platform UI components & agile sprints",
    ],
  },
  {
    company: "Ardent Computech PVT LTD - Kolkata, India",
    time: "Jan 2022 - Mar 2022",
    role: "Java Programmer (Intern)",
    points: [
      "Worked on Java projects & debugging",
      "Performance review & optimization",
    ],
  },
  {
    company: "Ardent Computech PVT LTD - Kolkata, India",
    time: "Workshop",
    role: "IoT Workshop",
    points: [
      "Sensors, microcontrollers, integrations",
      "Fast learning, practical implementation",
    ],
  },
];

// 🔥 Magnetic hover wrapper
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
                 hover:shadow-[0_0_30px_rgba(129,140,248,0.25)] 
                 transition-all duration-300"
    >
      {/* Glow overlay */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/20 to-fuchsia-500/20 opacity-0 group-hover:opacity-100 blur-xl transition duration-500"></div>
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

export default function Experience() {
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
        className="absolute w-[26rem] h-[26rem] bg-indigo-500/20 rounded-full blur-3xl bottom-[-120px] right-[-120px]"
        animate={{ x: [0, -50, 50, 0], y: [0, 25, -25, 0] }}
        transition={{ repeat: Infinity, duration: 24, ease: "easeInOut" }}
      />

      {/* Section Title */}
      <div className="relative text-center mb-12" data-aos="fade-up">
        <h3 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-fuchsia-400 flex justify-center items-center gap-3">
          <Briefcase size={32} /> Work History
        </h3>
        <p className="text-slate-400 mt-2">Where I’ve worked, contributed & learned</p>
      </div>

      {/* Timeline Layout */}
      <div className="relative max-w-5xl mx-auto px-6">
        <div className="border-l-2 border-fuchsia-500/30 pl-8 space-y-10 relative">
          {jobs.map((j, idx) => (
            <div key={idx} data-aos="fade-up" data-aos-delay={idx * 150}>
              <Magnetic>
                {/* Timeline Dot */}
                <span className="absolute -left-[18px] top-8 h-4 w-4 rounded-full bg-gradient-to-r from-fuchsia-400 to-indigo-400 shadow-[0_0_15px_rgba(217,70,239,0.6)]"></span>

                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="font-semibold text-lg text-slate-100">{j.company}</div>
                  <div className="text-sm text-fuchsia-300">{j.time}</div>
                </div>

                <div className="mt-1 text-indigo-300 font-medium">{j.role}</div>

                <ul className="mt-3 space-y-2">
                  {j.points.map((p, i) => (
                    <li
                      key={i}
                      className="relative pl-5 leading-relaxed text-slate-300/90"
                    >
                      <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-indigo-300/80 shadow-[0_0_10px_2px_rgba(129,140,248,0.45)]" />
                      {p}
                    </li>
                  ))}
                </ul>
              </Magnetic>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
