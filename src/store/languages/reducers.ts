import { Languages } from "types/common/Languages";
import {
  LanguagesActions,
  LanguagesActionTypes,
  LanguagesState,
} from "./types";

const initialLanguagesState: LanguagesState = {
  interfaceLanguage: Languages.en,
};

const { CHANGE_INTERFACE_LANGUAGE } = LanguagesActions;

export function languages(
  state = initialLanguagesState,
  action: LanguagesActionTypes,
): LanguagesState {
  switch (action.type) {
    case CHANGE_INTERFACE_LANGUAGE:
      return {
        ...state,
        interfaceLanguage: action.payload.interfaceLanguage,
      };
    default:
      return state;
  }
}
