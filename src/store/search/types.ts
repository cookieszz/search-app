export enum SearchActions {
  SET_BUTTON_STATE = "SET_BUTTON_STATE",
  CHANGE_SEARCH_INPUT = "CHANGE_SEARCH_INPUT",
  SET_ACTIVE_TAB = "SET_ACTIVE_TAB",
  SET_SEARCH_RESULT = "SET_SEARCH_RESULT",
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
    isLoading: boolean;
    isError?: string | object;
    data: PostDataObj[];
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

export type SearchResultAction = {
  type: SearchActions.SET_SEARCH_RESULT;
  payload: {
    isLoading: boolean;
    isError?: string | object;
    data: PostDataObj[];
  };
};

export type SearchActionTypes =
  | ButtonStateAction
  | ChangeSearchInputAction
  | ActiveTabAction
  | SearchResultAction;
