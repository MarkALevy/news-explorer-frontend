import React from "react";
import NewsCard from "../NewsCard/NewsCard";
// import { defaultNewsItems } from "../../utils/constants";
import "./NewsCardList.css";

function NewsCardList({
  handleLoginClick,
  numResults,
  handleLikeItem,
  searchResults,
}) {
  console.log(searchResults);

  return (
    <div className="news-card-section">
      <ul className="cards__list">
        {searchResults
          .map((item) => {
            return (
              <NewsCard
                key={item._id}
                item={item}
                handleLoginClick={handleLoginClick}
                handleLikeItem={handleLikeItem}
                searchResults={searchResults}
              />
            );
          })
          .slice(0, numResults)}
      </ul>
    </div>
  );
}

export default NewsCardList;
