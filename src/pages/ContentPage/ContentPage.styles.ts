import { createUseStyles } from "react-jss";

export const useContentPageStyles = createUseStyles({
  contentRoot: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    margin: "10px",
  },
  contentTabs: {
    marginRight: "10px",
    width: "290px",
    fontSize: "20px",
    fontWeight: 400,
  },
  contentText: {
    padding: "10px",
    width: "500px",
    height: "300px",
    border: "1px solid #d3d3d3",
    borderRadius: "10px",
  },
  "@media (max-width: 576px)": {
    contentTabs: {
      marginRight: 0,
    },
    contentText: {
      width: "290px",
      height: "400px",
    },
  },
});
