import { Box, Alert } from "@mui/material";
import noData from "../../assets/no-data.svg";

function NoDataFound() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: [2],
      }}
    >
      <Box
        src={noData}
        alt="No Data Found"
        component="img"
        sx={{
          width: "clamp(180px, 70vw, 300px)",
        }}
      />
      <Alert variant="outlined" severity="warning" color="warning">
        No Company Found!
      </Alert>
    </Box>
  );
}

export default NoDataFound;
