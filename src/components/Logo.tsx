import { Typography } from "@mui/material";

function Logo() {
  return (
    <Typography
      sx={({ palette }) => ({
        color: palette.primary.main,
        fontWeight: 600,
        fontSize: "clamp(1.5rem, 4vw, 2rem)",
        fontFamily: "'Outfit', sans-serif",
      })}
    >
      Dream Escape
    </Typography>
  );
}

export default Logo;
