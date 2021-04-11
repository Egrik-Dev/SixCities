import React from "react";
import { Link } from "react-router-dom";
import { Hotel, Reviews } from "../../types";
import { calculateRating } from "../../utils";
import { OfferImage } from "../OfferImage/OfferImage";
import { NewComment } from "../NewComment/NewComment";
import { Map } from "../Map/Map";
import { useActions } from "../../hooks/useActions";
import { AppRoute } from "../../const";
import { ReviewsList } from "../ReviewsList/ReviewsList";
import { OfferList } from "../OfferList/OfferList";
import { useTypedSelector } from "../../hooks/useTypesSelector";

type OwnProps = {
  id: string;
};

type AppDispatchProps = {
  fetchReviews: Function; // ToDo: Разобраться как затипизировать
  fetchNearbyHotels: Function;
  updateFavoriteStatus: Function;
  updateHotels: Function;
  redirectToRoute: Function;
};

const MAX_OFFER_IMAGES = 6;
const MAX_REVIEWS = 10;

export const Room = ({ id }: OwnProps): JSX.Element => {
  const raiseOnTheTop = (): void => {
    window.scrollTo(0, 0);
  };

  const [hotel, setHotel] = React.useState<Hotel>();
  const [reviews, setReviews] = React.useState<Reviews[]>([]);
  const [nearbyHotels, setNearbyHotels] = React.useState<Hotel[]>();
  const {
    fetchReviews,
    fetchNearbyHotels,
    updateFavoriteStatus,
    updateHotels,
    redirectToRoute,
  }: AppDispatchProps = useActions();
  const { userName } = useTypedSelector((state) => state.user);
  const { status } = useTypedSelector((state) => state.user);
  const { hotels } = useTypedSelector((state) => state.hotels);

  const sortReviews = (reviewsList: Reviews[]): Reviews[] => {
    return reviewsList
      .sort(
        (a: Reviews, b: Reviews): any =>
          Date.parse(String(b.date)) - Date.parse(String(a.date))
      )
      .slice(0, MAX_REVIEWS);
  };

  React.useEffect((): void => {
    raiseOnTheTop();
    setHotel(hotels.find((hotel: Hotel): boolean => hotel.id === Number(id)));
  }, [id]);

  React.useEffect((): void => {
    fetchReviews(id).then(({ data }: { data: Reviews[] }) => {
      const sortedReviews = sortReviews(data);
      setReviews(sortedReviews);
    });
  }, [id]);

  React.useEffect((): void => {
    fetchNearbyHotels(id).then(({ data }: { data: Hotel[] }) =>
      setNearbyHotels(data)
    );
  }, [id]);

  const updateComments = React.useCallback((comments) => {
    const sortedReviews = sortReviews(comments);
    setReviews(sortedReviews);
  }, []);

  const onBookmarkClick = React.useCallback((hotel: Hotel) => {
    if (status === `AUTH`) {
      hotel.is_favorite = !hotel.is_favorite;
      updateFavoriteStatus(hotel).then(({ data }: { data: Hotel }) =>
        updateHotels(data)
      );
    } else {
      redirectToRoute(`/login`);
    }
  }, []);

  if (!hotel) {
    return <div>Hotel not found</div>;
  }

  const {
    images,
    title,
    is_premium,
    is_favorite,
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
                    to={
                      status === `NO_AUTH` ? AppRoute.LOGIN : AppRoute.FAVORITES
                    }
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    {status === `NO_AUTH` ? (
                      <span className="header__login">Sign in</span>
                    ) : (
                      <span className="header__user-name user__name">
                        {userName}
                      </span>
                    )}
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
              {is_premium && (
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="property__name-wrapper">
                <h1 className="property__name">{title}</h1>
                <button
                  className={
                    is_favorite
                      ? `property__bookmark-button property__bookmark-button--active button`
                      : `property__bookmark-button button`
                  }
                  type="button"
                  onClick={() => onBookmarkClick(hotel)}
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
                {status === `AUTH` && (
                  <NewComment id={id} updateComments={updateComments} />
                )}
              </section>
            </div>
          </div>
          <section className="property__map map">
            {nearbyHotels && (
              <Map hotels={nearbyHotels} city={hotel.city.location} />
            )}
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            {nearbyHotels && (
              <OfferList
                hotels={nearbyHotels}
                classNameMainPage={`near-places__card place-card`}
                classNameOfferPlace={`near-places__list places__list`}
              />
            )}
          </section>
        </div>
      </main>
    </div>
  );
};
