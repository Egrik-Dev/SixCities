import React from "react";
import { useEffect, useState } from "react";
import { Hotel } from "../../types";
import { getUniqueArrayCities } from "../../utils";

type CityTabsProps = {
  currentCity: string;
  hotels: Hotel[];
  onTabCityClick: (
    evt: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => void;
};

export const CityTabs: React.FC<CityTabsProps> = ({
  currentCity,
  hotels,
  onTabCityClick,
}) => {
  const [allCities, setAllCities] = useState<string[]>([]);

  useEffect((): void => {
    setAllCities(getUniqueArrayCities(hotels));
  }, []);

  return (
    <ul className="locations__list tabs__list">
      {allCities.map(
        (city: string, i: number): JSX.Element => (
          <li key={i} className="locations__item">
            <a
              className={
                city === currentCity
                  ? `locations__item-link tabs__item tabs__item--active`
                  : `locations__item-link tabs__item`
              }
              onClick={onTabCityClick}
              href="#"
            >
              <span>{city}</span>
            </a>
          </li>
        )
      )}
    </ul>
  );
};
