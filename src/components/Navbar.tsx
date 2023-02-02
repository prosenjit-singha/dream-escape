import {
  AppBar,
  Toolbar,
  InputBase,
  IconButton,
  Stack,
  Theme,
} from "@mui/material";
import Logo from "./Logo";
import SearchIcon from "@mui/icons-material/Search";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

type Props = {
  theme: Theme;
  darkMode: boolean;
  toggleTheme: () => void;
};

function Navbar({ darkMode, toggleTheme }: Props) {
  return (
    <AppBar
      position="sticky"
      sx={({ palette }) => ({
        maxWidth: "1400px",
        mx: "auto",
        bgcolor: "transparent",
        color: palette.text.primary,
        boxShadow: "none",
        borderBottom: "1px solid " + palette.divider,
        backdropFilter: "blur(10px)",
      })}
    >
      <Toolbar sx={{ px: [2, 3, 4] }}>
        <Logo />
        <Stack direction="row" sx={{ ml: "auto" }}>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search Company Name"
            inputProps={{
              "aria-label": "search company name",
              style: {
                textAlign: "end",
              },
            }}
          />
          <IconButton>
            <SearchIcon />
          </IconButton>
        </Stack>
        <IconButton onClick={toggleTheme}>
          {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
