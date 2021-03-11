import { Hotel } from "../../actions/action";

interface AppProps {
  hotel: Hotel;
  onHoverOffer: (hotel: Hotel) => void;
}

const calculateRating = (rating: number): number => {
  const roundedRating = Math.round(rating);

  switch (roundedRating) {
    case 5:
      return 100;
    case 4:
      return 80;
    case 3:
      return 60;
    case 2:
      return 40;
    case 1:
      return 20;
    default:
      return 0;
  }
};

export const OfferCard = (props: AppProps): JSX.Element => {
  console.log(props.hotel.title);

  const { preview_image, title, price, rating, type } = props.hotel;

  return (
    <article
      className="cities__place-card place-card"
      onMouseEnter={() => props.onHoverOffer(props.hotel)}
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
