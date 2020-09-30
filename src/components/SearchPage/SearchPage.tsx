import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { rootState } from "../../store";
import { setInput, setSearch } from "../../store/actions";
import { InputAction, SearchInputAction } from "../../store/types";
import styles from "./SearchPage.module.css";

const mapStateToProps = (state: rootState) => ({
  inputValue: state.inputReducer.value,
  isBtnActive: state.btnReducer.isActive,
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    onInputChange: (data: string): InputAction =>
      dispatch(setInput({ value: data })),
    setSearchValue: (data: string): SearchInputAction =>
      dispatch(setSearch({ value: data })),
  };
};

type SearchPageProps = {
  inputValue: string;
  isBtnActive: boolean;
  onInputChange: (data: string) => InputAction;
  setSearchValue: (data: string) => SearchInputAction;
};

function SearchPage({
  inputValue,
  isBtnActive,
  onInputChange,
  setSearchValue,
}: SearchPageProps) {
  const history = useHistory();

  useEffect(() => {
    let path = history.location.search.slice(7);
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
          placeholder="*all - to search all"
          className={styles.searchInput}
          value={inputValue}
          onChange={(e) => onInputChange(e.target.value)}
        />
        <div className={styles.searchBtns}>
          <button
            className={styles.btn}
            type="submit"
            onClick={searchBtn}
            disabled={!isBtnActive}
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
