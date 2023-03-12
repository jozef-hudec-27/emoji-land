import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
      <h1>
        <Link to="/">Muscle Meals</Link>
      </h1>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </nav>
  )
}
