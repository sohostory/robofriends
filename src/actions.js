import { CHANGE_SEARCH_FIELD } from "./containers/constants";

export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text,
});
