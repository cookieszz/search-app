import React from "react";
import classes from "./Tab.module.scss";

type TabProps = {
  label: string;
  id: string;
  activeTab: string;
  onClick: (tab: string) => void;
};

function Tab({ label, activeTab, id, onClick }: TabProps) {
  let style = `${classes.tabRoot}`;

  if (id === activeTab) {
    style += ` ${classes.activeTab}`;
  }

  return (
    <div className={style} onClick={() => onClick(id)}>
      {label}
    </div>
  );
}

export default Tab;
