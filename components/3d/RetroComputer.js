import { useGLTF } from '@react-three/drei'

export function RetroComputer() {
  const computer = useGLTF('/models/retro_computer.glb')
  
  return (
    <primitive 
      object={computer.scene}
      scale={1.5}
      position={[0, -1, 0]}
      rotation={[0, Math.PI / 4, 0]}
    />
  )
} 