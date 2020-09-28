import { activeTabAction,
        activeTabState,
        buttonAction,
        buttonState,
        dataAction,
        dataState,
        inputAction,
        inputState,
        searchInputState,
        searchInputAction } from "./types";

export function toggleBtn(data: buttonState): buttonAction {
  return {
    type: data.isActive ? "ACTIVE" : "DISSABLE"
  }
}

export function addData(data: dataState[]): dataAction {
  return {
    type: "ADD",
    data: data,
  }
}

export function setInput(data: inputState): inputAction {
  return {
    type: "INPUT_CHANGE",
    value: data.value
  }
}

export function setTab(data:activeTabState): activeTabAction {
  return {
    type: "ACTIVE_TAB",
    activeTab: data.activeTab
  }
}

export function setSearch(data: searchInputState): searchInputAction {
  return {
    type: "SEARCH_INPUT",
    value: data.value
  }
}