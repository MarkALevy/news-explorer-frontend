import "./Main.css";
import SearchResults from "../SearchResults/SearchResults";
import About from "../About/About";
import NothingFound from "../NothingFound/NothingFound";
function Main() {
  return (
    <main>
      {/* <SearchResults /> */}
      <NothingFound />
      <About />
    </main>
  );
}

export default Main;
