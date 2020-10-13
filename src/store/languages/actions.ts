import { Languages } from "types/common/Languages";
import { ChangeInterfaceLanguageAction, LanguagesActions } from "./types";

export const changeInterfaceLanguageAction = (
  lang: Languages,
): ChangeInterfaceLanguageAction => ({
  type: LanguagesActions.CHANGE_INTERFACE_LANGUAGE,
  payload: { interfaceLanguage: lang },
});
