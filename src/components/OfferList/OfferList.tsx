import React from "react";
import OfferCard from "../OfferCard/OfferCard";
import { Hotel } from "../../types";
import { useActions } from "../../hooks/useActions";

interface OfferListProps {
  hotels: Hotel[];
}

export const OfferList = ({ hotels }: OfferListProps) => {
  const classNameMainPage = `cities__place-card place-card`;
  const { changeActiveOffer } = useActions();

  const onHoverHandler = React.useCallback((hotel: Hotel): void => {
    changeActiveOffer(hotel);
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
