import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function AddToCartBtn({ onClick }) {
  return (
    <button className="add-to-cart" onClick={onClick}>
      <FontAwesomeIcon icon={faCartShopping} /> Add to cart
    </button>
  )
}
