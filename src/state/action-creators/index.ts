import { Dispatch } from "redux";
import { AxiosInstance, AxiosResponse } from "axios";
import { Action } from "../actions";
import { ActionTypes } from "../action-types";
import { Hotel, Reviews, User } from "../../types";
import { RootState } from "../reducers";

export const fetchHotels = () => (
  dispatch: Dispatch<Action>,
  _getState: () => {},
  api: AxiosInstance
): Promise<void> =>
  api
    .get(`/hotels`)
    .then(({ data }: { data: Hotel[] }) => {
      dispatch({
        type: ActionTypes.LOAD_HOTELS,
        payload: data,
      });
    })
    .catch(() => {
      dispatch({
        type: ActionTypes.LOAD_HOTELS,
        payload: [],
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

export const checkAuthAction = () => (
  dispatch: Dispatch,
  _getState: RootState,
  api: AxiosInstance
): void => {
  api.get(`/login`).then(({ data }: { data: User }) => {
    dispatch(setUserName(data.email));
    dispatch(changeAuthStatus(`AUTH`));
  });
};

export const authAction = (email: string, password: string) => (
  dispatch: Dispatch,
  _getState: RootState,
  api: AxiosInstance
): Promise<void> =>
  api.post(`/login`, { email, password }).then(() => {
    dispatch(changeAuthStatus(`AUTH`));
    dispatch(setUserName(email));
  });

export const postReview = (comment: string, rating: number, id: string) => (
  _dispatch: Dispatch,
  _getState: RootState,
  api: AxiosInstance
) => api.post(`/comments/${id}`, { comment, rating });

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

export const changeAuthStatus = (status: string) => ({
  type: ActionTypes.CHANGE_AUTH_STATUS,
  payload: status,
});

export const setUserName = (userName: string) => ({
  type: ActionTypes.SET_USER_NAME,
  payload: userName,
});
