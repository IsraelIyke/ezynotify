import ScrollButton from "../components/ScrollButton";
import _app from "./_app";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Nav from "../components/nav";
import Banner from "../components/banner";
import Content from "../components/content";
import Image from "../components/image";
import Image2 from "../components/image2";
import Content2 from "../components/content2";
import Testimonial from "../components/testimonial";
import Footer from "../components/footer";
import Head from "next/head";
const { motion } = require("framer-motion");
import Home from "./about";

export default function Index() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta charset="utf-8" />
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="Ezynotify"
          content="This a simple web tool for sends you a notification message for whenever there is an update in your favorite website"
        />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        <title>Ezynotify</title>
      </Head>
      <Grid container spacing={0}>
        {/* <Grid item xs={12} md={12}>
          <Nav />
        </Grid>

        <Grid item xs={12} md={12}>
          <Banner />
        </Grid> */}
        <Home />
        {/* <Grid item xs={12} md={6}>
          <Image />
        </Grid>
        <Grid item xs={12} md={6}>
          <Content />
        </Grid>
        <Grid item xs={12} md={6}>
          <Content2 />
        </Grid>

        <Grid item xs={12} md={6}>
          <Image2 />
        </Grid> */}
        <Grid item xs={12} md={12}>
          <Testimonial />
        </Grid>
        <Grid item xs={12} md={12}>
          <Footer />
        </Grid>
        <ScrollButton />
      </Grid>
    </Box>
  );
}
