const { motion } = require("framer-motion");
import { useState, useEffect } from "react";
import { supabase } from "../../client";
import { useRouter } from "next/router";
import SideBar from "../../components/sidebar";
import DashNav from "../../components/dash-nav";
import { Box, Grid } from "@mui/material";
import { CopyToClipboard } from "react-copy-to-clipboard";
import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
export default function Update() {
  const [inputValue, setInputValue] = useState("");

  const [limit, setLimit] = useState(false);
  const [stat, setStat] = useState(true);

  const [referral, setReferral] = useState(null);

  const [profile, setProfile] = useState(null);
  const [copyText, setCopyText] = useState();
  const [copyTex, setCopyTex] = useState();
  const [copyTxt, setCopyTxt] = useState();

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
        .select(`number,referral`) //
        .eq("id", user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }
      if (data) {
        setReferral(data.referral); //
        setCopyText(`${data.number}AeR`);
        setCopyTex(`https://ezynotify.com/sign-up?ref=${data.number}AeR`);
        setCopyTxt(
          `Hi there, I found a website that notifies you whenever an update is made in a website. Here is the link, you can check it out https://ezynotify.com/sign-up?ref=${data.number}AeR`
        );
      }
    } catch (error) {
      // alert(error.message);
      handle();
    } finally {
      setLoading(false);
    }
  }

  async function updateProfile() {
    try {
      setLoading(true);
      const user = supabase.auth.user();
      const updates = {
        id: user.id, //
        referral: copyText,
      };

      let { error } = await supabase.from("notification").upsert(updates, {
        returning: "minimal", //don't return the value after inserting
      });

      if (error) {
        throw error;
      }
      getDetail();
    } catch (error) {
      setErrorMessage(error.message);
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
  return (
    <Box flexGrow={1}>
      <>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Copied!.
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
                      <h1>Refer your friends</h1>
                    </Grid>

                    <Grid item xs={12} md={12}>
                      <ul className="instruction-list">
                        <li>refer and earn points to enjoy premium features</li>
                        {/* <li>
                        select the messaging platform you wish to get
                        notification
                      </li> */}
                        <li>1 referral = 5 days of premium plan</li>
                        <li>This rate will last until 1st February, 2023.</li>
                      </ul>
                    </Grid>
                    {referral == null ? (
                      <button onClick={updateProfile}>
                        Generate Referral Code
                      </button>
                    ) : (
                      <div className="inputfield-container">
                        <div className="referral-input">
                          <h5>Referral code:</h5>
                          <input
                            value={copyText}
                            onChange={(e) => setCopyText(e.target.value)}
                          />
                          <CopyToClipboard text={copyText}>
                            <button onClick={() => handleClick()}>Copy</button>
                          </CopyToClipboard>
                        </div>
                        <div className="referral-input">
                          <h5>Referrals: 2</h5>
                        </div>
                        <div className="referral-input">
                          <h5>Days accumulated: 20days</h5>
                        </div>
                        <div className="referral-input">
                          <h5>Days used: 3days</h5>
                        </div>

                        <div className="referral-input">
                          <h5>Referral link:</h5>
                          <input
                            value={copyTex}
                            onChange={(e) => setCopyTex(e.target.value)}
                          />
                          <CopyToClipboard text={copyTex}>
                            <button onClick={() => handleClick()}>Copy</button>
                          </CopyToClipboard>
                        </div>
                        <div className="referral-input">
                          <h5>Referral message:</h5>
                          <input
                            value={copyTxt}
                            onChange={(e) => setCopyTxt(e.target.value)}
                          />
                          <CopyToClipboard text={copyTxt}>
                            <button onClick={() => handleClick()}>Copy</button>
                          </CopyToClipboard>
                        </div>
                      </div>
                    )}
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
