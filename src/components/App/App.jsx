import { useState, useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import SavedNews from "../SavedNews/SavedNews.jsx";
import Footer from "../Footer/Footer.jsx";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.jsx";
import LoginForm from "../LoginForm/LoginForm.jsx";
import RegisterForm from "../RegisterForm/Registerform.jsx";
import InfoPopup from "../InfoPopup/InfoPopup.jsx";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [activeModal, setActiveModal] = useState("success");

  const handleLogin = ({ email, password }) => {
    console.log(activeModal);
  };

  const handleRegistration = ({ email, password, name }) => {
    console.log(activeModal);
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleRegisterClick = () => {
    setActiveModal("register");
  };

  const handleLoginClick = () => {
    setActiveModal("login");
  };

  useEffect(() => {
    if (!activeModal) return;
    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        closeActiveModal();
      }
    };
    document.addEventListener("keydown", handleEscClose);
    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [activeModal]);

  return (
    <div className="page">
      <div className="page__content">
        <Header isLoggedIn={isLoggedIn} />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/saved-news"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <SavedNews />
              </ProtectedRoute>
            }
          />
          <Route
            path="*"
            element={
              isLoggedIn ? (
                <Navigate to="/saved-news" replace />
              ) : (
                <Navigate to="/" replace />
              )
            }
          />
        </Routes>
        <Footer />
      </div>
      {activeModal === "register" && (
        <RegisterForm
          isOpen={activeModal === "register"}
          onClose={closeActiveModal}
          handleLoginClick={handleLoginClick}
          onSubmit={handleRegistration}
        />
      )}
      {activeModal === "login" && (
        <LoginForm
          isOpen={activeModal === "login"}
          onClose={closeActiveModal}
          handleRegisterClick={handleRegisterClick}
          onSubmit={handleLogin}
        />
      )}
      {activeModal === "success" && (
        <InfoPopup
          isOpen={activeModal === "success"}
          title="Registration successfully completed!"
          buttonText="Sign in"
          onClose={closeActiveModal}
          handleLoginClick={handleLoginClick}
        />
      )}
    </div>
  );
}

export default App;
