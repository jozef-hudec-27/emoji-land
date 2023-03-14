import ProductCounter from '../ProductCounter'

export default function CartItem({ item }) {
  const [emojiObj, quantity] = item

  return (
    <div className="cart-item card">
      <div className="flexbox flex-column flex-center">
        <p style={{ fontSize: '4rem' }}>{emojiObj.emoji}</p>
        <ProductCounter count={quantity} />
      </div>
    </div>
  )
}
