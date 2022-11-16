import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { supabase } from "../client";
import Nav from "../components/nav";
const { motion } = require("framer-motion");
import Textfield from "../components/textfield";

import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Link from "next/link";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();

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

  useEffect(() => {
    fetchProfile();
  }, []);

  async function signIn() {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signIn({ email, password });
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

  async function fetchProfile() {
    const profileData = await supabase.auth.user();
    console.log("profileData: ", profileData);
    if (!profileData) {
      router.push("/sign-in");
    } else {
      router.push("/dashboard");
    }
  }

  if (submitted) {
    fetchProfile();
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
            Success! if you provided only email address, check email for login
            link.
          </Alert>
        </Snackbar>
        <Snackbar open={error} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
            {errorMessage === "Request Failed"
              ? "Please check internet connection"
              : errorMessage}
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
              <h1>Sign In</h1>
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
                id="email"
                label="Password"
                setState={setPassword}
                value={password}
              />
              <h5>
                Forgot your password?
                <Link href="/password-recovery">
                  <span className="link-span"> click here</span>
                </Link>
              </h5>
              <br />
              <button
                className="reg-btn"
                onClick={(e) => {
                  e.preventDefault();
                  signIn();
                }}
              >
                {(loading && "loading") || "Sign In"}
              </button>
              <br />
              <br />
              <h5>
                Don't have an account?
                <Link href="/sign-up">
                  <span className="link-span"> sign up</span>
                </Link>
              </h5>
            </main>
          </div>
        </motion.div>
      </div>
    </>
  );
}
