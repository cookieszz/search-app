import { TextField } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete/Autocomplete";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import CustomSubmitBtn from "../../elements/CustomSubmitBtn/CustomSubmitBtn";
import CustomOutlinedInput from "../../elements/CustomTextField/CustomOutlinedInput";
import { Namespaces } from "../../i18n";
import { rootState } from "../../store";
import {
  setInputChangeAction,
  setSearchValueAction,
} from "../../store/search/action";
import { InputChangeAction, SearchValueAction } from "../../store/search/types";
import { Languages } from "../../types/Languages";
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

  const classes = useSearchPageStyles();

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
        value={lang}
        onChange={(e, value) => {
          setLang(value);
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
