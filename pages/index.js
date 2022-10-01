import { Box, Grid, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import bg from "../public/images/bg1.jpg";
import _app from "./_app";
import { CgMenuGridO } from "react-icons/cg";
import Link from "next/link";

export default function Home() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === "dark" ? "#1A2027" : "hsl(9, 85%, 99%)",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: "10rem",
  }));
  return (
    <div style={{ position: "relative", width: "100vw" }}>
      <Box flexGrow={1}>
        <Grid container>
          <Grid item xs={12}>
            <div
              style={{
                height: "12rem",
                width: "100vw",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  display: "flex",
                  flexDirection: "column",
                  top: 0,
                  left: 0,
                }}
              >
                <div
                  style={{
                    fontSize: "1rem",
                    marginTop: "0.5rem",
                    textAlign: "center",
                    width: "100vw",
                  }}
                >
                  Good morning
                </div>
                <div
                  style={{
                    fontSize: "4rem",
                    marginTop: "1.2rem",
                    marginLeft: "1rem",
                  }}
                >
                  29
                </div>
                <div
                  style={{
                    // marginTop: "0rem",
                    marginLeft: "1rem",
                    fontSize: "1rem",
                  }}
                >
                  September, Thursday
                </div>
              </div>
              <Image
                src={bg}
                alt="good morning"
                width={600}
                height={330}
                style={{ zIndex: -1 }}
              />
            </div>
          </Grid>
          <Grid item xs={12}>
            {/* main container */}
            <div
              style={{
                height: "30rem",
                width: "100%",
                backgroundColor: "hsl(9, 85%, 99%)",
                borderRadius: "3rem 3rem 0 0",
                marginTop: "-2rem",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                position: "relative",
                padding: "1.8rem 1rem 1rem 1rem",
              }}
            >
              {/* title */}
              <h3
                style={{
                  marginTop: "0rem",
                  marginRight: "auto",
                  marginLeft: "3rem",
                  fontSize: "1.3rem",
                }}
              >
                Category
              </h3>
              <Grid container spacing={2}>
                <Grid item xs={6} md={4}>
                  <Link href="/bible">
                    <Item>
                      <h3>Bible Verses</h3>
                      <p>A daily dose of the scriptures</p>
                    </Item>
                  </Link>
                </Grid>
                <Grid item xs={6} md={4}>
                  <Link href="/quotes">
                    <Item>
                      <h3>Quotes</h3>
                      <p>
                        Quotes and even motivational quotes to cheer your day
                      </p>
                    </Item>
                  </Link>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Link href="/facts">
                    <Item>
                      <h3>Facts</h3>
                      <p>Learn new fun facts everyday</p>
                    </Item>
                  </Link>
                </Grid>
              </Grid>
            </div>

            {/* main container ends*/}
          </Grid>
          <Grid item xs={12}>
            <div
              style={{
                height: "3.5rem",
                width: "100vw",
                backgroundColor: "hsl(9, 85%, 90%)",
                color: "hsl(9, 85%, 50%)",
                position: "fixed",
                bottom: 0,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "1rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  fontSize: "1.5rem",
                  marginTop: "0rem",
                }}
              >
                <Link href="/">
                  <CgMenuGridO />
                </Link>
                <Link href="/">
                  <p
                    style={{
                      fontSize: "0.8rem",
                      padding: "0rem",
                      marginTop: "-0.2rem",
                    }}
                  >
                    category
                  </p>
                </Link>
              </div>
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
