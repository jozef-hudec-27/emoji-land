import CartEmpty from '../cart/CartEmpty'
import CartItems from '../cart/CartItems'
import CartSummary from '../cart/CartSummary'
import Page from './Page'

export default function Cart({ cartItems }) {
  cartItems = []

  return (
    <Page>
      <section id="cart" style={{ display: !cartItems.length && 'block' }}>
        {cartItems.length ? (
          <>
            <section id="cart-items-wrapper" className="flexbox flex-column flex-align-center gap-8">
              <h2>Cart items</h2>

              <CartItems items={cartItems} />
            </section>

            <section id="cart-summary-wrapper" className="flexbox flex-column flex-align-center gap-8">
              <h2>Summary</h2>

              <CartSummary items={cartItems} />
            </section>
          </>
        ) : (
          <CartEmpty />
        )}
      </section>
    </Page>
  )
}
