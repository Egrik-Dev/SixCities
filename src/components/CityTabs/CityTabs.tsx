import { useEffect, useState } from "react";
import { Hotel } from "../../types";
import { getUniqueArrayCities } from "../../utils";

type CityTabsProps = {
  currentCity: string;
  hotels: Hotel[];
};

export const CityTabs: React.FC<CityTabsProps> = ({ currentCity, hotels }) => {
  console.log(currentCity);
  console.log(hotels);
  const [allCities, setAllCities] = useState<string[]>([]);

  useEffect(() => {
    setAllCities(getUniqueArrayCities(hotels));
  }, []);

  return (
    <ul className="locations__list tabs__list">
      {allCities.map((city) => (
        <li className="locations__item">
          <a
            className={
              city === currentCity
                ? `locations__item-link tabs__item tabs__item--active`
                : `locations__item-link tabs__item`
            }
            href="#"
          >
            <span>{city}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};
