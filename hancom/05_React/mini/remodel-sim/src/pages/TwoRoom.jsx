import { useRef, useState } from 'react'
import RoomCanvas from '../components/RoomCanvas'
import Room from '../components/Room'
import PlacedFurniture from '../components/PlacedFurniture'
import TextureSwitcher from '../components/TextureSwitcher'
import { wallpapers, floors } from '../data/textures'
import { furniture } from '../data/furniture'

const OUTER_WIDTH = 8
const OUTER_DEPTH = 6
const INNER_WIDTH = 3
const INNER_DEPTH = 3
const INNER_POSITION = [OUTER_WIDTH / 2 - INNER_WIDTH / 2, 0, -OUTER_DEPTH / 2 + INNER_DEPTH / 2]
const OUTER_DRAG_LIMITS = [[-OUTER_WIDTH / 2, OUTER_WIDTH / 2], null, [-OUTER_DEPTH / 2, OUTER_DEPTH / 2]]
const INNER_DRAG_LIMITS = [[-INNER_WIDTH / 2, INNER_WIDTH / 2], null, [-INNER_DEPTH / 2, INNER_DEPTH / 2]]

const makeFurnitureItem = (item, roomWidth, roomDepth) => ({
  id: crypto.randomUUID(),
  url: item.url,
  scale: item.scale,
  position: [
    (Math.random() - 0.5) * (roomWidth - 1),
    0,
    (Math.random() - 0.5) * (roomDepth - 1),
  ],
  rotation: 0,
})

const moveItem = (setState, id, newPosition) => {
  setState((prev) => prev.map((item) => (
    item.id === id ? { ...item, position: newPosition } : item
  )))
}

const rotateItem = (setState, id) => {
  setState((prev) => prev.map((item) => (
    item.id === id ? { ...item, rotation: item.rotation + Math.PI / 2 } : item
  )))
}

const removeItem = (setState, id) => {
  setState((prev) => prev.filter((item) => item.id !== id))
}

const TwoRoom = () => {
  const [wallpaper, setWallpaper] = useState(wallpapers[0].url)
  const [floor, setFloor] = useState(floors[0].url)
  const [livingFurniture, setLivingFurniture] = useState([])
  const [bedroomFurniture, setBedroomFurniture] = useState([])
  const [shadowsEnabled, setShadowsEnabled] = useState(false)
  const controlsRef = useRef()

  return (
    <div style={{ position: 'fixed', inset: 0 }}>
      <div style={{ position: 'absolute', zIndex: 1, padding: '1rem', color: 'white' }}>
        <TextureSwitcher label="벽지" options={wallpapers} value={wallpaper} onChange={setWallpaper} />
        <TextureSwitcher label="바닥재" options={floors} value={floor} onChange={setFloor} />
        <div>
          <span>거실 가구 추가: </span>
          {furniture.map((item) => (
            <button
              key={item.name}
              onClick={() => setLivingFurniture((prev) => [...prev, makeFurnitureItem(item, OUTER_WIDTH, OUTER_DEPTH)])}
            >
              {item.name}
            </button>
          ))}
        </div>
        <div>
          <span>거실 배치된 가구: </span>
          {livingFurniture.map((item) => (
            <span key={item.id}>
              {furniture.find((f) => f.url === item.url)?.name}
              <button onClick={() => rotateItem(setLivingFurniture, item.id)}>회전</button>
              <button onClick={() => removeItem(setLivingFurniture, item.id)}>삭제</button>
            </span>
          ))}
        </div>
        <div>
          <span>침실 가구 추가: </span>
          {furniture.map((item) => (
            <button
              key={item.name}
              onClick={() => setBedroomFurniture((prev) => [...prev, makeFurnitureItem(item, INNER_WIDTH, INNER_DEPTH)])}
            >
              {item.name}
            </button>
          ))}
        </div>
        <div>
          <span>침실 배치된 가구: </span>
          {bedroomFurniture.map((item) => (
            <span key={item.id}>
              {furniture.find((f) => f.url === item.url)?.name}
              <button onClick={() => rotateItem(setBedroomFurniture, item.id)}>회전</button>
              <button onClick={() => removeItem(setBedroomFurniture, item.id)}>삭제</button>
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
        <Room width={OUTER_WIDTH} depth={OUTER_DEPTH} wallMap={wallpaper} floorMap={floor} />
        {livingFurniture.map((item) => (
          <PlacedFurniture
            key={item.id}
            url={item.url}
            scale={item.scale}
            position={item.position}
            rotation={item.rotation}
            dragLimits={OUTER_DRAG_LIMITS}
            controlsRef={controlsRef}
            onPositionChange={(newPosition) => moveItem(setLivingFurniture, item.id, newPosition)}
          />
        ))}
        <group position={INNER_POSITION}>
          <Room width={INNER_WIDTH} depth={INNER_DEPTH} wallMap={wallpaper} floorMap={floor} />
          {bedroomFurniture.map((item) => (
            <PlacedFurniture
              key={item.id}
              url={item.url}
              scale={item.scale}
              position={item.position}
              rotation={item.rotation}
              dragLimits={INNER_DRAG_LIMITS}
              controlsRef={controlsRef}
              onPositionChange={(newPosition) => moveItem(setBedroomFurniture, item.id, newPosition)}
            />
          ))}
        </group>
      </RoomCanvas>
    </div>
  )
}

export default TwoRoom