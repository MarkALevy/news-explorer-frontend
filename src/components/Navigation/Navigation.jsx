import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { IsLoggedInContext } from "../../contexts/IsLoggedInContext";
import { CurrentPageContext } from "../../contexts/CurrentPageContext";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./Navigation.css";
function Navigation({ isOpen, handleLoginClick, onLogout, handleMenuClick }) {
  const isLoggedIn = useContext(IsLoggedInContext);
  const currentPage = useContext(CurrentPageContext);
  const currentUser = useContext(CurrentUserContext);
  const userName = currentUser?.name;
  return (
    <nav className={`nav nav_${currentPage} nav__modal_${isOpen}`}>
      <Link to="/" className="nav__sitename_link">
        <p className={`nav__sitename nav__sitename_${currentPage}`}>
          NewsExplorer
        </p>
      </Link>
      <div className="nav__links">
        <Link to="/">
          <button
            className={`nav__link nav__link_${currentPage} nav__link_to-home ${
              currentPage === "home" ? `nav__link_current_${currentPage}` : ""
            }`}
          >
            Home
          </button>
        </Link>
        {isLoggedIn ? (
          <div className="nav__links nav__logged-in">
            <Link to="/saved-news">
              <button
                className={`nav__link nav__link_${currentPage} nav__link_to-saved ${
                  currentPage === "saved-news"
                    ? `nav__link_current_${currentPage}`
                    : ""
                }`}
              >
                Saved articles
              </button>
            </Link>
            <button
              className={`nav__current-user nav__current-user_${currentPage}`}
              onClick={onLogout}
            >
              <p
                className={`nav__current-user_name nav__current-user_name_${currentPage} `}
              >
                {userName}
              </p>
              <div
                className={`nav__current-user_name_signout nav__current-user_name_signout_${currentPage}`}
              ></div>
            </button>
          </div>
        ) : (
          <div className="nav__links nav__logged-out">
            <button className="nav__signin" onClick={handleLoginClick}>
              Sign in
            </button>
          </div>
        )}
      </div>
      <button
        className={`nav__mobile-menu nav__mobile-menu_${currentPage}`}
        onClick={handleMenuClick}
      ></button>
    </nav>
  );
}

export default Navigation;
