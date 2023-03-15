import ProductCounter from '../ProductCounter'

export default function CartItem({ item, cartContains, addToCart, changeQuantity }) {
  const [emojiObj, quantity] = item

  return (
    <div className="cart-item card">
      <div className="flexbox flex-column flex-center">
        <p style={{ fontSize: '4rem' }}>{emojiObj.emoji}</p>
        <ProductCounter
          count={quantity}
          onUpClick={() => {
            if (cartContains(emojiObj)) {
              changeQuantity(emojiObj.emoji, 1)
            } else {
              addToCart(emojiObj, 1)
            }
          }}
          onDownClick={() => {
            if (cartContains(emojiObj)) {
              changeQuantity(emojiObj.emoji, -1)
            }
          }}
        />
      </div>
    </div>
  )
}
