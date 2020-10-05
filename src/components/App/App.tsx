import React from "react";
import { Redirect, Route, Router, Switch } from "react-router-dom";
import ContentPage from "../ContentPage/ContentPage";
import styles from "./App.module.css";
import { createBrowserHistory } from "history";
import SearchPage from "../SearchPage/SearchPage";
import { MuiThemeProvider } from "@material-ui/core";
import { appTheme } from "../../theme";
import { BasicRoutes } from "../../constants/basicRoutes";

const appHistory = createBrowserHistory();

function App() {
  return (
    <MuiThemeProvider theme={appTheme}>
      <div className={styles.appRoot}>
        <Router history={appHistory}>
          <Switch>
            <Route exact path={BasicRoutes.SEARCH} component={ContentPage} />
            <Route exact path={BasicRoutes.HOME} component={SearchPage} />
            <Redirect to={BasicRoutes.HOME} />
          </Switch>
        </Router>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
