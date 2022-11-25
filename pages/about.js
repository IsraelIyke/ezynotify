import ScrollButton from "../components/ScrollButton";
import _app from "./_app";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Nav from "../components/nav";
import Footer from "../components/footer";
import Head from "next/head";
import About from "../components/main";
import Feature from "../components/feature";
import Images from "../components/images";
const { motion } = require("framer-motion");

export default function Home() {
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
          <About />
        </Grid>
        <Grid item xs={12} md={12}>
          <div className="features" id="features">
            <h2>Features</h2>
            <span></span>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <Feature
            featureTitle="Updates Notification"
            featureContent="This feature simply searches the website you want at intervals checking for any change in that website. Whenever it finds a change in the website, it will send a message to you. We included an option for running the check once or continuously and also another options for you select which messaging platform to receive messages from. We are working toward refining the feature for better user experience."
            id="feature"
            className="update-container"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Images
            img="/images/update.png"
            className="update-image"
            classname="update-image-container"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Feature
            featureTitle="Keyword Notification"
            featureContent="This feature is similar to the update notification but the difference is that it checks a website at intervals to see if the word, phrase or sentence entered is found in website. It keeps checking until it finds a perfect or partial match. When it does, it sends a notification message to the user. It also have option for you select which messaging platform to receive messages from"
            className="keyword-container"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Images
            img="/images/keyword.png"
            className="keyword-image"
            classname="keyword-image-container"
          />
        </Grid>
        <ScrollButton />
      </Grid>
    </Box>
  );
}
