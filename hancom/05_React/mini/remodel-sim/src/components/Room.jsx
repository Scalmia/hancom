import * as THREE from 'three'
import { useTexture } from '@react-three/drei'

const Room = ({ width = 6, depth = 6, height = 3, wallMap, floorMap }) => {
  const wallTexture = useTexture(wallMap)
  const floorTexture = useTexture(floorMap)

  wallTexture.wrapS = wallTexture.wrapT = THREE.RepeatWrapping
  wallTexture.repeat.set(width / 2, height / 2)

  floorTexture.wrapS = floorTexture.wrapT = THREE.RepeatWrapping
  floorTexture.repeat.set(width / 2, depth / 2)

  return (
    <group>
      <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[width, depth]} />
        <meshStandardMaterial map={floorTexture} side={THREE.DoubleSide} />
      </mesh>
      <mesh position={[0, height / 2, -depth / 2]}>
        <planeGeometry args={[width, height]} />
        <meshStandardMaterial map={wallTexture} side={THREE.DoubleSide} />
      </mesh>
      <mesh position={[-width / 2, height / 2, 0]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[depth, height]} />
        <meshStandardMaterial map={wallTexture} side={THREE.DoubleSide} />
      </mesh>
      <mesh position={[width / 2, height / 2, 0]} rotation={[0, -Math.PI / 2, 0]}>
        <planeGeometry args={[depth, height]} />
        <meshStandardMaterial map={wallTexture} side={THREE.DoubleSide} />
      </mesh>
    </group>
  )
}

export default Room