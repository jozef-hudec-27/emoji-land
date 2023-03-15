import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Navbar from './components/Navbar'
import Shop from './components/pages/Shop'
import EmojiDetail from './components/pages/EmojiDetail'
import PageNotFound from './components/pages/PageNotFound'
import Cart from './components/pages/Cart'
import { useState } from 'react'

function App() {
  const [cart, setCart] = useState([])

  const addToCart = (emojiObj, quantity) => {
    setCart((prevCart) => [...prevCart, [emojiObj, quantity]])
  }

  const removeFromCart = (emoji) => {
    setCart((prevCart) => {
      const newCart = [...prevCart]

      for (let i = 0; i < newCart.length; i++) {
        if (cart[i][0].emoji === emoji) {
          newCart.splice(i, 1)
          return newCart
        }
      }

      return newCart
    })
  }

  const changeQuantity = (emoji, increment) => {
    setCart((prevCart) => {
      const newCart = [...prevCart]
      for (let i = 0; i < newCart.length; i++) {
        if (newCart[i][0].emoji === emoji) {
          newCart[i] = [newCart[i][0], newCart[i][1] + increment]

          // IN CASE WE'RE LOWERING THE QUANTITY
          if (newCart[i][1] <= 0) newCart.splice(i, 1)

          return newCart
        }
      }

      return newCart
    })
  }

  const cartContains = (item) => {
    const emoji = item.emoji

    for (let x of cart) {
      if (x[0].emoji === emoji) {
        return x[1] > 0
      }
    }

    return false
  }

  const cartCount = (emoji) => {
    for (let item of cart) {
      if (item[0].emoji === emoji) {
        return item[1]
      }
    }

    return 0
  }

  const calculateTotalCart = () => {
    let total = 0

    for (let item of cart) {
      const { price } = item[0]
      total += price * item[1]
    }

    return total
  }

  const clearCart = () => {
    setCart([])
  }

  return (
    <>
      <BrowserRouter>
        <Navbar cart={cart} />

        <div id="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route
              path="/cart"
              element={
                <Cart
                  cart={cart}
                  cartContains={cartContains}
                  addToCart={addToCart}
                  changeQuantity={changeQuantity}
                  calculateTotalCart={calculateTotalCart}
                  clearCart={clearCart}
                />
              }
            />
            <Route
              path="/emoji/:emoji"
              element={
                <EmojiDetail
                  changeQuantity={changeQuantity}
                  addToCart={addToCart}
                  removeFromCart={removeFromCart}
                  cartContains={cartContains}
                  cartCount={cartCount}
                />
              }
            />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
