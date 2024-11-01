import "./SearchResults.css";

import NewsCardList from "../NewsCardList/NewsCardList";

function SearchResults({ isLoggedIn, currentPage, handleLoginClick }) {
  return (
    <div className="search-results">
      <h2 className="search-results__title">Search results</h2>
      <NewsCardList handleLoginClick={handleLoginClick} />
    </div>
  );
}

export default SearchResults;
