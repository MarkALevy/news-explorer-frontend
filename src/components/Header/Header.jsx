import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";
function Header({ isLoggedIn, currentPage, handleLoginClick }) {
  return (
    <header className="header">
      <Navigation
        isLoggedIn={isLoggedIn}
        currentPage={currentPage}
        handleLoginClick={handleLoginClick}
      />
      <SearchForm />
    </header>
  );
}

export default Header;
