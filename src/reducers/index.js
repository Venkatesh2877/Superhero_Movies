import { combineReducers } from "redux";

import {
  ADD_MOVIES,
  ADD_FAVOURITE,
  REMOVE_FAVOURITE,
  SET_SHOW_FAVOURITE,
} from "../actions";

const intialMoviesState = {
  list: [],
  favourities: [],
  showFavourites: false,
};
export function movies(state = intialMoviesState, action) {
  switch (action.type) {
    case ADD_MOVIES:
      return {
        ...state,
        list: action.movies,
      };

    case ADD_FAVOURITE:
      return {
        ...state,
        favourities: [action.movie, ...state.favourities],
      };

    case REMOVE_FAVOURITE:
      const filtertedArray = state.favourities.filter(
        (movie) => movie.Title !== action.movie.Title
      );
      return {
        ...state,
        favourities: filtertedArray,
      };

    case SET_SHOW_FAVOURITE:
      return {
        ...state,
        showFavourites: action.value,
      };
    default:
      return state;
  }
}

const initialSearchState = {
  result: {},
};

export function search(state = initialSearchState, action) {
  return state;
}

// const intialRootState = {
//   movies: intialMoviesState,
//   search: initialSearchState,
// };

// export default function rootReducer(state = intialRootState, action) {
//   return {
//     movies: movies(state.movies, action),
//     search: search(state.search, action),
//   };
// }

export default combineReducers({
  movies: movies,
  search: search,
});
