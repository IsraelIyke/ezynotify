import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Nav from "../components/nav";
import Card from "../components/card";
import Head from "next/head";

export default function Pricing() {
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
          <div className="pricing-title">
            <h1>Pricing</h1>
          </div>
        </Grid>
        <Grid item xs={12} md={12}>
          <div className="pricing-container">
            <Card
              title="Starter"
              price="free"
              description1="1 keyword notification"
              description2="5 update notification usage limit per month"
              description3="limited to email notification messages"
              cta="sign up"
              className="free"
              classname="free-sign"
            />
            <Card
              title="Premium"
              price="N500/mo(approx. $1/mo)"
              description1="Five keyword notification"
              description2="unlimited update notification usage"
              description3="email and telegram notification messages"
              cta="upgrade"
              className="premium"
              classname="premium-sign"
            />
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}