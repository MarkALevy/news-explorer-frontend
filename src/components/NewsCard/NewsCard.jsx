import { useContext } from "react";
import "./NewsCard.css";
import { IsLoggedInContext } from "../../contexts/IsLoggedInContext";

import { defaultNewsItems } from "../../utils/constants";
import image1 from "../../assets/temp/image_01.png";
import image2 from "../../assets/temp/image_02.png";
import image3 from "../../assets/temp/image_03.png";
import image4 from "../../assets/temp/image_04.png";
import image5 from "../../assets/temp/image_05.png";

function NewsCard() {
  const isLoggedIn = useContext(IsLoggedInContext);

  const card = defaultNewsItems[0];
  const images = [image1, image2, image3, image4, image5];
  console.log(card);

  return (
    <div className="card">
      <div className="card__header">
        {isLoggedIn ? "" : ""}
        <p className="card__keyword card__keyword-visible">{card.keyword}</p>
        <p className="card__signin-prompt card__signin-prompt-visible">
          Sign in to save articles
        </p>
        <button className="card__save_btn"></button>
        <p className="card__delete-prompt card__delete-prompt-visible">
          Remove from saved
        </p>
        <button className="card__delete_btn"></button>
      </div>
      <div className="card__content">
        <img className="card__image" src={images[card._id]} alt={card.title} />
        <div className="card__text">
          <p className="card__date">{card.publishedAt}</p>
          <p className="card__title">{card.title}</p>
          <p className="card__preview">{card.content}</p>
          <p className="card__source">{card.source.name}</p>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
