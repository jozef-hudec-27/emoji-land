export default function PageNotFound() {
  return (
    <div className="flexbox flex-justify-center full-height p-8">
      <div id="home-hero" className="card flexbox flex-center gap-12">
        <div style={{ fontSize: '4rem' }}>🫠</div>

        <div className="flexbox flex-column">
          <h2>Page not found.</h2>
          <p>The page you're looking for does not exist.</p>
        </div>
      </div>
    </div>
  )
}
