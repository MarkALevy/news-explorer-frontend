import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";

function NewsCardList({ handleLoginClick }) {
  return (
    <div className="news-card-list">
      <h2 className="news-card-list__title">Search results</h2>
      <NewsCard handleLoginClick={handleLoginClick} />
    </div>
  );
}

export default NewsCardList;
