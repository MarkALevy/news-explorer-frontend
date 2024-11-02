import { useState } from "react";
import SearchResults from "../SearchResults/SearchResults";
import About from "../About/About";
import NothingFound from "../NothingFound/NothingFound";
import Preloader from "../Preloader/Preloader";

function Main({ handleLoginClick, handleLikeItem }) {
  const [searchState, setSearchState] = useState("results");
  return (
    <main>
      {searchState === "searching" && <Preloader />}
      {searchState === "nothingFound" && <NothingFound />}{" "}
      {searchState === "results" && (
        <SearchResults
          handleLoginClick={handleLoginClick}
          handleLikeItem={handleLikeItem}
        />
      )}
      <About />
    </main>
  );
}

export default Main;
