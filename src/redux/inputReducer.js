import { INPUT_TEXT } from "./types";
// Дефолтное состояние для Title
const initialState = {
  text: "",
};
// Reducer для Title (выполняет действие приходящих action)
export const inputReducer = (state = initialState, action) => {
  switch (action.type) {
    case INPUT_TEXT:
      return {
        ...state,
        text: action.text,
      };
    default:
      return state;
  }
};
