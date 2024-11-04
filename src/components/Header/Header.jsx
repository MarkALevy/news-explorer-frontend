import React from "react";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";

import "./Header.css";
function Header({
  handleLoginClick,
  onLogout,
  handleMenuClick,
  isOpen,
  onSearch,
}) {
  return (
    <header className="header">
      <Navigation
        handleLoginClick={handleLoginClick}
        onLogout={onLogout}
        handleMenuClick={handleMenuClick}
        isOpen={isOpen}
      />
      <SearchForm onSearch={onSearch} />
    </header>
  );
}

export default Header;
