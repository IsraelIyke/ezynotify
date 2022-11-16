import { useRouter } from "next/router";
import { supabase } from "../client";
import Nav from "../components/nav";
const { motion } = require("framer-motion");
import Textfield from "../components/textfield";
import { useState } from "react";
import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function ChangePassword() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [open, setOpen] = React.useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleClick = () => {
    setOpen(true);
  };
  const handle = () => {
    setError(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
    setError(false);
  };
  const handleChangePassword = async (email) => {
    try {
      setLoading(true);

      let { data, error } = await supabase.auth.api.resetPasswordForEmail(
        email
      );

      if (error) {
        console.error(error);
      } else {
        handleClick();
      }
    } catch (error) {
      // alert("This is an error message!");
      // alert(error.message);
      setErrorMessage(error.message);
      handle();
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Nav />

      <div className="explore-page-hero">
        <form className="form-container">
          <h2>Password Recovery</h2>
          <br />
          <>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert
                onClose={handleClose}
                severity="success"
                sx={{ width: "100%" }}
              >
                Success! Check your email for a one-time session link into your
                account
              </Alert>
            </Snackbar>
            <Snackbar
              open={error}
              autoHideDuration={6000}
              onClose={handleClose}
            >
              <Alert
                onClose={handleClose}
                severity="error"
                sx={{ width: "100%" }}
              >
                {errorMessage === "Request Failed"
                  ? "Please check internet connection"
                  : errorMessage}
              </Alert>
            </Snackbar>
          </>

          <Textfield
            type="email"
            placeholder="Email"
            id="email"
            label="Email"
            setState={setEmail}
            value={email}
          />

          <button
            className="rec-btn"
            onClick={(e) => {
              e.preventDefault();
              handleChangePassword(email);
            }}
          >
            {(loading && "loading") || "Send Password Recovery Email"}
          </button>
        </form>
      </div>
    </>
  );
}
