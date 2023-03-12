import { Link } from 'react-router-dom'

export default function EmojiCard({ emojiObj }) {
  const { emoji, description, name } = emojiObj

  return (
    <Link to={`/emoji/${emoji}`} className="emoji-card flexbox flex-center">
      <h3>{emoji}</h3>
    </Link>
  )
}
