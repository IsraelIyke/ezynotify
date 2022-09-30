import { Box, Grid } from "@mui/material";

export default function Footer() {
  return (
    <Box flexGrow={1} className="footer-sup-container">
      <Grid container className="footer-container">
        <Grid item>log</Grid>
        <Grid item>category</Grid>
        <Grid item>profile</Grid>
      </Grid>
    </Box>
  );
}
