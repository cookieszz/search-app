import { Dispatch } from "redux";
import SearchApiService from "services/SearchApiService";
import {
  ActiveTabAction,
  ButtonStateAction,
  PostDataObj,
  ChangeSearchInputAction,
  SearchActions,
  FetchSearchInputRequestAction,
  FetchSearchInputSuccessAction,
  FetchSearchInputFailureAction,
  SearchActionTypes,
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

const fetchSearchInputRequestAction = (): FetchSearchInputRequestAction => ({
  type: SearchActions.FETCH_SEARCH_INPUT_REQUEST,
});

const fetchSearchInputSuccessAction = (
  data: PostDataObj[],
): FetchSearchInputSuccessAction => ({
  type: SearchActions.FETCH_SEARCH_INPUT_SUCCESS,
  payload: { data },
});

const fetchSearchInputFailureAction = (
  error: object,
): FetchSearchInputFailureAction => ({
  type: SearchActions.FETCH_SEARCH_INPUT_FAILURE,
  payload: { error },
});

export const getSearchResultThunk = (title: string) => async (
  dispatch: Dispatch<SearchActionTypes>,
) => {
  dispatch(fetchSearchInputRequestAction());
  try {
    const data = await SearchApiService.getPosts({ title });
    dispatch(fetchSearchInputSuccessAction(data.data));
  } catch (e) {
    dispatch(fetchSearchInputFailureAction(e));
  }
};
