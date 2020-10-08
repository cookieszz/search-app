import { getData } from "../../services/fetchPosts";
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
  isLoading: boolean,
  payload: DataObj[],
  isError?: string | object,
): SearchResultAction => ({
  type: SearchActions.SEARCH_RESULT,
  isLoading,
  payload,
  isError,
});

export const getSearchResultThunk = (title: string) => async (
  dispatch: any,
) => {
  dispatch(setSearchResultAction(true, []));
  try {
    const data = await getData(title);
    dispatch(setSearchResultAction(false, data.data));
  } catch (e) {
    dispatch(setSearchResultAction(false, [], e));
  }
};
