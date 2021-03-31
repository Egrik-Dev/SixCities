import React from "react";
import OfferCard from "../OfferCard/OfferCard";
import { Hotel } from "../../types";
import { useActions } from "../../hooks/useActions";

interface OfferListProps {
  hotels: Hotel[];
}

export const NearbyHotelsList = ({ hotels }: OfferListProps) => {
  const classNameMainPage = `near-places__card place-card`;
  const { changeActiveOffer } = useActions();

  const onHoverHandler = React.useCallback((hotel: Hotel): void => {
    changeActiveOffer(hotel);
  }, []);

  return (
    <div className="near-places__list places__list">
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
