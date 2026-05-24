import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Brain, Globe, Smartphone, Settings, BarChart2 } from 'lucide-react'

const Services = () => {

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

  const services = [
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Custom ML models, intelligent automation, and AI-powered features built into your product. From data preprocessing to model deployment.',
      stack: ['Python', 'TensorFlow', 'Scikit-Learn', 'Flask'],
    },
    {
      icon: Globe,
      title: 'Web Application Development',
      description: 'Fast, responsive, and production-ready web applications built with modern frameworks. Clean UI, solid architecture, real results.',
      stack: ['React', 'Tailwind CSS', 'REST APIs', 'Vite'],
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Cross-platform mobile apps for Android and iOS. One codebase, native performance, and a polished user experience.',
      stack: ['Flutter', 'Dart', 'REST APIs'],
    },
    {
      icon: Settings,
      title: 'ERP & Business Software',
      description: 'Odoo ERP customisation and business process automation. Streamline your operations with software built around how your business actually works.',
      stack: ['Odoo', 'Python', 'PostgreSQL'],
    },
    {
      icon: BarChart2,
      title: 'Data Analysis & Visualisation',
      description: 'Turn raw data into actionable insights. Interactive dashboards, data pipelines, and clear visualisations that help you make better decisions.',
      stack: ['Python', 'Pandas', 'Matplotlib', 'Plotly'],
    },
  ]

  return (
    <section ref={ref} id="services" className="relative py-24 px-6">

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-gold opacity-3 blur-[120px]" />
      </div>

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
              What We Build
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-offwhite">
              Services & expertise.
            </h2>
            <p className="text-offwhite opacity-50 max-w-xl text-base leading-relaxed">
              Gray Technologies delivers end-to-end software solutions from intelligent AI systems to polished web and mobile products.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={fadeUp}
                transition={{ duration: 0.3, ease: 'easeOut', delay: index * 0.08 }}
                whileHover={{ y: -8 }}
                className="bg-navy-light border border-offwhite border-opacity-8 rounded-2xl p-6 flex flex-col gap-5 group"
              >

                <div className="w-11 h-11 rounded-xl bg-gold bg-opacity-10 border border-gold border-opacity-20 flex items-center justify-center group-hover:bg-opacity-20 transition-all duration-200">
                  <service.icon size={20} className="text-gold" />
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="text-offwhite font-semibold text-lg">
                    {service.title}
                  </h3>
                  <p className="text-offwhite opacity-50 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {service.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 rounded-full border border-gold border-opacity-20 text-gold opacity-70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </motion.div>
            ))}
          </div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-navy-light border border-gold border-opacity-15 rounded-2xl px-8 py-6"
          >
            <div className="flex flex-col gap-1 text-center sm:text-left">
              <h3 className="text-offwhite font-serif font-semibold text-xl">
                Have a project in mind?
              </h3>
              <p className="text-offwhite opacity-50 text-sm">
                Let's talk about what Gray Technologies can build for you.
              </p>
            </div>

            <a
              href="mailto:grahamdavid0899@gmail.com"
              className="inline-flex items-center justify-center gap-2 bg-gold text-navy px-6 py-3 rounded font-bold text-sm hover:opacity-90 transition-all duration-200 whitespace-nowrap"
            >
              Get In Touch
            </a>
          </motion.div>

        </motion.div>

      </div>

    </section>
  )
}

export default Services