import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Download, MapPin } from "lucide-react";

const Hero = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const techStack = [
    "Python",
    "React",
    "TensorFlow",
    "Flutter",
    "PostgreSQL",
    "LLMs",
    "Odoo-Framework",
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-gold opacity-5 blur-[140px]" />
        <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-gold opacity-3 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.13 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
        >
          <div className="flex flex-col gap-7">
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex items-center gap-2"
            >
              <MapPin size={14} className="text-gold" />
              <span className="text-gold text-xs tracking-widest uppercase">
                Takoradi, Ghana
              </span>
            </motion.div>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex flex-col gap-2"
            >
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-offwhite leading-tight">
                David Graham
              </h1>

              <p className="text-3xl md:text-4xl font-serif font-semibold text-gold leading-snug">
                Building Software-Powered Solutions.
              </p>
            </motion.div>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-base text-offwhite opacity-65 max-w-md leading-relaxed"
            >
              Software & AI Engineer & Founder of Gray Technologies. BSc.
              Computer Science & Engineering graduate from UMaT. Building
              intelligent, production-ready solutions that combine machine
              learning with modern web & mobile app development.
            </motion.p>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/projects"
                className="inline-flex items-center justify-center gap-2 bg-gold text-navy px-6 py-3 rounded font-bold text-sm hover:opacity-90 transition-all duration-200"
              >
                View My Work
                <ArrowRight size={16} />
              </Link>

              <a
                href="https://docs.google.com/document/d/1biPCPdQyFY96x-CPZhEOVnmX3jqblpLe/edit?usp=sharing&ouid=106069471756918728290&rtpof=true&sd=true"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-gold border-opacity-60 text-gold px-6 py-3 rounded font-bold text-sm hover:bg-gold hover:text-navy transition-all duration-200"
              >
                Download CV
                <Download size={16} />
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex gap-10 pt-6 border-t border-offwhite border-opacity-10"
            >
              <div className="flex flex-col gap-1">
                <span className="text-gold font-bold text-3xl font-serif">
                  3+
                </span>
                <span className="text-offwhite opacity-40 text-xs tracking-wide uppercase">
                  AI Projects
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-gold font-bold text-3xl font-serif">
                  2
                </span>
                <span className="text-offwhite opacity-40 text-xs tracking-wide uppercase">
                  Certifications
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-gold font-bold text-3xl font-serif">
                  3yr+
                </span>
                <span className="text-offwhite opacity-40 text-xs tracking-wide uppercase">
                  Experience
                </span>
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center md:justify-end"
          >
            <div className="w-full max-w-sm flex flex-col gap-4">
              <div className="bg-navy-light border border-offwhite border-opacity-8 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center">
                      <span className="text-navy font-bold font-serif text-lg">
                        G
                      </span>
                    </div>
                    <div>
                      <div className="text-offwhite text-sm font-semibold">
                        Gray Technologies
                      </div>
                      <div className="text-offwhite opacity-40 text-xs">
                        graytechnologies.tech
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-green-400" />
                    <span className="text-offwhite opacity-40 text-xs">
                      Active
                    </span>
                  </div>
                </div>

                <svg
                  viewBox="0 0 240 160"
                  className="w-full"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="120"
                    cy="80"
                    r="16"
                    fill="#0D1B3E"
                    stroke="#C9A84C"
                    strokeWidth="2"
                  />
                  <circle cx="120" cy="80" r="7" fill="#C9A84C" />

                  <circle
                    cx="40"
                    cy="30"
                    r="7"
                    fill="none"
                    stroke="#C9A84C"
                    strokeWidth="1.5"
                    opacity="0.7"
                  />
                  <circle
                    cx="200"
                    cy="30"
                    r="7"
                    fill="none"
                    stroke="#C9A84C"
                    strokeWidth="1.5"
                    opacity="0.7"
                  />
                  <circle
                    cx="40"
                    cy="130"
                    r="7"
                    fill="none"
                    stroke="#C9A84C"
                    strokeWidth="1.5"
                    opacity="0.7"
                  />
                  <circle
                    cx="200"
                    cy="130"
                    r="7"
                    fill="none"
                    stroke="#C9A84C"
                    strokeWidth="1.5"
                    opacity="0.7"
                  />
                  <circle
                    cx="120"
                    cy="15"
                    r="5"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                    opacity="0.2"
                  />
                  <circle
                    cx="120"
                    cy="145"
                    r="5"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                    opacity="0.2"
                  />

                  <line
                    x1="105"
                    y1="70"
                    x2="47"
                    y2="35"
                    stroke="#C9A84C"
                    strokeWidth="1"
                    opacity="0.6"
                  />
                  <line
                    x1="135"
                    y1="70"
                    x2="193"
                    y2="35"
                    stroke="#C9A84C"
                    strokeWidth="1"
                    opacity="0.6"
                  />
                  <line
                    x1="105"
                    y1="90"
                    x2="47"
                    y2="125"
                    stroke="#C9A84C"
                    strokeWidth="1"
                    opacity="0.6"
                  />
                  <line
                    x1="135"
                    y1="90"
                    x2="193"
                    y2="125"
                    stroke="#C9A84C"
                    strokeWidth="1"
                    opacity="0.6"
                  />
                  <line
                    x1="120"
                    y1="64"
                    x2="120"
                    y2="20"
                    stroke="#ffffff"
                    strokeWidth="1"
                    opacity="0.2"
                  />
                  <line
                    x1="120"
                    y1="96"
                    x2="120"
                    y2="140"
                    stroke="#ffffff"
                    strokeWidth="1"
                    opacity="0.2"
                  />

                  <circle
                    cx="40"
                    cy="30"
                    r="14"
                    fill="none"
                    stroke="#C9A84C"
                    strokeWidth="0.5"
                    strokeDasharray="3 3"
                    opacity="0.4"
                  />
                  <circle
                    cx="200"
                    cy="30"
                    r="14"
                    fill="none"
                    stroke="#C9A84C"
                    strokeWidth="0.5"
                    strokeDasharray="3 3"
                    opacity="0.4"
                  />
                  <circle
                    cx="120"
                    cy="80"
                    r="35"
                    fill="none"
                    stroke="#C9A84C"
                    strokeWidth="0.5"
                    strokeDasharray="4 4"
                    opacity="0.4"
                  />
                  <circle
                    cx="40"
                    cy="130"
                    r="14"
                    fill="none"
                    stroke="#C9A84C"
                    strokeWidth="0.5"
                    strokeDasharray="3 3"
                    opacity="0.4"
                  />
                  <circle
                    cx="200"
                    cy="130"
                    r="14"
                    fill="none"
                    stroke="#C9A84C"
                    strokeWidth="0.5"
                    strokeDasharray="3 3"
                    opacity="0.4"
                  />

                  <text
                    x="28"
                    y="55"
                    fill="#C9A84C"
                    fontSize="8"
                    opacity="0.7"
                    fontFamily="monospace"
                  >
                    ML
                  </text>
                  <text
                    x="188"
                    y="55"
                    fill="#C9A84C"
                    fontSize="8"
                    opacity="0.7"
                    fontFamily="monospace"
                  >
                    AI
                  </text>
                  <text
                    x="26"
                    y="120"
                    fill="#C9A84C"
                    fontSize="8"
                    opacity="0.7"
                    fontFamily="monospace"
                  >
                    Web
                  </text>
                  <text
                    x="188"
                    y="120"
                    fill="#C9A84C"
                    fontSize="8"
                    opacity="0.7"
                    fontFamily="monospace"
                  >
                    Mobile App Dev
                  </text>
                </svg>

                <div className="flex flex-wrap gap-2 mt-4">
                  {techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 rounded-full border border-offwhite border-opacity-10 text-offwhite opacity-60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-navy-light border border-offwhite border-opacity-8 rounded-xl px-5 py-4 flex items-center justify-between">
                <div>
                  <div className="text-offwhite text-xs opacity-40 uppercase tracking-wide">
                    Currently
                  </div>
                  <div className="text-offwhite text-sm font-medium mt-1">
                    National Service @ GPHA
                  </div>
                  <div className="text-gold text-xs opacity-70 mt-0.5">
                    I.T Department — Apps Unit
                  </div>
                </div>
                <div className="w-2 h-2 rounded-full bg-gold opacity-80" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
