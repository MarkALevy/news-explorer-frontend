import React, { useState } from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

function RegisterForm({ onClose, isOpen, onSubmit, handleLoginClick }) {
  const [email, setEmail] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const [password, setPassword] = useState("");
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, password, name });
  };
  const handleClickOr = (e) => {
    e.preventDefault();
    handleLoginClick();
  };
  return (
    <PopupWithForm
      buttonText="Sign Up"
      title="Sign Up"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      orText="Sign in"
      onClickOr={handleClickOr}
    >
      <label htmlFor="email" className="modal__label">
        Email
        <input
          type="email"
          className="modal__input"
          id="email"
          name="email"
          placeholder="Email"
          onChange={handleEmailChange}
          value={email}
          required
        />
        <span
          className="modal__input-error modal__input-error_visible"
          id="email-error"
        >
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
          placeholder="Password"
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
      <label htmlFor="name" className="modal__label">
        Username
        <input
          type="text"
          className="modal__input"
          id="name"
          name="name"
          placeholder="Name"
          onChange={handleNameChange}
          value={name}
          required
        />
        <span
          className="modal__input-error modal__input-error_visible"
          id="name-error"
        >
          name error message
        </span>
      </label>
    </PopupWithForm>
  );
}

export default RegisterForm;
