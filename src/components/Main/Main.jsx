import "./Main.css";
import SearchResults from "../SearchResults/SearchResults";
import About from "../About/About";
import NothingFound from "../NothingFound/NothingFound";
import Preloader from "../Preloader/Preloader";
function Main() {
  return (
    <main>
      {/* <SearchResults /> */}
      {/* <NothingFound /> */}
      <Preloader />
      <About />
    </main>
  );
}

export default Main;
