import ScrollButton from "../components/ScrollButton";
import _app from "./_app";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Nav from "../components/nav";
import Head from "next/head";
import FAQ from "../components/faqs";
import { data } from "../Db/data";
import FaqTitle from "../components/faqTitle";
export default function FAQS() {
  const mapping = data.map((element) => {
    return (
      <FAQ
        key={element.id}
        id={element.id}
        question={element.question}
        answer={element.answer}
      />
    );
  });
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
          <FaqTitle />
        </Grid>
        <Grid item xs={12} md={12} className="faq-contain">
          {mapping}
        </Grid>

        <ScrollButton />
      </Grid>
    </Box>
  );
}
