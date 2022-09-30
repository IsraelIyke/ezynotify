import { Box, Grid } from "@mui/material";
import Text from "./text";

export default function Main() {
  return (
    <Box flexGrow={1} className="main-container">
      <div className="testing">
        {" "}
        <Grid container>
          <Grid item xs={12}>
            <Text />
          </Grid>
        </Grid>
      </div>
    </Box>
  );
}
