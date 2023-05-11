// Корневой Reducer (объединяет все Reducer)
import { combineReducers } from "redux";
import { likesReducer } from "./likesReducer";
import { inputReducer } from "./inputReducer";
export const rootReducer = combineReducers({
  likesReducer: likesReducer,
  inputReducer: inputReducer,
});
