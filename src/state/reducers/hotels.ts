import { ActionTypes } from "../action-types";
import { Action } from "../actions";
import { Hotel } from "../../types";
import { extend } from "../../utils";

const defaultSortType = `Popular`;

interface HotelsState {
  hotels: Hotel[];
  sortType: string;
}

const initialState = {
  hotels: [],
  sortType: defaultSortType,
};

export const hotelsReducer = (
  state: HotelsState = initialState,
  action: Action
) => {
  switch (action.type) {
    case ActionTypes.LOAD_HOTELS:
      return extend(state, { hotels: action.payload });
    case ActionTypes.CHANGE_SORT_TYPE:
      return extend(state, { sortType: action.payload });
    default:
      return state;
  }
};
