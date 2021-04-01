import { Dispatch } from "redux";
import { AxiosInstance, AxiosResponse } from "axios";
import { Action } from "../actions";
import { ActionTypes } from "../action-types";
import { Hotel, Reviews } from "../../types";

export const fetchHotels = () => (
  dispatch: Dispatch<Action>,
  _getState: () => {},
  api: AxiosInstance
): Promise<void> =>
  api.get(`/hotels`).then(({ data }: { data: Hotel[] }) => {
    dispatch({
      type: ActionTypes.LOAD_HOTELS,
      payload: data,
    });
  });

export const fetchReviews = (id: string) => (
  _dispatch: Dispatch,
  _getState: () => {},
  api: AxiosInstance
): Promise<AxiosResponse<Reviews[]>> => api.get(`/comments/${id}`);

export const fetchNearbyHotels = (id: string) => (
  _dispatch: Dispatch,
  _getState: () => {},
  api: AxiosInstance
): Promise<AxiosResponse> => api.get(`/hotels/${id}/nearby`);

export const fetchFavoriteHotels = () => (
  _dispatch: Dispatch,
  _getState: () => {},
  api: AxiosInstance
): Promise<AxiosResponse> => api.get(`/favorite`);

export const changeCity = (data: string) => ({
  type: ActionTypes.CHANGE_CITY,
  payload: data,
});

export const changeSortType = (sortName: string) => ({
  type: ActionTypes.CHANGE_SORT_TYPE,
  payload: sortName,
});

export const changeActiveOffer = (hotel: Hotel) => ({
  type: ActionTypes.CHANGE_ACTIVE_OFFER,
  payload: hotel,
});
