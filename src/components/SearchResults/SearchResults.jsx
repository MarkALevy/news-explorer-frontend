import React from "react";
import "./SearchResults.css";
// import { defaultNewsItems } from "../../utils/constants";
import NewsCardList from "../NewsCardList/NewsCardList";
import { useState } from "react";

function SearchResults({
  isLoggedIn,
  currentPage,
  handleLoginClick,
  handleLikeItem,
  searchResults,
}) {
  const [numResults, setNumResults] = useState(3);
  return (
    <section className="search-results">
      <h2 className="search-results__title">Search results</h2>
      <NewsCardList
        handleLoginClick={handleLoginClick}
        numResults={numResults}
        handleLikeItem={handleLikeItem}
        searchResults={searchResults}
      />
      <button
        className="search-results__load-more"
        onClick={() => setNumResults(numResults + 3)}
        disabled={numResults >= searchResults.length}
      >
        Show more
      </button>
    </section>
  );
}

export default SearchResults;
