import { Languages } from "../../types/common/Languages";

export enum LanguagesActions {
  CHANGE_INTERFACE_LANGUAGE = "CHANGE_INTERFACE_LANGUAGE",
}

export type LanguagesState = {
  interfaceLanguage: Languages;
};

export type ChangeInterfaceLanguageAction = {
  type: LanguagesActions.CHANGE_INTERFACE_LANGUAGE;
  payload: { interfaceLanguage: Languages };
};

export type LanguagesActionTypes = ChangeInterfaceLanguageAction;
