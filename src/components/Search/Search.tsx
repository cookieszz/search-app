import React from "react";
import { connect } from "react-redux";
import { rootState } from "../../store";
import { setInput, setSearch } from "../../store/actions";
import { inputAction, searchInputAction } from "../../store/types";

import "./Search.css"

const mapStateToProps = (state: rootState) => ({
  inputValue: state.inputReducer.value,
  isBtnActive: state.btnReducer.isActive,
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    onInputChange: (data: string): inputAction => dispatch(setInput({ value: data})),
    setSearchValue: (data: string): searchInputAction => dispatch(setSearch({ value: data})),
  }
};

function Search(props: any) {
  const { inputValue, isBtnActive, onInputChange, setSearchValue }: {
    inputValue: string,
    isBtnActive: boolean,
    onInputChange: (data: string) => inputAction,
    setSearchValue: (data: string) => searchInputAction
  } = props;

  const searchBtn = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchValue(inputValue);
  };

  return (
    <div className="searchRoot">
      <form>
        <input
          placeholder="Search"
          className="searchInput"
          value={inputValue}
          onChange={(e) => onInputChange(e.target.value)}
        />
        <div className="searchBtns">
          <button className="btn" type="submit" onClick={searchBtn} disabled={!isBtnActive}>Search</button>
        </div>
      </form>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);