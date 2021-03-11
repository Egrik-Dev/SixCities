import { Dispatch } from "redux";
import { AxiosInstance } from "axios";
import { Action } from "./types";
import { Hotel, ActionCreator } from "./action";
import { StoreState } from "../reducers/root-reducer";

export const fetchHotels = () => (
  dispatch: Dispatch<Action>,
  _getState: () => StoreState,
  api: AxiosInstance
): Promise<void> =>
  api.get<Hotel[]>(`/hotels`).then(({ data }) => {
    dispatch(ActionCreator.loadHotels(data));
  });
