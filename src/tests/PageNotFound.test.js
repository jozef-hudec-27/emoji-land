import { render, screen } from '@testing-library/react'
import PageNotFound from '../components/pages/PageNotFound'

describe('PageNotFound component', () => {
  it('renders 🫠', () => {
    render(<PageNotFound />)
    expect(screen.getByText('🫠')).toBeInTheDocument()
  })

  it('renders page not found message', () => {
    render(<PageNotFound />)
    expect(screen.getByRole('heading', { name: 'Page not found.' })).toBeInTheDocument()
    expect(screen.getByText("The page you're looking for does not exist.")).toBeInTheDocument()
  })
})
