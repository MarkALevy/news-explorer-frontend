import React, { useState } from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

function LoginForm({ onClose, isOpen, onSubmit, handleRegisterClick }) {
  const [email, setEmail] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const [password, setPassword] = useState("");
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleClickOr = (e) => {
    e.preventDefault();
    handleRegisterClick();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, password });
  };

  return (
    <PopupWithForm
      buttonText="Sign in"
      title="Sign in"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      orText="Sign up"
      onClickOr={handleClickOr}
    >
      <label htmlFor="email" className="modal__label">
        Email
        <input
          type="email"
          className="modal__input"
          id="email"
          name="email"
          placeholder="Enter email"
          onChange={handleEmailChange}
          value={email}
          required
        />
        <span className="modal__input-error " id="email-error">
          email error message
        </span>
      </label>
      <label htmlFor="password" className="modal__label">
        Password
        <input
          type="password"
          className="modal__input"
          id="password"
          name="password"
          placeholder="Enter password"
          onChange={handlePasswordChange}
          value={password}
          required
        />
        <span
          className="modal__input-error modal__input-error_visible"
          id="password-error"
        >
          password error message
        </span>
      </label>
    </PopupWithForm>
  );
}

export default LoginForm;
