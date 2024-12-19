import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { HiMenu, HiX } from 'react-icons/hi'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl md:text-2xl font-bold text-white">
            Baran Çiçek
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none"
            aria-label="Menu"
          >
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.path.startsWith('#') ? (
                  <a
                    href={link.path}
                    className="text-white hover:text-purple-400 transition-colors"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    to={link.path}
                    className="text-white hover:text-purple-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                )}
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu */}
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : '100%' }}
            transition={{ duration: 0.3 }}
            className={`md:hidden fixed top-0 right-0 h-screen w-64 bg-black/95 backdrop-blur-lg p-6 ${
              isOpen ? 'block' : 'hidden'
            }`}
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.path}
                  className="text-white hover:text-purple-400 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  )
}

const navLinks = [
  { name: 'Ana Sayfa', path: '/' },
  { name: 'Projeler', path: '#projects' },
  { name: 'Hakkımda', path: '#about' },
  { name: 'İletişim', path: '#contact' },
  { name: 'Admin', path: '/admin' }
] 