import { TextField } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete/Autocomplete";
import React, { useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import CustomSubmitBtn from "../../elements/CustomSubmitBtn/CustomSubmitBtn";
import CustomOutlinedInput from "../../elements/CustomTextField/CustomOutlinedInput";
import { Namespaces } from "../../i18n";
import { rootState } from "../../store";
import { setInterfaceLanguageAction } from "../../store/languages/actions";
import { InterfaceLanguageAction } from "../../store/languages/types";
import {
  setInputChangeAction,
  setSearchValueAction,
} from "../../store/search/actions";
import { InputChangeAction, SearchValueAction } from "../../store/search/types";
import { Languages } from "../../types/Languages";
import { useSearchPageStyles } from "./SearchPage.style";

const mapStateToProps = (state: rootState) => ({
  inputValue: state.search.inputValue,
  isBtnActive: state.search.isButtonActive,
  language: state.languages.interfaceLanguage,
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    onInputChange: (input: string): InputChangeAction =>
      dispatch(setInputChangeAction(input)),
    setSearchValue: (value: string): SearchValueAction =>
      dispatch(setSearchValueAction(value)),
    setLanguage: (lang: Languages): InterfaceLanguageAction =>
      dispatch(setInterfaceLanguageAction(lang)),
  };
};

type SearchPageProps = {
  inputValue: string;
  isBtnActive: boolean;
  language: Languages;
  onInputChange: (input: string) => InputChangeAction;
  setSearchValue: (value: string) => SearchValueAction;
  setLanguage: (lang: Languages) => InterfaceLanguageAction;
};

function SearchPage({
  inputValue,
  isBtnActive,
  language,
  onInputChange,
  setSearchValue,
  setLanguage,
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
      case "en":
        setLanguage(Languages.en);
        break;
      default:
        setLanguage(Languages.en);
        break;
    }
    return storageLanguage;
  }, [setLanguage]);

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
    <div className={classes.searchRoot}>
      <Autocomplete
        options={Object.values(Languages)}
        disableClearable
        size="small"
        className={classes.languageInput}
        value={language}
        onChange={(e, value) => {
          setLanguage(value);
          i18n.changeLanguage(value);
        }}
        renderInput={(params) => <TextField {...params} variant="outlined" />}
      />
      <form>
        <CustomOutlinedInput
          id="outlined-basic"
          className={classes.searchInput}
          placeholder={t("search_input.input_placeholder")}
          value={inputValue}
          onChange={(e) => onInputChange(e.target.value)}
        />
        <div className={classes.searchBtns}>
          <CustomSubmitBtn
            type="submit"
            variant="outlined"
            onClick={searchBtn}
            disabled={!isBtnActive}
          >
            {t("search_input.submit")}
          </CustomSubmitBtn>
        </div>
      </form>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
