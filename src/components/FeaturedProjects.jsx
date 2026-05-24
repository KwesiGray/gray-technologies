import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, ExternalLink, GitBranch } from 'lucide-react'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'

const FeaturedProjects = () => {

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

  const featuredProjects = projects.filter((p) => p.featured)

  return (
    <section ref={ref} id="projects" className="relative py-24 px-6">

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
            className="flex flex-col sm:flex-row sm:items-end justify-between gap-4"
          >
            <div className="flex flex-col gap-3">
              <span className="text-gold text-xs tracking-widest uppercase">
                Featured Work
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-offwhite">
                Projects & builds.
              </h2>
              <p className="text-offwhite opacity-50 max-w-xl text-base leading-relaxed">
                A selection of projects built with real intent from ML models to intelligent web and mobile applications.
              </p>
            </div>

            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-gold text-sm font-medium hover:opacity-70 transition-opacity duration-200 whitespace-nowrap"
            >
              View all projects
              <ArrowRight size={16} />
            </Link>
          </motion.div>

          <div className="flex flex-col gap-6">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={fadeUp}
                transition={{ duration: 0.3, ease: 'easeOut', delay: index * 0.1 }}
                whileHover={{ x: -8 }}
                className="group bg-navy-light border border-offwhite border-opacity-8 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-10 items-start"
              >

                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gold bg-opacity-10 border border-gold border-opacity-20 flex items-center justify-center group-hover:bg-opacity-20 transition-all duration-200">
                  <span className="text-gold font-serif font-bold text-lg">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <div className="flex flex-col gap-4 flex-1">

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-3">
                        <h3 className="text-offwhite font-semibold text-xl">
                          {project.title}
                        </h3>
                        <span className="text-xs px-2 py-0.5 rounded-full border border-gold border-opacity-30 text-gold opacity-70">
                          {project.type}
                        </span>
                      </div>
                      <span className="text-offwhite opacity-40 text-sm">
                        {project.subtitle} · {project.year}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-offwhite opacity-40 hover:opacity-80 hover:text-gold transition-all duration-200"
                      >
                        <GitBranch size={18} />
                      </a>

                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-offwhite opacity-40 hover:opacity-80 hover:text-gold transition-all duration-200"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-offwhite opacity-55 text-sm leading-relaxed max-w-2xl">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 rounded-full border border-offwhite border-opacity-10 text-offwhite opacity-50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>

              </motion.div>
            ))}
          </div>

        </motion.div>

      </div>

    </section>
  )
}

export default FeaturedProjects