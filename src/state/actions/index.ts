import { ActionTypes } from "../action-types";
import { Hotel } from "../../types";

type LoadHotelsAction = {
  type: ActionTypes.LOAD_HOTELS;
  payload: Hotel[];
};

type ChangeCity = {
  type: ActionTypes.CHANGE_CITY;
  payload: string;
};

type ChangeSortType = {
  type: ActionTypes.CHANGE_SORT_TYPE;
  payload: string;
};

export type Action = ChangeCity | LoadHotelsAction | ChangeSortType;
