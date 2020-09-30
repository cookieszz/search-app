import {
  ActiveTabAction,
  ActiveTabState,
  ButtonAction,
  ButtonState,
  DataAction,
  DataState,
  InputAction,
  InputState,
  SearchInputState,
  SearchInputAction,
} from "./types";

export function toggleBtn(data: ButtonState): ButtonAction {
  return {
    type: data.isActive ? "ACTIVE" : "DISSABLE",
  };
}

export function addData(data: DataState[]): DataAction {
  return {
    type: "ADD",
    data: data,
  };
}

export function setInput(data: InputState): InputAction {
  return {
    type: "INPUT_CHANGE",
    value: data.value,
  };
}

export function setTab(data: ActiveTabState): ActiveTabAction {
  return {
    type: "ACTIVE_TAB",
    activeTab: data.activeTab,
  };
}

export function setSearch(data: SearchInputState): SearchInputAction {
  return {
    type: "SEARCH_INPUT",
    value: data.value,
  };
}
