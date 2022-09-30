import { Box, Grid } from "@mui/material";
import Image from "next/image";
import bg from "../public/images/bg1.jpg";
import Footer from "./footer";
import Img from "./img";
import Main from "./Main";
import _app from "./_app";
import { CgMenuGridO } from "react-icons/cg";
import { MdAccountCircle } from "react-icons/md";
import { BiBook } from "react-icons/bi";

export default function Home() {
  return (
    <Box flexGrow={1}>
      <Grid container>
        <div style={{ position: "relative", width: "100vw" }}>
          <Grid item xs={12}>
            <div
              style={{
                height: "12rem",
                width: "100%",
              }}
            >
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
              }}
            >
              {/* title */}
              <h3
                style={{
                  width: "100%",
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
                  height: "10rem",
                  borderRadius: "2rem",
                  position: "relative",
                  width: "100%",
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
                      zIndex: 0,
                      position: "absolute",
                      top: 0,
                      left: 0,
                      borderRadius: "0.7rem",
                    }}
                  />
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
                  <div style={{ position: "absolute", top: 0, left: 0 }}></div>
                </div>
                {/* text-sub container ends*/}
              </div>
              {/* text container ends*/}
              {/* botton starts */}
              <div
                style={{
                  display: "flex",
                  marginTop: "8rem",
                  position: "relative",
                  gap: "1rem",
                }}
              >
                <div
                  style={{
                    height: "2rem",
                    width: "3rem",
                    padding: "0.3rem",
                    backgroundColor: "#fffbff",
                    borderRadius: "0.7rem",
                    boxShadow: " 5px 5px 10px #dbd8db, -5px -5px 10px #ffffff",
                  }}
                >
                  {/* 
background: #fffbff;
box-shadow:  5px 5px 10px #dbd8db,
             -5px -5px 10px #ffffff; */}
                  Next
                </div>
                <div
                  style={{
                    height: "2rem",
                    width: "10rem",
                    padding: "0.3rem",
                    backgroundColor: "#fffbff",
                    borderRadius: "0.7rem",
                    boxShadow: " 5px 5px 10px #dbd8db, -5px -5px 10px #ffffff",
                    textAlign: "center",
                  }}
                >
                  Personal Log
                </div>
              </div>
              {/* botton ends */}
            </div>

            {/* main container ends*/}
          </Grid>
          <Grid item xs={12}>
            <div
              style={{
                height: "4.5rem",
                width: "100vw",
                backgroundColor: "hsl(9, 85%, 90%)",
                color: "hsl(9, 85%, 50%)",
                position: "fixed",
                bottom: 0,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "4rem",
                fontSize: "1.5rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <BiBook />
                <div style={{ fontSize: "0.8rem" }}>Log</div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <CgMenuGridO />
                <div style={{ fontSize: "1rem" }}>category</div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <MdAccountCircle />
                <div style={{ fontSize: "1rem" }}>profile</div>
              </div>
            </div>
          </Grid>
        </div>
      </Grid>
    </Box>
  );
}
