import { SearchActions, SearchActionTypes, SearchState } from "./types";

const initialSearchState: SearchState = {
  isButtonActive: true,
  searchInputValue: "",
  activeTab: "",
  searchResult: {
    isLoading: false,
    isError: undefined,
    data: [],
  },
};

const {
  SET_BUTTON_STATE,
  CHANGE_SEARCH_INPUT,
  SET_ACTIVE_TAB,
  SET_SEARCH_RESULT,
} = SearchActions;

export function search(
  state = initialSearchState,
  action: SearchActionTypes,
): SearchState {
  switch (action.type) {
    case SET_BUTTON_STATE:
      return {
        ...state,
        isButtonActive: action.payload.isButtonActive,
      };
    case CHANGE_SEARCH_INPUT:
      return {
        ...state,
        searchInputValue: action.payload.searchInputValue,
      };
    case SET_ACTIVE_TAB:
      return {
        ...state,
        activeTab: action.payload.activeTab,
      };
    case SET_SEARCH_RESULT:
      return {
        ...state,
        searchResult: {
          isLoading: action.payload.isLoading,
          isError: action.payload.isError,
          data: action.payload.data,
        },
      };
    default:
      return state;
  }
}
