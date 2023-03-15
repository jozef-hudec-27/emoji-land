import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Modal({ children, header, footer, show, onXmark }) {
  return (
    <>
      {show && (
        <>
          <div className="modal-overlay" onClick={onXmark}></div>

          <div className="modal">
            <div className="modal-header">{header}</div>

            <button className="close-modal-btn" aria-label="Close modal" onClick={onXmark}>
              <FontAwesomeIcon icon={faXmark} />
            </button>

            <div className="modal-body">{children}</div>

            <div className="modal-footer">{footer}</div>
          </div>
        </>
      )}
    </>
  )
}
