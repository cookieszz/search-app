import { TextField } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete/Autocomplete";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { Namespaces } from "../../i18n";
import { rootState } from "../../store";
import {
  setInputChangeAction,
  setSearchValueAction,
} from "../../store/search/action";
import { InputChangeAction, SearchValueAction } from "../../store/search/types";
import { Languages } from "../../types/Languages";
import styles from "./SearchPage.module.css";
import { useSearchPageStyles } from "./SearchPage.style";

const mapStateToProps = (state: rootState) => ({
  inputValue: state.search.inputValue,
  isBtnActive: state.search.isButtonActive,
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    onInputChange: (input: string): InputChangeAction =>
      dispatch(setInputChangeAction(input)),
    setSearchValue: (value: string): SearchValueAction =>
      dispatch(setSearchValueAction(value)),
  };
};

type SearchPageProps = {
  inputValue: string;
  isBtnActive: boolean;
  onInputChange: (input: string) => InputChangeAction;
  setSearchValue: (value: string) => SearchValueAction;
};

function SearchPage({
  inputValue,
  isBtnActive,
  onInputChange,
  setSearchValue,
}: SearchPageProps) {
  const history = useHistory();
  const { t, i18n } = useTranslation(Namespaces.Search);
  const [lang, setLang] = useState<Languages>(Languages.en);

  const materialStyles = useSearchPageStyles();

  useEffect(() => {
    const path = history.location.search.slice(7);
    if (path) {
      onInputChange(path);
      setSearchValue(path);
    }
  }, [history.location.search, onInputChange, setSearchValue]);

  const searchBtn = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchValue(inputValue);
    history.push(`/search?query=${inputValue}`);
  };

  return (
    <div className={styles.searchRoot}>
      <form>
        <input
          placeholder={t("search_input.input_placeholder")}
          className={styles.searchInput}
          value={inputValue}
          onChange={(e) => onInputChange(e.target.value)}
        />
        <div className={styles.searchBtns}>
          <button
            className={styles.btn}
            onClick={searchBtn}
            disabled={!isBtnActive}
          >
            {t("search_input.submit")}
          </button>
        </div>
      </form>
      <Autocomplete
        options={Object.values(Languages)}
        // getOptionLabel
        disableClearable
        size="small"
        className={materialStyles.languageInput}
        value={lang}
        onChange={(e, value) => {
          setLang(value);
          i18n.changeLanguage(value);
        }}
        renderInput={(params) => <TextField {...params} variant="outlined" />}
      />
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
