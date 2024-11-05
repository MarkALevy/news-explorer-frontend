import React from "react";
import "./NothingFound.css";
import NotFound from "../../assets/not-found.svg";

function NothingFound(searchError) {
  return (
    <div className="nothing-found">
      <img src={NotFound} alt="Nothing Found" className="nothing-found__img" />
      <h3 className="nothing-found__title">
        {searchError
          ? "Sorry, something went wrong during the request."
          : `Nothing found`}
      </h3>
      <p className="nothing-found-text">
        {searchError
          ? `There may be a connection issue or the server may be down. Please try again later.`
          : `Sorry, but nothing matched your search terms.`}
      </p>
    </div>
  );
}

export default NothingFound;
