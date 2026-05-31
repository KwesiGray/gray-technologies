import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Clock, Tag } from 'lucide-react'
import posts from '../data/blog'

const Blog = () => {

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const [activeTag, setActiveTag] = useState('All')

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

  const allTags = ['All', ...new Set(posts.flatMap((p) => p.tags))]

  const filteredPosts = activeTag === 'All'
    ? posts
    : posts.filter((p) => p.tags.includes(activeTag))

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
              Blog
            </h1>
            <p className="text-offwhite opacity-50 max-w-xl text-base leading-relaxed">
              Thoughts on AI, machine learning, software engineering, and building technology in Ghana.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex flex-wrap gap-3"
          >
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeTag === tag
                    ? 'bg-gold text-navy'
                    : 'border border-offwhite border-opacity-20 text-offwhite opacity-60 hover:opacity-100'
                }`}
              >
                {tag}
              </button>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex flex-col gap-6"
          >
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group bg-navy-light border border-offwhite border-opacity-8 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-10 items-start"
              >

                <div className="flex flex-col gap-4 flex-1">

                  <div className="flex flex-wrap items-center gap-3">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full border border-gold border-opacity-20 text-gold opacity-60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col gap-2">
                    <h2 className="text-offwhite font-semibold text-xl leading-snug group-hover:text-gold transition-colors duration-200">
                      {post.title}
                    </h2>
                    <p className="text-offwhite opacity-50 text-sm leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="flex items-center justify-between">

                    <div className="flex items-center gap-4">
                      <span className="text-offwhite opacity-30 text-xs font-mono">
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1 text-offwhite opacity-30 text-xs">
                        <Clock size={12} />
                        {post.readTime}
                      </span>
                    </div>

                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1 text-gold text-xs font-medium hover:opacity-70 transition-opacity duration-200"
                    >
                      Read more
                      <ArrowRight size={14} />
                    </Link>

                  </div>

                </div>

              </motion.div>
            ))}
          </motion.div>

          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-offwhite opacity-40 text-base">
                No posts with this tag yet.
              </p>
            </motion.div>
          )}

        </motion.div>

      </div>

    </section>
  )
}

export default Blog