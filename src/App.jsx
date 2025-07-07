/* 라우터 설정은 첫번째JSX파일 App.jsx에서 보통 이루어짐 */
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Intro from './components/intro'
import Nick from './components/Nick'
import './App.css'
function App() {
  return (
    <div id="wrap" style={{width:"448px", background:'#eee'}}>
      <Header />
      {/* 링크주소에 따라 컴포넌트 변경하는 위치는 전체를 브라우저 라우터로 묶고 시작 */}
      {/* 브라우저라우터 시작 */}
      <main>
        <BrowserRouter>
          {/* 링크 */}
          <nav>
            <Link to="/" style={{color:'#000'}} >유재석</Link>
            <Link to="/intro" style={{color:'#000', margin:'0 5px'}} >인적사항</Link>
            <Link to="/nick" style={{color:'#000'}} >별명&특징</Link>
          </nav>
          {/* 라우터설정 */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/intro" element={<Intro />} />
            <Route path="/nick" element={<Nick />} />
          </Routes>
        </BrowserRouter>
      </main>
      {/* 브라우저라우터 종료 */}
      <Footer />
    </div>
  )
}

export default App
