'use client'

import { motion } from 'framer-motion'
import { profile } from '@/data/profile'
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub, FiSend } from 'react-icons/fi'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would send this to a backend API
    // For now, we'll just open the email client
    const mailtoLink = `mailto:${profile.email}?subject=Contact from ${formData.name}&body=${formData.message}%0D%0A%0D%0AFrom: ${formData.email}`
    window.location.href = mailtoLink
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="contact" className="section-container bg-gray-50 dark:bg-gray-800">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
   >
        <motion.h2 className="section-title" variants={itemVariants}>
          Get In Touch
    </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div variants={itemVariants}>
       <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Let&apos;s Connect
   </h3>
      <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
          I&apos;m always open to discussing new opportunities, interesting projects, 
         or potential collaborations. Feel free to reach out!
     </p>

   <div className="space-y-6">
    <div className="flex items-start gap-4">
      <div className="p-3 bg-primary-50 dark:bg-primary-900/20 rounded-lg text-primary-600">
    <FiMail size={24} />
      </div>
   <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
        Email
</h4>
       <a
          href={`mailto:${profile.email}`}
  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
         >
                {profile.email}
   </a>
       </div>
          </div>

      <div className="flex items-start gap-4">
          <div className="p-3 bg-primary-50 dark:bg-primary-900/20 rounded-lg text-primary-600">
  <FiPhone size={24} />
</div>
          <div>
       <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Phone
        </h4>
      <a
  href={`tel:${profile.phone}`}
        className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
         >
              {profile.phone}
                  </a>
                </div>
  </div>

      <div className="flex items-start gap-4">
     <div className="p-3 bg-primary-50 dark:bg-primary-900/20 rounded-lg text-primary-600">
  <FiMapPin size={24} />
     </div>
        <div>
        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
   Location
     </h4>
     <p className="text-gray-600 dark:text-gray-400">
     {profile.location}
         </p>
       </div>
            </div>
    </div>

            {/* Social Links */}
  <div className="mt-8">
   <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
        Connect on Social Media
            </h4>
       <div className="flex gap-4">
       <a
       href={profile.social.linkedin}
 target="_blank"
      rel="noopener noreferrer"
   className="p-3 bg-gray-200 dark:bg-gray-700 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-primary-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
               aria-label="LinkedIn"
  >
       <FiLinkedin size={24} />
                </a>
      <a
        href={profile.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
          className="p-3 bg-gray-200 dark:bg-gray-700 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-primary-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
     aria-label="GitHub"
        >
          <FiGithub size={24} />
           </a>
       </div>
       </div>
   </motion.div>

  {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <form onSubmit={handleSubmit} className="card">
      <div className="mb-6">
    <label
   htmlFor="name"
            className="block text-sm font-medium text-gray-900 dark:text-white mb-2"
       >
      Your Name
                </label>
        <input
                  type="text"
    id="name"
            name="name"
            value={formData.name}
       onChange={handleChange}
        required
   className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white"
      placeholder="John Doe"
    />
     </div>

         <div className="mb-6">
      <label
     htmlFor="email"
className="block text-sm font-medium text-gray-900 dark:text-white mb-2"
                >
   Your Email
         </label>
    <input
      type="email"
        id="email"
   name="email"
    value={formData.email}
           onChange={handleChange}
       required
    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white"
         placeholder="john@example.com"
       />
        </div>

     <div className="mb-6">
       <label
     htmlFor="message"
             className="block text-sm font-medium text-gray-900 dark:text-white mb-2"
          >
           Message
     </label>
                <textarea
       id="message"
 name="message"
           value={formData.message}
                  onChange={handleChange}
                  required
           rows={6}
     className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white resize-none"
          placeholder="Your message here..."
    />
     </div>

    <button
      type="submit"
    className="w-full btn-primary flex items-center justify-center gap-2"
              >
          <FiSend />
        Send Message
              </button>
            </form>
  </motion.div>
   </div>
      </motion.div>
    </section>
  )
}
