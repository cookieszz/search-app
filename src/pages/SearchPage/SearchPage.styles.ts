import { createUseStyles } from "react-jss";

export const useSearchPageStyles = createUseStyles({
  searchRoot: {
    margin: "50px 0 10px 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },
  languagePickerContainer: {
    marginBottom: "10px",
  },
  languagePickerDropbox: {
    padding: "5px",
    height: "35px",
    width: "60px",
    fontSize: "16px",
    borderRadius: "10px",
    border: "1.5px solid #d3d3d3",
    backgroundColor: "#ffffff",
    outline: 0,

    "&:active": {
      border: "1.5px solid $base-selected-color",
    },
  },
  searchInput: {
    width: "550px",
    height: "48px",
    borderRadius: "15px",
    padding: "0 10px",
    border: "1.5px solid #d3d3d3",
    outline: 0,
    fontSize: "16px",

    "&:focus": {
      border: "1.5px solid #b8b8b8",
    },
  },
  searchBtns: {
    display: "flex",
    justifyContent: "center",
    margin: "10px 0",
  },
  submitBtn: {
    borderRadius: "20px",
    padding: " 10px 25px",
    fontSize: "16px",
    outline: 0,
    border: "1.5px solid #d3d3d3",
    backgroundColor: "#ffffff",
    cursor: "pointer",

    "&:hover": {
      backgroundColor: "#d3d3d3",
    },

    "&:active": {
      backgroundColor: "#b8b8b8",
    },
  },
  "@media (max-width: 576px)": {
    searchInput: {
      width: "290px",
    },
  },
});
