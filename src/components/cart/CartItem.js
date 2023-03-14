import ProductCounter from '../ProductCounter'

export default function CartItem({ item: { emoji } }) {
  return (
    <div className="cart-item card">
      <div className="flexbox flex-column flex-center">
        <p style={{ fontSize: '4rem' }}>{emoji}</p>
        <ProductCounter />
      </div>
    </div>
  )
}
