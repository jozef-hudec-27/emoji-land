import CartSummaryTable from './CartSummaryTable'

export default function CartSummary({ items, calculateTotalCart, clearCart, setShowCheckoutModal }) {
  return (
    <div className="cart-summary full-width">
      <CartSummaryTable items={items} />

      <div className="flexbox flex-center gap-16 mt-12">
        <h3>Total: ${calculateTotalCart()}</h3>

        <div className="flexbox gap-4">
          <button className="clear-cart-btn" onClick={clearCart}>
            Clear Cart
          </button>
          <button className="checkout-btn" onClick={() => {
            clearCart()
            setShowCheckoutModal(true)
          }}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  )
}
