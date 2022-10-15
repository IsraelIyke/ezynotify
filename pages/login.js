const { motion } = require("framer-motion");
import Link from "next/link";
import Footer from "./footer";
import Nav from "./nav";
// import { FaUserAlt } from "react-icons/fa";
import { HiLockClosed, HiUser } from "react-icons/hi";
import { useState } from "react";
import { supabase } from "./api/client";
import { Grid, Box } from "@mui/material";
import Textfield from "./Textfield/textfield";
import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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

  const handleLogin = async (email) => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) {
        throw error;
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
    <div className="sign-up-main-container">
      <Nav />
      <div className="nav-bg"></div>
      <div className="explore-page-hero">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            duration: 0.75,
          }}
          className="sign-up-container"
        >
          <form className="form-container">
            <h2>Sign In</h2>
            <br />

            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert
                onClose={handleClose}
                severity="success"
                sx={{ width: "100%" }}
              >
                Success! Verify email if this is your first signup
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
            <div className="label">Email</div>
            <div className="input-container">
              <div className="input-icon-container">
                <HiUser />
              </div>
              <input type="text" className="sign-up-input" />
            </div>

            <div className="label">Password</div>
            <div className="input-container">
              <div className="input-icon-container">
                <HiLockClosed />
              </div>
              <input type="text" className="sign-up-input" />
            </div>

            {/* <Textfield
              type="email"
              placeholder="Email"
              id="email"
              label="Email"
              setState={setEmail}
              value={email}
            />

            <Textfield
              type="password"
              placeholder="Password"
              id="password"
              label="Password"
              setState={setPassword}
              value={password}
            /> */}
            <h5>
              Forgot your password?
              <Link href="/password-recovery">
                <span className="link-span"> click here</span>
              </Link>
            </h5>
            <div
              className="register-button"
              onClick={(e) => {
                e.preventDefault();
                handleLogin(email);
              }}
            >
              {(loading && "loading") || "Login"}
            </div>

            <h5>
              Don&lsquo;t have an account?
              <Link href="/register">
                <span className="link-span"> sign up</span>
              </Link>
            </h5>
          </form>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
