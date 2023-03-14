import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Navbar from './components/Navbar'
import Shop from './components/pages/Shop'
import EmojiDetail from './components/pages/EmojiDetail'
import PageNotFound from './components/pages/PageNotFound'
import Cart from './components/pages/Cart'

const tempCartItems = [
  {
    emoji: '😀',
    name: 'Grinning Face',
    description:
      'A yellow face with simple, open eyes and a broad, open smile, showing upper teeth and tongue on some platforms. Often conveys general pleasure and good cheer or humor.',
  },
  {
    emoji: '😂',
    name: 'Face with Tears of Joy',
    description:
      'A yellow face with a big grin, uplifted eyebrows, and smiling eyes, each shedding a tear from laughing so hard. Widely used to show something is funny or pleasing.',
  },
  {
    emoji: '🙂',
    name: 'Slightly Smiling Face',
    description:
      'A yellow face with simple, open eyes and a thin, closed smile. Conveys a wide range of positive, happy, and friendly sentiments. Its tone can also be patronizing, passive-aggressive, or ironic, as if saying This is fine when it’s really not.',
  },
]

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <div id="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart cartItems={tempCartItems} />} />
            <Route path="/emoji/:emoji" element={<EmojiDetail />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
