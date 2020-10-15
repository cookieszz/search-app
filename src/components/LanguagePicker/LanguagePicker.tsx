import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { RootState } from "store";
import { changeInterfaceLanguageAction } from "store/languages/actions";
import {
  ChangeInterfaceLanguageAction,
  LanguagesActionTypes,
} from "store/languages/types";
import { Languages } from "types/common/Languages";
import classes from "./LanguagePicker.module.scss";

const mapStateToProps = (state: RootState) => ({
  language: state.languages.interfaceLanguage,
});

const mapDispatchToProps = (dispatch: Dispatch<LanguagesActionTypes>) => ({
  changeLanguage: (lang: Languages): ChangeInterfaceLanguageAction =>
    dispatch(changeInterfaceLanguageAction(lang)),
});

type LanguagePickerProps = {
  language: Languages;
  changeLanguage: (lang: Languages) => ChangeInterfaceLanguageAction;
};
function LanguagePicker({ language, changeLanguage }: LanguagePickerProps) {
  const { i18n } = useTranslation();

  useMemo(() => {
    const storageLanguage = localStorage.getItem("i18nextLng");
    switch (storageLanguage) {
      case "de":
        changeLanguage(Languages.de);
        break;
      default:
        changeLanguage(Languages.en);
        break;
    }
    return storageLanguage;
  }, [changeLanguage]);

  return (
    <div className={classes.languagePickerRoot}>
      <select
        className={classes.languagePickerDropbox}
        value={language}
        onChange={(e) => {
          const currentLang = e.target.value as Languages;
          changeLanguage(currentLang);
          i18n.changeLanguage(currentLang);
        }}
      >
        {Object.values(Languages).map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(LanguagePicker);
