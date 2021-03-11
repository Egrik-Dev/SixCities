import { Action, ActionTypes } from "../actions/types";
import { Hotel } from "../actions/action";

export const hotelsReducer = (state: Hotel[] = [], action: Action) => {
  switch (action.type) {
    case ActionTypes.loadHotels:
      return action.payload;
    default:
      return state;
  }
};
