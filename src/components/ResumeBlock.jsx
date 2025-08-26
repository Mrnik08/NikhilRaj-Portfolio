import { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { ExternalLink } from "lucide-react";
import {
  Briefcase,
  Code2,
  Star,
  Award,
  GraduationCap,
  Languages,
} from "lucide-react";

export default function ResumeBlock() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });

const handler = () => {
  const pdf = new jsPDF("p", "mm", "a4"); 
  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();
  const leftColWidth = 90; 
  const margin = 10;

  let leftY = 20;
  let rightY = 20;

  // === Helper: Draw Sidebar Background on Every Page ===
  function drawSidebarBackground() {
    pdf.setFillColor(245, 245, 245);
    pdf.rect(0, 0, leftColWidth, pageHeight, "F");
  }
let pageCount = 1; // start with page 1

// === Page Break Handling with Sidebar Redraw (Max 2 Pages) ===
function checkPageBreak(y, blockHeight, marginY = 18) {
  // if this block won't fit fully on current page
  if (y + blockHeight > pageHeight - marginY && pageCount < 2) {
    pdf.addPage();
    pageCount++;
    drawSidebarBackground(); // redraw left gray sidebar
    return marginY; // reset y to top margin of new page
  }
  return y;
}
  // === First Page Sidebar Content ===
  drawSidebarBackground();

  // --- NAME + TITLE ---
  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(20);
  pdf.text("Nikhil Raj", margin, leftY); leftY += 10;

  pdf.setFont("helvetica", "normal");
  pdf.setFontSize(12);
  pdf.text("Full Stack Developer || Java Programmer", margin, leftY); leftY += 15;

  // --- CONTACT ---
  pdf.setFont("helvetica", "bold");
  pdf.text("Contact", margin, leftY); leftY += 7;

  pdf.setFont("helvetica", "normal");
  pdf.setFontSize(10);
  pdf.text("Location: Noida, India", margin, leftY); leftY += 7;
  pdf.textWithLink("Email: nikhil0810raj@gmail.com", margin, leftY, { url: "mailto:nikhil0810raj@gmail.com" }); leftY += 7;
  pdf.textWithLink("Phone: +91 9262718449", margin, leftY, { url: "tel:+919262718449" }); leftY += 7;
  pdf.textWithLink("LinkedIn: linkedin.com/in/nikhil-raj08", margin, leftY, { url: "https://linkedin.com/in/nikhil-raj08" }); leftY += 7;
  pdf.textWithLink("GitHub: github.com/mrnik08", margin, leftY, { url: "https://github.com/mrnik08" }); leftY += 15;

  // --- SKILLS ---
  pdf.setFont("helvetica", "bold");
  pdf.text("Skills", margin, leftY); leftY += 7;

  pdf.setFont("helvetica", "normal");
  const skills = [
    "Programming Language: Java, Python, JavaScript",
    "Web Development: HTML, CSS, React, Tailwind",
    "Databases: Oracle SQL, MySQL, MongoDB",
    "Data Structures & Algorithms: Java",
    "Backend: JDBC, Servlets, Hibernate, Spring Boot, Node.js",
    "Tools: Git, GitHub, Eclipse, VS Code, Postman",
    "Database management",
    "Web performance optimization",
    "API development",
    "Version control systems",
    "Responsive design",
  ];
  skills.forEach(s => { 
    leftY = checkPageBreak(leftY);
    pdf.text(`• ${s}`, margin, leftY); 
    leftY += 6; 
  });
  leftY += 10;

  // --- LANGUAGES ---
  pdf.setFont("helvetica", "bold");
  pdf.text("Languages", margin, leftY); leftY += 7;
  pdf.setFont("helvetica", "normal");
  pdf.text("• English — B2", margin, leftY); leftY += 6;
  pdf.text("• Hindi — C1", margin, leftY); leftY += 12;

  // --- STRENGTHS ---
  pdf.setFont("helvetica", "bold");
  pdf.text("Strengths", margin, leftY); leftY += 7;
  pdf.setFont("helvetica", "normal");
  ["Fast Learner & Tech Enthusiast","Problem Solving","Team Collaboration","Clean, Scalable Code"]
    .forEach(s => { 
      leftY = checkPageBreak(leftY); 
      pdf.text(`• ${s}`, margin, leftY); 
      leftY += 6; 
    });
 leftY += 12;

    pdf.setFont("helvetica", "bold");
  pdf.text("Certifications", margin, leftY); leftY += 7;
    pdf.setFont("helvetica", "normal");
  ["Industrial Java Programming Training ", "Data Structures & Algorithms in Java ", "Internship on Java Programming ", "Full Stack Development Training(Ongoing)"]
    .forEach(s => { 
      leftY = checkPageBreak(leftY); 
      pdf.text(`• ${s}`, margin, leftY); 
      leftY += 6; 
    });
  leftY += 12;
    
    
  // ================= RIGHT COLUMN =================
  const rightX = leftColWidth + 20;
  pdf.setFontSize(12);

  // --- SUMMARY ---
  pdf.setFont("helvetica", "bold");
  pdf.text("Summary", rightX, rightY); rightY += 8;
  pdf.setFont("helvetica", "normal");
  const summary = "Detail-oriented Computer Science graduate with a strong foundation in Core Java, front-end technologies, and database systems. Currently enhancing full-stack development skills in JDBC, Servlets, React.js, while seeking a Full Stack Developer role to contribute to innovative software solutions. Experienced in frontend + backend coding, designing user-friendly interfaces, and databases. Recognized for problem-solving, collaboration, and delivering customer-focused solutions.";
  const summaryLines = pdf.splitTextToSize(summary, pageWidth - rightX - margin);
  rightY = checkPageBreak(rightY, summaryLines.length * 6);
  pdf.text(summaryLines, rightX, rightY);
  rightY += summaryLines.length * 6 + 12;

  // --- EDUCATION ---
  pdf.setFont("helvetica", "bold");
  pdf.text("Education", rightX, rightY); rightY += 8;
  pdf.setFont("helvetica", "normal");
  pdf.text("B.Tech CSE - BITM Kolkata (2025) | CGPA: 7.98", rightX, rightY); rightY += 7;
  pdf.text("Intermediate PCM - TSBI (2020) | CGPA: 9.21", rightX, rightY); rightY += 15;

  // --- WORK EXPERIENCE ---
  pdf.setFont("helvetica", "bold");
  pdf.text("Work Experience", rightX, rightY); rightY += 8;

   pdf.setFont("helvetica", "normal");
  const exp1 = "Full Stack Developer Intern - Jspider/Qspider, Noida (2025 - Current)\n• Training in Java (Core, JDBC, Hibernate, Spring Boot), React.js, Node.js.\n• Built responsive apps.\n• Debugged and optimized modules.";
  const exp1Lines = pdf.splitTextToSize(exp1, pageWidth - rightX - margin);
  rightY = checkPageBreak(rightY, exp1Lines.length * 6);
  pdf.text(exp1Lines, rightX, rightY);
  rightY += exp1Lines.length * 6 + 10;



  const exp2 = "Java Programmer Intern - Ardent Computech, Kolkata (2022)\n• Learned Java and worked on projects.\n• Reviewed code and fixed bugs.\n• Optimized performance.";
 const exp2Lines = pdf.splitTextToSize(exp2, pageWidth - rightX - margin);
  rightY = checkPageBreak(rightY, exp2Lines.length * 6);
  pdf.text(exp2Lines, rightX, rightY);
  rightY += exp2Lines.length * 6 + 15;

  // --- PROJECTS ---
  pdf.setFont("helvetica", "bold");
  pdf.text("Projects", rightX, rightY); rightY += 8;
  pdf.setFont("helvetica", "normal");

  
 
  const proj1 = "• Amazon Clone - Created a static Amazon-like website., It is the front-end Model of the Amazon Website, which tries to reflect the exact front-end view., HTML, CSS ";
  pdf.textWithLink(proj1, rightX, rightY, { url: "https://mrnik08.github.io/Amazon/" });
  pdf.splitTextToSize(proj1, pageWidth - rightX - margin).forEach(line => {
    rightY = checkPageBreak(rightY);
    pdf.text(line, rightX, rightY);
    rightY += 6;
  });
  rightY += 7;
  
  

  const proj2 = "• BloodVault - A full-stack web application designed to streamline blood donation and request management. The system enables users to register as donors/recipients, search for available blood groups, and manage donation requests in real-time. Admins can manage donors, recipients, and blood stock efficiently through a secure dashboard. Tech: React.js, Node.js, MySQL, JWT.";
  const proj2Lines = pdf.splitTextToSize(proj2, pageWidth - rightX - margin);
  rightY = checkPageBreak(rightY, proj2Lines.length * 6);
  pdf.text(proj2Lines, rightX, rightY);
  rightY += proj2Lines.length * 6 + 8;


  const proj3 = "• SpiderMentor LMS - Developed a full-featured Learning Management System designed to connect students and instructors through an interactive online platform. The system supports course creation, enrollment, quizzes, notifications, and progress tracking with a user-friendly and responsive UI. Tech: React.js, Bootstrap, Framer Motion, MySQL (planned), JWT.";
  pdf.textWithLink(proj3, rightX, rightY, { url: "https://spidermentorlms.vercel.app/" });
  const proj3Lines = pdf.splitTextToSize(proj3, pageWidth - rightX - margin);
  rightY = checkPageBreak(rightY, proj3Lines.length * 6);
  pdf.text(proj3Lines, rightX, rightY);
  rightY += proj3Lines.length * 6 + 8;


  // SAVE
  pdf.save("Nikhil_Raj_Resume.pdf");
};



    window.addEventListener("export-pdf", handler);
    return () => window.removeEventListener("export-pdf", handler);
  }, []);

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background blobs */}
      <motion.div
        className="absolute w-96 h-96 bg-fuchsia-500/20 rounded-full blur-3xl -top-20 -left-32"
        animate={{ x: [0, 50, -50, 0], y: [0, -40, 40, 0] }}
        transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[28rem] h-[28rem] bg-indigo-500/20 rounded-full blur-3xl bottom-[-150px] right-[-150px]"
        animate={{ x: [0, -60, 60, 0], y: [0, 30, -30, 0] }}
        transition={{ repeat: Infinity, duration: 24, ease: "easeInOut" }}
      />

      <motion.div
        id="resume-export"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative mx-auto max-w-3xl glass border border-white/10 rounded-3xl p-6 md:p-12 backdrop-blur-xl shadow-[0_0_25px_rgba(217,70,239,0.25)]"
      >
        <div className="space-y-12">
          {/* Timeline: Education */}
          <TimelineSection
            title="Education"
            icon={<GraduationCap size={18} />}
            aos="fade-up"
          >
            <TimelineItem
              date="07/2025"
              title="Bengal Institute of Technology & Management, Kolkata"
              sub="B.Tech, Computer Science & Engineering"
              det="CGPA: 7.98 / 10"
            />
            <TimelineItem
              date="05/2020"
              title="Telangana State Board of Intermediate"
              sub="Science PCM"
              det="CGPA: 9.21 / 10"
            />
          </TimelineSection>

          {/* Timeline: Projects */}
          <TimelineSection
            title="Projects"
            icon={<Star size={18} />}
            aos="fade-up"
          >
            <TimelineItem
              date="2023"
              title="Amazon Clone"
              sub="Frontend (HTML, CSS)"
              det={
                <a
                  className="underline"
                  href="https://mrnik08.github.io/Amazon/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Link
                </a>
              }
            />
            <TimelineItem
              date="2024"
              title="BloodVault"
              sub="Full-stack blood bank management system"
              det="React, Node.js, MySQL, JWT"
            />
            <TimelineItem
              date="2025"
              title="RoupanNaturals"
              sub="Full-stack e-commerce application"
              det="React, Node.js, MySQL, JWT"
            />
            <TimelineItem
              date="2025"
              title="SpiderMentor LMS"
              sub="React, Axios, Framer Motion, MySQL"
              det={
                <a
                  className="underline"
                  href="https://spidermentorlms.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Link
                </a>
              }
            />
          </TimelineSection>

          {/* Timeline: Work History */}
          <TimelineSection
            title="Work History"
            icon={<Briefcase size={18} />}
            aos="fade-up"
          >
            <TimelineItem
              date="2025 - Current"
              title="Jspider/Qspider - Noida"
              sub="Full Stack Developer Intern"
              det="Core Java, Spring Boot, React.js • APIs, backend modules, responsive apps"
            />
            <TimelineItem
              date="2022"
              title="Ardent Computech Pvt Ltd - Kolkata"
              sub="Java Programmer Intern"
              det="Debugging, optimization"
            />
          </TimelineSection>

          <Section title="Skills" icon={<Code2 size={18} />} aos="fade-up">
            <Bullet>Java, Python, JavaScript</Bullet>
            <Bullet>React, Tailwind, HTML, CSS</Bullet>
            <Bullet>MySQL, Oracle SQL, MongoDB</Bullet>
            <Bullet>Spring Boot, Node.js, Hibernate</Bullet>
            <Bullet>Git, GitHub, Postman, VS Code</Bullet>
          </Section>

          {/* Certifications Section */}
          <Section
            title="Certifications"
            icon={<Award size={18} />}
            aos="fade-up"
          >
            <div className="grid gap-3">
              <a
                href="https://drive.google.com/file/d/1dGwOpiIrG4dj99CzdyDE53wLceaMNp7n/view"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 px-4 py-3 rounded-xl 
                 bg-white/5 border border-white/10 backdrop-blur 
                 hover:bg-gradient-to-r hover:from-fuchsia-600/20 hover:to-indigo-600/20 
                 hover:border-fuchsia-400/40 transition"
              >
                <Award className="text-fuchsia-400" size={18} />
                <span className="flex-1 text-slate-200 group-hover:text-white transition">
                  Industrial Java Programming – Ardent Computech
                </span>
                <ExternalLink
                  size={16}
                  className="opacity-60 group-hover:opacity-100 group-hover:text-fuchsia-300 transition"
                />
              </a>

              <a
                href="https://drive.google.com/file/d/1lgVra04sn6BW65_gayMMNpw3YqhAxkov/view"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 px-4 py-3 rounded-xl 
                 bg-white/5 border border-white/10 backdrop-blur 
                 hover:bg-gradient-to-r hover:from-fuchsia-600/20 hover:to-indigo-600/20 
                 hover:border-fuchsia-400/40 transition"
              >
                <Award className="text-fuchsia-400" size={18} />
                <span className="flex-1 text-slate-200 group-hover:text-white transition">
                  DSA in Java – Apna College
                </span>
                <ExternalLink
                  size={16}
                  className="opacity-60 group-hover:opacity-100 group-hover:text-fuchsia-300 transition"
                />
              </a>

              <a
                href="https://drive.google.com/file/d/1WBUiyRigFntlXYFa6ey_XaA9mpFgOP2H/view"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 px-4 py-3 rounded-xl 
                 bg-white/5 border border-white/10 backdrop-blur 
                 hover:bg-gradient-to-r hover:from-fuchsia-600/20 hover:to-indigo-600/20 
                 hover:border-fuchsia-400/40 transition"
              >
                <Award className="text-fuchsia-400" size={18} />
                <span className="flex-1 text-slate-200 group-hover:text-white transition">
                  Internship – Ardent Computech
                </span>
                <ExternalLink
                  size={16}
                  className="opacity-60 group-hover:opacity-100 group-hover:text-fuchsia-300 transition"
                />
              </a>

              <div
                className="flex items-center gap-3 px-4 py-3 rounded-xl 
                 bg-white/5 border border-white/10 backdrop-blur 
                 hover:bg-gradient-to-r hover:from-fuchsia-600/20 hover:to-indigo-600/20 
                 hover:border-fuchsia-400/40 transition"
              >
                <Award className="text-fuchsia-400" size={18} />
                <span className="flex-1 text-slate-200">
                  Full Stack Development Training – (Ongoing)
                </span>
              </div>
            </div>
          </Section>

          <Section
            title="Languages"
            icon={<Languages size={18} />}
            aos="fade-up"
          >
            <Bullet>English — B2</Bullet>
            <Bullet>Hindi — C1</Bullet>
          </Section>

          <Section title="Strengths" icon={<Star size={18} />} aos="fade-up">
            <Bullet>Fast Learner & Tech Enthusiast</Bullet>
            <Bullet>Problem Solving</Bullet>
            <Bullet>Team Collaboration</Bullet>
            <Bullet>Clean, Scalable Code</Bullet>
          </Section>
        </div>
      </motion.div>
    </section>
  );
}

/* --- Components --- */
function Section({ title, icon, children, aos }) {
  return (
    <div data-aos={aos}>
      <div className="flex items-center gap-3 mb-3">
        <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-r from-fuchsia-500/20 to-indigo-500/20 border border-white/20 backdrop-blur text-fuchsia-300 shadow-lg shadow-fuchsia-500/20">
          {icon}
        </div>
        <h3 className="text-xl md:text-2xl font-bold">{title}</h3>
      </div>
      <div className="pl-2 space-y-3">{children}</div>
    </div>
  );
}

function Bullet({ children }) {
  return (
    <div className="relative pl-5 leading-relaxed text-slate-200">
      <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-gradient-to-r from-fuchsia-400 to-indigo-400 shadow-[0_0_10px_rgba(217,70,239,0.6)]" />
      <span className="whitespace-pre-line">{children}</span>
    </div>
  );
}

function TimelineSection({ title, icon, children, aos }) {
  return (
    <div data-aos={aos}>
      <div className="flex items-center gap-3 mb-6">
        <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-r from-fuchsia-500/20 to-indigo-500/20 border border-white/20 backdrop-blur text-fuchsia-300 shadow-lg shadow-fuchsia-500/20">
          {icon}
        </div>
        <h3 className="text-xl md:text-2xl font-bold">{title}</h3>
      </div>
      <div className="relative border-l-2 border-fuchsia-400/40 pl-6 space-y-8">
        {children}
      </div>
    </div>
  );
}

function TimelineItem({ date, title, sub, det }) {
  return (
    <div className="relative">
      <span className="absolute -left-3 top-2 h-3 w-3 rounded-full bg-fuchsia-400 shadow-[0_0_8px_rgba(217,70,239,0.7)]"></span>
      <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-4 hover:shadow-lg hover:shadow-fuchsia-500/20 transition">
        <div className="text-sm text-fuchsia-300">{date}</div>
        <div className="font-semibold">{title}</div>
        <div className="text-slate-300/90">{sub}</div>
        <div className="text-slate-400">{det}</div>
      </div>
    </div>
  );
}

