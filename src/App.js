import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Navbar from './components/Navbar'
import Shop from './components/pages/Shop'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <div id="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
