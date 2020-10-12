import { createUseStyles } from "react-jss";

export const useTabStyles = createUseStyles({
  tabRoot: {
    padding: "10px",
    marginBottom: "10px",
    border: "1px solid #d3d3d3",
    borderRadius: "10px",
    cursor: "pointer",

    "&:hover:not($activeTab)": {
      backgroundColor: "#f5f5f5",
    },
  },

  activeTab: {
    backgroundColor: "#d4d4d4",
  },
});
