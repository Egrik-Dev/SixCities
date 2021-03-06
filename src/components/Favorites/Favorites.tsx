import React from "react";
import { Link, Redirect } from "react-router-dom";
import { Hotel } from "../../types/index";
import { FavoriteOfferList } from "../FavoriteOfferList/FavoriteOfferList";
import { AppRoute } from "../../const";
import { getUniqueArrayCities } from "../../utils";
import { FavoritesEmpty } from "../FavoritesEmpty/FavoritesEmpty";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypesSelector";

type FavoritesDispatchProps = {
  fetchFavoriteHotels: Function;
};

export const Favorites = (): JSX.Element => {
  const { changeCity } = useActions();
  const { fetchFavoriteHotels }: FavoritesDispatchProps = useActions();
  const { status, userName } = useTypedSelector((state) => state.user);
  const { hotels } = useTypedSelector((state) => state.hotels);
  const [favoriteOffers, SetFavoriteOffers] = React.useState<[] | Hotel[]>([]);

  React.useEffect((): void => {
    fetchFavoriteHotels().then(({ data }: { data: Hotel[] }) => {
      SetFavoriteOffers(data);
    });
  }, [hotels]);

  const onCityClick = React.useCallback(
    (evt: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
      const selectedCity = evt.currentTarget.textContent;
      if (selectedCity) changeCity(selectedCity);
    },
    []
  );

  const favoriteCities = getUniqueArrayCities(favoriteOffers);

  if (status === `NO_AUTH`) {
    return <Redirect to={AppRoute.LOGIN} />;
  }

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
                      {userName}
                    </span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {favoriteCities.length === 0 ? (
        <FavoritesEmpty />
      ) : (
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {favoriteCities.map(
                  (city: string, i: number): JSX.Element => (
                    <li key={i} className="favorites__locations-items">
                      <div className="favorites__locations locations locations--current">
                        <div className="locations__item" onClick={onCityClick}>
                          <Link
                            className="locations__item-link"
                            to={AppRoute.ROOT}
                          >
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
      )}
      <footer className="footer container">
        <Link className="footer__logo-link" to={AppRoute.ROOT}>
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
