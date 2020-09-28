export type buttonState = {
  isActive: boolean;
};

export type buttonAction = {
  type: "ACTIVE" | "DISSABLE";
};

export type dataState = {
  id: string;
  title: string;
  text: string;
};

export type dataAction = {
  type: "ADD";
  data: dataState[];
};

export type inputState = {
  value: string;
};

export type inputAction = {
  type: "INPUT_CHANGE";
  value: string;
};

export type activeTabState = {
  activeTab: string;
};

export type activeTabAction = {
  type: "ACTIVE_TAB";
  activeTab: string;
};

export type searchInputState = {
  value: string,
};

export type searchInputAction = {
  type: "SEARCH_INPUT",
  value: string,
};