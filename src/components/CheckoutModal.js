import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

export default function CheckoutModal({ show }) {
  return (
    <div className={`modal-overlay ${!show && 'hidden'}`}>
      <div className="modal">
        <h2>CHECKOUT</h2>

        <button className="close-modal-btn" aria-label="Close modal">
          <FontAwesomeIcon icon={faXmark} />
        </button>

        <p>
          Your order has been placed. You should receive an email with additional information from us within minutes.
          Thank you for shopping at EmojiLand! We hope to see you again.
        </p>

        <button className="continue-shopping-btn">Continue shopping</button>
      </div>
    </div>
  )
}
