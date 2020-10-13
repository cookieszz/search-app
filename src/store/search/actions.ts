import SearchApiService from "services/SearchApiService";
import {
  ActiveTabAction,
  ButtonStateAction,
  PostDataObj,
  ChangeSearchInputAction,
  SearchActions,
  FetchSearchInpuRequestAction,
  FetchSearchInpuSuccessAction,
  FetchSearchInpuFailureAction,
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

const fetchSearchInpuRequestAction = (): FetchSearchInpuRequestAction => ({
  type: SearchActions.FETCH_SEARCH_INPUT_REQUEST,
});

const fetchSearchInpuSuccessAction = (
  data: PostDataObj[],
): FetchSearchInpuSuccessAction => ({
  type: SearchActions.FETCH_SEARCH_INPUT_SUCCESS,
  payload: { data },
});

const fetchSearchInpuFailureAction = (
  error: object,
): FetchSearchInpuFailureAction => ({
  type: SearchActions.FETCH_SEARCH_INPUT_FAILURE,
  payload: { error },
});

export const getSearchResultThunk = (title: string) => async (
  dispatch: any,
) => {
  dispatch(fetchSearchInpuRequestAction());
  try {
    const data = await SearchApiService.getPosts(title);
    dispatch(fetchSearchInpuSuccessAction(data.data));
  } catch (e) {
    dispatch(fetchSearchInpuFailureAction(e));
  }
};
