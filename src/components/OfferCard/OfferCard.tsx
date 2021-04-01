import React from "react";
import { Link } from "react-router-dom";
import { Hotel } from "../../types";
import { calculateRating } from "../../utils";
import { AppRoute } from "../../const";

interface AppProps {
  hotel: Hotel;
  onHoverHandler?: (hotel: Hotel) => void; // Исправить
  className: string;
}

const OfferCard = ({
  hotel,
  className,
  onHoverHandler,
}: AppProps): JSX.Element => {
  const { preview_image, title, price, rating, type } = hotel;

  return (
    <article
      className={className}
      onMouseEnter={() => onHoverHandler && onHoverHandler(hotel)} // Исправить
    >
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`${AppRoute.OFFER}/${hotel.id}`}>
          <img
            className="place-card__image"
            src={preview_image}
            width="260"
            height="200"
            alt={title}
          />
        </Link>
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
          <Link to={`${AppRoute.OFFER}/${hotel.id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

export default React.memo(OfferCard);