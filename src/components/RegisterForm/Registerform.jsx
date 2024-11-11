import React, { useState, useEffect } from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import { useFormWithValidation } from "../../utils/useFormWithValidation";

function RegisterForm({
  onClose,
  isOpen,
  onSubmit,
  handleLoginClick,
  serverError,
  setServerError,
}) {
  // const [email, setEmail] = useState("");
  // const handleEmailChange = (e) => {
  //   setEmail(e.target.value);
  // };
  // const [password, setPassword] = useState("");
  // const handlePasswordChange = (e) => {
  //   setPassword(e.target.value);
  // };
  // const [name, setName] = useState("");
  // const handleNameChange = (e) => {
  //   setName(e.target.value);
  // };

  const inputValues = {
    email: "",
    password: "",
    name: "",
  };

  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation(inputValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(values);
  };
  const handleClickOr = (e) => {
    e.preventDefault();
    handleLoginClick();
  };

  useEffect(() => {
    resetForm(inputValues);
    setServerError({});
  }, [isOpen]);

  return (
    <PopupWithForm
      buttonText="Sign Up"
      title="Sign Up"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      orText="Sign in"
      onClickOr={handleClickOr}
      isValid={isValid}
      serverError={serverError}
    >
      <label htmlFor="email" className="modal__label">
        Email
        <input
          type="email"
          className="modal__input"
          id="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={values.email}
          required
        />
        <span
          className="modal__input-error modal__input-error_visible"
          id="email-error"
        >
          {errors.email}
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
          onChange={handleChange}
          value={values.password}
          required
        />
        <span className="modal__input-error" id="password-error">
          {errors.password}
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
          onChange={handleChange}
          value={values.name}
          required
        />
        <span className="modal__input-error" id="name-error">
          {errors.name}
        </span>
      </label>
    </PopupWithForm>
  );
}

export default RegisterForm;
