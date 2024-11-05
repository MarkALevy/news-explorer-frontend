import React from "react";
import { useState } from "react";
import SearchResults from "../SearchResults/SearchResults";
import About from "../About/About";
import NothingFound from "../NothingFound/NothingFound";
import Preloader from "../Preloader/Preloader";

function Main({
  handleLoginClick,
  handleSaveItem,
  searchResults,
  keyword,
  isLoading,
  searchError,
  handleRemoveSave,
  savedItems,
}) {
  return (
    <main>
      {isLoading && <Preloader />}
      {searchResults.length === 0 && keyword !== "" && !isLoading && (
        <NothingFound searchError={searchError} />
      )}
      {searchResults.length !== 0 && keyword !== "" && !isLoading && (
        <SearchResults
          handleLoginClick={handleLoginClick}
          handleSaveItem={handleSaveItem}
          searchResults={searchResults}
          handleRemoveSave={handleRemoveSave}
          savedItems={savedItems}
        />
      )}
      <About />
    </main>
  );
}

export default Main;
