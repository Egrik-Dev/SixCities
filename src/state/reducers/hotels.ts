import { ActionTypes } from "../action-types";
import { Action } from "../actions";
import { Hotel } from "../../types";

interface HotelsState {
  hotels: Hotel[];
}

const initialState = {
  hotels: [],
};

export const hotelsReducer = (
  state: HotelsState = initialState,
  action: Action
) => {
  switch (action.type) {
    case ActionTypes.LOAD_HOTELS:
      return { hotels: action.payload };
    default:
      return state;
  }
};
