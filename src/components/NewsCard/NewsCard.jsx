import React from "react";
import { useContext, useEffect, useState } from "react";
import "./NewsCard.css";
import { IsLoggedInContext } from "../../contexts/IsLoggedInContext";
import { CurrentPageContext } from "../../contexts/CurrentPageContext";
import SearchResults from "../SearchResults/SearchResults";

function NewsCard({
  handleLoginClick,
  item,
  handleSaveItem,
  handleRemoveSave,
  searchResults,
}) {
  const isLoggedIn = useContext(IsLoggedInContext);
  const currentPage = useContext(CurrentPageContext);

  const fixDate = (iso) => {
    const split = iso.split(/\D+/);
    const parsed = new Date(Date.UTC(split[0], --split[1], split[2]));
    const month = parsed.toLocaleString("default", { month: "long" });
    const day = parseInt(split[2]);
    const year = split[0];
    return `${month} ${day}, ${year}`;
  };

  const onSave = () => {
    handleSaveItem(item);
  };

  const onRemove = () => {
    handleRemoveSave(item);
    item.isSaved = false;
  };

  return (
    <li className="card">
      <div className={`card__header card__header_${currentPage}`}>
        {isLoggedIn ? (
          currentPage === "home" ? (
            <button
              className={`${
                item.isSaved
                  ? "card__save-btn card__save-btn_checked"
                  : "card__save-btn card__save-btn_unchecked"
              } `}
              onClick={item.isSaved ? onRemove : onSave}
            ></button>
          ) : (
            <>
              <p className="card__keyword">{item.keyword}</p>

              <button className="card__delete_btn" onClick={onRemove}>
                <p className="card__delete-tooltip card__delete-tooltip-visible">
                  Remove from saved
                </p>
              </button>
            </>
          )
        ) : (
          <>
            <button
              className="card__save-btn card__save-btn_unchecked"
              onClick={handleLoginClick}
            >
              <p className="card__signin-tooltip card__signin-tooltip-visible">
                Sign in to save articles
              </p>
            </button>
          </>
        )}
      </div>
      <img className="card__image" src={item.urlToImage} alt={item.title} />
      <div className="card__content">
        <div className="card__text">
          <p className="card__date">{fixDate(item.publishedAt)}</p>
          <p className="card__title">{item.title}</p>
          <p className="card__preview">{item.description}</p>
        </div>
        <p className="card__source">{item.source.name.toUpperCase()}</p>
      </div>
    </li>
  );
}

export default NewsCard;
