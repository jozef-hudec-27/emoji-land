export default function EmojiNotFound() {
  return (
    <div className="emoji-not-found card flexbox flex-center gap-12 m-8">
      <div style={{ fontSize: '4rem' }}>😕</div>

      <div className="flexbox flex-column">
        <h2>Emoji not found.</h2>
        <p>
          The emoji you're looking for can't be found. It either doesn't exist or there's a problem on our side. In that
          case, please try again later.
        </p>
      </div>
    </div>
  )
}
