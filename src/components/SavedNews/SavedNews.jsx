import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import { useEffect } from "react";
import { defaultNewsItems } from "../../utils/constants";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";

import "./SavedNews.css";

function SavedNews({
  onLogout,
  likedItems,
  handleRemoveLike,
  handleMenuClick,
  isOpen,
}) {
  // const likedItems = defaultNewsItems.filter((item) => {
  //   return item.isLiked === true;
  // });

  const keywords = [];

  likedItems.map((item) => {
    if (!keywords.includes(item.keyword)) keywords.push(item.keyword);
  });
  console.log(keywords);

  return (
    <div className="saved-news__container">
      <SavedNewsHeader
        onLogout={onLogout}
        totalLiked={likedItems.length}
        keywords={keywords}
        handleMenuClick={handleMenuClick}
        isOpen={isOpen}
      />
      <ul className="saved-news__list">
        {likedItems.map((item) => {
          return (
            <NewsCard
              key={item._id}
              item={item}
              defaultNewsItems={defaultNewsItems}
              handleRemoveLike={handleRemoveLike}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default SavedNews;
