// import "./NewsCard.css";

function NewsCard() {
  return (
    <div className="card">
      <div className="card__header">
        <p className="card__keyword card__keyword-visible">keyword</p>
        <p className="card__signin-prompt card__signin-prompt-visible">
          Sign in to save articles
        </p>
        <p className="card__delete-prompt card__delete-prompt-visible">
          Remove from saved
        </p>
        <button className="card__save_btn"></button>
        <button className="card__delete_btn"></button>
      </div>
      <div className="card__content">
        <img
          onClick={handleCardClick}
          className="card__image"
          src={item.imageUrl}
          alt={item.name}
        />
        <div className="card__text">
          <p className="card__date"></p>
          <p className="card__title"></p>
          <p className="card__preview"></p>
          <p className="card__source"></p>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
