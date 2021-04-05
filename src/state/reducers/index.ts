import { combineReducers } from "redux";
import { hotelsReducer } from "./hotels";
import { cityReducer } from "./city";
import { userReducer } from "./user";

const reducers = combineReducers({
  hotels: hotelsReducer,
  currentCity: cityReducer,
  user: userReducer,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
