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
  const [limit, setLimit] = useState(false);
  const [stat, setStat] = useState(true);

  const [website, setWebsite] = useState(null);

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
        .select(`website`) //
        .eq("id", user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }
      if (data) {
        setWebsite(data.website); //
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
    try {
      setLoading(true);
      const user = supabase.auth.user();
      const updates = {
        id: user.id, //
        website,
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
                      <h1>Create Keyword Notification</h1>
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
                        <li>you can edit your website later.</li>
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
                      <Grid item xs={12}>
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
