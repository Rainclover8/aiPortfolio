import { useState } from 'react'

export default function Admin() {
  const [isAdmin] = useState(false)
  
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-900 p-8">
      <div className="container mx-auto">
        <h1 className="text-3xl text-white font-bold mb-8">Admin Paneli</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-black/30 backdrop-blur-xl p-6 rounded-xl">
            <h2 className="text-xl text-white mb-4">Blog Yazıları</h2>
            {/* Blog yönetim araçları */}
          </div>
          <div className="bg-black/30 backdrop-blur-xl p-6 rounded-xl">
            <h2 className="text-xl text-white mb-4">Site Ayarları</h2>
            {/* Site ayarları */}
          </div>
        </div>
      </div>
    </div>
  )
} 