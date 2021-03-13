import React from "react";
import { Hotel } from "../../actions/action";
import { calculateRating } from "../../utils";

interface AppProps {
  hotel: Hotel;
  onHoverHandler: (hotel: Hotel) => void;
}

const OfferCard = (props: AppProps): JSX.Element => {
  const { hotel } = props;
  const { preview_image, title, price, rating, type } = hotel;

  return (
    <article
      className="cities__place-card place-card"
      onMouseEnter={() => props.onHoverHandler(hotel)}
    >
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img
            className="place-card__image"
            src={preview_image}
            width="260"
            height="200"
            alt={title}
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${calculateRating(rating)}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

export default React.memo(OfferCard);
