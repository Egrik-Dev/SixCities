import { ActionTypes } from "./types";

export interface Hotel {
  id: number;
  bedrooms: number;
  city: {
    location: {
      latitude: number;
      longitude: number;
      zoom: number;
    };
    name: string;
  };
  description: string;
  goods: string[];
  host: {
    avatar_url: string;
    id: number;
    is_pro: boolean;
    name: string;
  };
  images: string[];
  is_favorite: boolean;
  is_premium: boolean;
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  max_adults: number;
  preview_image: string;
  price: number;
  rating: number;
  title: string;
  type: string;
}

export interface LoadHotelsAction {
  type: ActionTypes.loadHotels;
  payload: Hotel[];
}

export const ActionCreator = {
  loadHotels: (data: Hotel[]) => ({
    type: ActionTypes.loadHotels,
    payload: data,
  }),
};