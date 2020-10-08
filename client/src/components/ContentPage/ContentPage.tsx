import React, { useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";
import { rootState } from "../../store";
import {
  setActiveTabAction,
  setButtonStateAction,
} from "../../store/search/actions";
import {
  ActiveTabAction,
  ButtonStateAction,
  DataObj,
} from "../../store/search/types";
import SearchPage from "../SearchPage/SearchPage";
import Tab from "../Tab/Tab";
import { Namespaces } from "../../i18n";
import { CircularProgress } from "@material-ui/core";
import { useContentPageStyles } from "./ContentPage.styles";

const mapStateToProps = (state: rootState) => ({
  activeTab: state.search.activeTab,
  searchResult: state.search.searchResult,
  searchValue: state.search.searchValue,
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    setActiveTab: (tab: string): ActiveTabAction =>
      dispatch(setActiveTabAction(tab)),
    setButtonState: (isBtnActive: boolean): ButtonStateAction =>
      dispatch(setButtonStateAction(isBtnActive)),
  };
};

type ContentPageProps = {
  activeTab: string;
  searchResult: {
    isLoading: boolean;
    isError?: string | object;
    payload: DataObj[];
  };
  searchValue: string;
  setActiveTab: (tab: string) => ActiveTabAction;
  setButtonState: (isBtnActive: boolean) => ButtonStateAction;
};

function ContentPage({
  activeTab,
  searchResult,
  searchValue,
  setActiveTab,
  setButtonState,
}: ContentPageProps) {
  const { t } = useTranslation(Namespaces.Search);
  const classes = useContentPageStyles();

  const { isLoading, isError, payload } = searchResult;
  const loading = useMemo(() => isLoading, [isLoading]);
  const error = useMemo(() => isError, [isError]);
  error && console.log(error);
  const searchedData = useMemo(() => payload, [payload]);

  useEffect(() => {
    setButtonState(!isLoading);
  }, [isLoading, setButtonState]);

  return (
    <>
      <SearchPage />
      <div className={classes.contentRoot}>
        {error ? (
          <div>{t("errors.search_error")}</div>
        ) : loading ? (
          <CircularProgress color="primary" />
        ) : !loading && !searchedData.length ? (
          <div>{t("without_result")}</div>
        ) : (
          <>
            <div className={classes.contentTabs}>
              {searchedData.map((item) => {
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
            <div className={classes.contentText}>
              {searchedData.map((item) => {
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
