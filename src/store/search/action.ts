import {
  ActiveTabAction,
  ButtonStateAction,
  DataObj,
  InputChangeAction,
  SearchActions,
  SearchResultAction,
  SearchValueAction,
} from "./types";

export const setButtonStateAction = (btnState: boolean): ButtonStateAction => ({
  type: SearchActions.BUTTON_STATE,
  isButtonActive: btnState,
});

export const setInputChangeAction = (value: string): InputChangeAction => ({
  type: SearchActions.INPUT_CHANGE,
  inputValue: value,
});

export const setActiveTabAction = (tab: string): ActiveTabAction => ({
  type: SearchActions.ACTIVE_TAB,
  activeTab: tab,
});

export const setSearchValueAction = (
  searchValue: string,
): SearchValueAction => ({
  type: SearchActions.SEARCH_VALUE,
  searchValue: searchValue,
});

export const setSearchResultAction = (
  resultData: DataObj[],
): SearchResultAction => ({
  type: SearchActions.SEARCH_RESULT,
  searchResult: resultData,
});
