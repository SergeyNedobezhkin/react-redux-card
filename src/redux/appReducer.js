import {
  LOADER_DISPLAY_ON,
  LOADER_DISPLAY_OFF,
  ERROR_DISPLAY_ON,
  ERROR_DISPLAY_OFF,
} from "./types";
// Дефолтное состояние для LOADER
const initialState = {
  loading: false,
  error: null,
};
// Reducer для LOADER (выполняет действие приходящих action)
export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADER_DISPLAY_ON:
      return {
        ...state,
        loading: true,
      };

    case LOADER_DISPLAY_OFF:
      return {
        ...state,
        loading: false,
      };
    case ERROR_DISPLAY_ON:
      return {
        ...state,
        error: action.text,
      };
    case ERROR_DISPLAY_OFF:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
