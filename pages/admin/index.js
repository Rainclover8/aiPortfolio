import { useSession } from 'next-auth/react'
import AdminDashboard from '../../components/AdminDashboard'

export default function Admin() {
  const { data: session } = useSession()
  
  if (!session?.user?.isAdmin) {
    return <div>Yetkisiz erişim</div>
  }

  return <AdminDashboard />
} 