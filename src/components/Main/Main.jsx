import "./Main.css";
import SearchResults from "../SearchResults/SearchResults";
import About from "../About/About";
import NothingFound from "../NothingFound/NothingFound";
import Preloader from "../Preloader/Preloader";
function Main({ handleLoginClick }) {
  return (
    <main>
      <SearchResults handleLoginClick={handleLoginClick} />
      <Preloader />
      <NothingFound />
      <About />
    </main>
  );
}

export default Main;
