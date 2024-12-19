import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { Stars } from '@react-three/drei'
import { RetroComputer } from '../components/3d/RetroComputer'
import { useInView } from 'react-intersection-observer'
import { FaGithub, FaLinkedin, FaTwitter, FaCode, FaLaptopCode, FaMobileAlt } from 'react-icons/fa'
import { BiCodeAlt } from 'react-icons/bi'
import { GiBookshelf, GiGuitar } from 'react-icons/gi'
import { SiJavascript, SiReact, SiNodedotjs, SiMongodb, SiThreedotjs } from 'react-icons/si'
import { Helmet } from 'react-helmet-async'
import Navbar from '../components/Navbar'
import ParticleBackground from '../components/ParticleBackground'

export default function Home() {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  return (
    <div className="relative">
      <Helmet>
        <title>Baran Çiçek | Full Stack Developer & Müzisyen</title>
        <meta name="description" content="Baran Çiçek'in kişisel web sitesi. Full Stack geliştirici, müzisyen ve teknoloji tutkunu." />
        <meta name="keywords" content="Baran Çiçek, web geliştirici, full stack developer, müzisyen, React, Node.js, Three.js" />
        <meta property="og:title" content="Baran Çiçek | Portfolio" />
        <meta property="og:description" content="Kod, Müzik ve Sanatın Buluştuğu Nokta" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://barancicek.com" />
      </Helmet>

      <Navbar />
      <ParticleBackground />
      
      {/* Hero Section */}
      <section className="min-h-screen relative overflow-hidden flex items-center justify-center px-4 sm:px-6">
        {/* 3D Background */}
        <div className="absolute inset-0 h-full">
          <Canvas className="h-full">
            <Stars count={1000} depth={50} fade speed={1.5} />
            <RetroComputer />
          </Canvas>
        </div>

        {/* Hero Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center max-w-4xl mx-auto p-6 sm:p-8 bg-black/30 backdrop-blur-xl rounded-2xl"
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 mb-4 sm:mb-6">
            Yaratıcı Dünyama
            <br className="hidden sm:block" />
            Hoş Geldiniz
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8">
            Kod, Müzik ve Sanatın Buluştuğu Nokta
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }}>
              <a href="#projects" className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-bold text-base sm:text-lg hover:shadow-neon transition-all duration-300 inline-block">
                Projeleri Keşfet
              </a>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <a href="#contact" className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-purple-500 rounded-full text-white font-bold text-base sm:text-lg hover:shadow-neon transition-all duration-300 inline-block">
                İletişime Geç
              </a>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-indigo-900/50 to-purple-900/50 backdrop-blur-lg">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl font-bold text-center text-white mb-12 sm:mb-16"
          >
            Teknoloji Yığınım
          </motion.h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 md:gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center p-4 sm:p-6 bg-white/5 rounded-xl backdrop-blur-sm"
              >
                <tech.icon className="text-3xl sm:text-4xl md:text-5xl text-purple-400 mb-3" />
                <span className="text-sm sm:text-base text-white font-medium text-center">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 sm:py-20 bg-gradient-to-br from-purple-900/50 to-pink-900/50">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl font-bold text-center text-white mb-12 sm:mb-16"
          >
            Son Projelerim
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-black/30 rounded-xl overflow-hidden backdrop-blur-lg border border-purple-500/20"
              >
                <div className="h-40 sm:h-48 bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                  <project.icon className="text-4xl sm:text-6xl text-white" />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-sm sm:text-base text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-2 sm:px-3 py-1 bg-purple-900/50 rounded-full text-xs sm:text-sm text-purple-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={ref} id="about" className="py-16 sm:py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl font-bold text-center text-white mb-12 sm:mb-16"
          >
            İlgi Alanlarım
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(168, 85, 247, 0.4)"
                }}
                className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 p-6 sm:p-8 rounded-2xl backdrop-blur-lg border border-purple-500/30"
              >
                <card.icon className="text-5xl sm:text-6xl md:text-7xl text-purple-400 mb-4 sm:mb-6" />
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">{card.title}</h3>
                <p className="text-sm sm:text-base text-gray-300">{card.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 bg-black/90">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl font-bold text-center text-white mb-12 sm:mb-16"
          >
            İletişime Geç
          </motion.h2>
          <div className="max-w-2xl mx-auto">
            <motion.form 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="space-y-4 sm:space-y-6"
            >
              <div>
                <input 
                  type="text" 
                  placeholder="Adınız"
                  className="w-full px-4 py-3 bg-white/5 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:border-purple-500"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="E-posta Adresiniz"
                  className="w-full px-4 py-3 bg-white/5 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:border-purple-500"
                />
              </div>
              <div>
                <textarea 
                  placeholder="Mesajınız"
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:border-purple-500"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white font-bold hover:shadow-neon transition-all duration-300"
              >
                Gönder
              </motion.button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/90 text-white py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center space-y-4 sm:space-y-6"
          >
            <div className="flex space-x-4 sm:space-x-6">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="text-xl sm:text-2xl md:text-3xl text-purple-400 hover:text-purple-300"
                  aria-label={link.name}
                >
                  <link.icon />
                </motion.a>
              ))}
            </div>
            <div className="text-center">
              <p className="text-sm sm:text-base text-gray-400">
                © {new Date().getFullYear()} Baran Çiçek. Tüm hakları saklıdır.
              </p>
              <p className="text-xs sm:text-sm text-gray-500 mt-2">
                Bu site React, Three.js ve modern web teknolojileri kullanılarak geliştirilmiştir.
              </p>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}

const technologies = [
  { icon: SiJavascript, name: 'JavaScript' },
  { icon: SiReact, name: 'React' },
  { icon: SiNodedotjs, name: 'Node.js' },
  { icon: SiMongodb, name: 'MongoDB' },
  { icon: SiThreedotjs, name: 'Three.js' },
]

const projects = [
  {
    icon: FaLaptopCode,
    title: "E-Ticaret Platformu",
    description: "Modern ve kullanıcı dostu bir e-ticaret deneyimi",
    technologies: ["React", "Node.js", "MongoDB"]
  },
  {
    icon: FaMobileAlt,
    title: "Mobil Uygulama",
    description: "Cross-platform mobil uygulama geliştirme",
    technologies: ["React Native", "Firebase"]
  },
  {
    icon: FaCode,
    title: "3D Web Deneyimi",
    description: "Three.js ile interaktif 3D web uygulaması",
    technologies: ["Three.js", "WebGL", "React"]
  }
]

const cards = [
  {
    icon: BiCodeAlt,
    title: "Modern Teknolojiler",
    description: "React, Three.js ve modern web teknolojileriyle geliştirilmiş projeler"
  },
  {
    icon: GiGuitar,
    title: "Müzik Tutkusu",
    description: "Gitar ve müzik prodüksiyonu konusunda deneyimler"
  },
  {
    icon: GiBookshelf,
    title: "Sürekli Öğrenme",
    description: "Teknoloji ve sanat alanında sürekli kendini geliştirme"
  }
]

const socialLinks = [
  { icon: FaGithub, url: "#", name: "GitHub" },
  { icon: FaLinkedin, url: "#", name: "LinkedIn" },
  { icon: FaTwitter, url: "#", name: "Twitter" }
] 