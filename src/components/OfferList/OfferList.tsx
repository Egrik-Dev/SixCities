import React from "react";
import OfferCard from "../OfferCard/OfferCard";
import { Hotel } from "../../types";

interface OfferListProps {
  hotels: Hotel[];
}

export const OfferList = ({ hotels }: OfferListProps) => {
  const classNameMainPage = `cities__place-card place-card`;

  const [activeOffer, setActiveOffer] = React.useState<null | Hotel>();

  const onHoverHandler = React.useCallback((hotel: Hotel): void => {
    setActiveOffer(hotel);
  }, []);

  return (
    <div className="cities__places-list places__list tabs__content">
      {hotels.map(
        (hotel: Hotel, i: number): JSX.Element => (
          <OfferCard
            key={i}
            hotel={hotel}
            onHoverHandler={onHoverHandler}
            className={classNameMainPage}
          />
        )
      )}
    </div>
  );
};
