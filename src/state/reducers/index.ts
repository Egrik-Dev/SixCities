import { combineReducers } from "redux";
import { hotelsReducer } from "./hotels";
import { cityReducer } from "./city";
import { Hotel } from "../../types";

export interface StoreState {
  hotels: Hotel[];
  currentCity: string;
}

const reducers = combineReducers<StoreState>({
  hotels: hotelsReducer,
  currentCity: cityReducer,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
