import { useRef, useState, useEffect } from 'react'
import { motion, useInView} from 'framer-motion'
import emailjs from '@emailjs/browser'
import { Mail, MapPin,GitBranch,ExternalLink, Send, CheckCircle, AlertCircle } from 'lucide-react'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const Contact = () => {

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: '',
  })

  const [status, setStatus] = useState('idle')

  useEffect(() => {
    if (PUBLIC_KEY) {
      try {
        emailjs.init(PUBLIC_KEY)
      } catch{
        // ignore init errors; send will still accept public key
      }
    }
  }, [])

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
  e.preventDefault()
  setStatus('loading')

  try {
    await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        from_name: formData.from_name,
        from_email: formData.from_email,
        message: formData.message,
      },
      PUBLIC_KEY
    )
    setStatus('success')
    setFormData({ from_name: '', from_email: '', message: '' })
  } catch (error) {
    console.error('Email send error:', error)
    setStatus('error')
  }
}

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'grahamdavid0899@gmail.com',
      href: 'mailto:grahamdavid0899@gmail.com',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Takoradi, Ghana',
      href: null,
    },
    {
      icon: GitBranch,
      label: 'GitHub',
      value: 'github.com/KwesiGray',
      href: 'https://github.com/KwesiGray',
    },
    {
      icon: ExternalLink,
      label: 'LinkedIn',
      value: 'David Graham',
      href: 'https://linkedin.com/in/david-graham-8b9307233',
    },
  ]

  return (
    <section ref={ref} id="contact" className="relative py-24 px-6">

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-gold opacity-30 blur-[120px]" />
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
              Get In Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-offwhite">
              Let's work together.
            </h2>
            <p className="text-offwhite opacity-50 max-w-xl text-base leading-relaxed">
              Have a project in mind or want to hire me? Send a message and I'll get back to you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="flex flex-col gap-8"
            >

              <div className="flex flex-col gap-4">
                {contactInfo.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-4"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gold bg-opacity-10 border border-gold border-opacity-20 flex items-center justify-center flex-shrink-0">
                      <item.icon size={18} className="text-gold" />
                    </div>

                    <div className="flex flex-col gap-0.5">
                      <span className="text-offwhite opacity-40 text-xs uppercase tracking-wide">
                        {item.label}
                      </span>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith('http') ? '_blank' : undefined}
                          rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-offwhite text-sm hover:text-gold transition-colors duration-200"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-offwhite text-sm">
                          {item.value}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-navy-light border border-gold border-opacity-15 rounded-2xl px-6 py-5">
                <p className="text-offwhite opacity-60 text-sm leading-relaxed font-serif italic">
                  "Crafting the future of technology, one solution at a time."
                </p>
                <span className="text-gold text-xs opacity-60 mt-2 block">
                  Gray Technologies
                </span>
              </div>

            </motion.div>

            <motion.form
              variants={fadeUp}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              onSubmit={handleSubmit}
              className="flex flex-col gap-4"
            >

              <div className="flex flex-col gap-2">
                <label className="text-offwhite opacity-50 text-xs uppercase tracking-wide">
                  Your Name
                </label>
                <input
                  type="text"
                  name="from_name"
                  value={formData.from_name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="bg-navy-light border border-offwhite border-opacity-10 rounded-xl px-4 py-3 text-offwhite text-sm placeholder-offwhite placeholder-opacity-20 focus:outline-none focus:border-gold focus:border-opacity-50 transition-colors duration-200"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-offwhite opacity-50 text-xs uppercase tracking-wide">
                  Email Address
                </label>
                <input
                  type="email"
                  name="from_email"
                  value={formData.from_email}
                  onChange={handleChange}
                  required
                  placeholder="jdoe@gmail.com"
                  className="bg-navy-light border border-offwhite border-opacity-10 rounded-xl px-4 py-3 text-offwhite text-sm placeholder-offwhite placeholder-opacity-20 focus:outline-none focus:border-gold focus:border-opacity-50 transition-colors duration-200"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-offwhite opacity-50 text-xs uppercase tracking-wide">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="bg-navy-light border border-offwhite border-opacity-10 rounded-xl px-4 py-3 text-offwhite text-sm placeholder-offwhite placeholder-opacity-20 focus:outline-none focus:border-gold focus:border-opacity-50 transition-colors duration-200 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="inline-flex items-center justify-center gap-2 bg-gold text-navy px-6 py-3 rounded-xl font-bold text-sm hover:opacity-90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'Sending...' : 'Send Message'}
                <Send size={16} />
              </button>

              {status === 'success' && (
                <div className="flex items-center gap-2 text-green-400 text-sm">
                  <CheckCircle size={16} />
                  <span>Message sent! I'll get back to you soon.</span>
                </div>
              )}

              {status === 'error' && (
                <div className="flex items-center gap-2 text-red-400 text-sm">
                  <AlertCircle size={16} />
                  <span>Something went wrong. Please try again.</span>
                </div>
              )}

            </motion.form>

          </div>

        </motion.div>

      </div>

    </section>
  )
}

export default Contact