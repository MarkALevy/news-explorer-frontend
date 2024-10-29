import "./SearchForm.css";
function SearchForm() {
  return (
    <form className="search-form">
      <h1 className="search-form__title">
        What's going on in
        <br />
        the world?
      </h1>
      <p className="search-form__description">
        Find the latest news on any topic and save them in your personal
        account.
      </p>
      <div className="search-form__search-bar">
        <input
          type="text"
          className="search-form__text-box"
          placeholder="Enter topic"
        />
        <button className="search-form__btn">Search</button>
      </div>
    </form>
  );
}

export default SearchForm;
