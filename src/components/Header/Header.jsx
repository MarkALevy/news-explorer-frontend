import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";
function Header({ isLoggedIn }) {
  return (
    <header className="header">
      <Navigation isLoggedIn={isLoggedIn} />
      <SearchForm />
    </header>
  );
}

export default Header;
