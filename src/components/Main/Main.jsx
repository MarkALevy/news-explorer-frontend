import { useState } from "react";
import SearchResults from "../SearchResults/SearchResults";
import About from "../About/About";
import NothingFound from "../NothingFound/NothingFound";
import Preloader from "../Preloader/Preloader";
import "./Main.css";
function Main({ handleLoginClick, handleLikeItem }) {
  const [searchState, setSearchState] = useState("newsFound");
  return (
    <main>
      {searchState === "searching" && <Preloader />}
      {searchState === "nothingFound" && <NothingFound />}{" "}
      {searchState === "newsFound" && (
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
