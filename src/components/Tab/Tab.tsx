import React from "react";

import "./Tab.css";

type TabProps = {
  label: string;
  id: string;
  activeTab: string;
  onClick: (tab: string) => void;
};

function Tab(props: TabProps) {

  const { label, activeTab, id, onClick } = props;

  let style = "tabRoot";

  if (id === activeTab) {
    style += " activeTab";
  }

  return <div className={style} onClick={() => onClick(id)}>{label}</div>
}

export default Tab;