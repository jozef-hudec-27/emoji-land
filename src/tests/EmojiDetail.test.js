import { render, screen } from '@testing-library/react'
import EmojiDetail from '../components/pages/EmojiDetail'
import userEvent from '@testing-library/user-event'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useParams: () => ({ emoji: '😀' }),
}))

describe('EmojiDetail component', () => {
  it('renders emoji, name, description and price', () => {
    const { container } = render(
      <EmojiDetail
        changeQuantity={jest.fn()}
        addToCart={jest.fn()}
        removeFromCart={jest.fn()}
        cartContains={jest.fn()}
        cartCount={jest.fn()}
      />
    )
    expect(container).toMatchSnapshot()
  })

  it('adds emojis to cart after clicking the button', () => {
    const addToCart = jest.fn((emoji) => emoji)

    render(
      <EmojiDetail
        changeQuantity={jest.fn()}
        addToCart={addToCart}
        removeFromCart={jest.fn()}
        cartContains={jest.fn()}
        cartCount={jest.fn()}
      />
    )

    userEvent.click(screen.getByRole('button', { name: 'Add to cart' }))

    expect(addToCart).toHaveBeenCalled()
  })

  it('increases quantity after clicking the button', () => {
    const cartContains = jest.fn()
    cartContains.mockReturnValueOnce(false).mockReturnValueOnce(false).mockReturnValueOnce(true)

    const addToCart = jest.fn()

    const changeQuantity = jest.fn()

    render(
      <EmojiDetail
        changeQuantity={changeQuantity}
        addToCart={addToCart}
        removeFromCart={jest.fn()}
        cartContains={cartContains}
        cartCount={jest.fn()}
      />
    )

    const incrementBtn = screen.getByRole('button', { name: 'Increment' })
    userEvent.click(incrementBtn)
    userEvent.click(incrementBtn)

    expect(addToCart).toHaveBeenCalled()

    expect(changeQuantity).toHaveBeenCalled()
    expect(cartContains).toHaveBeenCalledTimes(3)
  })

  it('decreases the quantity after clicking the button', () => {
    const cartContains = jest.fn()
    cartContains.mockReturnValueOnce(true).mockReturnValueOnce(true).mockReturnValueOnce(false)
    const changeQuantity = jest.fn()

    render(
      <EmojiDetail
        changeQuantity={changeQuantity}
        addToCart={jest.fn()}
        removeFromCart={jest.fn()}
        cartContains={cartContains}
        cartCount={jest.fn()}
      />
    )

    const decrementBtn = screen.getByRole('button', { name: 'Decrement' })
    userEvent.click(decrementBtn)
    userEvent.click(decrementBtn)

    expect(changeQuantity).toHaveBeenCalled()
    expect(cartContains).toHaveBeenCalledTimes(3)
  })
})
