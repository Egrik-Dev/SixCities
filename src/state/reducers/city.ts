import { ActionTypes } from "../action-types";
import { Action } from "../actions";

interface cityState {
  city: string;
}

const initialState = {
  city: `Amsterdam`,
};

export const cityReducer = (
  state: cityState = initialState,
  action: Action
) => {
  switch (action.type) {
    case ActionTypes.CHANGE_CITY:
      return { city: action.payload };
    default:
      return state;
  }
};
