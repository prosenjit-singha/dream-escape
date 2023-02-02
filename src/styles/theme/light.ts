import { createTheme } from "@mui/material";
import commonStyles from "./commonStyles";

const light = createTheme({
  ...commonStyles,
  palette: {
    mode: "light",
    primary: {
      main: "#118d47",
    },
  },
});

export default light;
