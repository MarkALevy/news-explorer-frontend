import React from "react";
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
import SavedNews from "../SavedNews/SavedNews.jsx";
import MobileMenu from "../MobileMenu/MobileMenu.jsx";
import { CurrentPageContext } from "../../contexts/CurrentPageContext.jsx";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { IsLoggedInContext } from "../../contexts/IsLoggedInContext.jsx";
import { deleteItem, saveItem, getSavedItems } from "../../utils/api.js";
import * as auth from "../../utils/auth";
import { getNews } from "../../utils/newsApi.js";

import "./App.css";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeModal, setActiveModal] = useState("");
  const [currentPage, setCurrentPage] = useState("home");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [keyword, setKeyword] = useState("");
  const [savedItems, setSavedItems] = useState([]);
  const [searchError, setSearchError] = useState(false);
  const [serverError, setServerError] = useState({});
  const navigate = useNavigate();

  const handleLogin = ({ email, password }) => {
    if (!email || !password) {
      return;
    }
    return auth
      .authorize({ email, password })
      .then((res) => {
        setIsLoggedIn(true);
        localStorage.setItem("jwt", res.token);
        setCurrentUser({ name: res.name, _id: res._id });
        closeActiveModal();
      })
      .catch((err) => {
        setServerError({
          ...serverError,
          loginError: "Incorrect email or password",
        });
        console.error("Failed to login", err);
      });
  };

  const handleRegistration = ({ email, password, name }) => {
    auth
      .register({ email, password, name })
      .then((res) => {
        // setIsLoggedIn(true);
        // localStorage.setItem("jwt", res.token);
        // setCurrentUser({ name: res.name, _id: res._id });
        // closeActiveModal();
        setActiveModal("success");
      })
      .catch((err) => {
        setServerError({
          ...serverError,
          regError: "A user with this email already exists",
        });
        console.error("Failed to register", err);
      });
  };

  const token = localStorage.getItem("jwt");

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const onSearch = (topic) => {
    setKeyword(topic);
    setIsLoading(true);
  };

  useEffect(() => {
    if (!keyword) {
      setIsLoading(false);
      return;
    }
    getNews(keyword)
      .then((res) => {
        setSearchResults(res.articles);
      })
      .catch((err) => {
        console.error("Failed to perform search", err);
        setSearchError(true);
      })
      .finally(() => setIsLoading(false));
  }, [isLoading, savedItems.length]);

  const handleRegisterClick = () => {
    setActiveModal("register");
  };

  const handleLoginClick = () => {
    setActiveModal("login");
  };

  const handleMenuClick = () => {
    setActiveModal("menu");
  };

  function isItemInArray(item, array) {
    return array.some((arrayItem) => item.url === arrayItem.url);
  }

  const handleSaveItem = (item) => {
    item.isSaved = !item.isSaved;
    item.keyword = keyword;
    isItemInArray(item, savedItems)
      ? console.log("Item already saved")
      : saveItem(item, token)
          .then((card) => {
            item._id = card.data._id;
            setSavedItems([card.data, ...savedItems]);
            console.log("Article saved");
          })
          .catch((err) => {
            console.error("Failed to save article", err);
          });
    if (item.isSaved && !savedItems.includes(item)) {
      setSavedItems([item, ...savedItems]);
    }
  };

  const handleRemoveSave = (item) => {
    deleteItem(item, token)
      .then(() => {
        setSavedItems(
          savedItems.filter((card) => {
            return card.url !== item.url;
          })
        );
      })
      .catch((err) => {
        console.error("Failed to unsave article", err);
      });
    item.isSaved = false;
  };

  const onLogout = () => {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    setCurrentUser(null);
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
    const token = localStorage.getItem("jwt");
    if (!token) {
      return;
    }
    auth
      .checkToken(token)
      .then((res) => {
        setIsLoggedIn(true);
        setCurrentUser({
          name: res.data.name,
          _id: res.data._id,
        });
        getSavedItems(token)
          .then((items) => {
            setSavedItems(items.data.reverse());
          })
          .catch((err) => {
            console.error("Failed to receive saved news items");
          });
      })
      .catch((err) => {
        console.error("Authorization failed", err);
      });
  }, [isLoggedIn]);

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
    <CurrentUserContext.Provider value={currentUser}>
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
                        handleMenuClick={handleMenuClick}
                        isOpen={activeModal !== ""}
                        onSearch={onSearch}
                      />
                      <Main
                        handleLoginClick={handleLoginClick}
                        handleSaveItem={handleSaveItem}
                        handleRemoveSave={handleRemoveSave}
                        searchResults={searchResults}
                        keyword={keyword}
                        isLoading={isLoading}
                        searchError={searchError}
                        savedItems={savedItems}
                      />
                    </>
                  }
                />

                <Route
                  path="/saved-news"
                  element={
                    <ProtectedRoute setActiveModal={setActiveModal}>
                      <SavedNews
                        onLogout={onLogout}
                        savedItems={savedItems}
                        handleRemoveSave={handleRemoveSave}
                        handleMenuClick={handleMenuClick}
                        isOpen={activeModal !== ""}
                      />
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
                serverError={serverError.regError}
                setServerError={setServerError}
              />
            )}
            {activeModal === "login" && (
              <LoginForm
                isOpen={activeModal === "login"}
                onClose={closeActiveModal}
                handleRegisterClick={handleRegisterClick}
                onSubmit={handleLogin}
                serverError={serverError.loginError}
                setServerError={setServerError}
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
            {activeModal === "menu" && (
              <MobileMenu
                isOpen={activeModal === "menu"}
                onClose={closeActiveModal}
                handleLoginClick={handleLoginClick}
                onLogout={onLogout}
              />
            )}
          </div>
        </CurrentPageContext.Provider>
      </IsLoggedInContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
