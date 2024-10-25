import {
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  SET_CHARACTERS,
  SET_CHARACTER_DETAIL,
  SET_SEARCH_RESULTS,
} from "../actions/characterAction";

const initialState = {
  characters: [],
  favorites: JSON.parse(localStorage.getItem("favorites")) || [],
  characterDetail: null,
  searchResults: [],
};

const characterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CHARACTERS:
      return { ...state, characters: action.payload };
    case ADD_FAVORITE:
      const updatedFavorites = [...state.favorites, action.payload];
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      return { ...state, favorites: updatedFavorites };
    case REMOVE_FAVORITE:
      const filteredFavorites = state.favorites.filter(
        (c) => c.id !== action.payload
      );
      localStorage.setItem("favorites", JSON.stringify(filteredFavorites));
      return { ...state, favorites: filteredFavorites };
    case SET_CHARACTER_DETAIL:
      return { ...state, characterDetail: action.payload };
    case SET_SEARCH_RESULTS:
      return { ...state, searchResults: action.payload };
    default:
      return state;
  }
};

export default characterReducer;
