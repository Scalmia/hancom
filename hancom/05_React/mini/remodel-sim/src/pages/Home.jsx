import { Link } from 'react-router-dom'

const rooms = [
  { to: '/studio', name: '원룸' },
  { to: '/two-room', name: '투룸' },
  { to: '/apartment', name: '아파트' },
]

const Home = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '3rem',
        background: 'linear-gradient(180deg, #1a1a2e 0%, #16213e 100%)',
        color: 'white',
        fontFamily: 'sans-serif',
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', margin: 0 }}>3D 리모델링 시뮬레이터</h1>
        <p style={{ opacity: 0.7, marginTop: '0.5rem' }}>방 타입을 선택하고 새 창에서 꾸며보세요</p>
      </div>
      <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        {rooms.map((room) => (
          <Link
            key={room.to}
            to={room.to}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'block',
              width: '220px',
              padding: '2rem 1.5rem',
              borderRadius: '12px',
              border: '1px solid rgba(255,255,255,0.15)',
              background: 'rgba(255,255,255,0.05)',
              color: 'white',
              textDecoration: 'none',
              textAlign: 'center',
              transition: 'background 0.2s, transform 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.12)'
              e.currentTarget.style.transform = 'translateY(-4px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            <div style={{ fontSize: '1.4rem', fontWeight: 'bold' }}>{room.name}</div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Home
