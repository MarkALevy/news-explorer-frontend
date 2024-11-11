import NewsCard from "../NewsCard/NewsCard";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

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
  const currentUser = useContext(CurrentUserContext);

  console.log(savedItems);

  savedItems
    .filter((item) => {
      return item.owner === currentUser._id;
    })
    .map((item) => {
      if (!keywords.includes(item.keyword)) keywords.push(item.keyword);
    });

  return (
    <div className="saved-news__container">
      <SavedNewsHeader
        onLogout={onLogout}
        totalSaved={
          savedItems.filter((item) => {
            return item.owner === currentUser._id;
          }).length
        }
        keywords={keywords}
        handleMenuClick={handleMenuClick}
        isOpen={isOpen}
      />
      <ul className="saved-news__list">
        {savedItems
          .filter((item) => {
            return item.owner === currentUser._id;
          })
          .map((item) => {
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
