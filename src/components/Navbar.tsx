import { AppBar, Toolbar } from "@mui/material";
import Logo from "./Logo";

function Navbar() {
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
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
