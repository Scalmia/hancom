import { useMemo, useRef } from 'react'
import * as THREE from 'three'
import { DragControls } from '@react-three/drei'
import Furniture from './Furniture'

const PlacedFurniture = ({ url, scale, position, rotation = 0, dragLimits, controlsRef, onPositionChange }) => {
  const initialMatrix = useMemo(() => {
    const matrix = new THREE.Matrix4()
    matrix.setPosition(...position)
    return matrix
  }, [])
  const latestMatrix = useRef(initialMatrix)

  return (
    <DragControls
      matrix={initialMatrix}
      axisLock="y"
      dragLimits={dragLimits}
      onDragStart={() => { controlsRef.current.enabled = false }}
      onDrag={(localMatrix) => { latestMatrix.current = localMatrix }}
      onDragEnd={() => {
        controlsRef.current.enabled = true
        if (onPositionChange) {
          const newPosition = new THREE.Vector3()
          latestMatrix.current.decompose(newPosition, new THREE.Quaternion(), new THREE.Vector3())
          onPositionChange([newPosition.x, newPosition.y, newPosition.z])
        }
      }}
    >
      <group rotation={[0, rotation, 0]}>
        <Furniture url={url} scale={scale} />
      </group>
    </DragControls>
  )
}

export default PlacedFurniture