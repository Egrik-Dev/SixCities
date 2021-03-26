import { ActionTypes } from "../action-types";
import { Action } from "../actions";

const initialState = `Amsterdam`;

export const cityReducer = (
  state: string = initialState,
  action: Action
): string => {
  switch (action.type) {
    case ActionTypes.CHANGE_CITY:
      return (state = action.payload);
    default:
      return state;
  }
};
