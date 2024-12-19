import { useSession } from 'next-auth/react'
import { BlogPost } from '../../components/BlogPost'

export default function Blog() {
  const { data: session } = useSession()
  
  if (!session) {
    return <div>Bu sayfaya erişim yetkiniz yok.</div>
  }

  return (
    <div className="blog-container">
      <h1>Blog Yönetimi</h1>
      {/* Blog post listesi ve yönetim araçları */}
    </div>
  )
} 