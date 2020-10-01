import { SearchActions, SearchActionTypes, SearchState } from "./types";

const initialSearchState: SearchState = {
  isButtonActive: true,
  inputValue: "",
  activeTab: "",
  searchValue: "",
  searchResult: [],
};

const {
  BUTTON_STATE,
  INPUT_CHANGE,
  ACTIVE_TAB,
  SEARCH_VALUE,
  SEARCH_RESULT,
} = SearchActions;

export function search(
  state = initialSearchState,
  action: SearchActionTypes,
): SearchState {
  switch (action.type) {
    case BUTTON_STATE:
      return {
        ...state,
        isButtonActive: action.isButtonActive,
      };
    case INPUT_CHANGE:
      return {
        ...state,
        inputValue: action.inputValue,
      };
    case ACTIVE_TAB:
      return {
        ...state,
        activeTab: action.activeTab,
      };
    case SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.searchValue,
      };
    case SEARCH_RESULT:
      return {
        ...state,
        searchResult: action.searchResult,
      };
    default:
      return state;
  }
}
