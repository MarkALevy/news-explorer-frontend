import "./SearchResults.css";

import NewsCardList from "../NewsCardList/NewsCardList";

function SearchResults({ isLoggedIn, currentPage, handleLoginClick }) {
  return (
    <div className="search-results">
      <NewsCardList handleLoginClick={handleLoginClick} />
    </div>
  );
}

export default SearchResults;
