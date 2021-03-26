import { ActionTypes } from "../action-types";
import { Action } from "../actions";
import { Hotel } from "../../types";

export const hotelsReducer = (state: Hotel[] = [], action: Action): Hotel[] => {
  switch (action.type) {
    case ActionTypes.LOAD_HOTELS:
      return (state = action.payload);
    default:
      return state;
  }
};
