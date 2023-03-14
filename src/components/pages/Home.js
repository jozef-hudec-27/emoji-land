import Page from './Page'

export default function Home() {
  return (
    <Page>
      <div id="home-hero" className="card flexbox flex-center gap-12">
        <div style={{ fontSize: '4rem' }}>😎</div>

        <div className="flexbox flex-column">
          <h2>Welcome to EmojiLand! Your one-stop-shop for all your favorite emojis.</h2>
          <p>Whether you're feeling happy, sad, or somewhere in between, we've got the perfect emoji for you.</p>
        </div>
      </div>
    </Page>
  )
}
