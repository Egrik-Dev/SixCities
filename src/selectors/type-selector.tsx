import { createSelector } from "reselect";
import { Hotel } from "../types";
import { sortingHotels } from "../utils";
import { RootState } from "../state";

export const getHotels = (state: RootState): Hotel[] => state.hotels.hotels;
export const getActiveType = (state: RootState): string =>
  state.hotels.sortType;
export const getCity = (state: RootState): any => state.currentCity.city;

export const getSortedHotels = createSelector(
  getHotels,
  getActiveType,
  getCity,
  sortingHotels
);
