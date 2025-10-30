'use client'

import { motion } from 'framer-motion'
import { projects } from '@/data/projects'
import { FiGithub, FiExternalLink, FiStar } from 'react-icons/fi'

export default function Projects() {
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  const featuredProjects = projects.filter((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="section-container bg-white dark:bg-gray-900">
      <motion.div
initial="hidden"
      whileInView="visible"
     viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
    >
        <motion.h2 className="section-title" variants={itemVariants}>
   Featured Projects
   </motion.h2>

   {/* Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
         <motion.div
       key={index}
    variants={itemVariants}
  className="card group hover:scale-[1.02] transition-transform duration-300"
 >
     {/* Featured badge */}
         <div className="flex items-center gap-2 text-yellow-600 dark:text-yellow-400 mb-4">
  <FiStar size={20} />
        <span className="text-sm font-semibold">Featured Project</span>
</div>

         <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 transition-colors">
   {project.title}
      </h3>

     <p className="text-gray-600 dark:text-gray-400 mb-4">
     {project.description}
       </p>

       <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
     {project.longDescription}
     </p>

{/* Technologies */}
    <div className="flex flex-wrap gap-2 mb-6">
    {project.technologies.map((tech) => (
    <span
      key={tech}
 className="px-3 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-lg text-xs font-medium"
  >
      {tech}
     </span>
    ))}
       </div>

     {/* Links */}
       <div className="flex gap-4">
       {project.github && (
       <a
         href={project.github}
  target="_blank"
   rel="noopener noreferrer"
  className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
 <FiGithub size={20} />
   <span>View Code</span>
            </a>
       )}
   {project.demo && (
       <a
   href={project.demo}
     target="_blank"
         rel="noopener noreferrer"
 className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
   >
     <FiExternalLink size={20} />
     <span>Live Demo</span>
  </a>
      )}
  </div>
   </motion.div>
    ))}
   </div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
     <>
  <motion.h3
       className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center"
variants={itemVariants}
  >
        Other Notable Projects
         </motion.h3>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
       <motion.div
          key={index}
    variants={itemVariants}
     className="card hover:scale-[1.02] transition-transform duration-300"
     >
  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
     {project.title}
      </h4>

 <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
    {project.description}
     </p>

        {/* Technologies */}
   <div className="flex flex-wrap gap-2 mb-4">
 {project.technologies.slice(0, 4).map((tech) => (
      <span
         key={tech}
        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
       >
     {tech}
       </span>
  ))}
       {project.technologies.length > 4 && (
          <span className="px-2 py-1 text-gray-500 dark:text-gray-400 text-xs">
             +{project.technologies.length - 4} more
    </span>
     )}
     </div>

       {/* Links */}
      <div className="flex gap-4">
       {project.github && (
         <a
      href={project.github}
          target="_blank"
    rel="noopener noreferrer"
     className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
       aria-label="View code"
      >
   <FiGithub size={20} />
       </a>
       )}
        {project.demo && (
           <a
      href={project.demo}
       target="_blank"
         rel="noopener noreferrer"
  className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
     aria-label="View demo"
    >
         <FiExternalLink size={20} />
        </a>
       )}
       </div>
       </motion.div>
  ))}
       </div>
</>
   )}
      </motion.div>
    </section>
  )
}
