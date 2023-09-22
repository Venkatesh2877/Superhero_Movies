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
export default function movies(state = intialMoviesState, action) {
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
