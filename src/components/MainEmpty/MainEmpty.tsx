import { CityTabs } from "../CityTabs/CityTabs";

type MainEmptyProps = {
  city: string;
  onTabCityClick: (
    evt: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => void;
};

export const MainEmpty: React.FC<MainEmptyProps> = ({
  city,
  onTabCityClick,
}) => {
  return (
    <main className="page__main page__main--index page__main--index-empty">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <CityTabs currentCity={city} onTabCityClick={onTabCityClick} />
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container cities__places-container--empty container">
          <section className="cities__no-places">
            <div className="cities__status-wrapper tabs__content">
              <b className="cities__status">No places to stay available</b>
              <p className="cities__status-description">
                We could not find any property available at the moment in {city}
              </p>
            </div>
          </section>
          <div className="cities__right-section"></div>
        </div>
      </div>
    </main>
  );
};
