import "./SearchResults.css";

import NewsCardList from "../NewsCardList/NewsCardList";

function SearchResults({ isLoggedIn, currentPage }) {
  return (
    <div className="search-results">
      <NewsCardList />
    </div>
  );
}

export default SearchResults;
