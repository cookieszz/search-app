export enum SearchActions {
  SET_BUTTON_STATE = "SET_BUTTON_STATE",
  CHANGE_SEARCH_INPUT = "CHANGE_SEARCH_INPUT",
  SET_ACTIVE_TAB = "SET_ACTIVE_TAB",
  FETCH_SEARCH_INPUT_REQUEST = "FETCH_SEARCH_INPUT_REQUEST",
  FETCH_SEARCH_INPUT_SUCCESS = "FETCH_SEARCH_INPUT_SUCCESS",
  FETCH_SEARCH_INPUT_FAILURE = "FETCH_SEARCH_INPUT_FAILURE",
}

export type PostDataObj = {
  id: string;
  title: string;
  text: string;
};

export type SearchState = {
  isButtonActive: boolean;
  searchInputValue: string;
  activeTab: string;
  searchResult: {
    isFetching: boolean;
    isError: object | null;
    data: PostDataObj[] | null;
  };
};

export type ButtonStateAction = {
  type: SearchActions.SET_BUTTON_STATE;
  payload: { isButtonActive: boolean };
};

export type ChangeSearchInputAction = {
  type: SearchActions.CHANGE_SEARCH_INPUT;
  payload: { searchInputValue: string };
};

export type ActiveTabAction = {
  type: SearchActions.SET_ACTIVE_TAB;
  payload: { activeTab: string };
};

export type FetchSearchInputRequestAction = {
  type: SearchActions.FETCH_SEARCH_INPUT_REQUEST;
};

export type FetchSearchInputSuccessAction = {
  type: SearchActions.FETCH_SEARCH_INPUT_SUCCESS;
  payload: { data: PostDataObj[] };
};

export type FetchSearchInputFailureAction = {
  type: SearchActions.FETCH_SEARCH_INPUT_FAILURE;
  payload: { error: object };
};

export type SearchActionTypes =
  | ButtonStateAction
  | ChangeSearchInputAction
  | ActiveTabAction
  | FetchSearchInputRequestAction
  | FetchSearchInputSuccessAction
  | FetchSearchInputFailureAction;
