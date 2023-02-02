import { Stack, Grid, Skeleton, Box } from "@mui/material";

function ItemSkeleton() {
  const lightShadow =
    "11px 11px 22px #bababa, -11px -11px 22px #ffffff, inset 11px 11px 22px #e9e9e9, inset -11px -11px 22px #f0f0f0";
  const darkShadow =
    "11px 11px 38px #0c0e0d, -11px -11px 38px #323835, inset 11px 11px 22px #1d201f, inset -11px -11px 22px #242826";

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
      <Stack direction="row" spacing={2} alignItems="center">
        {/* Header */}
        <Grid spacing={1} container sx={{ flexBasis: "100%" }}>
          {/* Company Name */}
          <Grid item xs={12} md={6}>
            <Skeleton height={45} sx={{ width: ["80%", "220px"] }} />
            <Skeleton height={20} sx={{ width: ["50%", "220px"] }} />
          </Grid>
          {/* Contact */}
          <Grid item xs={6} md={3}>
            <Stack>
              <Skeleton height={32} />
              <Skeleton />
            </Stack>
          </Grid>
          {/* City */}
          <Grid item xs={6} md={3}>
            <Skeleton height={32} />
            <Skeleton />
          </Grid>
        </Grid>
        {/* Show More Button */}
        <Box
          sx={{
            my: "auto",
            ml: "auto",
          }}
        >
          <Skeleton
            height={50}
            width={150}
            sx={{ display: ["none", "flex"] }}
          />
          {/* Mobile view  */}
          <Skeleton
            variant="circular"
            width={40}
            height={40}
            sx={{ display: ["flex", "none"] }}
          />
        </Box>
      </Stack>
    </Stack>
  );
}

export default ItemSkeleton;
