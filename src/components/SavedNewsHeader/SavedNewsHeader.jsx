import React from "react";
import Navigation from "../Navigation/Navigation";
import "./SavedNewsHeader.css";
function SavedNewsHeader({
  onLogout,
  totalSaved,
  keywords,
  handleMenuClick,
  isOpen,
}) {
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
          Elise, you have {totalSaved} saved articles
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
