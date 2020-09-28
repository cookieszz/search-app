import React, { useEffect, useMemo } from "react";
import { useQuery } from "react-query";
import { connect } from "react-redux";
import { fetchFakeData } from "../../services/fetchFakeData";
import { rootState } from "../../store";
import { addData, setTab, toggleBtn } from "../../store/actions";
import { activeTabAction, buttonAction, dataAction, dataState } from "../../store/types";
import Tab from "../Tab/Tab";

import "./Content.css"

const mapStateToProps = (state: rootState) => ({
  activeTab: state.activeTabReducer.activeTab,
  visibleData: state.dataReducer,
  searchValue: state.searchInputReducer.value,
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    setTab: (data: string): activeTabAction => dispatch(setTab({ activeTab: data })),
    addData: (data: dataState[]): dataAction => dispatch(addData(data)),
    onBtnActive: (data: boolean) => dispatch(toggleBtn({ isActive: data})),
  }
}

function Content(props: any) {
  const { activeTab, visibleData, setTab, addData, searchValue, onBtnActive }: {
    activeTab: string,
    visibleData: dataState[],
    searchValue: string,
    setTab: (data: string) => activeTabAction,
    addData: (data: dataState[]) => dataAction,
    onBtnActive: (data: boolean) => buttonAction,
  } = props;

  const fetchQuery = useQuery(["fetchData", searchValue], fetchFakeData);

  const queryLoading = useMemo(() => fetchQuery.status === "loading", [fetchQuery.status]);

  const queryData = useMemo(() => fetchQuery.data || [], [fetchQuery.data]);

  useEffect(() => {
    addData(queryData);
    onBtnActive(!queryLoading);
  }, [addData, onBtnActive, queryData, queryLoading])

  return (
    <div className="contentRoot">
      {queryLoading ?
        <div>Loading...</div> :
        !queryLoading && !visibleData.length ?
          <div>Can't find any data</div> :
          <>
            <div className="contentTabs">
              {visibleData.map(item => {
                const { id, title } = item;

                return (
                  <div key={id}>
                    <Tab label={title} activeTab={activeTab} id={id} onClick={setTab} />
                  </div>
                )
              })}
            </div>
            <div className="contentText">
              {visibleData.map(item => {
                if (item.id === activeTab) {
                  return (
                    <div key={item.id}>
                      <p>{item.title}</p>
                      <div>{item.text}</div>
                    </div>
                  )
                }
                return undefined;
              })}
            </div>
          </>
      }
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);