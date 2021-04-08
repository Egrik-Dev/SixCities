import { ActionTypes } from "../action-types";
import { Action } from "../actions";
import { Hotel } from "../../types";

const defaultSortType = `Popular`;

interface HotelsState {
  hotels: Hotel[];
  sortType: string;
  activeOffer: Hotel | {};
}

const initialState = {
  hotels: [],
  sortType: defaultSortType,
  activeOffer: {},
};

export const hotelsReducer = (
  state: HotelsState = initialState,
  action: Action
): HotelsState => {
  switch (action.type) {
    case ActionTypes.LOAD_HOTELS:
      return Object.assign({}, state, { hotels: action.payload });
    case ActionTypes.CHANGE_SORT_TYPE:
      return Object.assign({}, state, { sortType: action.payload });
    case ActionTypes.CHANGE_ACTIVE_OFFER:
      return Object.assign({}, state, { activeOffer: action.payload });
    case ActionTypes.UPDATE_HOTELS:
      return Object.assign({}, state, { hotels: action.payload });
    default:
      return state;
  }
};
