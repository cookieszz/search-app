import { combineReducers } from "redux";
import {ButtonAction,
        ButtonState, 
        DataAction,
        DataState, 
        InputState, InputAction, 
        ActiveTabState, 
        ActiveTabAction, SearchInputState, SearchInputAction } from "./types";

function btnReducer(state: ButtonState = {
  isActive: true
}, action: ButtonAction) {
  switch (action.type) {
    case "ACTIVE":
      return {isActive: true};
    case "DISSABLE":
      return {isActive: false};
    default:
      return state;
  }
}

function dataReducer(state: DataState[] = [{
  id: "",
  title: "",
  text: "",
}],
  action: DataAction) {
    switch (action.type) {
      case "ADD":
        return action.data;
      default:
        return state;
    }
}

function inputReducer(state: InputState = {
  value: ""
}, action: InputAction) {
  switch(action.type) {
    case "INPUT_CHANGE":
      return {
        value: action.value
      };
    default:
      return state;
  }
}

function activeTabReducer(state: ActiveTabState = {
  activeTab: ""
}, action: ActiveTabAction) {
  switch(action.type) {
    case "ACTIVE_TAB":
      return {
        activeTab: action.activeTab
      };
    default:
      return state;
  }
}

function searchInputReducer(state: SearchInputState = {
  value: "",
}, action: SearchInputAction) {
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
