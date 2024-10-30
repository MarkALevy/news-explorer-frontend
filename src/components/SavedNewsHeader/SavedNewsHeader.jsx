import Navigation from "../Navigation/Navigation";
// import SavedNews from "../SavedNews/SavedNews";
import "./SavedNewsHeader.css";
function SavedNewsHeader({ onLogout }) {
  return (
    <header className="saved-news__header">
      <Navigation
        isLoggedIn="true"
        currentPage="saved-news"
        onLogout={onLogout}
      />
      <div className="saved-news__header_text">
        <p className="saved-news__header_subtitle">Saved articles</p>
        <p className="saved-news__header_info">
          Elise, you have 5 saved articles
        </p>
        <p className="saved-news__header_keywords">
          By keywords:
          <span className="saved-news__header_keywords_span">
            {" "}
            Nature, Yellowstone, and 2 other
          </span>
        </p>
      </div>
    </header>
  );
}

export default SavedNewsHeader;
