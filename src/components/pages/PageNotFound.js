import Page from './Page'

export default function PageNotFound() {
  return (
    <Page>
      <div id="home-hero" className="card flexbox flex-center gap-12">
        <div style={{ fontSize: '4rem' }}>🫠</div>

        <div className="flexbox flex-column">
          <h2>Page not found.</h2>
          <p>The page you're looking for does not exist.</p>
        </div>
      </div>
    </Page>
  )
}
