import { Box, Grid, Paper } from "@mui/material";
// import Image from "next/image";
import bg from "../public/images/bg1.jpg";
import bg2 from "../public/images/bg2.jpg";
import _app from "./_app";
import { CgMenuGridO } from "react-icons/cg";
import Link from "next/link";
import { useEffect, useState, forwardRef } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Quotes() {
  const [quotes, setQuotes] = useState({
    quote: "",
    author: "",
  });
  const [count, setCount] = useState(0);
  const [error, setError] = useState(false);

  const handle = () => {
    setError(true);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setError(false);
  };

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.NEXT_PUBLIC_API,
        "X-RapidAPI-Host": "random-quote-api1.p.rapidapi.com",
      },
    };

    fetch("https://random-quote-api1.p.rapidapi.com/randomQuote", options)
      .then((response) => response.json())
      .then((response) => setQuotes(response))
      .catch((err) => handle());
  }, [count]);
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
  function handleNext() {
    setCount((prev) => prev + 1);
  }

  return (
    <div style={{ position: "relative", width: "100vw" }}>
      <Snackbar open={error} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          Please check internet connection
        </Alert>
      </Snackbar>
      <Box flexGrow={1}>
        <Grid container>
          <Grid item xs={12} lg={4}>
            <div
              className={
                cTime === "morning" || cTime === "afternoon"
                  ? "time-container"
                  : "time-container-dark"
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
                <img
                  src={cTime === "morning" || cTime === "afternoon" ? bg : bg2}
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
                cTime === "morning" || cTime === "afternoon"
                  ? "main-container"
                  : "main-container-dark"
              }
            >
              {/* title */}
              <h3 className="main-category-title">Quotes</h3>
              {/* text container */}
              <div className="main-category-text">
                {/* text-sub container */}
                <div className="main-text-sub-container">
                  <div className="time-image-contain">
                    <img
                      src={
                        cTime === "morning" || cTime === "afternoon" ? bg : bg2
                      }
                      alt="good morning"
                      width={215}
                      height={550}
                      layout="fill"
                      objectFit="cover"
                      className="main-category-image"
                    />
                  </div>

                  <div className="main-category-blur"></div>
                  <p
                    className={
                      cTime === "morning" || cTime === "afternoon"
                        ? "main-category-texts"
                        : "main-category-texts-dark"
                    }
                  >
                    <i>{quotes.quote}</i>
                    <br />
                    <strong>{quotes.author}</strong>
                  </p>
                </div>
                {/* text-sub container ends*/}
              </div>
              {/* text container ends*/}
              {/* button starts */}
              <div className="main-button">
                <div
                  onClick={handleNext}
                  className={
                    cTime === "morning" || cTime === "afternoon"
                      ? "main-btn"
                      : "main-btn-dark"
                  }
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
                cTime === "morning" || cTime === "afternoon"
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
