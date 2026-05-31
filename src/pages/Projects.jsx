import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, GitBranch, ExternalLink } from 'lucide-react'
import projects from '../data/projects'

const Projects = () => {

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const [activeFilter, setActiveFilter] = useState('All')

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

  const filters = ['All', 'AI & ML', 'IoT', 'Web', 'Mobile']

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.type === activeFilter)

  return (
    <section ref={ref} className="relative min-h-screen py-32 px-6">

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-gold opacity-3 blur-[140px]" />
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
            <Link
              to="/"
              className="text-gold text-xs tracking-widest uppercase hover:opacity-70 transition-opacity duration-200 self-start"
            >
              ← Back to Home
            </Link>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-offwhite">
              All Projects
            </h1>
            <p className="text-offwhite opacity-50 max-w-xl text-base leading-relaxed">
              A full collection of projects built across AI, machine learning, IoT, and software engineering.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex flex-wrap gap-3"
          >
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeFilter === filter
                    ? 'bg-gold text-navy'
                    : 'border border-offwhite border-opacity-20 text-offwhite opacity-60 hover:opacity-100'
                }`}
              >
                {filter}
              </button>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="group bg-navy-light border border-offwhite border-opacity-8 rounded-2xl p-6 flex flex-col gap-4"
              >

                <div className="flex items-start justify-between">
                  <span className="text-xs px-3 py-1 rounded-full border border-gold border-opacity-30 text-gold opacity-70">
                    {project.type}
                  </span>
                  <span className="text-offwhite opacity-30 text-xs font-mono">
                    {project.year}
                  </span>
                </div>

                <div className="flex flex-col gap-2 flex-1">
                  <h3 className="text-offwhite font-semibold text-lg leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-offwhite opacity-50 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.stack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 rounded-full border border-offwhite border-opacity-10 text-offwhite opacity-50"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 4 && (
                    <span className="text-xs px-3 py-1 rounded-full border border-offwhite border-opacity-10 text-offwhite opacity-30">
                      +{project.stack.length - 4}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-offwhite border-opacity-8">

                  <Link
                    to={`/projects/${project.id}`}
                    className="inline-flex items-center gap-1 text-gold text-xs font-medium hover:opacity-70 transition-opacity duration-200"
                  >
                    View details
                    <ArrowRight size={14} />
                  </Link>

                  <div className="flex items-center gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-offwhite opacity-30 hover:opacity-80 hover:text-gold transition-all duration-200"
                    >
                      <GitBranch size={16} />
                    </a>

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-offwhite opacity-30 hover:opacity-80 hover:text-gold transition-all duration-200"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>

                </div>

              </motion.div>
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-offwhite opacity-40 text-base">
                No projects in this category yet.
              </p>
            </motion.div>
          )}

        </motion.div>

      </div>

    </section>
  )
}

export default Projects