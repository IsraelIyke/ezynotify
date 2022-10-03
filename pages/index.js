import { Box, Grid, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import bg from "../public/images/bg1.jpg";
import bg2 from "../public/images/bg2.jpg";
import _app from "./_app";
import { CgMenuGridO } from "react-icons/cg";
import Link from "next/link";

export default function Home() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor:
      cTime !== "morning" ? "hsl(196, 100%, 99%)" : "hsl(9, 85%, 99%)",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: "10rem",
  }));

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
                cTime === "morning" ? "main-container" : "main-container-dark"
              }
            >
              {/* title */}
              <h3 className="main-title">Category</h3>
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
        </Grid>
      </Box>
    </div>
  );
}
