import { useParams } from 'react-router-dom'
import { findEmoji } from '../../helpers/emojis'
import AddToCartBtn from '../AddToCartBtn'
import EmojiNotFound from '../emoji/EmojiNotFound'
import ProductCounter from '../ProductCounter'
import RemoveFromCartBtn from '../RemoveFromCartBtn'
import Page from './Page'

export default function EmojiDetail({ changeQuantity, addToCart, removeFromCart, cartContains, cartCount }) {
  const params = useParams()
  const emojiObj = findEmoji(params.emoji)

  if (!emojiObj)
    return (
      <Page>
        <EmojiNotFound />
      </Page>
    )

  const { name, emoji, description, price } = emojiObj

  return (
    <Page>
      <div className="emoji-detail card flexbox flex-column flex-center">
        <p style={{ fontSize: '5rem' }}>{emoji}</p>

        <div className="flexbox flex-align-center full-width">
          <h2>{name}</h2>
          <h3 className="ml-auto" style={{ color: 'green' }}>
            ${price}
          </h3>
        </div>

        <p style={{ textAlign: 'justify' }}>{description}</p>

        <div className="add-to-cart-container flexbox full-width mt-12">
          {cartContains(emojiObj) ? (
            <RemoveFromCartBtn onClick={() => removeFromCart(emojiObj.emoji)} />
          ) : (
            <AddToCartBtn onClick={() => addToCart(emojiObj, 1)} />
          )}
          <ProductCounter count={cartCount(emoji)}
            onUpClick={() => {
              if (cartContains(emojiObj)) {
                changeQuantity(emoji, 1)
              } else {
                addToCart(emojiObj, 1)
              }
            }}
            onDownClick={() => {
              if (cartContains(emojiObj)) {
                changeQuantity(emoji, -1)
              }
            }}
          />
        </div>
      </div>
    </Page>
  )
}
