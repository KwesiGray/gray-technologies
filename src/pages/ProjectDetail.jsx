import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, GitBranch, ExternalLink, Calendar, Tag } from 'lucide-react'
import projects from '../data/projects'

const ProjectDetail = () => {

  const { id } = useParams()

  const project = projects.find((p) => p.id === id)

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <h1 className="text-4xl font-serif font-bold text-offwhite">
            Project not found.
          </h1>
          <p className="text-offwhite opacity-50 text-base">
            This project doesn't exist or may have been removed.
          </p>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-gold text-sm font-medium hover:opacity-70 transition-opacity duration-200"
          >
            <ArrowLeft size={16} />
            Back to Projects
          </Link>
        </div>
      </div>
    )
  }

  return (
    <section className="relative min-h-screen py-32 px-6">

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[400px] rounded-full bg-gold opacity-3 blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">

        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.12 }}
          className="flex flex-col gap-12"
        >

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex flex-col gap-4"
          >
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-gold text-xs tracking-widest uppercase hover:opacity-70 transition-opacity duration-200 self-start"
            >
              <ArrowLeft size={14} />
              All Projects
            </Link>

            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs px-3 py-1 rounded-full border border-gold border-opacity-30 text-gold opacity-70">
                {project.type}
              </span>
              <span className="text-offwhite opacity-30 text-xs font-mono flex items-center gap-1">
                <Calendar size={12} />
                {project.year}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-serif font-bold text-offwhite leading-tight">
              {project.title}
            </h1>

            <p className="text-xl text-gold font-serif opacity-80">
              {project.subtitle}
            </p>

          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex items-center gap-4"
          >
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-offwhite border-opacity-20 text-offwhite opacity-60 px-5 py-2.5 rounded-xl text-sm font-medium hover:border-gold hover:text-gold hover:opacity-100 transition-all duration-200"
            >
              <GitBranch size={16} />
              View on GitHub
            </a>

            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gold text-navy px-5 py-2.5 rounded-xl text-sm font-bold hover:opacity-90 transition-all duration-200"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            )}
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="w-full h-px bg-offwhite opacity-10"
          />

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex flex-col gap-6"
          >
            <h2 className="text-offwhite font-serif font-semibold text-2xl">
              About this project
            </h2>

            <div className="flex flex-col gap-4">
              {project.fullDescription.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-offwhite opacity-85 text-base leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>

          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex flex-col gap-4"
          >
            <h2 className="text-offwhite font-serif font-semibold text-2xl flex items-center gap-2">
              <Tag size={20} className="text-gold" />
              Tech Stack
            </h2>

            <div className="flex flex-wrap gap-3">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="text-sm px-4 py-2 rounded-xl border border-gold border-opacity-20 text-offwhite opacity-70 bg-gold bg-opacity-5"
                >
                  {tech}
                </span>
              ))}
            </div>

          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="w-full h-px bg-offwhite opacity-10"
          />

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex items-center justify-between"
          >
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-offwhite opacity-50 text-sm hover:text-gold hover:opacity-100 transition-all duration-200"
            >
              <ArrowLeft size={16} />
              Back to all projects
            </Link>

            <a
              href="mailto:grahamdavid0899@gmail.com"
              className="inline-flex items-center gap-2 bg-gold text-navy px-5 py-2.5 rounded-xl text-sm font-bold hover:opacity-90 transition-all duration-200"
            >
              Hire Me
            </a>
          </motion.div>

        </motion.div>

      </div>

    </section>
  )
}

export default ProjectDetail