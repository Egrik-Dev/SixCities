import { Dispatch } from "redux";
import { AxiosInstance, AxiosResponse } from "axios";
import { Action } from "../actions";
import { ActionTypes } from "../action-types";
import { StoreState } from "../reducers";
import { Hotel } from "../../types";

export const fetchHotels = () => (
  dispatch: Dispatch<Action>,
  _getState: () => StoreState,
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
  _getState: () => StoreState,
  api: AxiosInstance
): Promise<AxiosResponse> => api.get(`/comments/${id}`);

export const fetchNearbyHotels = (id: string) => (
  _dispatch: Dispatch,
  _getState: () => StoreState,
  api: AxiosInstance
): Promise<AxiosResponse> => api.get(`/hotels/${id}/nearby`);

// export const changeCity = (data: string) => ({
//   type: ActionTypes.CHANGE_CITY,
//   payload: data,
// });
