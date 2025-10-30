'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  const scrollToSection = (href: string) => {
    setIsOpen(false)
  const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  if (!mounted) return null

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
      ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg'
     : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
      {/* Logo */}
          <motion.a
            href="#"
    className="text-2xl font-bold text-gradient"
  initial={{ opacity: 0, x: -20 }}
   animate={{ opacity: 1, x: 0 }}
   transition={{ duration: 0.5 }}
          >
         AS
   </motion.a>

  {/* Desktop Navigation */}
    <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
    key={item.name}
      onClick={() => scrollToSection(item.href)}
     className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
 initial={{ opacity: 0, y: -20 }}
         animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
     >
                {item.name}
         </motion.button>
            ))}

            {/* Theme Toggle */}
            <motion.button
   onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
  className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
   initial={{ opacity: 0, y: -20 }}
     animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.4 }}
         aria-label="Toggle theme"
      >
       {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
   </motion.button>
          </div>

       {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
   <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
       aria-label="Toggle theme"
 >
         {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
   </button>
            <button
        onClick={() => setIsOpen(!isOpen)}
         className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
       aria-label="Toggle menu"
         >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
      className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800"
      initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
  exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-4 space-y-4">
       {navItems.map((item) => (
         <button
          key={item.name}
   onClick={() => scrollToSection(item.href)}
                className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors py-2"
        >
       {item.name}
   </button>
))}
            </div>
          </motion.div>
    )}
      </AnimatePresence>
    </nav>
  )
}
