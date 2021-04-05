import { Link } from "react-router-dom";
import { OfferList } from "../OfferList/OfferList";
import { Map } from "../Map/Map";
import { CityTabs } from "../CityTabs/CityTabs";
import { SortingOptions } from "../SortingOptions/SortingOptions";
import { MainEmpty } from "../MainEmpty/MainEmpty";
import { AppRoute } from "../../const";
import { useTypedSelector } from "../../hooks/useTypesSelector";
import { useActions } from "../../hooks/useActions";
import { useCallback } from "react";
import { getSortedHotels } from "../../selectors/type-selector";

type AppDispatchProps = {
  changeCity: Function;
};

export const Main = (): JSX.Element => {
  const { changeCity }: AppDispatchProps = useActions();
  const { city } = useTypedSelector((state) => state.currentCity);
  const { status } = useTypedSelector((state) => state.user);
  const { userName } = useTypedSelector((state) => state.user);
  const hotels = getSortedHotels(useTypedSelector((state) => state));

  const onTabCityClick = useCallback(
    (evt: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void => {
      const selectedCity = evt.currentTarget.text;
      if (city !== selectedCity) {
        changeCity(selectedCity);
      }
    },
    [city]
  );

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link">
                <img
                  className="header__logo"
                  src="img/logo.svg"
                  alt="6 cities logo"
                  width="81"
                  height="41"
                />
              </a>
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

      {hotels.length === 0 ? (
        <MainEmpty city={city} onTabCityClick={onTabCityClick} />
      ) : (
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <section className="locations container">
              <CityTabs currentCity={city} onTabCityClick={onTabCityClick} />
            </section>
          </div>
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">
                  {hotels.length} places to stay in {city}
                </b>
                <SortingOptions />
                <OfferList
                  hotels={hotels}
                  classNameMainPage={`cities__place-card place-card`}
                  classNameOfferPlace={`cities__places-list places__list tabs__content`}
                />
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  {hotels.length > 0 && (
                    <Map hotels={hotels} city={hotels[0].city.location} />
                  )}
                </section>
              </div>
            </div>
          </div>
        </main>
      )}
    </div>
  );
};
