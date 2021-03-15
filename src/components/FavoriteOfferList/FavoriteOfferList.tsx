import { Hotel } from "../../actions/action";
import { FavoriteCard } from "../FavoriteCard/FavoriteCard";

interface OwnProps {
  hotels: Hotel[];
  city: string;
}

export const FavoriteOfferList = (props: OwnProps): JSX.Element => {
  const { hotels, city } = props;

  const filterOffersByCity = (hotels: Hotel[]): Hotel[] => {
    return hotels.filter((hotel: Hotel): boolean => hotel.city.name === city);
  };

  const filterdOffers = filterOffersByCity(hotels);

  return (
    <>
      {filterdOffers.map(
        (hotel: Hotel, i: number): JSX.Element => (
          <FavoriteCard key={i} hotel={hotel} />
        )
      )}
    </>
  );
};
