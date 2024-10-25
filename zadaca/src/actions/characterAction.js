export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";
export const SET_CHARACTERS = "SET_CHARACTERS";
export const SET_CHARACTER_DETAIL = "SET_CHARACTER_DETAIL";
export const SET_SEARCH_RESULTS = "SET_SEARCH_RESULTS";

export const addFavorite = (character) => ({
  type: ADD_FAVORITE,
  payload: character,
});
export const removeFavorite = (id) => ({ type: REMOVE_FAVORITE, payload: id });
export const setCharacters = (characters) => ({
  type: SET_CHARACTERS,
  payload: characters,
});
export const setCharacterDetail = (character) => ({
  type: SET_CHARACTER_DETAIL,
  payload: character,
});
export const setSearchResults = (results) => ({
  type: SET_SEARCH_RESULTS,
  payload: results,
});
