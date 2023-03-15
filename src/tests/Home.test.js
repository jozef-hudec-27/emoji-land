import { render, screen } from '@testing-library/react'
import Home from '../components/pages/Home'

describe('Home component', () => {
  it ('renders 😎', () => {
    render(<Home />)
    expect(screen.getByText('😎')).toBeInTheDocument()
  })

  it('renders div with greeting', () => {
    render(<Home />)
    expect(
      screen.getByRole('heading', { name: 'Welcome to EmojiLand! Your one-stop-shop for all your favorite emojis.' })
    ).toBeInTheDocument()
  })
})
