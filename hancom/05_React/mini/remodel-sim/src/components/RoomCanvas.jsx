import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

const RoomCanvas = ({ children, controlsRef, shadowsEnabled = false }) => {
  return (
    <Canvas key={shadowsEnabled} shadows={shadowsEnabled} camera={{ position: [0, 3, 8] }}>
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[-1, 2, 4]}
        intensity={1}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
        shadow-camera-near={0.1}
        shadow-camera-far={30}
      />
      <Suspense fallback={null}>
        {children}
      </Suspense>
      <OrbitControls ref={controlsRef} />
    </Canvas>
  )
}

export default RoomCanvas