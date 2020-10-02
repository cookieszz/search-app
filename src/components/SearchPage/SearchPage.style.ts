import { makeStyles } from "@material-ui/core";

export const useSearchPageStyles = makeStyles((theme) => ({
  searchRoot: {
    margin: "50px 0 10px 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },
  searchBtns: {
    display: "flex",
    justifyContent: "center",
    margin: "10px 0",
  },
  languageInput: {
    marginBottom: 10,
    width: 120,
  },
  searchInput: {
    width: 600,

    [theme.breakpoints.down("xs")]: {
      width: 320,
    },
  },
}));
