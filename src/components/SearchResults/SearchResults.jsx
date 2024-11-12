import React from "react";
import "./SearchResults.css";
import NewsCardList from "../NewsCardList/NewsCardList";
import { useState } from "react";

function SearchResults({
  handleLoginClick,
  handleSaveItem,
  searchResults,
  handleRemoveSave,
  savedItems,
}) {
  const [numResults, setNumResults] = useState(3);
  return (
    <section className="search-results">
      <NewsCardList
        handleLoginClick={handleLoginClick}
        numResults={numResults}
        handleSaveItem={handleSaveItem}
        searchResults={searchResults}
        handleRemoveSave={handleRemoveSave}
        savedItems={savedItems}
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
