import React, { useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { Namespaces } from "../../i18n";
import { rootState } from "../../store";
import { setInterfaceLanguageAction } from "../../store/languages/actions";
import { InterfaceLanguageAction } from "../../store/languages/types";
import {
  getSearchResultThunk,
  setInputChangeAction,
} from "../../store/search/actions";
import { InputChangeAction } from "../../store/search/types";
import { Languages } from "../../types/common/Languages";
import { useSearchPageStyles } from "./SearchPage.styles";
// import classes from "./SearchPage.module.scss";

const mapStateToProps = (state: rootState) => ({
  inputValue: state.search.inputValue,
  isBtnActive: state.search.isButtonActive,
  language: state.languages.interfaceLanguage,
});

const mapDispatchToProps = (dispatch: any) => ({
  onInputChange: (input: string): InputChangeAction =>
    dispatch(setInputChangeAction(input)),
  fetchData: (value: string): Promise<void> =>
    dispatch(getSearchResultThunk(value)),
  setLanguage: (lang: Languages): InterfaceLanguageAction =>
    dispatch(setInterfaceLanguageAction(lang)),
});

type SearchPageProps = {
  inputValue: string;
  isBtnActive: boolean;
  language: Languages;
  onInputChange: (input: string) => InputChangeAction;
  setLanguage: (lang: Languages) => InterfaceLanguageAction;
  fetchData: (value: string) => Promise<void>;
};

function SearchPage({
  inputValue,
  isBtnActive,
  language,
  onInputChange,
  setLanguage,
  fetchData,
}: SearchPageProps) {
  const history = useHistory();
  const { t, i18n } = useTranslation(Namespaces.Search);

  const classes = useSearchPageStyles();

  useMemo(() => {
    const storageLanguage = localStorage.getItem("i18nextLng");
    switch (storageLanguage) {
      case "de":
        setLanguage(Languages.de);
        break;
      default:
        setLanguage(Languages.en);
        break;
    }
    return storageLanguage;
  }, [setLanguage]);

  const path = useMemo(() => history.location.search.slice(7), [
    history.location.search,
  ]);

  useEffect(() => {
    if (path) {
      onInputChange(path);
      fetchData(path);
    }
  }, [history.location.search, fetchData, onInputChange, path]);

  const searchBtn = (e: React.FormEvent) => {
    e.preventDefault();
    path !== inputValue && fetchData(inputValue);
    history.push(`/search?query=${inputValue}`);
  };

  return (
    <div className={classes.searchRoot}>
      <div className={classes.languagePickerContainer}>
        <select
          className={classes.languagePickerDropbox}
          value={language}
          onChange={(e) => {
            const currentLang = e.target.value as Languages;
            setLanguage(currentLang);
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
      <form onSubmit={searchBtn}>
        <input
          className={classes.searchInput}
          value={inputValue}
          placeholder={t("search_input.input_placeholder")}
          onChange={(e) => onInputChange(e.target.value)}
        />
        <div className={classes.searchBtns}>
          <button
            type="submit"
            disabled={!isBtnActive}
            className={classes.submitBtn}
          >
            {t("search_input.submit")}
          </button>
        </div>
      </form>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
