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

type ChangeActiveOffer = {
  type: ActionTypes.CHANGE_ACTIVE_OFFER;
  payload: Hotel;
};

export type Action =
  | ChangeCity
  | LoadHotelsAction
  | ChangeSortType
  | ChangeActiveOffer;
