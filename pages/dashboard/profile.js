import { CopyToClipboard } from "react-copy-to-clipboard";
const { motion } = require("framer-motion");
import { useState, useEffect } from "react";
import { supabase } from "../../client";
import { useRouter } from "next/router";
import SideBar from "../../components/sidebar";
import DashNav from "../../components/dash-nav";
import { Box, Grid } from "@mui/material";
import Link from "next/link";
import Inputfield from "../../components/inputfield";

import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
export default function Profile() {
  const [copyText, setCopyText] = useState("@ezynotify_updates_bot");
  const [copyTxt, setCopyTxt] = useState("@ezynotify_keywords_bot");
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [tel, setTel] = useState(false);
  const [telegram, setTelegram] = useState(null);
  const [days, setDays] = useState(null);

  const [profile, setProfile] = useState(null);

  const [loading, setLoading] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    fetchProfile();
    getDetail();
  }, []);

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

  function handleTel() {
    setTel((prev) => !prev);
  }
  const router = useRouter();
  useEffect(() => {
    fetchProfile();
  }, []);

  async function getDetail() {
    try {
      setLoading(true);
      const user = supabase.auth.user();

      let { data, error, status } = await supabase
        .from("notification")
        .select(`email,days,telegram`) //
        .eq("id", user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }
      if (data) {
        setEmail(data.email); //
        setDays(data.days);
        setTelegram(data.telegram);
      }
    } catch (error) {
      // alert(error.message);
      handle();
    } finally {
      setLoading(false);
    }
  }

  async function fetchProfile() {
    const profileData = await supabase.auth.user();
    if (!profileData) {
      router.push("/sign-in");
    } else {
      setProfile(profileData);
    }
  }
  async function signOut() {
    await supabase.auth.signOut();
    router.push("/sign-in");
  }
  if (!profile) return null;

  async function changePassword() {
    try {
      const user = supabase.auth.user();
      const { error } = await supabase.auth.update({
        email: user.email,
        password: password,
      });
      if (error) {
        throw error;
      }
      handleClick();
    } catch (error) {
      setErrorMessage(error.message);
      handle();
    }
  }
  async function updateProfile({ website, telegram }) {
    try {
      setLoading(true);
      const user = supabase.auth.user();
      const updates = {
        id: user.id, //
        email,
        telegram,
      };

      let { error } = await supabase.from("notification").upsert(updates, {
        returning: "minimal", //don't return the value after inserting
      });

      if (error) {
        throw error;
      }
      getDetail();
      handleClick();
    } catch (error) {
      setErrorMessage(error.message);
      handle();
    } finally {
      setLoading(false);
    }
  }

  return (
    <Box flexGrow={1}>
      <>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Success!.
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
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <DashNav signOut={signOut} />
        </Grid>

        <Grid item xs={1.8} md={2.5}>
          <div>
            <SideBar profile={profile} />
          </div>
        </Grid>
        <Grid item xs={10.2} md={9.5}>
          <div
            style={{
              marginTop: "3.5rem",
              backgroundColor: "white",
              minHeight: "100vh",
              maxHeight: "100%",
              color: "black",
            }}
          >
            <Grid container spacing={1}>
              <Grid
                item
                xs={12}
                md={12}
                className="dash-options-container options"
              >
                <Grid container>
                  <Grid item xs={12}>
                    <h1>Profile</h1>
                  </Grid>
                  <div className="inputfield-cont">
                    <div className="ult-container">
                      <h4 style={{ marginBottom: "1rem" }}>Update email</h4>
                      <div>
                        <Inputfield
                          type="text"
                          placeholder="email"
                          id="email"
                          label="email"
                          setState={setEmail}
                          value={email}
                        />
                        <div
                          onClick={() => {
                            updateProfile({
                              email,
                            });
                          }}
                          className="submit-button"
                          style={{ width: "18rem" }}
                        >
                          {(loading && "Loading") || "update email"}
                        </div>
                      </div>
                    </div>
                    <div className="ult-container">
                      <h4 style={{ marginBottom: "1rem" }}>Update Password</h4>
                      <div>
                        <Inputfield
                          type="text"
                          placeholder="password"
                          id="password"
                          label="change password"
                          setState={setPassword}
                          value={password}
                        />
                        <div
                          onClick={() => {
                            changePassword();
                          }}
                          className="submit-button"
                          style={{ width: "18rem" }}
                        >
                          {(loading && "Loading") || "change password"}
                        </div>
                      </div>
                    </div>
                    <div className="ult-container">
                      {tel == false && (
                        <h4>
                          Update Telegram Setup
                          <span
                            style={{
                              marginLeft: "3.9rem",
                              backgroundColor: "skyblue",
                              padding: "0.3rem",
                              borderRadius: "0.8rem",
                              fontSize: "0.8rem",
                              border: "1px solid black",
                              cursor: "pointer",
                            }}
                            onClick={handleTel}
                          >
                            begin
                          </span>
                        </h4>
                      )}

                      {tel && days > 0 && (
                        <div>
                          <h4 style={{ marginBottom: "1rem" }}>
                            Update Telegram Setup
                          </h4>
                          <h5>step one</h5>
                          <p>enter your telegram chat id</p>
                          <Grid item xs={12} md={6}>
                            <Inputfield
                              type="text"
                              placeholder="telegram"
                              id="telegram"
                              label="telegram chat id"
                              setState={setTelegram}
                              value={telegram}
                            />
                            <p style={{ fontSize: "0.8rem", width: "19rem" }}>
                              don&apos;t know how to get telegram chat id?
                              <span style={{ color: "skyblue" }}>
                                click here
                              </span>
                            </p>
                            <div
                              onClick={() => {
                                updateProfile({
                                  telegram,
                                });
                              }}
                              className="submit-button"
                              style={{ width: "18rem" }}
                            >
                              {(loading && "Loading") || "update telegram"}
                            </div>
                          </Grid>
                          <h5>step two</h5>
                          <p>
                           // search the following telegram bots and start them
                          </p>
                          <ul>
                            <li>
                              //{copyText}
                              <CopyToClipboard text={copyText}>
                                <button onClick={() => handleClick()}>
                                  copy
                                </button>
                              </CopyToClipboard>
                            </li>

                            <li>
                             // {copyTxt}
                              <CopyToClipboard text={copyTxt}>
                                <button onClick={() => handleClick()}>
                                  copy
                                </button>
                              </CopyToClipboard>
                            </li>
                          </ul>
                        </div>
                      )}

                      {/* free plan */}
                      {tel && days == 0 && (
                        <div>
                          <h4
                            style={{ marginTop: "1rem", marginBottom: "1rem" }}
                          >
                            Update Telegram Setup
                          </h4>
                          <Grid item xs={12} md={12}>
                            telegram is limited to premium plan.{" "}
                            <span
                              style={{
                                color: "skyblue",
                                textDecoration: "underline",
                              }}
                            >
                              Upgrade
                            </span>{" "}
                            to enjoy more
                          </Grid>
                        </div>
                      )}
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}
