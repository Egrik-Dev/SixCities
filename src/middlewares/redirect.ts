import browserHistory from "../browser-history";
import { ActionTypes } from "../state/action-types";
import { Action } from "../state/actions";

export const redirect = (_store: {}) => (next: (action: Action) => {}) => (
  action: Action
) => {
  if (action.type === ActionTypes.REDIRECT_TO_ROUTE) {
    browserHistory.push(action.payload);
  }

  return next(action);
};
