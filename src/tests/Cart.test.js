import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { act } from 'react-dom/test-utils'
import { BrowserRouter } from 'react-router-dom'
import Cart from '../components/pages/Cart'

describe('Cart component', () => {
  it('renders empty cart message when no items are in cart', () => {
    render(
      <BrowserRouter>
        <Cart cart={[]} />
      </BrowserRouter>
    )

    expect(screen.getByRole('heading', { name: 'Your cart is empty. Go and buy some emojis!' })).toBeInTheDocument()
  })

  it('matches snapshot if cart is not empty', () => {
    const cart = [
      [
        {
          emoji: '😀',
          price: 1,
          name: 'Grinning Face',
          description:
            'A yellow face with simple, open eyes and a broad, open smile, showing upper teeth and tongue on some platforms. Often conveys general pleasure and good cheer or humor.',
        },
        2,
      ],
    ]

    const { container } = render(
      <BrowserRouter>
        <Cart
          cart={cart}
          cartContains={jest.fn()}
          addToCart={jest.fn()}
          changeQuantity={jest.fn()}
          calculateTotalCart={jest.fn()}
          clearCart={jest.fn()}
        />
      </BrowserRouter>
    )

    expect(container).toMatchSnapshot()
  })

  it('clears cart after clicking button', () => {
    const cart = [
      [
        {
          emoji: '😀',
          price: 1,
          name: 'Grinning Face',
          description:
            'A yellow face with simple, open eyes and a broad, open smile, showing upper teeth and tongue on some platforms. Often conveys general pleasure and good cheer or humor.',
        },
        2,
      ],
    ]
    const clearCart = jest.fn()

    render(
      <BrowserRouter>
        <Cart
          cart={cart}
          cartContains={jest.fn()}
          addToCart={jest.fn()}
          changeQuantity={jest.fn()}
          calculateTotalCart={jest.fn()}
          clearCart={clearCart}
        />
      </BrowserRouter>
    )

    const clearCartBtn = screen.getByRole('button', { name: 'Clear Cart' })
    userEvent.click(clearCartBtn)

    expect(clearCart).toHaveBeenCalled()
  })

  it('displays checkout modal after clicking the button', async () => {
    const cart = [
      [
        {
          emoji: '😀',
          price: 1,
          name: 'Grinning Face',
          description:
            'A yellow face with simple, open eyes and a broad, open smile, showing upper teeth and tongue on some platforms. Often conveys general pleasure and good cheer or humor.',
        },
        2,
      ],
    ]
    const clearCart = jest.fn()

    render(
      <BrowserRouter>
        <Cart
          cart={cart}
          cartContains={jest.fn()}
          addToCart={jest.fn()}
          changeQuantity={jest.fn()}
          calculateTotalCart={jest.fn()}
          clearCart={clearCart}
        />
      </BrowserRouter>
    )

    const checkoutBtn = screen.getByRole('button', { name: 'Checkout' })
    act(() => {
      userEvent.click(checkoutBtn)
    })

    expect(clearCart).toHaveBeenCalled()

    await waitFor(() => {
      expect(screen.getByRole('button', { name: 'Continue shopping' })).toBeInTheDocument()
    })
  })
})
