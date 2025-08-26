import { useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { Code2, Cpu, Database, Layout, Wrench } from "lucide-react";

const cards = [
  { icon: <Code2 size={22} />, title: "Programming", items: ["Java", "Python", "JavaScript"] },
  { icon: <Layout size={22} />, title: "Frontend", items: ["React", "Tailwind", "HTML", "CSS", "Bootstrap"] },
  { icon: <Database size={22} />, title: "Databases", items: ["Oracle SQL", "MySQL", "MongoDB"] },
  { icon: <Cpu size={22} />, title: "Backend", items: ["JDBC", "Servlets", "Hibernate", "Spring Boot", "Node.js", "Express.js","API Development"] },
  { icon: <Wrench size={22} />, title: "Tools", items: ["Git", "GitHub", "Eclipse", "VS Code", "Postman"] },
];

// 🔥 Magnetic Card Component
function MagneticCard({ children }) {
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
      className="magnetic relative group glass p-6 rounded-2xl 
                 border border-white/10 backdrop-blur-xl
                 bg-gradient-to-br from-white/5 to-white/0 
                 hover:shadow-[0_0_30px_rgba(217,70,239,0.25)] 
                 transition-all duration-300"
    >
      {/* Glow border effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-fuchsia-500/30 to-indigo-500/30 opacity-0 group-hover:opacity-100 blur-xl transition duration-500"></div>
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

export default function Skills() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <section className="relative py-20 overflow-hidden">
      {/* 🌈 Animated background blobs */}
      <motion.div
        className="absolute w-72 h-72 bg-fuchsia-500/20 rounded-full blur-3xl -top-16 -left-20"
        animate={{ x: [0, 50, -50, 0], y: [0, -40, 40, 0] }}
        transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[28rem] h-[28rem] bg-indigo-500/20 rounded-full blur-3xl bottom-[-150px] right-[-150px]"
        animate={{ x: [0, -60, 60, 0], y: [0, 30, -30, 0] }}
        transition={{ repeat: Infinity, duration: 22, ease: "easeInOut" }}
      />

      {/* Section title */}
      <div className="relative text-center mb-12" data-aos="fade-up">
        <h3 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-indigo-400">
          Skills
        </h3>
        <p className="text-slate-400 mt-2">Technologies & tools I use to craft digital experiences</p>
      </div>

      {/* Skills grid */}
      <div className="relative grid sm:grid-cols-2 lg:grid-cols-3 gap-8 z-10 max-w-6xl mx-auto px-6">
        {cards.map((c, i) => (
          <div key={i} data-aos="zoom-in" data-aos-delay={i * 100}>
            <MagneticCard>
              <div className="flex items-center gap-3 mb-4 text-fuchsia-300 text-lg">
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  {c.icon}
                </motion.div>
                <span className="font-semibold">{c.title}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {c.items.map((t, idx) => (
                  <motion.span
                    key={idx}
                    whileHover={{ y: -3, scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="px-3 py-1 rounded-full border border-white/10 bg-gradient-to-r from-fuchsia-500/10 to-indigo-500/10 text-sm text-slate-200 shadow-inner hover:shadow-[0_0_15px_rgba(217,70,239,0.4)] transition"
                  >
                    {t}
                  </motion.span>
                ))}
              </div>
            </MagneticCard>
          </div>
        ))}
      </div>
    </section>
  );
}
