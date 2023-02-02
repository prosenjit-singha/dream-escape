import { Typography } from "@mui/material";

function Label({ children }: { children: string }) {
  return (
    <Typography
      variant="h6"
      component="h2"
      sx={{ fontSize: "clamp(0.85rem, 4vw, 1.05rem)", fontWeight: 500 }}
      textTransform="uppercase"
      // color="text.secondary"
    >
      {children}
    </Typography>
  );
}

export default Label;
