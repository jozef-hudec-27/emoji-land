import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function ProductCounter({ count, onUpClick, onDownClick }) {
  return (
    <div className="product-counter flexbox flex-align-center ml-auto gap-10">
      <button onClick={onUpClick} aria-label="Increment">
        <FontAwesomeIcon icon={faChevronUp} />
      </button>
      <p>{count}</p>
      <button onClick={onDownClick} aria-label="Decrement">
        <FontAwesomeIcon icon={faChevronDown} />
      </button>
    </div>
  )
}
