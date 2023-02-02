import { createTheme } from "@mui/material";
import commonStyles from "./commonStyles";

const bgColor = "#1f2321";

const dark = createTheme({
  ...commonStyles,
  palette: {
    mode: "dark",
    background: {
      default: bgColor,
      paper: bgColor,
    },
  },
});

export default dark;
