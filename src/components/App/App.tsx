import React from "react";
import Content from "../Content/Content";
import Search from "../Search/Search";

// import styles from "./App.css"
import styles from "./App.module.css";


function App() {

  return (
    <div className={styles.appRoot}>
        <Search />
        <Content />
    </div>
  )
}

export default App;