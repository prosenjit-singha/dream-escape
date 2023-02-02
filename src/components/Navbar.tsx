import { useRef } from "react";
import {
  AppBar,
  Toolbar,
  InputBase,
  IconButton,
  Stack,
  Theme,
  Tooltip,
} from "@mui/material";
import Logo from "./Logo";
import SearchIcon from "@mui/icons-material/Search";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

type Props = {
  theme: Theme;
  darkMode: boolean;
  toggleTheme: () => void;
  searchString: string;
  setSearchString: React.Dispatch<React.SetStateAction<string>>;
};

function Navbar({
  darkMode,
  toggleTheme,
  setSearchString,
  searchString,
}: Props) {
  const inputRef = useRef<HTMLFormElement | null>(null);

  // on submit handler for search
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputRef.current) {
      setSearchString(inputRef.current.value || "");
    }
  };

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
        <Stack
          component="form"
          onSubmit={handleSubmit}
          direction="row"
          sx={{ ml: "auto" }}
        >
          <InputBase
            inputRef={inputRef}
            name="search"
            autoComplete="off"
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search Company Name"
            inputProps={{
              "aria-label": "search company name",
              style: {
                textAlign: "end",
              },
            }}
          />
          <Tooltip title="Search" describeChild>
            <IconButton type="submit">
              <SearchIcon />
            </IconButton>
          </Tooltip>
        </Stack>
        <Tooltip title="Toggle Theme" describeChild>
          <IconButton onClick={toggleTheme} sx={{ display: ["none", "flex"] }}>
            {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
