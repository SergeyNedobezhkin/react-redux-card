import { INCREMENT, DECREMENT } from "./types";
// Дефолтное состояние для Likes
const initialState = {
  likes: 0,
};
// Reducer для Likes (выполняет действие приходящих action)
export const likesReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        likes: state.likes + 1,
      };
    case DECREMENT:
      return {
        ...state,
        likes: state.likes - 1,
      };
    default:
      return state;
  }
};
