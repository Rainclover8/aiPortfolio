import { useState } from 'react'

export default function Blog() {
  const [isAuthenticated] = useState(false)
  
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-900 flex items-center justify-center">
        <div className="bg-black/30 backdrop-blur-xl p-8 rounded-xl text-center">
          <h1 className="text-2xl text-white mb-4">Bu sayfaya erişim yetkiniz yok.</h1>
          <p className="text-gray-300">Lütfen giriş yapın veya yetki isteyin.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-900 p-8">
      <div className="container mx-auto">
        <h1 className="text-4xl text-white font-bold mb-8">Blog Yönetimi</h1>
        <div className="grid gap-6">
          {/* Blog post listesi ve yönetim araçları */}
        </div>
      </div>
    </div>
  )
} 