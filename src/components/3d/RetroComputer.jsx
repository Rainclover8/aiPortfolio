import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

export function RetroComputer() {
  const groupRef = useRef()
  
  useFrame((state, delta) => {
    groupRef.current.rotation.y += delta * 0.2
    groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.1
  })
  
  return (
    <group ref={groupRef}>
      {/* Monitor */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[3, 2, 0.2]} />
        <meshStandardMaterial color="#4c1d95" />
      </mesh>
      
      {/* Screen */}
      <mesh position={[0, 0, 0.11]}>
        <boxGeometry args={[2.5, 1.5, 0.1]} />
        <meshStandardMaterial 
          color="#1e1b4b" 
          emissive="#4c1d95"
          emissiveIntensity={0.5}
        />
      </mesh>
      
      {/* Stand */}
      <mesh position={[0, -1.25, 0]}>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshStandardMaterial color="#4c1d95" />
      </mesh>
      
      {/* Base */}
      <mesh position={[0, -1.5, 0]}>
        <boxGeometry args={[1.5, 0.1, 1]} />
        <meshStandardMaterial color="#4c1d95" />
      </mesh>
    </group>
  )
} 