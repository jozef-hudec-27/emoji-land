export default function CartEmpty() {
  return (
    <div className="empty-cart-msg flexbox flex-column flex-center full-height p-12">
      <h2>Your cart is empty. Go and buy some emojis!</h2>
      <p style={{ fontSize: '5rem' }}>🛒</p>
    </div>
  )
}
