import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Clock, Calendar } from 'lucide-react'
import posts from '../data/blog'

const BlogPost = () => {

  const { slug } = useParams()

  const post = posts.find((p) => p.slug === slug)

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <h1 className="text-4xl font-serif font-bold text-offwhite">
            Post not found.
          </h1>
          <p className="text-offwhite opacity-50 text-base">
            This post doesn't exist or may have been removed.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-gold text-sm font-medium hover:opacity-70 transition-opacity duration-200"
          >
            <ArrowLeft size={16} />
            Back to Blog
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

      <div className="relative z-10 max-w-3xl mx-auto">

        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.12 }}
          className="flex flex-col gap-10"
        >

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex flex-col gap-4"
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-gold text-xs tracking-widest uppercase hover:opacity-70 transition-opacity duration-200 self-start"
            >
              <ArrowLeft size={14} />
              All Posts
            </Link>

            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 rounded-full border border-gold border-opacity-30 text-gold opacity-70"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-4xl md:text-5xl font-serif font-bold text-offwhite leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center gap-6">
              <span className="flex items-center gap-1.5 text-offwhite opacity-30 text-sm font-mono">
                <Calendar size={14} />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5 text-offwhite opacity-30 text-sm">
                <Clock size={14} />
                {post.readTime}
              </span>
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
            className="flex flex-col gap-6"
          >
            {post.content.map((paragraph, index) => (
              <p
                key={index}
                className="text-offwhite opacity-85 text-base leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="w-full h-px bg-offwhite opacity-10"
          />

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="bg-navy-light border border-gold border-opacity-15 rounded-2xl px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          >
            <div className="flex flex-col gap-1">
              <span className="text-offwhite text-sm font-semibold">
                David Gyandoh Graham
              </span>
              <span className="text-offwhite opacity-40 text-xs">
                Software & AI Engineer Founder, Gray Technologies
              </span>
            </div>
            <a
              href="mailto:grahamdavid0899@gmail.com"
              className="inline-flex items-center gap-2 bg-gold text-navy px-5 py-2.5 rounded-xl text-sm font-bold hover:opacity-90 transition-all duration-200 whitespace-nowrap"
            >
              Get In Touch
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex flex-col gap-4"
          >
            <h3 className="text-offwhite font-serif font-semibold text-lg">
              More posts
            </h3>

            <div className="flex flex-col gap-3">
              {posts
                .filter((p) => p.slug !== slug)
                .slice(0, 2)
                .map((related) => (
                  <Link
                    key={related.slug}
                    to={`/blog/${related.slug}`}
                    className="group bg-navy-light border border-offwhite border-opacity-8 rounded-xl px-5 py-4 flex items-center justify-between hover:border-gold hover:border-opacity-30 transition-all duration-200"
                  >
                    <div className="flex flex-col gap-1">
                      <span className="text-offwhite text-sm font-medium group-hover:text-gold transition-colors duration-200">
                        {related.title}
                      </span>
                      <span className="text-offwhite opacity-30 text-xs font-mono">
                        {related.date}
                      </span>
                    </div>
                    <ArrowLeft size={16} className="text-offwhite opacity-30 rotate-180 group-hover:text-gold transition-colors duration-200" />
                  </Link>
                ))}
            </div>

          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-offwhite opacity-50 text-sm hover:text-gold hover:opacity-100 transition-all duration-200"
            >
              <ArrowLeft size={16} />
              Back to all posts
            </Link>
          </motion.div>

        </motion.div>

      </div>

    </section>
  )
}

export default BlogPost