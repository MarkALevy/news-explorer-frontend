import "./InfoPopup.css";
function InfoPopup({ isOpen, onClose, title, buttonText, handleLoginClick }) {
  return (
    <div className={`modal ${isOpen && "modal_opened"}`}>
      <div className="modal__content modal__content_info">
        <button
          onClick={onClose}
          type="button"
          className="modal__close"
        ></button>
        <h2 className="modal__title modal__title_info">{title}</h2>
        <button
          type="button"
          className="modal__login-btn"
          onClick={handleLoginClick}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default InfoPopup;
