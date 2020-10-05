import React, { useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useQuery } from "react-query";
import { connect } from "react-redux";
import { fetchFakeData } from "../../services/fetchFakeData";
import { rootState } from "../../store";
import {
  setActiveTabAction,
  setButtonStateAction,
  setSearchResultAction,
} from "../../store/search/actions";
import {
  ActiveTabAction,
  ButtonStateAction,
  DataObj,
  SearchResultAction,
} from "../../store/search/types";
import SearchPage from "../SearchPage/SearchPage";
import Tab from "../Tab/Tab";
import styles from "./ContentPage.module.css";
import { Namespaces } from "../../i18n";
import { CircularProgress } from "@material-ui/core";

const mapStateToProps = (state: rootState) => ({
  activeTab: state.search.activeTab,
  searchResult: state.search.searchResult,
  searchValue: state.search.searchValue,
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    setActiveTab: (tab: string): ActiveTabAction =>
      dispatch(setActiveTabAction(tab)),
    setSearchResult: (searchData: DataObj[]): SearchResultAction =>
      dispatch(setSearchResultAction(searchData)),
    setButtonState: (isBtnActive: boolean): ButtonStateAction =>
      dispatch(setButtonStateAction(isBtnActive)),
  };
};

type ContentPageProps = {
  activeTab: string;
  searchResult: DataObj[];
  searchValue: string;
  setActiveTab: (tab: string) => ActiveTabAction;
  setSearchResult: (searchData: DataObj[]) => SearchResultAction;
  setButtonState: (isBtnActive: boolean) => ButtonStateAction;
};

function ContentPage({
  activeTab,
  searchResult,
  searchValue,
  setActiveTab,
  setSearchResult,
  setButtonState,
}: ContentPageProps) {
  const { t } = useTranslation(Namespaces.Search);
  const fetchQuery = useQuery(["fetchData", searchValue], fetchFakeData);

  const queryLoading = useMemo(() => fetchQuery.status === "loading", [
    fetchQuery.status,
  ]);

  const queryData = useMemo(() => fetchQuery.data || [], [fetchQuery.data]);

  useEffect(() => {
    setSearchResult(queryData);
    setButtonState(!queryLoading);
  }, [queryData, queryLoading, setButtonState, setSearchResult]);

  return (
    <>
      <SearchPage />
      <div className={styles.contentRoot}>
        {queryLoading ? (
          <CircularProgress color="primary" className={styles.loading} />
        ) : // <div>{t("loading")}</div>
        !queryLoading && !searchResult.length ? (
          <div>{t("without_result")}</div>
        ) : (
          <>
            <div className={styles.contentTabs}>
              {searchResult.map((item) => {
                const { id, title } = item;

                return (
                  <div key={id}>
                    <Tab
                      label={title}
                      activeTab={activeTab}
                      id={id}
                      onClick={setActiveTab}
                    />
                  </div>
                );
              })}
            </div>
            <div className={styles.contentText}>
              {searchResult.map((item) => {
                if (item.id === activeTab) {
                  return (
                    <div key={item.id}>
                      <p>{item.title}</p>
                      <div>{item.text}</div>
                    </div>
                  );
                }
                return undefined;
              })}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(ContentPage);
