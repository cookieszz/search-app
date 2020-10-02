import { OutlinedInput, Theme, withStyles } from "@material-ui/core";

export const CustomOutlinedInput = withStyles((theme: Theme) => ({
  root: {
    borderRadius: "20px",
  },
}))(OutlinedInput);
