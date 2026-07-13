import { useMemo } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

const Furniture = ({ url, scale = 1 }) => {
  const { scene } = useGLTF(url)
  const clonedScene = useMemo(() => {
    const clone = scene.clone()
    const box = new THREE.Box3().setFromObject(clone)
    const center = box.getCenter(new THREE.Vector3())
    clone.position.x -= center.x
    clone.position.z -= center.z
    clone.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true
        child.receiveShadow = true
      }
    })
    return clone
  }, [scene])
  return <primitive object={clonedScene} scale={scale} />
}

export default Furniture