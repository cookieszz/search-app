import React from "react";
import { Redirect, Route, Router, Switch } from "react-router-dom";
import ContentPage from "../ContentPage/ContentPage";
import styles from "./App.module.css";
import { createBrowserHistory } from "history";
import SearchPage from "../SearchPage/SearchPage";

const appHistory = createBrowserHistory();

function App() {

  return (
    <div className={styles.appRoot}>
      <Router history={appHistory}>
        <Switch>
          <Route exact path="/search" component={ContentPage}/>
          <Route exact path="/" component={SearchPage}/>
          <Redirect to="/"/>
        </Switch>
      </Router>
    </div>
  )
}

export default App;