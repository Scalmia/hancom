import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Studio from './pages/Studio'
import TwoRoom from './pages/TwoRoom'
import Apartment from './pages/Apartment'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/studio" element={<Studio />} />
        <Route path="/two-room" element={<TwoRoom />} />
        <Route path="/apartment" element={<Apartment />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
