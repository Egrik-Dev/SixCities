import React from "react";
import { cities } from "../../const";

type CityTabsProps = {
  currentCity: string;
  onTabCityClick: (
    evt: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => void;
};

export const CityTabs: React.FC<CityTabsProps> = ({
  currentCity,
  onTabCityClick,
}) => {
  return (
    <ul className="locations__list tabs__list">
      {cities.map(
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
