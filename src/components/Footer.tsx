import { Box, Typography } from "@mui/material";
import Logo from "./Logo";

function Footer() {
  return (
    <Box
      sx={({ palette }) => ({
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: 100,
        maxWidth: "1400px",
        px: [2, 3, 4],
        py: 2,
        mx: "auto",
        borderTop: `1px solid ${palette.divider}`,
      })}
    >
      <Logo />
      <Typography mt={1}>Made with ❤️ by Prosenjit Singha.</Typography>
    </Box>
  );
}

export default Footer;
