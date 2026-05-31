import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import profilePhoto from "../assets/profile.jpg";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const skills = [
    { category: "Languages", items: ["Python", "Dart"] },
    {
      category: "AI & ML",
      items: ["TensorFlow", "Keras", "Scikit-Learn", "LLMs"],
    },
    {
      category: "Web & Mobile",
      items: ["React", "Flutter", "Flask", "REST APIs"],
    },
    { category: "Databases", items: ["PostgreSQL"] },
    { category: "Frameworks", items: ["Odoo ERP", "Tailwind CSS"] },
    { category: "Tools", items: ["Git", "GitHub", "Jupyter"] },
  ];

  const timeline = [
    {
      year: "2025",
      title: "National Service - GPHA",
      sub: "Apps Unit · Odoo, Python, PostgreSQL",
      current: true,
    },
    {
      year: "2025",
      title: "BSc. Computer Science & Engineering",
      sub: "University of Mines and Technology, Tarkwa",
      current: false,
    },
    {
      year: "2024",
      title: "Software Engineer Intern - CTSL",
      sub: "Certified Technology Service Limited, Takoradi",
      current: false,
    },
    {
      year: "2024",
      title: "Advanced ML & AI Certificate",
      sub: "Thrive · Dr. Augustine Annan",
      current: false,
    },
    {
      year: "2024",
      title: "ALX AI Career Essentials",
      sub: "AI Augmented Professional Development",
      current: false,
    },
  ];

  return (
    <section ref={ref} id="about" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ staggerChildren: 0.13 }}
          className="flex flex-col gap-16"
        >
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col gap-3"
          >
            <span className="text-gold text-xs tracking-widest uppercase">
              About Me
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-offwhite">
              The person behind the code.
            </h2>
            <p className="text-offwhite opacity-50 max-w-xl text-base leading-relaxed">
              Software engineer, AI practitioner & Mobile App Developer.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex justify-center md:justify-start"
            >
              <div className="relative w-56 md:w-64">
                <div className="w-56 h-72 md:w-64 md:h-80 rounded-2xl overflow-hidden border-2 border-gold border-opacity-30">
                  <img
                    src={profilePhoto}
                    alt="David Gyandoh Graham"
                    
                  />
                </div>

                <div className="absolute inset-0 w-56 h-72 md:w-64 md:h-80 rounded-2xl border border-gold border-opacity-15 -z-10 pointer-events-none" />

                <div className="absolute -top-3 -left-3 w-12 h-12 rounded-full bg-gold opacity-10 blur-xl" />
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex flex-col gap-6"
            >
              <p className="text-offwhite opacity-70 leading-relaxed text-base">
                I'm David Gyandoh Graham a Software & AI Engineer and the
                founder of Gray Technologies. I graduated with a BSc. in
                Computer Science & Engineering from the University of Mines and
                Technology in 2025.
              </p>

              <p className="text-offwhite opacity-70 leading-relaxed text-base">
                I'm currently serving as a National Service Personnel at the
                Ghana Ports and Harbours Authority, working in the Apps Unit
                where I build and maintain enterprise software using the Odoo
                ERP framework, Python, and PostgreSQL on live production
                systems.
              </p>

              <p className="text-offwhite opacity-70 leading-relaxed text-base">
                Through Gray Technologies, I'm building AI-powered solutions, web
                solutions & mobile applications for businesses combining machine
                learning, modern web development, and practical software
                engineering to solve real problems.
              </p>

              <a
                href="https://docs.google.com/document/d/1biPCPdQyFY96x-CPZhEOVnmX3jqblpLe/edit?usp=sharing&ouid=106069471756918728290&rtpof=true&sd=true"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-gold border-opacity-60 text-gold px-6 py-3 rounded font-bold text-sm hover:bg-gold hover:text-navy transition-all duration-200 self-start"
              >
                Download CV
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex flex-col gap-4"
            >
              {timeline.map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={{ x: 7 }}
                  transition={{ duration: 0.2 }}
                  className="flex gap-4 items-start"
                >
                  <div className="flex flex-col items-center gap-1 pt-1">
                    <div
                      className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${item.current ? "bg-gold" : "border border-gold border-opacity-40"}`}
                    />
                    <div className="w-px h-8 bg-offwhite opacity-10" />
                  </div>

                  <div className="flex flex-col gap-0.5 pb-2">
                    <div className="flex items-center gap-3">
                      <span className="text-gold text-xs font-mono opacity-60">
                        {item.year}
                      </span>
                      {item.current && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-gold bg-opacity-15 text-gold">
                          Current
                        </span>
                      )}
                    </div>
                    <span className="text-offwhite text-sm font-semibold">
                      {item.title}
                    </span>
                    <span className="text-offwhite opacity-40 text-xs">
                      {item.sub}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            <h3 className="text-offwhite font-serif font-semibold text-xl">
              Technical Skills
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {skills.map((group) => (
                <motion.div
                  key={group.category}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.2 }}
                  className="bg-navy-light border border-offwhite border-opacity-8 rounded-xl p-4 flex flex-col gap-3"
                >
                  <span className="text-gold text-xs tracking-widest uppercase font-medium">
                    {group.category}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="text-xs px-3 py-1 rounded-full border border-offwhite border-opacity-10 text-offwhite opacity-60"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
