import { Action } from "../actions";
import { ActionTypes } from "../action-types";

interface userState {
  status: string;
  userName: string;
}

const initialState = {
  status: `NO_AUTH`,
  userName: ``,
};

export const userReducer = (
  state: userState = initialState,
  action: Action
): userState => {
  switch (action.type) {
    case ActionTypes.CHANGE_AUTH_STATUS:
      return Object.assign({}, state, { status: action.payload });
    case ActionTypes.SET_USER_NAME:
      return Object.assign({}, state, { userName: action.payload });
    default:
      return state;
  }
};
