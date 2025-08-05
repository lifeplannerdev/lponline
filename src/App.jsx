import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HeroPage from './pages/HeroPage'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HeroPage />} />
          
        </Routes>
      </div>
    </Router>
  )
}

export default App
