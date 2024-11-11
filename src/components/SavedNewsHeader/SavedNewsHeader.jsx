import React from "react";
import Navigation from "../Navigation/Navigation";
import "./SavedNewsHeader.css";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
function SavedNewsHeader({
  onLogout,
  totalSaved,
  keywords,
  handleMenuClick,
  isOpen,
}) {
  const currentUser = useContext(CurrentUserContext);
  const userName = currentUser?.name;
  return (
    <header className="saved-news__header">
      <Navigation
        onLogout={onLogout}
        handleMenuClick={handleMenuClick}
        isOpen={isOpen}
      />
      <div className="saved-news__header_text">
        <p className="saved-news__header_subtitle">Saved articles</p>
        <p className="saved-news__header_info">
          {userName}, you have {totalSaved} saved articles
        </p>
        <p className="saved-news__header_keywords">
          {keywords[0] ? "By keywords: " : ""}
          <span className="saved-news__header_keywords_span">
            {keywords[0]} {keywords[1] ? `, ${keywords[1]}` : ""}
            {keywords[2] ? `, and ${keywords.length - 2} other` : ""}
          </span>
        </p>
      </div>
    </header>
  );
}

export default SavedNewsHeader;
