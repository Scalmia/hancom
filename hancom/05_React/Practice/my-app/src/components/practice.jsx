// // App.jsx — App 자체가 하나의 컴포넌트

// // ━━━ 1층: 재료 가져오기 (CSS·부품 등) ━━━━━━━━━━━━━━━━
// import '../index.css'

// // ━━━ 2층: 컴포넌트 함수 ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// const App = () => {

//   // ━━━ 3층: 화면 그리기 (JSX) ━━━━━━━━━━━━━━━━━━━━━━━━
//   return (
//     // ...화면...
//     <p>안녕하세요, React!</p>
//   )
// }
// export default App
import {Link, useNavigate} from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is the main content of the home page.</p>
      <Link to="/about">Go to About Page</Link>
      <button onClick={() => navigate('/about')}>Go to About Page</button>
    </div>
  )
}

export default Home