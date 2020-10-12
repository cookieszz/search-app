import { getData } from "../../services/SearchApiService";
import {
  ActiveTabAction,
  ButtonStateAction,
  PostDataObj,
  ChangeSearchInputAction,
  SearchActions,
  SearchResultAction,
} from "./types";

export const setButtonStateAction = (btnState: boolean): ButtonStateAction => ({
  type: SearchActions.SET_BUTTON_STATE,
  payload: { isButtonActive: btnState },
});

export const changeSearchInputAction = (
  value: string,
): ChangeSearchInputAction => ({
  type: SearchActions.CHANGE_SEARCH_INPUT,
  payload: { searchInputValue: value },
});

export const setActiveTabAction = (tab: string): ActiveTabAction => ({
  type: SearchActions.SET_ACTIVE_TAB,
  payload: { activeTab: tab },
});

export const setSearchResultAction = (
  isLoading: boolean,
  data: PostDataObj[],
  isError?: string | object,
): SearchResultAction => ({
  type: SearchActions.SET_SEARCH_RESULT,
  payload: { isLoading, data, isError },
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
