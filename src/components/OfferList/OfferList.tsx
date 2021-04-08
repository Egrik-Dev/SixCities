import React from "react";
import OfferCard from "../OfferCard/OfferCard";
import { Hotel } from "../../types";
import { useActions } from "../../hooks/useActions";

interface OfferListProps {
  hotels: Hotel[];
  classNameMainPage: string;
  classNameOfferPlace: string;
}

interface OfferListActions {
  changeActiveOffer: Function;
  changeFavoriteStatus: Function;
  updateHotels: Function;
}

export const OfferList = ({
  hotels,
  classNameMainPage,
  classNameOfferPlace,
}: OfferListProps) => {
  const {
    changeActiveOffer,
    changeFavoriteStatus,
    updateHotels,
  }: OfferListActions = useActions();

  const onHoverHandler = React.useCallback((hotel: Hotel): void => {
    changeActiveOffer(hotel);
  }, []);

  const onBookmarkClick = React.useCallback((hotelClicked: Hotel): void => {
    hotelClicked.is_favorite = !hotelClicked.is_favorite;

    changeFavoriteStatus(
      hotelClicked.id,
      Number(hotelClicked.is_favorite)
    ).then(({ data }: { data: Hotel }) => {
      updateHotels(data);
    });
  }, []);

  return (
    <div className={classNameOfferPlace}>
      {hotels.map(
        (hotel: Hotel, i: number): JSX.Element => (
          <OfferCard
            key={i}
            hotel={hotel}
            isFavorite={hotel.is_favorite}
            onHoverHandler={onHoverHandler}
            className={classNameMainPage}
            onBookmarkClick={onBookmarkClick}
          />
        )
      )}
    </div>
  );
};
