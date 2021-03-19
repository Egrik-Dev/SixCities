import { Dispatch } from "redux";
import { AxiosInstance, AxiosResponse } from "axios";
import { Action } from "./types";
import { Hotel, ActionCreator, Reviews } from "./action";
import { StoreState } from "../reducers/root-reducer";

export const fetchHotels = () => (
  dispatch: Dispatch<Action>,
  _getState: () => StoreState,
  api: AxiosInstance
): Promise<void> =>
  api.get<Hotel[]>(`/hotels`).then(({ data }) => {
    dispatch(ActionCreator.loadHotels(data));
  });

export const fetchReviews = (id: string) => (
  _dispatch: Dispatch,
  _getState: () => StoreState,
  api: AxiosInstance
): Promise<AxiosResponse> => api.get(`/comments/${id}`);
