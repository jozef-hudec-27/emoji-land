import { Link } from 'react-router-dom'

export default function Navbar({ cart }) {
  return (
    <nav>
      <h1>
        <Link to="/">
          <span aria-hidden="true">😍</span> <span>EmojiLand</span> <span aria-hidden="true">😋</span>
        </Link>
      </h1>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/cart">Cart ({cart.length})</Link>
        </li>
      </ul>
    </nav>
  )
}
