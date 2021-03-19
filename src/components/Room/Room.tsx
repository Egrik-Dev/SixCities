import React from "react";
import { Link } from "react-router-dom";
import { Hotel, Reviews } from "../../actions/action";
import { calculateRating } from "../../utils";
import { OfferImage } from "../OfferImage/OfferImage";
import { NearbyHotelsList } from "../NearbyHotelsList/NearbyHotelsList";
import { NewComment } from "../NewComment/NewComment";
import { fetchReviews } from "../../actions/action-api";
import { AppRoute } from "../../const";
import { connect } from "react-redux";
import { ReviewsList } from "../ReviewsList/ReviewsList";

type OwnProps = {
  hotels: Hotel[];
  id: string;
};

type AppDispatchProps = {
  fetchReviews: Function; // ToDo: Разобраться как затипизировать
};

type AppProps = OwnProps & AppDispatchProps;

const MAX_OFFER_IMAGES = 6;

const Room = (props: AppProps): JSX.Element => {
  const { hotels, id, fetchReviews } = props;

  const [hotel, setHotel] = React.useState<Hotel>();
  const [reviews, setReviews] = React.useState<Reviews[]>([]);

  const raiseOnTheTop = () => {
    window.scrollTo(0, 0);
  };

  React.useEffect(() => {
    raiseOnTheTop();
    setHotel(hotels.find((hotel: Hotel): boolean => hotel.id === Number(id)));
  }, [hotels, id]);

  React.useEffect(() => {
    fetchReviews(id).then(({ data }: { data: Reviews[] }) => setReviews(data));
  });

  if (!hotel) {
    return <div>Film not found</div>;
  }

  const {
    images,
    title,
    is_premium,
    rating,
    type,
    bedrooms,
    max_adults,
    price,
    goods,
    description,
  } = hotel;

  const { avatar_url, name, is_pro } = hotel.host;

  const offerImages = images.slice(0, MAX_OFFER_IMAGES);

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to={AppRoute.ROOT}>
                <img
                  className="header__logo"
                  src="img/logo.svg"
                  alt="6 cities logo"
                  width="81"
                  height="41"
                />
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link
                    className="header__nav-link header__nav-link--profile"
                    to={AppRoute.FAVORITES}
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">
                      Oliver.conner@gmail.com
                    </span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {offerImages.map(
                (image: string, i: number): JSX.Element => (
                  <OfferImage key={i} image={image} title={title} />
                )
              )}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {is_premium ? (
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              ) : null}

              <div className="property__name-wrapper">
                <h1 className="property__name">{title}</h1>
                <button
                  className="property__bookmark-button button"
                  type="button"
                >
                  <svg
                    className="property__bookmark-icon"
                    width="31"
                    height="33"
                  >
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{ width: `${calculateRating(rating)}%` }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">
                  {rating}
                </span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {max_adults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {goods.map(
                    (good: string, i: number): JSX.Element => (
                      <li key={i} className="property__inside-item">
                        {good}
                      </li>
                    )
                  )}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div
                    className={
                      is_pro
                        ? `property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper`
                        : `property__avatar-wrapper user__avatar-wrapper`
                    }
                  >
                    <img
                      className="property__avatar user__avatar"
                      src={avatar_url}
                      width="74"
                      height="74"
                      alt="Host avatar"
                    />
                  </div>
                  <span className="property__user-name">{name}</span>
                </div>
                <div className="property__description">
                  <p className="property__text">{description}</p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <ReviewsList reviews={reviews} />
                <NewComment />
              </section>
            </div>
          </div>
          <section className="property__map map"></section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <NearbyHotelsList hotels={hotels} />
          </section>
        </div>
      </main>
    </div>
  );
};

const mapStateToProps = () => {
  return {};
};

export { Room };
export default connect<{}, AppDispatchProps, {}, {}>(mapStateToProps, {
  fetchReviews,
})(Room);
