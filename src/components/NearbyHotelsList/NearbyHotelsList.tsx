import React from "react";
import OfferCard from "../OfferCard/OfferCard";
import { Hotel } from "../../actions/action";

interface OfferListProps {
  hotels: Hotel[];
}

const START_QUANTITY_OFFERS = 3;

export const NearbyHotelsList = (props: OfferListProps) => {
  const { hotels } = props;
  const classNameMainPage = `near-places__card place-card`;

  const [startOffers, SetStartOffers] = React.useState<Hotel[] | []>([]);

  // Временое решение
  React.useEffect((): void => {
    SetStartOffers(hotels.slice(0, START_QUANTITY_OFFERS));
  }, [hotels]);

  return (
    <div className="near-places__list places__list">
      {startOffers.map(
        (hotel: Hotel, i: number): JSX.Element => (
          <OfferCard key={i} hotel={hotel} className={classNameMainPage} />
        )
      )}
    </div>
  );
};
