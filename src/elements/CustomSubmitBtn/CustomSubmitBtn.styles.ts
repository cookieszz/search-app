import { Button, Theme, withStyles } from "@material-ui/core";

export const CustomSubmitBtn = withStyles((theme: Theme) => ({
  root: {
    borderRadius: "20px",
    padding: "8px 20px",
    fontSize: "14px",
  },
}))(Button);
