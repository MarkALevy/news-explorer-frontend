import { useState, useEffect } from "react";
import {
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import Footer from "../Footer/Footer.jsx";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.jsx";
import LoginForm from "../LoginForm/LoginForm.jsx";
import RegisterForm from "../RegisterForm/Registerform.jsx";
import InfoPopup from "../InfoPopup/InfoPopup.jsx";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader.jsx";
import SavedNews from "../SavedNews/SavedNews.jsx";
import { CurrentPageContext } from "../../contexts/CurrentPageContext.jsx";
import { IsLoggedInContext } from "../../contexts/IsLoggedInContext.jsx";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [activeModal, setActiveModal] = useState("");
  const [currentPage, setCurrentPage] = useState("home");

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

  const onLogout = () => {
    // localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    // setCurrentUser(null);
  };

  let location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setCurrentPage("home");
    } else if (location.pathname === "/saved-news") {
      setCurrentPage("saved-news");
    }
  }, [location]);

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

  useEffect(() => {
    if (!activeModal) return;
    const handleOverlayClick = (e) => {
      if (e.target.classList.contains("modal_opened")) {
        closeActiveModal();
      }
    };
    document.addEventListener("click", handleOverlayClick);
    return () => {
      document.removeEventListener("click", handleOverlayClick);
    };
  }, [activeModal]);

  return (
    <IsLoggedInContext.Provider value={isLoggedIn}>
      <CurrentPageContext.Provider value={currentPage}>
        <div className="page">
          <div className="page__content">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Header
                      handleLoginClick={handleLoginClick}
                      onLogout={onLogout}
                    />
                    <Main />
                  </>
                }
              />

              <Route
                path="/saved-news"
                element={
                  <ProtectedRoute>
                    <SavedNewsHeader
                      onLogout={onLogout}
                      currentPage="saved-news"
                    />
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
      </CurrentPageContext.Provider>
    </IsLoggedInContext.Provider>
  );
}

export default App;
