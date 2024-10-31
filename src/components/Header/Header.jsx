import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";

import "./Header.css";
function Header({ handleLoginClick, onLogout }) {
  return (
    <header className="header">
      <Navigation handleLoginClick={handleLoginClick} onLogout={onLogout} />
      <SearchForm />
    </header>
  );
}

export default Header;
