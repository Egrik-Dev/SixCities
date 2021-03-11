import React from "react";
import { OfferCard } from "../OfferCard/OfferCard";
import { Hotel } from "../../actions/action";

interface OfferListProps {
  hotels: Hotel[];
}

const START_QUANTITY_OFFERS = 4;

export const OfferList = (props: OfferListProps) => {
  const { hotels } = props;

  const [activeOffer, setActiveOffer] = React.useState<null | Hotel>(null);

  const onHoverOffer = React.useCallback((hotel: Hotel): void => {
    setActiveOffer(hotel);
  }, []);

  const startOffers = hotels.slice(0, START_QUANTITY_OFFERS);

  return (
    <div className="cities__places-list places__list tabs__content">
      {startOffers.map((hotel, i) => (
        <OfferCard key={i} hotel={hotel} onHoverOffer={onHoverOffer} />
      ))}
    </div>
  );
};
