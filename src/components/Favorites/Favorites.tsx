import React from "react";
import { Link } from "react-router-dom";
import { Hotel } from "../../actions/action";
import { FavoriteOfferList } from "../FavoriteOfferList/FavoriteOfferList";

type OwnStateProps = {
  hotels: Hotel[];
};

const QUANTITY_FAVORITE_OFFERS = 10;

export const Favorites = (props: OwnStateProps): JSX.Element => {
  const { hotels } = props;

  const [favoriteOffers, SetFavoriteOffers] = React.useState<[] | Hotel[]>([]);

  const getFavoriteCities = (favoriteHotels: Hotel[]): string[] => {
    const cities: Set<string> = new Set();
    favoriteHotels.forEach(
      (hotel: Hotel): Set<string> => cities.add(hotel.city.name)
    );
    return Array.from(cities);
  };

  React.useEffect((): void => {
    SetFavoriteOffers(hotels.slice(0, QUANTITY_FAVORITE_OFFERS));
  }, [hotels]);

  const favoriteCities = getFavoriteCities(favoriteOffers);

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to={`/`}>
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
                    to={`/favorites`}
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

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {favoriteCities.map(
                (city: string, i: number): JSX.Element => (
                  <li key={i} className="favorites__locations-items">
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <Link className="locations__item-link" to={`/`}>
                          <span>{city}</span>
                        </Link>
                      </div>
                    </div>
                    <div className="favorites__places">
                      <FavoriteOfferList
                        key={i}
                        hotels={favoriteOffers}
                        city={city}
                      />
                    </div>
                  </li>
                )
              )}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to={`/`}>
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width="64"
            height="33"
          />
        </Link>
      </footer>
    </div>
  );
};