import React from "react";
import { Link } from "react-router-dom";
import { Hotel } from "../../actions/action";
import { calculateRating } from "../../utils";

interface AppProps {
  hotel: Hotel;
  onHoverHandler?: (hotel: Hotel) => void;
  className: string;
}

const OfferCard = (props: AppProps): JSX.Element => {
  const { hotel } = props;
  const { preview_image, title, price, rating, type } = hotel;
  const { className } = props;

  return (
    <article
      className={className}
      onMouseEnter={() => props.onHoverHandler && props.onHoverHandler(hotel)}
    >
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/4`}>
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
          <Link to={`/offer/4`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

export default React.memo(OfferCard);
