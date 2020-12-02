import {combineReducers} from "redux";
import {catalogReducer} from "./catalog";

export const rootReducer = combineReducers({
  catalog: catalogReducer
})