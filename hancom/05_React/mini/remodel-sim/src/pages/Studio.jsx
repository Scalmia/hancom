import { useRef, useState } from 'react'
import RoomCanvas from '../components/RoomCanvas'
import Room from '../components/Room'
import PlacedFurniture from '../components/PlacedFurniture'
import TextureSwitcher from '../components/TextureSwitcher'
import { wallpapers, floors } from '../data/textures'
import { furniture } from '../data/furniture'

const ROOM_WIDTH = 5
const ROOM_DEPTH = 5

const Studio = () => {
  const [wallpaper, setWallpaper] = useState(wallpapers[0].url)
  const [floor, setFloor] = useState(floors[0].url)
  const [placedFurniture, setPlacedFurniture] = useState([])
  const [shadowsEnabled, setShadowsEnabled] = useState(false)
  const controlsRef = useRef()

  const addFurniture = (item) => {
    setPlacedFurniture((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        url: item.url,
        scale: item.scale,
        position: [
          (Math.random() - 0.5) * (ROOM_WIDTH - 1),
          0,
          (Math.random() - 0.5) * (ROOM_DEPTH - 1),
        ],
        rotation: 0,
      },
    ])
  }

  const removeFurniture = (id) => {
    setPlacedFurniture((prev) => prev.filter((item) => item.id !== id))
  }

  const rotateFurniture = (id) => {
    setPlacedFurniture((prev) => prev.map((item) => (
      item.id === id ? { ...item, rotation: item.rotation + Math.PI / 2 } : item
    )))
  }

  const moveFurniture = (id, newPosition) => {
    setPlacedFurniture((prev) => prev.map((item) => (
      item.id === id ? { ...item, position: newPosition } : item
    )))
  }

  return (
    <div style={{ position: 'fixed', inset: 0 }}>
      <div style={{ position: 'absolute', zIndex: 1, padding: '1rem', color: 'white' }}>
        <TextureSwitcher label="벽지" options={wallpapers} value={wallpaper} onChange={setWallpaper} />
        <TextureSwitcher label="바닥재" options={floors} value={floor} onChange={setFloor} />
        <div>
          <span>가구 추가: </span>
          {furniture.map((item) => (
            <button key={item.name} onClick={() => addFurniture(item)}>{item.name}</button>
          ))}
        </div>
        <div>
          <span>배치된 가구: </span>
          {placedFurniture.map((item) => (
            <span key={item.id}>
              {furniture.find((f) => f.url === item.url)?.name}
              <button onClick={() => rotateFurniture(item.id)}>회전</button>
              <button onClick={() => removeFurniture(item.id)}>삭제</button>
            </span>
          ))}
        </div>
      </div>
      <div style={{ position: 'absolute', zIndex: 1, top: '1rem', right: '1rem' }}>
        <button onClick={() => setShadowsEnabled((prev) => !prev)}>
          그림자 {shadowsEnabled ? '끄기' : '켜기'}
        </button>
      </div>
      <RoomCanvas controlsRef={controlsRef} shadowsEnabled={shadowsEnabled}>
        <Room width={ROOM_WIDTH} depth={ROOM_DEPTH} wallMap={wallpaper} floorMap={floor} />
        {placedFurniture.map((item) => (
          <PlacedFurniture
            key={item.id}
            url={item.url}
            scale={item.scale}
            position={item.position}
            rotation={item.rotation}
            dragLimits={[[-ROOM_WIDTH / 2, ROOM_WIDTH / 2], null, [-ROOM_DEPTH / 2, ROOM_DEPTH / 2]]}
            controlsRef={controlsRef}
            onPositionChange={(newPosition) => moveFurniture(item.id, newPosition)}
          />
        ))}
      </RoomCanvas>
    </div>
  )
}

export default Studio