import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Award, ExternalLink } from 'lucide-react'

const Certifications = () => {

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

  const certifications = [
    {
      title: 'Advanced Machine Learning & AI',
      issuer: 'Thrive',
      mentor: 'Dr. Augustine Annan ML & AI Mentor',
      date: 'November 2024',
      credential: 'https://drive.google.com/file/d/1W95GWwGS4xVZPnefPYqLkHKePsBiQyI1/view?usp=sharing',
      highlights: [
        'Supervised & unsupervised learning',
        'Deep learning & neural networks',
        'Model optimisation & deployment',
        'Hands-on real-world projects',
      ],
    },
    {
      title: 'AI Augmented Professional Development',
      issuer: 'ALX AI Career Essentials',
      mentor: 'Fred Swaniker Founder & CEO, AL Group',
      date: 'August 2024',
      credential: 'https://intranet.alxswe.com/certificates/zn6PMs5Fem',
      highlights: [
        'AI-enhanced professional skills',
        'Strategic decision-making with AI',
        'AI-driven problem solving',
        '8-week intensive programme',
      ],
    },
    {
      title: 'BSc. Computer Science & Engineering',
      issuer: 'University of Mines and Technology',
      mentor: 'Tarkwa, Ghana',
      date: 'Dec 2025',
      credential: null,
      highlights: [
        'Machine Learning & AI',
        'Data Structures & Algorithms',
        'Software Engineering',
        'Database Systems',
      ],
    },
  ]

  return (
    <section ref={ref} id="certifications" className="relative py-24 px-6">

      <div className="relative z-10 max-w-6xl mx-auto">

        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ staggerChildren: 0.12 }}
          className="flex flex-col gap-16"
        >

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex flex-col gap-3"
          >
            <span className="text-gold text-xs tracking-widest uppercase">
              Credentials
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-offwhite">
              Education & certifications.
            </h2>
            <p className="text-offwhite opacity-50 max-w-xl text-base leading-relaxed">
              Formal education and industry certifications that back the work.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                variants={fadeUp}
                transition={{ duration: 0.3, ease: 'easeOut', delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group bg-navy-light border border-offwhite border-opacity-8 rounded-2xl p-6 flex flex-col gap-5"
              >

                <div className="flex items-start justify-between">
                  <div className="w-11 h-11 rounded-xl bg-gold bg-opacity-10 border border-gold border-opacity-20 flex items-center justify-center group-hover:bg-opacity-20 transition-all duration-200">
                    <Award size={20} className="text-gold" />
                  </div>

                  {cert.credential && (
                    <a
                      href={cert.credential}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-offwhite opacity-30 hover:opacity-80 hover:text-gold transition-all duration-200"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>

                <div className="flex flex-col gap-1">
                  <h3 className="text-offwhite font-semibold text-base leading-snug">
                    {cert.title}
                  </h3>
                  <span className="text-gold text-xs font-medium opacity-80">
                    {cert.issuer}
                  </span>
                  <span className="text-offwhite opacity-35 text-xs">
                    {cert.mentor}
                  </span>
                </div>

                <div className="flex flex-col gap-2 flex-1">
                  {cert.highlights.map((point) => (
                    <div
                      key={point}
                      className="flex items-start gap-2"
                    >
                      <div className="w-1 h-1 rounded-full bg-gold opacity-60 mt-1.5 flex-shrink-0" />
                      <span className="text-offwhite opacity-50 text-xs leading-relaxed">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-offwhite border-opacity-8">
                  <span className="text-offwhite opacity-30 text-xs font-mono">
                    {cert.date}
                  </span>
                </div>

              </motion.div>
            ))}
          </div>

        </motion.div>

      </div>

    </section>
  )
}

export default Certifications