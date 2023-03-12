export default function Home() {
  return (
    <div className="flexbox flex-justify-center full-height p-8">
      <div id="home-hero" className="flexbox flex-center gap-12">
        <div style={{ fontSize: '4rem' }}>😎</div>

        <div className="flexbox flex-column">
          <h2>Welcome to EmojiLand! Your one-stop-shop for all your favorite emojis.</h2>
          <p>Whether you're feeling happy, sad, or somewhere in between, we've got the perfect emoji for you.</p>
        </div>
      </div>
    </div>
  )
}
