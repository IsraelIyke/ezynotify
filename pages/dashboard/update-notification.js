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
export default function Update() {
  const [w1, setW1] = useState();
  const [t, setT] = useState();
  const [checker1, setChecker1] = useState(false);
  const [stat, setStat] = useState(true);
  const [del, setDel] = useState(false);
  const [website, setWebsite] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  let times = "";

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

  async function handleDel1() {
    try {
      const user = supabase.auth.user();

      const { err } = await supabase
        .from("notification")
        .update({
          website: null,
          prev: null,
          change: null,
          times: "once",
        })
        .eq("id", user.id);

      if (error) {
        throw error;
      }
      getDetail();
      handleClick();
    } catch (error) {
      setErrorMessage(error.message);
      handle();
    } finally {
      setDel(false);
    }
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
        .select(`website, times`) //
        .eq("id", user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }
      if (data) {
        setWebsite(data.website); //
        setW1(data.website);
        if (data.times.length > 4) {
          setChecker1(true);
        }
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

  async function updateProfile({ website }) {
    if (checker1) {
      times = "continue";
    } else {
      times = "once";
    }
    try {
      setLoading(true);
      const user = supabase.auth.user();
      const updates = {
        id: user.id, //
        website,
        times,
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
              <Grid item xs={12} md={12} className="dash-options-container">
                {!stat ? (
                  <div></div>
                ) : (
                  <Grid container>
                    <Grid item xs={12}>
                      <h1>Create Update Notification</h1>
                    </Grid>

                    <Grid item xs={12} md={12}>
                      <ul className="instruction-list">
                        <li>
                          enter the particular the website you want to get
                          update from
                        </li>
                        {/* <li>
                        select the messaging platform you wish to get
                        notification
                      </li> */}
                        <li>click create</li>
                        <li>you can edit your website anytime.</li>
                        <li>
                          the recent update made from the time of notification
                          creation will be sent to you as a message
                        </li>
                        <li>
                          Note! this feature finds every update made to a
                          website, ignore the ones you don&apos;t need. Thanks
                        </li>
                      </ul>
                    </Grid>
                    <div className="inputfield-container">
                      <Grid item xs={12} md={6}>
                        <Inputfield
                          type="text"
                          placeholder="website"
                          id="website"
                          label="website"
                          setState={setWebsite}
                          value={website}
                        />
                      </Grid>
                      <h5>
                        Do you wish to run continously until you delete
                        manually?
                        <input
                          type="checkbox"
                          id="checker1"
                          checked={checker1}
                          onChange={(e) => setChecker1(e.target.checked)}
                          style={{
                            accentColor: "black",
                            marginLeft: "1rem",
                            marginTop: "0.3rem",
                          }}
                        />
                      </h5>

                      <Grid item xs={12}>
                        {w1 == null ? (
                          <div
                            onClick={() => {
                              updateProfile({
                                website,
                              });
                            }}
                            className="submit-button"
                          >
                            {(loading && "Loading") || "create"}
                          </div>
                        ) : (
                          <div style={{ display: "flex", position: "relative" }}>
                            <div
                              onClick={() => {
                                updateProfile({
                                  website,
                                });
                              }}
                              className="submit-button"
                              style={{ marginRight: "1rem" }}
                            >
                              {(loading && "Loading") || "update"}
                            </div>
                            <div
                              style={{ backgroundColor: "white" }}
                              onClick={() => setDel(true)}
                              className="submit-button"
                            >
                              delete
                            </div>
                            {del && (
                              <div
                                style={{
                                  backgroundColor: "skyblue",
                                  height: "5rem",
                                  width: "100%",
                                  position: "absolute",
                                  top: "2rem",
                                  left: "-0.4rem",
                                  borderRadius: "0.5rem",
                                  fontSize: "0.8rem",
                                  padding: "0.5rem",
                                  boxShadow: "2px 2px 2px gray",
                                  zIndex: 1,
                                  textAlign: "center",
                                }}
                              >
                                <h4>Are you sure you want to delete?</h4>
                                <br />
                                <span
                                  style={{
                                    padding: "0.3rem 1rem 0.3rem 1rem",
                                    backgroundColor: "red",
                                    border: "1px solid black",
                                    borderRadius: "0.8rem",
                                    marginRight: "2rem",
                                    cursor: "pointer",
                                  }}
                                  onClick={handleDel1}
                                >
                                  Yes
                                </span>
                                <span
                                  onClick={() => setDel1(false)}
                                  style={{
                                    padding: "0.3rem 1rem 0.3rem 1rem",
                                    backgroundColor: "white",
                                    border: "1px solid black",
                                    borderRadius: "0.8rem",
                                    marginLeft: "2rem",
                                    cursor: "pointer",
                                  }}
                                >
                                  No
                                </span>
                              </div>
                            )}
                          </div>
                        )}
                      </Grid>
                    </div>
                  </Grid>
                )}
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}
