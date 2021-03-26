import React from "react";
import OfferCard from "../OfferCard/OfferCard";
import { Hotel } from "../../types";

interface OfferListProps {
  hotels: Hotel[];
}

export const NearbyHotelsList = ({ hotels }: OfferListProps) => {
  const classNameMainPage = `near-places__card place-card`;

  return (
    <div className="near-places__list places__list">
      {hotels.map(
        (hotel: Hotel, i: number): JSX.Element => (
          <OfferCard key={i} hotel={hotel} className={classNameMainPage} />
        )
      )}
    </div>
  );
};
