export enum SearchActions {
  BUTTON_STATE = "BUTTON_STATE",
  INPUT_CHANGE = "INPUT_CHANGE",
  ACTIVE_TAB = "ACTIVE_TAB",
  SEARCH_RESULT = "SEARCH_RESULT",
}

export type DataObj = {
  id: string;
  title: string;
  text: string;
};

export type SearchState = {
  isButtonActive: boolean;
  inputValue: string;
  activeTab: string;
  searchResult: {
    isLoading: boolean;
    isError?: string | object;
    payload: DataObj[];
  };
};

export type ButtonStateAction = {
  type: SearchActions.BUTTON_STATE;
  isButtonActive: boolean;
};

export type InputChangeAction = {
  type: SearchActions.INPUT_CHANGE;
  inputValue: string;
};

export type ActiveTabAction = {
  type: SearchActions.ACTIVE_TAB;
  activeTab: string;
};

export type SearchResultAction = {
  type: SearchActions.SEARCH_RESULT;
  isLoading: boolean;
  isError?: string | object;
  payload: DataObj[];
};

export type SearchActionTypes =
  | ButtonStateAction
  | InputChangeAction
  | ActiveTabAction
  | SearchResultAction;
