import { makeStyles } from "@material-ui/core";

export const useContentPageStyles = makeStyles((theme) => ({
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

    [theme.breakpoints.down("xs")]: {
      marginRight: 0,
    },
  },
  contentText: {
    padding: "10px",
    width: "500px",
    height: "300px",
    border: " 1px solid gainsboro",
    borderRadius: "10px",

    [theme.breakpoints.down("xs")]: {
      width: "290px",
      height: "400px",
    },
  },
}));
