import { emojis } from '../../helpers/emojis'
import EmojiCard from './EmojiCard'

export default function EmojiList() {
  return (
    <div id="emoji-list">
      {emojis.map((emojiObj, i) => {
        return <EmojiCard key={i} emojiObj={emojiObj} />
      })}
    </div>
  )
}
