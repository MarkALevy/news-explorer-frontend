import React, { useState, useEffect } from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import { useFormWithValidation } from "../../utils/useFormWithValidation";

function LoginForm({
  onClose,
  isOpen,
  onSubmit,
  handleRegisterClick,
  serverError,
  setServerError,
}) {
  const inputValues = {
    email: "",
    password: "",
  };

  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation(inputValues);

  const handleClickOr = (e) => {
    e.preventDefault();
    handleRegisterClick();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(values);
  };

  useEffect(() => {
    resetForm(inputValues);
    setServerError({});
  }, [isOpen]);

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      title="Sign in"
      orText="Sign up"
      onClickOr={handleClickOr}
      buttonText="Sign in"
      onSubmit={handleSubmit}
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
          placeholder="Enter email"
          onChange={handleChange}
          value={values.email}
          required
        />
        <span className="modal__input-error " id="email-error">
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
          placeholder="Enter password"
          onChange={handleChange}
          value={values.password}
          required
        />
        <span className="modal__input-error" id="password-error">
          {errors.password}
        </span>
      </label>
    </PopupWithForm>
  );
}

export default LoginForm;
