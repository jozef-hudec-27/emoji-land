import { useParams } from 'react-router-dom'
import { findEmoji } from '../../helpers/emojis'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'

export default function EmojiDetail() {
  const params = useParams()
  const emojiObj = findEmoji(params.emoji)

  if (!emojiObj) {
    return (
      <div>
        <h2>EMOJI NOT FOUND</h2>
      </div>
    )
  }

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
          <button className="add-to-cart">
            <FontAwesomeIcon icon={faCartShopping} /> Add to cart
          </button>

          <div className="counter flexbox flex-align-center ml-auto gap-10">
            <button>
              <FontAwesomeIcon icon={faChevronUp} />
            </button>
            <p>0</p>
            <button>
              <FontAwesomeIcon icon={faChevronDown} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
