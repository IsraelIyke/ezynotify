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

export default function Home() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0}>
        <Grid item xs={12} md={12}>
          <Nav />
        </Grid>
        <Grid item xs={12} md={12}>
          <Banner />
        </Grid>
        <Grid item xs={12} md={6}>
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
        </Grid>
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
