import React, { useState } from "react";
import "./SearchForm.css";
function SearchForm({ onSearch }) {
  const [topic, setTopic] = useState("");
  const handleTopicChange = (e) => {
    setTopic(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(topic);
  };

  return (
    <form className="search-form">
      <h1 className="search-form__title">What's going on in the world?</h1>
      <p className="search-form__description">
        Find the latest news on any topic and save them in your personal
        account.
      </p>
      <div className="search-form__search-bar">
        <input
          type="text"
          className="search-form__text-box"
          placeholder="Enter topic"
          onChange={handleTopicChange}
          value={topic}
          required
          minLength={2}
        />
        <button className="search-form__btn" onClick={handleSearch}>
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
