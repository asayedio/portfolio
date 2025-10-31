'use client'

import { motion } from 'framer-motion'
import { profile } from '@/data/profile'
import { FiCode, FiTool } from 'react-icons/fi'

export default function About() {
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
    <section id="about" className="section-container bg-white dark:bg-gray-900">
    <motion.div
    initial="hidden"
    whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
   variants={containerVariants}
  >
     <motion.h2 className="section-title" variants={itemVariants}>
          About Me 2
      </motion.h2>

   <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
   {/* Bio */}
          <motion.div variants={itemVariants}>
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
      Who I Am
       </h3>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
        {profile.bio}
 </p>
  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
       With a passion for building scalable and efficient backend systems, 
              I specialize in creating robust APIs, implementing microservices 
      architectures, and optimizing database performance. I believe in writing 
        clean, maintainable code following industry best practices like Clean 
      Architecture and Domain-Driven Design.
       </p>
          </motion.div>

   {/* Skills */}
 <motion.div variants={itemVariants}>
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <FiCode className="text-primary-600" />
       Technical Skills
  </h3>
    <div className="flex flex-wrap gap-3 mb-8">
            {profile.skills.map((skill) => (
    <motion.span
        key={skill}
         className="px-4 py-2 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-lg text-sm font-medium"
   whileHover={{ scale: 1.05 }}
   transition={{ type: 'spring', stiffness: 400 }}
          >
       {skill}
      </motion.span>
    ))}
      </div>

       <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
        <FiTool className="text-primary-600" />
              Expertise
       </h3>
      <ul className="space-y-3">
{profile.expertise.map((item) => (
          <motion.li
       key={item}
       className="flex items-start gap-3 text-gray-600 dark:text-gray-400"
     whileHover={{ x: 5 }}
  >
       <span className="text-primary-600 mt-1">?</span>
       <span>{item}</span>
    </motion.li>
      ))}
     </ul>
  </motion.div>
  </div>
      </motion.div>
 </section>
  )
}
