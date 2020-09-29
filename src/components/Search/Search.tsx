import React from "react";
import { connect } from "react-redux";
import { rootState } from "../../store";
import { setInput, setSearch } from "../../store/actions";
import { InputAction, SearchInputAction } from "../../store/types";
import styles from "./Search.module.css";

const mapStateToProps = (state: rootState) => ({
  inputValue: state.inputReducer.value,
  isBtnActive: state.btnReducer.isActive,
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    onInputChange: (data: string): InputAction => dispatch(setInput({ value: data})),
    setSearchValue: (data: string): SearchInputAction => dispatch(setSearch({ value: data})),
  }
};

function Search(props: any) {
  const { inputValue, isBtnActive, onInputChange, setSearchValue }: {
    inputValue: string,
    isBtnActive: boolean,
    onInputChange: (data: string) => InputAction,
    setSearchValue: (data: string) => SearchInputAction
  } = props;

  const searchBtn = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchValue(inputValue);
  };

  return (
    <div className={styles.searchRoot}>
      <form>
        <input
          placeholder="Search"
          className={styles.searchInput}
          value={inputValue}
          onChange={(e) => onInputChange(e.target.value)}
        />
        <div className={styles.searchBtns}>
          <button className={styles.btn} type="submit" onClick={searchBtn} disabled={!isBtnActive}>Search</button>
        </div>
      </form>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);