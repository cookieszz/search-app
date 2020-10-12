import React, { useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";
import { RootState } from "../../store";
import {
  setActiveTabAction,
  setButtonStateAction,
} from "../../store/search/actions";
import {
  ActiveTabAction,
  ButtonStateAction,
  PostDataObj,
} from "../../store/search/types";
import SearchPage from "../SearchPage/SearchPage";
import Tab from "../../components/Tab/Tab";
import { Namespaces } from "../../i18n";
import classes from "./ContentPage.module.scss";

const mapStateToProps = (state: RootState) => ({
  activeTab: state.search.activeTab,
  searchResult: state.search.searchResult,
});

const mapDispatchToProps = (dispatch: any) => ({
  setActiveTab: (tab: string): ActiveTabAction =>
    dispatch(setActiveTabAction(tab)),
  setButtonState: (isBtnActive: boolean): ButtonStateAction =>
    dispatch(setButtonStateAction(isBtnActive)),
});

type ContentPageProps = {
  activeTab: string;
  searchResult: {
    isLoading: boolean;
    isError?: string | object;
    data: PostDataObj[];
  };
  setActiveTab: (tab: string) => ActiveTabAction;
  setButtonState: (isBtnActive: boolean) => ButtonStateAction;
};

function ContentPage({
  activeTab,
  searchResult,
  setActiveTab,
  setButtonState,
}: ContentPageProps) {
  const { t } = useTranslation(Namespaces.Search);

  const { isLoading, isError, data } = searchResult;
  const loading = useMemo(() => isLoading, [isLoading]);
  const error = useMemo(() => isError, [isError]);
  error && console.log(error);
  const searchedData = useMemo(() => data, [data]);

  useEffect(() => {
    setButtonState(!isLoading);
  }, [isLoading, setButtonState]);

  return (
    <div className={classes.appRoot}>
      <SearchPage />
      <div className={classes.contentRoot}>
        {error ? (
          <div>{t("errors.search_error")}</div>
        ) : loading ? (
          <div>{t("loading")}</div>
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
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(ContentPage);
