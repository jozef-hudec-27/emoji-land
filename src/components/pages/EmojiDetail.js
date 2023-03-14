import { useParams } from 'react-router-dom'
import { findEmoji } from '../../helpers/emojis'
import AddToCartBtn from '../AddToCartBtn'
import EmojiNotFound from '../emoji/EmojiNotFound'
import ProductCounter from '../ProductCounter'

export default function EmojiDetail() {
  const params = useParams()
  const emojiObj = findEmoji(params.emoji)

  if (!emojiObj)
    return (
      <div className="full-width full-height flexbox flex-justify-center">
        <EmojiNotFound />
      </div>
    )

  const { name, emoji, description } = emojiObj

  return (
    <div className="flexbox flex-justify-center full-height">
      <div className="emoji-detail">
        <p style={{ fontSize: '5rem' }}>{emoji}</p>

        <div className="flexbox flex-align-center full-width">
          <h2>{name}</h2>
          <h3 className="ml-auto" style={{ color: 'green' }}>
            5$
          </h3>
        </div>

        <p style={{ textAlign: 'justify' }}>{description}</p>

        <div className="add-to-cart-container flexbox full-width mt-12">
          <AddToCartBtn />
          <ProductCounter />
        </div>
      </div>
    </div>
  )
}
