import React from "react";
import { Redirect, Route, Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import SearchPage from "../../pages/SearchPage/SearchPage";
import { BasicRoutes } from "../../constants/basicRoutes";
import ContentPage from "../../pages/ContentPage/ContentPage";
import { useAppStyles } from "./App.styles";
// import classes from "./App.module.scss";

const appHistory = createBrowserHistory();

function App() {
  const classes = useAppStyles();

  return (
    <div className={classes.appRoot}>
      <Router history={appHistory}>
        <Switch>
          <Route exact path={BasicRoutes.SEARCH} component={ContentPage} />
          <Route exact path={BasicRoutes.HOME} component={SearchPage} />
          <Redirect to={BasicRoutes.HOME} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
