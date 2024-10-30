import "./PopupWithForm.css";
function PopupWithForm({
  children,
  buttonText,
  title,
  isOpen,
  onClose,
  onSubmit,
  orText,
  onClickOr,
}) {
  return (
    <div className={`modal ${isOpen && "modal_opened"}`}>
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button onClick={onClose} type="button" className="modal__close" />
        <form className="modal__form" onSubmit={onSubmit}>
          {children}
          <span className="modal__error"></span>
          <button type="submit" className="modal__submit">
            {buttonText}
          </button>
          <span className="modal__span">
            or{" "}
            <button
              type="button"
              onClick={onClickOr}
              className="modal__or-button"
            >
              {orText}
            </button>
          </span>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
