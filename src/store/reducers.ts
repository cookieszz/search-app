import { combineReducers } from "redux";
import {buttonAction,
        buttonState, 
        dataAction,
        dataState, 
        inputState, inputAction, 
        activeTabState, 
        activeTabAction, searchInputState, searchInputAction } from "./types";

function btnReducer(state: buttonState = {
  isActive: true
}, action: buttonAction) {
  switch (action.type) {
    case "ACTIVE":
      return {isActive: true};
    case "DISSABLE":
      return {isActive: false};
    default:
      return state;
  }
}

function dataReducer(state: dataState[] = [{
  id: "",
  title: "",
  text: "",
}],
  action: dataAction) {
    switch (action.type) {
      case "ADD":
        return action.data;
      default:
        return state;
    }
}

function inputReducer(state: inputState = {
  value: ""
}, action: inputAction) {
  switch(action.type) {
    case "INPUT_CHANGE":
      return {
        value: action.value
      };
    default:
      return state;
  }
}

function activeTabReducer(state: activeTabState = {
  activeTab: ""
}, action: activeTabAction) {
  switch(action.type) {
    case "ACTIVE_TAB":
      return {
        activeTab: action.activeTab
      };
    default:
      return state;
  }
}

function searchInputReducer(state: searchInputState = {
  value: "",
}, action: searchInputAction) {
  switch(action.type) {
    case "SEARCH_INPUT":
      return {
        value: action.value
      };
    default:
      return state;
  }
}

const reducers = combineReducers({
  btnReducer,
  dataReducer,
  inputReducer,
  activeTabReducer,
  searchInputReducer
});

export default reducers;
