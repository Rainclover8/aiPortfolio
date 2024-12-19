import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { RetroComputer } from '../components/3d/RetroComputer'
import { Guitar } from '../components/3d/Guitar'
import { BookShelf } from '../components/3d/BookShelf'

export default function Home() {
  return (
    <div className="h-screen bg-gradient-to-r from-indigo-900 to-purple-800">
      <div className="container mx-auto">
        {/* 3D Scene */}
        <Canvas className="h-[60vh]">
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <RetroComputer />
          <OrbitControls enableZoom={false} />
        </Canvas>
        
        {/* Content */}
        <div className="text-white p-8">
          <h1 className="text-4xl font-retro mb-4">Hoş Geldiniz</h1>
          <p className="text-xl">Kodlama, Müzik ve Edebiyat tutkunu bir yazılımcının dünyası</p>
        </div>
      </div>
    </div>
  )
} 