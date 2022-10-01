import { Box, Grid } from "@mui/material";
import Image from "next/image";
import bg from "../public/images/bg1.jpg";
import _app from "./_app";
import { CgMenuGridO } from "react-icons/cg";
import Link from "next/link";

export default function Bible() {
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
              }}
            >
              {/* title */}
              <h3
                style={{
                  marginTop: "2rem",
                  marginRight: "auto",
                  marginLeft: "3rem",
                  fontSize: "1.3rem",
                }}
              >
                Bible Verse
              </h3>
              {/* text container */}
              <div
                style={{
                  height: 230,
                  position: "relative",
                  width: "100vw",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "0rem",
                }}
              >
                {/* text-sub container */}
                <div style={{ position: "relative", width: "80%" }}>
                  <Image
                    src={bg}
                    alt="good morning"
                    width={315}
                    height={250}
                    objectFit="cover"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      borderRadius: "0.7rem",
                    }}
                  />

                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      WebkitBackdropFilter: "blur( 4px )",
                      width: "100%",
                      height: "100%",
                      backdropFilter: "blur( 4px )",
                      borderRadius: "0.7rem",
                      // border: "1px solid gray",
                    }}
                  ></div>
                  <p
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      padding: "1rem",
                    }}
                  >
                    He that dwelleth in the secret place of the most high shall
                    abide under the shadow the Almighty
                  </p>
                </div>
                {/* text-sub container ends*/}
              </div>
              {/* text container ends*/}
              {/* botton starts */}
              <div
                style={{
                  display: "flex",
                  position: "relative",
                  marginTop: "2rem",
                }}
              >
                <div
                  style={{
                    height: "2rem",
                    width: "6rem",
                    padding: "0.3rem",
                    backgroundColor: "#fffbff",
                    borderRadius: "0.7rem",
                    boxShadow: " 5px 5px 10px #dbd8db, -5px -5px 10px #ffffff",
                    textAlign: "center",
                    fontSize: "0.9rem",
                  }}
                >
                  Next
                </div>
              </div>
              {/* botton ends */}
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
