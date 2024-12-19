import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaEdit, FaTrash, FaPlus, FaLock, FaUnlock, FaMoon, FaSun } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

export default function Admin() {
  const navigate = useNavigate()
  const [isAdmin, setIsAdmin] = useState(false)
  const [password, setPassword] = useState('')
  const [attempts, setAttempts] = useState(0)
  const [darkMode, setDarkMode] = useState(true)
  const [blogPosts, setBlogPosts] = useState([
    { id: 1, title: 'React ve Three.js', content: 'Web 3D...', date: '2024-03-20', views: 0 }
  ])
  const [showAddModal, setShowAddModal] = useState(false)
  const [newPost, setNewPost] = useState({ title: '', content: '' })
  const [loginError, setLoginError] = useState('')
  
  const CORRECT_PASSWORD = 'barancicek2024' // Gerçek uygulamada bu client-side'da olmamalı

  useEffect(() => {
    if (attempts >= 3) {
      setTimeout(() => {
        navigate('/')
      }, 2000)
    }
  }, [attempts, navigate])

  const handleLogin = () => {
    if (password === CORRECT_PASSWORD) {
      setIsAdmin(true)
      setLoginError('')
      // Başarılı giriş animasyonu
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      })
    } else {
      setAttempts(prev => prev + 1)
      setLoginError(`Hatalı şifre! ${3 - attempts} deneme hakkınız kaldı.`)
      setPassword('')
    }
  }
  
  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-900 flex items-center justify-center">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-black/30 backdrop-blur-xl p-8 rounded-xl text-center max-w-md w-full mx-4"
        >
          <motion.div
            animate={{ rotate: attempts >= 3 ? [0, 10, -10, 0] : 0 }}
            transition={{ duration: 0.5 }}
          >
            <FaLock className="text-4xl text-purple-400 mx-auto mb-4" />
          </motion.div>
          <h1 className="text-2xl text-white mb-4">Admin Girişi</h1>
          <div className="space-y-4">
            <input
              type="password"
              placeholder="Şifre"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
              className="w-full px-4 py-2 bg-black/30 border border-purple-500/30 rounded-lg text-white"
            />
            {loginError && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-400 text-sm"
              >
                {loginError}
              </motion.p>
            )}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleLogin}
              className="w-full py-2 bg-purple-600 rounded-lg text-white flex items-center justify-center gap-2"
            >
              <FaUnlock /> Giriş Yap
            </motion.button>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'bg-gradient-to-br from-indigo-900 to-purple-900' : 'bg-gradient-to-br from-purple-100 to-indigo-100'
    } p-8`}>
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-4">
            <h1 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              Admin Paneli
            </h1>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg ${darkMode ? 'bg-yellow-400' : 'bg-indigo-900 text-white'}`}
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </motion.button>
          </div>
          <div className="flex gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAddModal(true)}
              className={`px-4 py-2 ${
                darkMode ? 'bg-purple-600' : 'bg-indigo-600'
              } rounded-lg text-white flex items-center gap-2`}
            >
              <FaPlus /> Yeni Blog Yazısı
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setIsAdmin(false)
                setPassword('')
              }}
              className="px-4 py-2 bg-red-500 rounded-lg text-white"
            >
              Çıkış Yap
            </motion.button>
          </div>
        </div>

        <div className="grid gap-6">
          {/* Blog Yazıları */}
          <div className="bg-black/30 backdrop-blur-xl p-6 rounded-xl">
            <h2 className="text-xl text-white mb-6">Blog Yazıları</h2>
            <div className="space-y-4">
              {blogPosts.map(post => (
                <div key={post.id} className="bg-white/5 p-4 rounded-lg flex justify-between items-center">
                  <div>
                    <h3 className="text-white font-semibold">{post.title}</h3>
                    <p className="text-gray-400 text-sm">{post.date}</p>
                  </div>
                  <div className="flex gap-3">
                    <button className="text-purple-400 hover:text-purple-300">
                      <FaEdit size={20} />
                    </button>
                    <button 
                      className="text-red-400 hover:text-red-300"
                      onClick={() => handleDeletePost(post.id)}
                    >
                      <FaTrash size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Yeni Blog Yazısı Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-gray-900 p-6 rounded-xl w-full max-w-2xl mx-4"
          >
            <h2 className="text-xl text-white mb-4">Yeni Blog Yazısı</h2>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Başlık"
                className="w-full px-4 py-2 bg-black/30 border border-purple-500/30 rounded-lg text-white"
                value={newPost.title}
                onChange={(e) => setNewPost({...newPost, title: e.target.value})}
              />
              <textarea
                placeholder="İçerik"
                rows={6}
                className="w-full px-4 py-2 bg-black/30 border border-purple-500/30 rounded-lg text-white"
                value={newPost.content}
                onChange={(e) => setNewPost({...newPost, content: e.target.value})}
              />
              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 text-gray-400 hover:text-white"
                >
                  İptal
                </button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleAddPost}
                  className="px-4 py-2 bg-purple-600 rounded-lg text-white"
                >
                  Yayınla
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
} 