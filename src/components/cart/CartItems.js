import CartItem from './CartItem'

export default function CartItems({ items, cartContains, addToCart, changeQuantity }) {
  return (
    <div className="cart-items flexbox flex-center flex-wrap gap-12">
      {items.map((item, i) => {
        return (
          <CartItem
            key={i}
            item={item}
            cartContains={cartContains}
            addToCart={addToCart}
            changeQuantity={changeQuantity}
          />
        )
      })}
    </div>
  )
}
