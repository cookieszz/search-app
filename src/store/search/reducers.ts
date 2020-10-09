import { SearchActions, SearchActionTypes, SearchState } from "./types";

const initialSearchState: SearchState = {
  isButtonActive: true,
  inputValue: "",
  activeTab: "",
  searchResult: {
    isLoading: false,
    isError: undefined,
    payload: [],
  },
};

const { BUTTON_STATE, INPUT_CHANGE, ACTIVE_TAB, SEARCH_RESULT } = SearchActions;

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
    case SEARCH_RESULT:
      return {
        ...state,
        searchResult: {
          isLoading: action.isLoading,
          isError: action.isError,
          payload: action.payload,
        },
      };
    default:
      return state;
  }
}