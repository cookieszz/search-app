import { Languages } from "../../types/common/Languages";

export enum LanguagesActions {
  INTERFACE_LANGUAGE = "INTERFACE_LANGUAGE",
}

export type LanguagesState = {
  interfaceLanguage: Languages;
};

export type InterfaceLanguageAction = {
  type: LanguagesActions.INTERFACE_LANGUAGE;
  interfaceLanguage: Languages;
};

export type LanguagesActionTypes = InterfaceLanguageAction;
