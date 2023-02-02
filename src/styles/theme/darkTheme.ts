import { createTheme } from "@mui/material";
import commonStyles from "./commonStyles";

const bgColor = "#1f2321";

const darkTheme = createTheme({
  ...commonStyles,
  palette: {
    mode: "dark",
    primary: {
      main: "#21cc6b",
    },
    background: {
      default: bgColor,
      paper: bgColor,
    },
  },
});

export default darkTheme;
