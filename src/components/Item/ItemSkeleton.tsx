import { Stack, Grid, Skeleton, Box } from "@mui/material";

function ItemSkeleton() {
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
      <Stack direction="row" spacing={2} alignItems="center">
        {/* Header */}
        <Grid spacing={1} container sx={{ flexBasis: "100%" }}>
          {/* Company Name */}
          <Grid item xs={12} md={6}>
            <Skeleton height={45} width={220} />
            <Skeleton height={20} width={180} />
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
