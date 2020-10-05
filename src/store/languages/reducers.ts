import { Languages } from "../../types/Languages";
import {
  LanguagesActions,
  LanguagesActionTypes,
  LanguagesState,
} from "./types";

const initialLanguagesState: LanguagesState = {
  interfaceLanguage: Languages.en,
};

const { INTERFACE_LANGUAGE } = LanguagesActions;

export function languages(
  state = initialLanguagesState,
  action: LanguagesActionTypes,
): LanguagesState {
  switch (action.type) {
    case INTERFACE_LANGUAGE:
      return {
        ...state,
        interfaceLanguage: action.interfaceLanguage,
      };
    default:
      return state;
  }
}
