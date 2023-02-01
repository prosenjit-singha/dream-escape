import { Grid } from "@mui/material";
import type { UserData } from "../../types/Response.type";

type Props = {
  data: UserData;
};

function Item({ data }: Props) {
  return (
    <Grid
      container
      sx={{
        borderRadius: 2,
        p: [2, 3],
        mb: 2,
        boxShadow: "5px 5px 10px rgba(0,0,0,0.25)",
      }}
    >
      {/* Header */}
      <Grid item>
        <Grid>{data.name}</Grid>
      </Grid>
    </Grid>
  );
}

export default Item;
