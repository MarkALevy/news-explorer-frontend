// import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation({ isLoggedIn, currentPage, handleLoginClick }) {
  return (
    <nav className="nav">
      <p className="nav__sitename">NewsExplorer</p>
      <div className="nav__links">
        <button className="nav__link nav__link_home  nav__link_current ">
          Home
        </button>
        {isLoggedIn ? (
          <div className="nav__links nav__logged-in">
            <button className="nav__link nav__link_saved">
              Saved articles
            </button>
            <button className="nav__current-user">
              <p className="nav__current-user_name">Elise</p>
              <div className="nav__current-user_name_signout"></div>
            </button>
          </div>
        ) : (
          <div className="nav__links nav__logged-out">
            {/* <button className="nav__link nav__link_home">Home</button> */}
            <button className="nav__signin" onClick={handleLoginClick}>
              Sign in
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navigation;
