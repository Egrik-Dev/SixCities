import { combineReducers } from "redux";
import { hotelsReducer } from "./hotels";
import { Hotel } from "../actions/action";

export interface StoreState {
  hotels: Hotel[];
}

export default combineReducers<StoreState>({
  hotels: hotelsReducer,
});
