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
import { IsLoggedInContext } from "../../contexts/IsLoggedInContext.jsx";
import { deleteItem, saveItem, getSavedItems } from "../../utils/api.js";
import { getNews } from "../../utils/newsApi.js";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [activeModal, setActiveModal] = useState("");
  const [currentPage, setCurrentPage] = useState("home");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [savedItems, setSavedItems] = useState([]);
  const [searchError, setSearchError] = useState(false);

  const handleLogin = ({ email, password }) => {
    console.log(activeModal);
  };

  const handleRegistration = ({ email, password, name }) => {
    console.log(activeModal);
  };

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
  }, [isLoading]);

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
      : saveItem(item).then((card) => {
          item._id = card._id;
          setSavedItems([card, ...savedItems]);
          console.log("success");
        });
    if (item.isSaved && !savedItems.includes(item)) {
      setSavedItems([item, ...savedItems]);
    }
  };

  const handleRemoveSave = (item) => {
    deleteItem(item)
      .then(() => {
        setSavedItems(
          savedItems.filter((card) => {
            return card.url !== item.url;
          })
        );
      })
      .catch((err) => {
        console.error("Failed to delete news item", err);
      });
    item.isSaved = false;
  };

  useEffect(() => {
    if (currentPage === "home") return;
    getSavedItems()
      .then((items) => {
        setSavedItems(items);
      })
      .catch((err) => {
        console.error("Failed to receive saved news items");
      });
  }, [currentPage, savedItems.length]);

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
                  <ProtectedRoute>
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
  );
}

export default App;
