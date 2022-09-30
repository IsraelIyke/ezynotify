import { Box, Grid } from "@mui/material";
import bg from "../public/images/bg1.jpg";
import Image from "next/image";

export default function Img() {
  return (
    <Box flexGrow={1}>
      <Grid container spacing={1}>
        <Image src={bg} alt="goog morning" width={600} height={330} />
      </Grid>
    </Box>
  );
}
