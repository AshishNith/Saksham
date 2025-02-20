import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Dining from './pages/Dining'
import Footer from './components/Footer'
import Suites from './pages/Suites'
import Wellness from './pages/Wellness'
import Leasure from './pages/Leasure'
import Experiences from './pages/Experiences'
const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dining" element={<Dining />} />
          <Route path="/suites" element={<Suites />} />
          <Route path="/wellness" element={<Wellness />} />
          <Route path="/leasure" element={<Leasure />} />
          <Route path="/experiences" element={<Experiences />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
