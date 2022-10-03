import { Box, Grid, Paper } from "@mui/material";
import Image from "next/image";
import bg from "../public/images/bg1.jpg";
import bg2 from "../public/images/bg2.jpg";
import _app from "./_app";
import { CgMenuGridO } from "react-icons/cg";
import Link from "next/link";

export default function Quotes() {
  const newDate = new Date();
  const currentDate = newDate.getDate();
  const currentMonth = newDate.getMonth();
  let cMonth = "";
  switch (currentMonth) {
    case 0:
      cMonth = "January";
      break;
    case 1:
      cMonth = "February";
      break;
    case 2:
      cMonth = "March";
      break;
    case 3:
      cMonth = "April";
      break;
    case 4:
      cMonth = "May";
      break;
    case 5:
      cMonth = "June";
      break;
    case 6:
      cMonth = "July";
      break;
    case 7:
      cMonth = "August";
      break;
    case 8:
      cMonth = "September";
      break;
    case 9:
      cMonth = "October";
      break;
    case 10:
      cMonth = "November";
      break;
    case 11:
      cMonth = "December";
      break;
  }
  let currentDay = newDate.getDay();
  let cDay = "";
  switch (currentDay) {
    case 0:
      cDay = "Sunday";
      break;
    case 1:
      cDay = "Monday";
      break;
    case 2:
      cDay = "Tuesday";
      break;
    case 3:
      cDay = "Wednesday";
      break;
    case 4:
      cDay = "Thursday";
      break;
    case 5:
      cDay = "Friday";
      break;
    case 6:
      cDay = "Saturday";
      break;
  }
  const currentTime = newDate.getHours();
  let cTime = "";
  if (currentTime < 12) {
    cTime = "morning";
  } else if (currentTime >= 12 && currentTime < 18) {
    cTime = "afternoon";
  } else {
    cTime = "evening";
  }
  return (
    <div style={{ position: "relative", width: "100vw" }}>
      <Box flexGrow={1}>
        <Grid container>
          <Grid item xs={12} lg={4}>
            <div
              className={
                cTime === "morning" ? "time-container" : "time-container-dark"
              }
            >
              <div className="time-sub-container">
                <div className="time-greeting">Good {cTime}</div>
                <div className="time-date">{currentDate}</div>
                <div className="time-month">
                  {cMonth}, {cDay}
                </div>
              </div>
              <div className="time-image-container">
                <Image
                  src={cTime === "morning" ? bg : bg2}
                  alt="good morning"
                  width={600}
                  layout="fill"
                  objectFit="cover"
                  className="time-image"
                />
              </div>
            </div>
          </Grid>
          <Grid item xs={12} lg={8}>
            {/* main container */}
            <div
              className={
                cTime === "morning"
                  ? "main-category-container"
                  : "main-category-container-dark"
              }
            >
              {/* title */}
              <h3 className="main-category-title">Bible Verse</h3>
              {/* text container */}
              <div className="main-category-text">
                {/* text-sub container */}
                <div className="main-text-sub-container">
                  <div className="time-image-contain">
                    <Image
                      src={cTime === "morning" ? bg : bg2}
                      alt="good morning"
                      width={315}
                      height={250}
                      objectFit="cover"
                      className="main-category-image"
                    />
                  </div>

                  <div className="main-category-blur"></div>
                  <p
                    className={
                      cTime === "morning"
                        ? "main-category-texts"
                        : "main-category-texts-dark"
                    }
                  >
                    He that dwelleth in the secret place of the most high shall
                    abide under the shadow the Almighty
                  </p>
                </div>
                {/* text-sub container ends*/}
              </div>
              {/* text container ends*/}
              {/* button starts */}
              <div className="main-button">
                <div
                  className={cTime === "morning" ? "main-btn" : "main-btn-dark"}
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
              className={
                cTime === "morning"
                  ? "main-footer-container"
                  : "main-footer-container-dark"
              }
            >
              <div className="main-footer">
                <Link href="/">
                  <CgMenuGridO />
                </Link>
                <Link href="/">
                  <p className="main-footer-button">category</p>
                </Link>
              </div>
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
