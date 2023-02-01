import {
  Grid,
  Typography,
  Stack,
  Button,
  Box,
  IconButton,
  Tooltip,
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

  const toggleOpen = () => setOpen((prev) => !prev);

  return (
    <Stack
      sx={{
        borderRadius: 3,
        p: [2, 3],
        mb: 4,
        mx: [2, 3, 4],
        border: "1px solid white",
        boxShadow:
          "11px 11px 22px #bababa, -11px -11px 22px #ffffff, inset 11px 11px 22px #f0f0f0",
      }}
    >
      <Stack direction="row">
        {/* Header */}
        <Grid container sx={{ flexBasis: { sm: "70%", md: "80%" } }}>
          {/* Company Name */}
          <Grid item xs={12} md={6}>
            <Typography
              component="h1"
              sx={{
                fontSize: "clamp(1.35rem, 4vw, 1.5rem)",
                fontWeight: 500,
                mb: 1,
              }}
            >
              {data.company.name}
            </Typography>
          </Grid>
          {/* Contact */}
          <Grid item xs={4} md={2}>
            <Stack>
              <Label>Contact</Label>
              <Typography>{data.name}</Typography>
            </Stack>
          </Grid>
          {/* City */}
          <Grid item xs={4} md={2}>
            <Label>City</Label>
            <Typography>{data.address.city}</Typography>
          </Grid>
          {/* State */}
          <Grid item xs={4} md={2}>
            <Label>State</Label>
            <Typography>{data.address.suite}</Typography>
          </Grid>
        </Grid>
        {/* Show More Button */}
        <Box
          sx={{
            height: "fit-content",
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
