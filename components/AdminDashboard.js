export default function AdminDashboard() {
  return (
    <div className="admin-dashboard p-8">
      <h1 className="text-3xl mb-6">Admin Paneli</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white/10 p-6 rounded-lg">
          <h2 className="text-xl mb-4">Blog Yazıları</h2>
          {/* Blog yönetim araçları */}
        </div>
        <div className="bg-white/10 p-6 rounded-lg">
          <h2 className="text-xl mb-4">Site Ayarları</h2>
          {/* Site ayarları */}
        </div>
      </div>
    </div>
  )
} 