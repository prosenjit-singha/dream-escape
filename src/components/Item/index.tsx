import {
  Grid,
  Typography,
  Stack,
  Button,
  Box,
  IconButton,
  Tooltip,
  Link,
} from "@mui/material";
import { useState } from "react";
import type { UserData } from "../../types/Response.type";
import Details from "./Details";
import Label from "./Label";
import ArrowDown from "@mui/icons-material/ExpandMoreRounded";

type Props = {
  data: UserData;
};

function Item({ data }: Props) {
  const [open, setOpen] = useState(false);
  const lightShadow =
    "11px 11px 22px #bababa, -11px -11px 22px #ffffff, inset 11px 11px 22px #e9e9e9, inset -11px -11px 22px #f0f0f0";
  const darkShadow =
    "11px 11px 38px #0c0e0d, -11px -11px 38px #323835, inset 11px 11px 22px #1d201f, inset -11px -11px 22px #242826";

  const toggleOpen = () => setOpen((prev) => !prev);

  return (
    <Stack
      sx={({ palette }) => ({
        borderRadius: 3,
        p: [2, 3],
        mb: 4,
        mx: [2, 3, 4],
        border: `1px solid ${
          palette.mode === "dark" ? "rgba(255,255,255,0.05)" : "white"
        }`,
        boxShadow: palette.mode === "dark" ? darkShadow : lightShadow,
      })}
    >
      <Stack direction="row">
        {/* Header */}
        <Grid container sx={{ flexBasis: { sm: "70%", md: "80%" } }}>
          {/* Company Name */}
          <Grid item xs={12} md={6} sx={{ mb: [1, 1, 0] }}>
            <Typography
              component="h1"
              sx={{
                fontSize: "clamp(1.35rem, 4vw, 1.5rem)",
                fontWeight: 500,
                lineHeight: [1],
              }}
            >
              {data.company.name}
            </Typography>

            <Link
              href={data.website}
              target="_blank"
              sx={{ textDecorationLine: "none" }}
            >
              {data.website}
            </Link>
          </Grid>
          {/* Contact */}
          <Grid item xs={6} md={3}>
            <Stack>
              <Label>Contact</Label>
              <Typography>{data.name}</Typography>
            </Stack>
          </Grid>
          {/* City */}
          <Grid item xs={6} md={3}>
            <Label>City</Label>
            <Typography>{data.address.city}</Typography>
          </Grid>
        </Grid>
        {/* Show More Button */}
        <Box
          sx={{
            height: "fit-content",
            // flexBasis: { sm: "30%", md: "20%" },
            my: "auto",
            ml: "auto",
          }}
        >
          <Button
            onClick={toggleOpen}
            variant="outlined"
            sx={{ display: ["none", "flex"] }}
            endIcon={
              <ArrowDown
                sx={{
                  transform: open ? "rotate(-180deg)" : "rotate(0deg)",
                  transition: "transform 350ms ease-out",
                }}
              />
            }
          >
            {open ? "Hide Details" : "View Details"}
          </Button>
          <Tooltip title="Show/hide Details">
            <IconButton
              size="small"
              color="primary"
              sx={({ palette }) => ({
                display: ["flex", "none"],
                border: "1px solid " + palette.primary.main,
              })}
              onClick={toggleOpen}
            >
              <ArrowDown />
            </IconButton>
          </Tooltip>
        </Box>
      </Stack>

      <Details open={open} data={data} />
    </Stack>
  );
}

export default Item;
