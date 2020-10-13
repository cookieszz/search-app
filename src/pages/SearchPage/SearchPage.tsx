import { Namespaces } from "i18n";
import React, { useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { RootState } from "store";
import { changeInterfaceLanguageAction } from "store/languages/actions";
import { ChangeInterfaceLanguageAction } from "store/languages/types";
import {
  changeSearchInputAction,
  getSearchResultThunk,
} from "store/search/actions";
import { ChangeSearchInputAction } from "store/search/types";
import { Languages } from "types/common/Languages";
import classes from "./SearchPage.module.scss";

const mapStateToProps = (state: RootState) => ({
  searchInputValue: state.search.searchInputValue,
  isBtnActive: state.search.isButtonActive,
  language: state.languages.interfaceLanguage,
});

const mapDispatchToProps = (dispatch: any) => ({
  onSearchInputChange: (input: string): ChangeSearchInputAction =>
    dispatch(changeSearchInputAction(input)),
  fetchPosts: (value: string): Promise<void> =>
    dispatch(getSearchResultThunk(value)),
  changeLanguage: (lang: Languages): ChangeInterfaceLanguageAction =>
    dispatch(changeInterfaceLanguageAction(lang)),
});

type SearchPageProps = {
  searchInputValue: string;
  isBtnActive: boolean;
  language: Languages;
  onSearchInputChange: (input: string) => ChangeSearchInputAction;
  changeLanguage: (lang: Languages) => ChangeInterfaceLanguageAction;
  fetchPosts: (value: string) => Promise<void>;
};

function SearchPage({
  searchInputValue,
  isBtnActive,
  language,
  onSearchInputChange,
  changeLanguage,
  fetchPosts,
}: SearchPageProps) {
  const history = useHistory();
  const { t, i18n } = useTranslation(Namespaces.Search);

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

  const path = useMemo(() => history.location.search.slice(7), [
    history.location.search,
  ]);

  useEffect(() => {
    if (path) {
      onSearchInputChange(path);
      fetchPosts(path);
    }
  }, [history.location.search, path, onSearchInputChange, fetchPosts]);

  const searchBtn = (e: React.FormEvent) => {
    e.preventDefault();
    if (!path) {
      fetchPosts(searchInputValue);
      history.push(`/search?query=${searchInputValue}`);
    }
    if (path && path !== searchInputValue) {
      fetchPosts(searchInputValue);
      history.push(`/search?query=${searchInputValue}`);
    }
  };

  return (
    <div className={classes.searchRoot}>
      <div className={classes.searchContent}>
        <div className={classes.languagePickerContainer}>
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
        <form onSubmit={searchBtn}>
          <input
            className={classes.searchInput}
            value={searchInputValue}
            placeholder={t("search_input.input_placeholder")}
            onChange={(e) => onSearchInputChange(e.target.value)}
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
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
