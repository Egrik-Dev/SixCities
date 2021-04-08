import { sortTypeList } from "./const";
import { Hotel } from "./types";

export const calculateRating = (rating: number): number => {
  const roundedRating = Math.round(rating);

  switch (roundedRating) {
    case 5:
      return 100;
    case 4:
      return 80;
    case 3:
      return 60;
    case 2:
      return 40;
    case 1:
      return 20;
    default:
      return 0;
  }
};

export const getUniqueArrayCities = (favoriteHotels: Hotel[]): string[] => {
  const cities: Set<string> = new Set();
  favoriteHotels.forEach(
    (hotel: Hotel): Set<string> => cities.add(hotel.city.name)
  );
  return Array.from(cities);
};

export const sortingHotels = (
  hotels: Hotel[],
  sortName: string,
  city: string
) => {
  const filteredHotels = hotels.filter(
    (hotel: Hotel): boolean => hotel.city.name === city
  );

  switch (sortName) {
    case sortTypeList.POPULAR:
      return filteredHotels;
    case sortTypeList.PRICE_HIGH_TO_LOW:
      return filteredHotels
        .sort((a: Hotel, b: Hotel) => b.price - a.price)
        .slice();
    case sortTypeList.PRICE_LOW_TO_HIGH:
      return filteredHotels
        .sort((a: Hotel, b: Hotel) => a.price - b.price)
        .slice();
    case sortTypeList.TOP_RATED_FIRST:
      return filteredHotels
        .sort((a: Hotel, b: Hotel) => b.rating - a.rating)
        .slice();
    default:
      return filteredHotels;
  }
};

export const updateHotelsList = (
  hotels: Hotel[],
  updatedHotel: Hotel
): Hotel[] => {
  const hotelIndex = hotels.findIndex(
    (hotel: Hotel) => hotel.id === updatedHotel.id
  );

  return hotels
    .slice(0, hotelIndex)
    .concat(updatedHotel)
    .concat(hotels.slice(hotelIndex + 1, hotels.length));
};
