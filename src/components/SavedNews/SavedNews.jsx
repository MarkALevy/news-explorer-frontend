import NewsCard from "../NewsCard/NewsCard";
import { useEffect } from "react";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";

import "./SavedNews.css";

function SavedNews({
  onLogout,
  savedItems,
  handleRemoveSave,
  handleMenuClick,
  isOpen,
  searchResults,
}) {
  const keywords = [];

  savedItems.map((item) => {
    if (!keywords.includes(item.keyword)) keywords.push(item.keyword);
  });

  return (
    <div className="saved-news__container">
      <SavedNewsHeader
        onLogout={onLogout}
        totalSaved={savedItems.length}
        keywords={keywords}
        handleMenuClick={handleMenuClick}
        isOpen={isOpen}
      />
      <ul className="saved-news__list">
        {savedItems.map((item) => {
          return (
            <NewsCard
              key={item.url}
              item={item}
              handleRemoveSave={handleRemoveSave}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default SavedNews;
