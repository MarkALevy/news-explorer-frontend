// import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation({ isLoggedIn }) {
  return (
    <nav className="nav">
      <p className="nav__sitename">NewsExplorer</p>
      <div className="nav__links">
        {isLoggedIn ? (
          <div className="nav__links nav__logged-in">
            <button className="nav__link">Home</button>
            <button className="nav__link">Saved articles</button>
            <button className="nav__current-user">
              <p className="nav__current-user_name">Elise</p>
              <div className="nav__current-user_name_signout"></div>
            </button>
          </div>
        ) : (
          <div className="nav__links nav__logged-out">
            <button className="nav__link">Home</button>
            <button className="nav__signin">Sign in</button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navigation;
