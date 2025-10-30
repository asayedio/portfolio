'use client'

import { motion } from 'framer-motion'
import { experiences } from '@/data/experience'
import { FiCalendar, FiMapPin, FiBriefcase } from 'react-icons/fi'

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
   transition: {
   staggerChildren: 0.2,
  },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  }

  return (
    <section id="experience" className="section-container bg-gray-50 dark:bg-gray-800">
      <motion.div
   initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
 <motion.h2 className="section-title" variants={itemVariants}>
   Work Experience
   </motion.h2>

  <div className="relative">
   {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-primary-200 dark:bg-primary-800" />

          <div className="space-y-12">
          {experiences.map((exp, index) => (
 <motion.div
      key={index}
      variants={itemVariants}
         className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 ${
  index % 2 === 0 ? '' : 'md:direction-rtl'
       }`}
    >
         {/* Content */}
       <div className={index % 2 === 0 ? 'md:text-right' : 'md:col-start-2'}>
        <div className="card">
{/* Current badge */}
      {exp.current && (
     <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-medium rounded-full mb-4">
          Current Position
  </span>
      )}

      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            {exp.position}
       </h3>

<div className="flex items-center gap-2 text-primary-600 dark:text-primary-400 font-semibold mb-4">
           <FiBriefcase size={18} />
        <span>{exp.company}</span>
   </div>

  <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
  <div className="flex items-center gap-2">
       <FiCalendar size={16} />
           <span>{exp.startDate} - {exp.endDate}</span>
       </div>
   <div className="flex items-center gap-2">
       <FiMapPin size={16} />
            <span>{exp.location}</span>
    </div>
  </div>

    <p className="text-gray-600 dark:text-gray-400 mb-4">
   {exp.description}
     </p>

      {/* Achievements */}
<div className="mb-4">
    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
         Key Achievements:
  </h4>
       <ul className="space-y-2">
    {exp.achievements.map((achievement, i) => (
     <li
       key={i}
      className="flex items-start gap-2 text-gray-600 dark:text-gray-400 text-sm"
     >
                 <span className="text-primary-600 mt-1">?</span>
       <span>{achievement}</span>
        </li>
        ))}
          </ul>
             </div>

      {/* Technologies */}
         <div className="flex flex-wrap gap-2">
           {exp.technologies.map((tech) => (
    <span
      key={tech}
           className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
    >
    {tech}
           </span>
       ))}
        </div>
        </div>
     </div>

        {/* Timeline dot */}
 <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-0">
     <div className="w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-gray-800" />
       </div>
       </motion.div>
 ))}
   </div>
        </div>
      </motion.div>
    </section>
  )
}
