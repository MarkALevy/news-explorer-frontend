import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";

import "./Header.css";
function Header({ handleLoginClick, onLogout, handleMenuClick, isOpen }) {
  return (
    <header className="header">
      <Navigation
        handleLoginClick={handleLoginClick}
        onLogout={onLogout}
        handleMenuClick={handleMenuClick}
        isOpen={isOpen}
      />
      <SearchForm />
    </header>
  );
}

export default Header;
