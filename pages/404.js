import _app from "./_app";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Nav from "../components/nav";
import Head from "next/head";

export default function p404() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <Grid container spacing={0}>
        <Grid item xs={12} md={12}>
          <Nav />
        </Grid>
        <Grid item xs={12} md={12}>
          <div className="p404-container">
            <img src="/images/404p.webp" alt="" width={250} className="p404" />
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}
