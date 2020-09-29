export type ButtonState = {
  isActive: boolean;
};

export type ButtonAction = {
  type: "ACTIVE" | "DISSABLE";
};

export type DataState = {
  id: string;
  title: string;
  text: string;
};

export type DataAction = {
  type: "ADD";
  data: DataState[];
};

export type InputState = {
  value: string;
};

export type InputAction = {
  type: "INPUT_CHANGE";
  value: string;
};

export type ActiveTabState = {
  activeTab: string;
};

export type ActiveTabAction = {
  type: "ACTIVE_TAB";
  activeTab: string;
};

export type SearchInputState = {
  value: string,
};

export type SearchInputAction = {
  type: "SEARCH_INPUT",
  value: string,
};