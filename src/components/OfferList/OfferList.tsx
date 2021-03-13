import React from "react";
import OfferCard from "../OfferCard/OfferCard";
import { Hotel } from "../../actions/action";

interface OfferListProps {
  hotels: Hotel[];
}

const START_QUANTITY_OFFERS = 4;

export const OfferList = (props: OfferListProps) => {
  const { hotels } = props;

  const [activeOffer, setActiveOffer] = React.useState<null | Hotel>(null);
  const [startOffers, SetStartOffers] = React.useState<[] | Hotel[]>([]);

  React.useEffect((): void => {
    SetStartOffers(hotels.slice(0, START_QUANTITY_OFFERS));
  }, [hotels]);

  const onHoverHandler = React.useCallback((hotel: Hotel): void => {
    setActiveOffer(hotel);
  }, []);

  return (
    <div className="cities__places-list places__list tabs__content">
      {startOffers.map(
        (hotel: Hotel, i: number): JSX.Element => (
          <OfferCard key={i} hotel={hotel} onHoverHandler={onHoverHandler} />
        )
      )}
    </div>
  );
};
