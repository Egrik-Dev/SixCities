import { Link } from "react-router-dom";
import { Hotel } from "../../types/index";
import { OfferList } from "../OfferList/OfferList";
import { Map } from "../Map/Map";
import { CityTabs } from "../CityTabs/CityTabs";
import { SortingOptions } from "../SortingOptions/SortingOptions";
import { AppRoute, sortTypeList } from "../../const";
import { useTypedSelector } from "../../hooks/useTypesSelector";
import { useActions } from "../../hooks/useActions";
import { useCallback, useEffect, useState } from "react";

interface MainProps {
  hotels: Hotel[];
}

type AppDispatchProps = {
  changeCity: Function;
};

export const Main = ({ hotels }: MainProps): JSX.Element => {
  const { changeCity }: AppDispatchProps = useActions();
  const { city } = useTypedSelector((state) => state.currentCity);
  const { sortType } = useTypedSelector((state) => state.hotels);

  const [sortedHotels, setSortedHotels] = useState<Hotel[]>([]);
  const [filteredHotels, setFilteredHotels] = useState<Hotel[]>([]);

  const filterByCity = (allHotels: Hotel[]): Hotel[] => {
    return allHotels.filter(
      (hotel: Hotel): boolean => hotel.city.name === city
    );
  };

  const sortingHotels = (hotelsList: Hotel[], sortName: string): Hotel[] => {
    switch (sortName) {
      case sortTypeList.POPULAR:
        return hotels.filter((hotel) =>
          hotelsList.find((hotelInList) => hotel === hotelInList)
        );
      case sortTypeList.PRICE_HIGH_TO_LOW:
        return hotelsList
          .sort((a: Hotel, b: Hotel) => b.price - a.price)
          .slice();
      case sortTypeList.PRICE_LOW_TO_HIGH:
        return hotelsList
          .sort((a: Hotel, b: Hotel) => a.price - b.price)
          .slice();
      case sortTypeList.TOP_RATED_FIRST:
        return hotelsList
          .sort((a: Hotel, b: Hotel) => b.rating - a.rating)
          .slice();
      default:
        return hotelsList;
    }
  };

  useEffect((): void => {
    const filteredHotelList = filterByCity(hotels);
    setFilteredHotels(filteredHotelList);
    setSortedHotels(sortingHotels(filteredHotelList, sortType));
  }, [city, hotels]);

  useEffect((): void => {
    if (sortedHotels.length > 0) {
      setSortedHotels(sortingHotels(filteredHotels, sortType));
    }
  }, [sortType]);

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

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CityTabs
              hotels={hotels}
              currentCity={city}
              onTabCityClick={onTabCityClick}
            />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {sortedHotels.length} places to stay in {city}
              </b>
              <SortingOptions />
              <OfferList hotels={sortedHotels} />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                {filteredHotels.length > 0 && (
                  <Map
                    hotels={filteredHotels}
                    city={filteredHotels[0].city.location}
                  />
                )}
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
