import React from "react";
import styles from "./Tab.module.css";

type TabProps = {
  label: string;
  id: string;
  activeTab: string;
  onClick: (tab: string) => void;
};

function Tab(props: TabProps) {

  const { label, activeTab, id, onClick } = props;

  let style = `${styles.tabRoot}`;

  if (id === activeTab) {
    style += ` ${styles.activeTab}`;
  }

  return <div className={style} onClick={() => onClick(id)}>{label}</div>
}

export default Tab;