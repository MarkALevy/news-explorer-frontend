import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import "./NewsCardList.css";

function NewsCardList({
  handleLoginClick,
  numResults,
  handleSaveItem,
  searchResults,
  handleRemoveSave,
  savedItems,
}) {
  return (
    <div className="news-card-section">
      <h2 className="news-card-section__title">Search results</h2>
      <ul className="cards__list">
        {searchResults
          .map((item) => {
            savedItems.forEach((arrayItem) => {
              if (item.url === arrayItem.url) {
                item._id = arrayItem._id;
                item.isSaved = true;
              }
            });
            return (
              <NewsCard
                key={item.url}
                item={item}
                handleLoginClick={handleLoginClick}
                handleSaveItem={handleSaveItem}
                handleRemoveSave={handleRemoveSave}
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
