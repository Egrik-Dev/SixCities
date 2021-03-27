import { combineReducers } from "redux";
import { hotelsReducer } from "./hotels";
import { cityReducer } from "./city";

const reducers = combineReducers({
  hotels: hotelsReducer,
  currentCity: cityReducer,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
