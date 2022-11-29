import { useState } from "react";
import { useRouter } from "next/router";
import { supabase } from "../client";
import Nav from "../components/nav";
import Textfield from "../components/textfield";
const { motion } = require("framer-motion");

import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Link from "next/link";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [error, setError] = useState(false);
  const [validate, setValidate] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleClick = () => {
    setOpen(true);
  };
  const handle = () => {
    setError(true);
  };

  const valid = () => {
    setValidate(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
    setError(false);
    setValidate(false);
  };

  const router = useRouter();

  async function signUp() {
    if (password != confirmPassword) {
      valid();
    } else {
      try {
        setLoading(true);
        const updates = {
          email,
          password,
        };
        let { err } = await supabase.from("backup").upsert(updates, {
          returning: "minimal", //don't return the value after inserting
        });

        const { error } = await supabase.auth.signUp({ email, password });
        if (error) {
          throw error;
        } else {
          handleClick();
        }
      } catch (error) {
        setErrorMessage(error.message);
        handle();
      } finally {
        setLoading(false);
      }
    }
  }

  return (
    <>
      <>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Success! Verify email if this is your first signup
          </Alert>
        </Snackbar>
        <Snackbar open={error} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
            {errorMessage === "Request Failed"
              ? "Please check internet connection"
              : errorMessage}
          </Alert>
        </Snackbar>
        <Snackbar open={validate} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
            password does not match
          </Alert>
        </Snackbar>
      </>
      <Nav />
      <div className="explore-page-hero">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            duration: 0.75,
          }}
          className="content"
          style={{ textAlign: "center" }}
        >
          <div>
            <main>
              <h1>Sign up</h1>
              <Textfield
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
              />
              <Textfield
                type="password"
                placeholder="Confirm Password"
                id="confirmPassword"
                label="Confirm Password"
                setState={setConfirmPassword}
                value={confirmPassword}
              />
              <br />
              <button
                className="reg-btn"
                onClick={(e) => {
                  e.preventDefault();
                  signUp();
                }}
              >
                {(loading && "loading") || "Sign Up"}
              </button>
              <br />
              <br />
              <h5>
                Already have an account?
                <Link href="/sign-in">
                  <span className="link-span"> sign in</span>
                </Link>
              </h5>
            </main>
          </div>
        </motion.div>
      </div>
    </>
  );
}
