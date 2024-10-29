// import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <nav className="nav">
      <p className="nav__sitename">NewsExplorer</p>
      <div className="nav__links">
        <button className="nav__link">Home</button>
        <button className="nav__link">Saved articles</button>
        <div className="nav__current-user">
          <button className="nav__current-user_name">Elise </button>
          <button className="nav__current-user_name_signout"></button>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
