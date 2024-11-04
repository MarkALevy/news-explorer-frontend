import React from "react";
import { useState } from "react";
import SearchResults from "../SearchResults/SearchResults";
import About from "../About/About";
import NothingFound from "../NothingFound/NothingFound";
import Preloader from "../Preloader/Preloader";

function Main({
  handleLoginClick,
  handleLikeItem,
  searchResults,
  keyword,
  isLoading,
}) {
  return (
    <main>
      {isLoading && <Preloader />}
      {searchResults.length === 0 && keyword !== "" && !isLoading && (
        <NothingFound />
      )}
      {searchResults.length !== 0 && keyword !== "" && !isLoading && (
        <SearchResults
          handleLoginClick={handleLoginClick}
          handleLikeItem={handleLikeItem}
          searchResults={searchResults}
        />
      )}
      <About />
    </main>
  );
}

export default Main;
