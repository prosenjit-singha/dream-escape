import {
  Collapse,
  Stack,
  Grid,
  Box,
  Typography,
  styled,
  Divider,
} from "@mui/material";
import { UserData } from "../../types/Response.type";

type Props = {
  open: boolean;
  data: UserData;
};
function Details({ open, data }: Props) {
  return (
    <Collapse in={open}>
      <Divider sx={{ my: 1 }} />
      <Stack>
        <Box sx={{ mb: 2 }}>
          <Typography variant="h6">Description</Typography>
          <Typography>{data.company.catchPhrase}</Typography>
        </Box>
        <Grid container>
          <Grid item sm={6} md={4}>
            <Block label="Contact Name" value={data.name} />
            <Block label="User Name" value={data.username} />
            <Block label="Email" value={data.email} />
            <Block label="Phone" value={data.phone} />
          </Grid>
          <Grid item sm={6} md={4}>
            <Block label="Address" value={data.address.street} />
            <Block label="City" value={data.address.city} />
            <Block label="State" value="Delhi" />
            <Block label="Country" value="India" />
          </Grid>
        </Grid>
      </Stack>
    </Collapse>
  );
}

const Label = styled("h3")(() => ({
  fontSize: "clamp(1rem, 3vw, 1.05rem)",
  fontWeight: 500,
}));

const Block = ({ label, value }: { label: string; value: string | number }) => (
  <Box sx={{ mb: 1 }}>
    <Label>{label}</Label>
    <Typography>{value}</Typography>
  </Box>
);

export default Details;
