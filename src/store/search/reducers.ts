import { SearchActions, SearchActionTypes, SearchState } from "./types";

const initialSearchState: SearchState = {
  isButtonActive: true,
  searchInputValue: "",
  activeTab: "",
  searchResult: {
    isFetching: false,
    isError: null,
    data: null,
  },
};

const {
  SET_BUTTON_STATE,
  CHANGE_SEARCH_INPUT,
  SET_ACTIVE_TAB,
  FETCH_SEARCH_INPUT_REQUEST,
  FETCH_SEARCH_INPUT_SUCCESS,
  FETCH_SEARCH_INPUT_FAILURE,
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
    case FETCH_SEARCH_INPUT_REQUEST:
      return {
        ...state,
        searchResult: {
          ...initialSearchState.searchResult,
          isFetching: true,
        },
      };
    case FETCH_SEARCH_INPUT_SUCCESS:
      return {
        ...state,
        searchResult: {
          isFetching: false,
          isError: null,
          data: action.payload.data,
        },
      };
    case FETCH_SEARCH_INPUT_FAILURE:
      return {
        ...state,
        searchResult: {
          isFetching: false,
          isError: action.payload.error,
          data: null,
        },
      };
    default:
      return state;
  }
}
