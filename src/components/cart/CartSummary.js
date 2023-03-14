import CartSummaryTable from './CartSummaryTable'

export default function CartSummary({ items }) {
  return (
    <div className="cart-summary full-width">
      <CartSummaryTable items={items} />

      <div className="flexbox flex-center gap-16 mt-12">
        <h3>Total: $69,00</h3>

        <div className="flexbox gap-4">
          <button className="clear-cart-btn">Clear Cart</button>
          <button className="checkout-btn">Checkout</button>
        </div>
      </div>
    </div>
  )
}
