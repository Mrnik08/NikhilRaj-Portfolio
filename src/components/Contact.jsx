import { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { Mail, Phone, Send } from "lucide-react";

export default function Contact() {
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

      <div
        data-aos="fade-up"
        className="relative mx-auto max-w-2xl glass border border-white/10 
                   rounded-3xl p-8 md:p-12 backdrop-blur-xl 
                   shadow-[0_0_25px_rgba(217,70,239,0.25)] text-center"
      >
        {/* Title */}
        <h3 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-fuchsia-400 flex justify-center items-center gap-3">
          <Send size={36} /> Contact Me
        </h3>
        <p className="text-slate-300/90 mt-3 text-lg">
          Open to <b>Full Stack Developer</b> opportunities.  
          Let’s build something great together 🚀
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-5">
          <a
            href="mailto:nikhil0810raj@gmail.com"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-fuchsia-500 to-indigo-500 text-white font-medium shadow-lg shadow-fuchsia-500/30 hover:scale-105 transition"
          >
            <Mail size={20} /> Email Me
          </a>
          <a
            href="tel:+919262718449"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white font-medium shadow-lg shadow-indigo-500/30 hover:scale-105 transition"
          >
            <Phone size={20} /> +91 92627 18449
          </a>
        </div>
      </div>
    </section>
  );
}
