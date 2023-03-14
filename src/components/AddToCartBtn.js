import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function AddToCartBtn(props) {
  return (
    <button className="add-to-cart">
      <FontAwesomeIcon icon={faCartShopping} /> Add to cart
    </button>
  )
}
