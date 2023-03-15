import { render } from '@testing-library/react'
import Shop from '../components/pages/Shop'
import { emojis } from '../helpers/emojis'
import { BrowserRouter } from 'react-router-dom'

describe('Shop component', () => {
  it(`renders ${emojis.length} emoji cards`, () => {
    const { container } = render(
      <BrowserRouter>
        <Shop />
      </BrowserRouter>
    )

    expect(container).toMatchSnapshot()
  })
})
