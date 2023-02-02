import { Typography } from "@mui/material";

function Logo() {
  return (
    <Typography
      sx={({ palette }) => ({
        display: "inline",
        color: palette.primary.main,
        fontWeight: 600,
        fontSize: "clamp(1.25rem, 4vw, 2rem)",
        fontFamily: "'Outfit', sans-serif",
        lineHeight: 1,
      })}
    >
      Dream Escape
    </Typography>
  );
}

export default Logo;
