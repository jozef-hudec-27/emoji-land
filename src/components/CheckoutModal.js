import Modal from './Modal'

export default function CheckoutModal({ show, onXmark, onContinueShopping }) {
  return (
    <Modal
      header={<h2>CHECKOUT</h2>}
      footer={
        <button className="continue-shopping-btn full-width" onClick={onContinueShopping}>
          Continue shopping
        </button>
      }
      show={show}
      onXmark={onXmark}
    >
      <p>
        Your order has been placed. You should receive an email with additional information from us within minutes.
        Thank you for shopping at EmojiLand! We hope to see you again.
      </p>
    </Modal>
  )
}
