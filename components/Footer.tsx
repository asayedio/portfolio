'use client'

import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
     <div>
         <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
           Ahmed Sayed
       </h3>
     <p className="text-gray-600 dark:text-gray-400">
       Senior Backend Engineer with 6+ years of experience in government digital transformation and scalable system architecture.
      </p>
          </div>

          <div>
         <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
              Quick Links
     </h3>
 <ul className="space-y-2">
       <li>
     <a
     href="#about"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
   >
          About
           </a>
   </li>
    <li>
      <a
      href="#experience"
     className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
 Experience
         </a>
              </li>
  <li>
         <a
     href="#projects"
className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
              Projects
     </a>
 </li>
  <li>
  <a
      href="#contact"
         className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
            Contact
     </a>
   </li>
  </ul>
      </div>

 <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
      Get In Touch
   </h3>
            <ul className="space-y-3">
    <li>
            <a
               href="mailto:asayedio@hotmail.com"
      className="flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
           >
   <FaEnvelope className="mr-2" />
        asayedio@hotmail.com
    </a>
    </li>
   <li>
                <a
                href="tel:+96892343839"
              className="flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
    >
    <FaPhone className="mr-2" />
       +968 9234 3839
     </a>
     </li>
    </ul>
          </div>
   </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
       <div className="flex space-x-6 mb-4 md:mb-0">
              <a
    href="https://github.com/asayedio"
       target="_blank"
        rel="noopener noreferrer"
      className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-transform transform hover:scale-110 duration-200"
      aria-label="GitHub"
      >
     <FaGithub size={24} />
        </a>
          <a
                href="https://www.linkedin.com/in/asayedio/"
      target="_blank"
    rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-transform transform hover:scale-110 duration-200"
         aria-label="LinkedIn"
  >
             <FaLinkedin size={24} />
    </a>
       <a
           href="mailto:asayedio@hotmail.com"
     className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-transform transform hover:scale-110 duration-200"
                aria-label="Email"
          >
      <FaEnvelope size={24} />
  </a>
          </div>
<p className="text-gray-600 dark:text-gray-400 text-sm">
     &copy; {currentYear} Ahmed Sayed. All rights reserved.
            </p>
          </div>
    </div>
      </div>
    </footer>
  )
}
