import NewsCard from "../NewsCard/NewsCard";
import { defaultNewsItems } from "../../utils/constants";
import "./NewsCardList.css";

function NewsCardList({ handleLoginClick }) {
  return (
    <div className="news-card-section">
      <ul className="cards__list">
        {defaultNewsItems.map((item) => {
          return (
            <NewsCard
              key={item._id}
              item={item}
              handleLoginClick={handleLoginClick}
              defaultNewsItems={defaultNewsItems}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default NewsCardList;
