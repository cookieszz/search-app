import { Languages } from "../../types/common/Languages";
import { InterfaceLanguageAction, LanguagesActions } from "./types";

export const setInterfaceLanguageAction = (
  lang: Languages,
): InterfaceLanguageAction => ({
  type: LanguagesActions.INTERFACE_LANGUAGE,
  interfaceLanguage: lang,
});
