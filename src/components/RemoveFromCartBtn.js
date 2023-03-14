import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function RemoveFromCartBtn({ onClick }) {
  return (
    <button className="remove-from-cart" onClick={onClick}>
      <FontAwesomeIcon icon={faCartShopping} /> Remove from cart
    </button>
  )
}
