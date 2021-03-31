import React from "react";
import OfferCard from "../OfferCard/OfferCard";
import { Hotel } from "../../types";
import { useActions } from "../../hooks/useActions";

interface OfferListProps {
  hotels: Hotel[];
  classNameMainPage: string;
  classNameOfferPlace: string;
}

export const OfferList = ({
  hotels,
  classNameMainPage,
  classNameOfferPlace,
}: OfferListProps) => {
  const { changeActiveOffer } = useActions();

  const onHoverHandler = React.useCallback((hotel: Hotel): void => {
    changeActiveOffer(hotel);
  }, []);

  return (
    <div className={classNameOfferPlace}>
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
