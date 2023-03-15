import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CartEmpty from '../cart/CartEmpty'
import CartItems from '../cart/CartItems'
import CartSummary from '../cart/CartSummary'
import CheckoutModal from '../CheckoutModal'
import Page from './Page'

export default function Cart({ cart, cartContains, addToCart, changeQuantity, calculateTotalCart, clearCart }) {
  const [showCheckoutModal, setShowCheckoutModal] = useState(false)
  const navigate = useNavigate()

  return (
    <Page>
      <section id="cart" style={{ display: !cart.length && 'block' }}>
        {cart.length ? (
          <>
            <section id="cart-items-wrapper" className="flexbox flex-column flex-align-center gap-8">
              <h2>Cart items</h2>

              <CartItems
                items={cart}
                cartContains={cartContains}
                addToCart={addToCart}
                changeQuantity={changeQuantity}
              />
            </section>

            <section id="cart-summary-wrapper" className="flexbox flex-column flex-align-center gap-8">
              <h2>Summary</h2>

              <CartSummary
                items={cart}
                calculateTotalCart={calculateTotalCart}
                clearCart={clearCart}
                setShowCheckoutModal={setShowCheckoutModal}
              />
            </section>
          </>
        ) : (
          <CartEmpty />
        )}
      </section>

      <CheckoutModal
        show={showCheckoutModal}
        onXmark={() => setShowCheckoutModal(false)}
        onContinueShopping={() => navigate('/shop')}
      />
    </Page>
  )
}
