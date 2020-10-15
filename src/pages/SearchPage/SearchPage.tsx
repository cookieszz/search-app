import LanguagePicker from "components/LanguagePicker/LanguagePicker";
import { Namespaces } from "i18n";
import React, { useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { RootState } from "store";
import {
  changeSearchInputAction,
  getSearchResultThunk,
} from "store/search/actions";
import { ChangeSearchInputAction } from "store/search/types";
import classes from "./SearchPage.module.scss";

const mapStateToProps = (state: RootState) => ({
  searchInputValue: state.search.searchInputValue,
  isBtnActive: state.search.isButtonActive,
});

const mapDispatchToProps = (dispatch: any) => ({
  onSearchInputChange: (input: string): ChangeSearchInputAction =>
    dispatch(changeSearchInputAction(input)),
  fetchPosts: (value: string): Promise<void> =>
    dispatch(getSearchResultThunk(value)),
});

type SearchPageProps = {
  searchInputValue: string;
  isBtnActive: boolean;
  onSearchInputChange: (input: string) => ChangeSearchInputAction;
  fetchPosts: (value: string) => Promise<void>;
};

function SearchPage({
  searchInputValue,
  isBtnActive,
  onSearchInputChange,
  fetchPosts,
}: SearchPageProps) {
  const history = useHistory();
  const { t } = useTranslation(Namespaces.Search);

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
        <LanguagePicker />
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
