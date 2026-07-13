import { useRef, useState } from 'react'
import RoomCanvas from '../components/RoomCanvas'
import Room from '../components/Room'
import PlacedFurniture from '../components/PlacedFurniture'
import TextureSwitcher from '../components/TextureSwitcher'
import { wallpapers, floors } from '../data/textures'
import { furniture } from '../data/furniture'

const OUTER_WIDTH = 10
const OUTER_DEPTH = 8
const SIDE_ROOM_WIDTH = 3
const SIDE_ROOM_DEPTH = 3
const ROOM_A_POSITION = [-OUTER_WIDTH / 2 + SIDE_ROOM_WIDTH / 2, 0, -OUTER_DEPTH / 2 + SIDE_ROOM_DEPTH / 2]
const ROOM_B_POSITION = [OUTER_WIDTH / 2 - SIDE_ROOM_WIDTH / 2, 0, -OUTER_DEPTH / 2 + SIDE_ROOM_DEPTH / 2]
const OUTER_DRAG_LIMITS = [[-OUTER_WIDTH / 2, OUTER_WIDTH / 2], null, [-OUTER_DEPTH / 2, OUTER_DEPTH / 2]]
const SIDE_ROOM_DRAG_LIMITS = [[-SIDE_ROOM_WIDTH / 2, SIDE_ROOM_WIDTH / 2], null, [-SIDE_ROOM_DEPTH / 2, SIDE_ROOM_DEPTH / 2]]

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

const FurniturePanel = ({ label, spaceWidth, spaceDepth, items, setItems }) => (
  <>
    <div>
      <span>{label} 가구 추가: </span>
      {furniture.map((item) => (
        <button
          key={item.name}
          onClick={() => setItems((prev) => [...prev, makeFurnitureItem(item, spaceWidth, spaceDepth)])}
        >
          {item.name}
        </button>
      ))}
    </div>
    <div>
      <span>{label} 배치된 가구: </span>
      {items.map((item) => (
        <span key={item.id}>
          {furniture.find((f) => f.url === item.url)?.name}
          <button onClick={() => rotateItem(setItems, item.id)}>회전</button>
          <button onClick={() => removeItem(setItems, item.id)}>삭제</button>
        </span>
      ))}
    </div>
  </>
)

const Apartment = () => {
  const [wallpaper, setWallpaper] = useState(wallpapers[0].url)
  const [floor, setFloor] = useState(floors[0].url)
  const [livingFurniture, setLivingFurniture] = useState([])
  const [roomAFurniture, setRoomAFurniture] = useState([])
  const [roomBFurniture, setRoomBFurniture] = useState([])
  const [shadowsEnabled, setShadowsEnabled] = useState(false)
  const controlsRef = useRef()

  return (
    <div style={{ position: 'fixed', inset: 0 }}>
      <div style={{ position: 'absolute', zIndex: 1, padding: '1rem', color: 'white' }}>
        <TextureSwitcher label="벽지" options={wallpapers} value={wallpaper} onChange={setWallpaper} />
        <TextureSwitcher label="바닥재" options={floors} value={floor} onChange={setFloor} />
        <FurniturePanel label="거실" spaceWidth={OUTER_WIDTH} spaceDepth={OUTER_DEPTH} items={livingFurniture} setItems={setLivingFurniture} />
        <FurniturePanel label="방1" spaceWidth={SIDE_ROOM_WIDTH} spaceDepth={SIDE_ROOM_DEPTH} items={roomAFurniture} setItems={setRoomAFurniture} />
        <FurniturePanel label="방2" spaceWidth={SIDE_ROOM_WIDTH} spaceDepth={SIDE_ROOM_DEPTH} items={roomBFurniture} setItems={setRoomBFurniture} />
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
        <group position={ROOM_A_POSITION}>
          <Room width={SIDE_ROOM_WIDTH} depth={SIDE_ROOM_DEPTH} wallMap={wallpaper} floorMap={floor} />
          {roomAFurniture.map((item) => (
            <PlacedFurniture
              key={item.id}
              url={item.url}
              scale={item.scale}
              position={item.position}
              rotation={item.rotation}
              dragLimits={SIDE_ROOM_DRAG_LIMITS}
              controlsRef={controlsRef}
              onPositionChange={(newPosition) => moveItem(setRoomAFurniture, item.id, newPosition)}
            />
          ))}
        </group>
        <group position={ROOM_B_POSITION}>
          <Room width={SIDE_ROOM_WIDTH} depth={SIDE_ROOM_DEPTH} wallMap={wallpaper} floorMap={floor} />
          {roomBFurniture.map((item) => (
            <PlacedFurniture
              key={item.id}
              url={item.url}
              scale={item.scale}
              position={item.position}
              rotation={item.rotation}
              dragLimits={SIDE_ROOM_DRAG_LIMITS}
              controlsRef={controlsRef}
              onPositionChange={(newPosition) => moveItem(setRoomBFurniture, item.id, newPosition)}
            />
          ))}
        </group>
      </RoomCanvas>
    </div>
  )
}

export default Apartment