import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa'

export default function Admin() {
  const [isAdmin] = useState(true)
  const [blogPosts, setBlogPosts] = useState([
    { id: 1, title: 'React ve Three.js', content: 'Web 3D...', date: '2024-03-20' }
  ])
  const [showAddModal, setShowAddModal] = useState(false)
  const [newPost, setNewPost] = useState({ title: '', content: '' })
  
  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-900 flex items-center justify-center">
        <div className="bg-black/30 backdrop-blur-xl p-8 rounded-xl text-center">
          <h1 className="text-2xl text-white mb-4">Yetkisiz erişim</h1>
          <p className="text-gray-300">Bu sayfaya erişmek için admin yetkisine sahip olmanız gerekiyor.</p>
        </div>
      </div>
    )
  }

  const handleAddPost = () => {
    setBlogPosts([...blogPosts, { ...newPost, id: Date.now(), date: new Date().toISOString().split('T')[0] }])
    setShowAddModal(false)
    setNewPost({ title: '', content: '' })
  }

  const handleDeletePost = (id) => {
    setBlogPosts(blogPosts.filter(post => post.id !== id))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-900 p-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl text-white font-bold">Admin Paneli</h1>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowAddModal(true)}
            className="px-4 py-2 bg-purple-600 rounded-lg text-white flex items-center gap-2"
          >
            <FaPlus /> Yeni Blog Yazısı
          </motion.button>
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