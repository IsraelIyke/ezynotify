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
const { motion } = require("framer-motion");

export default function Home() {
  return (
    <motion.div
      // key={router.route}
      initial="initialState"
      animate="animateState"
      exit="exitState"
      transition={{
        duration: 0.75,
      }}
      variants={{
        initialState: {
          opacity: 0,
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        },
        animateState: {
          opacity: 1,
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        },
        exitState: {
          clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
        },
      }}
      className="explore-page-hero"
    >
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
    </motion.div>
  );
}
