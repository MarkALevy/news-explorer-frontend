import "./MobileMenu.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { IsLoggedInContext } from "../../contexts/IsLoggedInContext";
import { CurrentPageContext } from "../../contexts/CurrentPageContext";
function MobileMenu({ isOpen, onClose, handleLoginClick, onLogout }) {
  const isLoggedIn = useContext(IsLoggedInContext);
  const currentPage = useContext(CurrentPageContext);
  return (
    <div className={`modal menu ${isOpen && "modal_opened"}`}>
      <div
        className={`menu__content menu__content_info menu__content_${currentPage}`}
      >
        <div className={`menu__header menu__header_${currentPage}`}>
          <Link to="/" className="menu__sitename_link">
            <p className={`menu__sitename menu__sitename_${currentPage}`}>
              NewsExplorer
            </p>
          </Link>
          <button
            onClick={onClose}
            type="button"
            className={`menu__close menu__close_${currentPage}`}
          ></button>
        </div>
        <div className="menu__links">
          <Link to="/">
            <button
              className={`menu__link menu__link_${currentPage} menu__link_to-home ${
                currentPage === "home"
                  ? `menu__link_current_${currentPage}`
                  : ""
              }`}
            >
              Home
            </button>
          </Link>
          {isLoggedIn ? (
            <div className="menu__links menu__logged-in">
              <Link to="/saved-news">
                <button
                  className={`menu__link menu__link_${currentPage} menu__link_to-saved ${
                    currentPage === "saved-news"
                      ? `menu__link_current_${currentPage}`
                      : ""
                  }`}
                >
                  Saved articles
                </button>
              </Link>
              <button
                className={`menu__current-user menu__current-user_${currentPage}`}
                onClick={onLogout}
              >
                <p
                  className={`menu__current-user_name menu__current-user_name_${currentPage} `}
                >
                  Elise
                </p>
                <div
                  className={`menu__current-user_name_signout menu__current-user_name_signout_${currentPage}`}
                ></div>
              </button>
            </div>
          ) : (
            <div className="menu__links menu__logged-out">
              <button className="menu__signin" onClick={handleLoginClick}>
                Sign in
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
