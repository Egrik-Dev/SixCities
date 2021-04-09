import { Hotel } from "../../types/index";
import { FavoriteCard } from "../FavoriteCard/FavoriteCard";

interface OwnProps {
  hotels: Hotel[];
  city: string;
}

export const FavoriteOfferList = ({ hotels, city }: OwnProps): JSX.Element => {
  const filterOffersByCity = (hotels: Hotel[]): Hotel[] => {
    return hotels.filter((hotel: Hotel): boolean => hotel.city.name === city);
  };

  const filteredOffers = filterOffersByCity(hotels);

  return (
    <>
      {filteredOffers.map(
        (hotel: Hotel, i: number): JSX.Element => (
          <FavoriteCard key={i} hotel={hotel} />
        )
      )}
    </>
  );
};
