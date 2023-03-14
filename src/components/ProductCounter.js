import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function ProductCounter(props) {
  return (
    <div className="product-counter flexbox flex-align-center ml-auto gap-10">
      <button>
        <FontAwesomeIcon icon={faChevronUp} />
      </button>
      <p>0</p>
      <button>
        <FontAwesomeIcon icon={faChevronDown} />
      </button>
    </div>
  )
}
