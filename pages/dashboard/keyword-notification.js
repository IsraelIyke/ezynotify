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
export default function Notification() {
  const [limit, setLimit] = useState(false);
  const [stat, setStat] = useState(true);

  const [key1, setKey1] = useState(null);
  const [web1, setWeb1] = useState(null);

  const [key2, setKey2] = useState(null);
  const [web2, setWeb2] = useState(null);

  const [key3, setKey3] = useState(null);
  const [web3, setWeb3] = useState(null);

  const [key4, setKey4] = useState(null);
  const [web4, setWeb4] = useState(null);

  const [key5, setKey5] = useState(null);
  const [web5, setWeb5] = useState(null);

  const [key6, setKey6] = useState(null);
  const [web6, setWeb6] = useState(null);

  const [keyCount, setKeyCount] = useState();

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
        .select(`web1,web2,web3,web4,web5,key1,key2,key3,key4,key5,keyCount`) //
        .eq("id", user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }
      if (data) {
        setWeb1(data.web1); //
        setWeb2(data.web2);
        setWeb3(data.web3);
        setWeb4(data.web4);
        setWeb5(data.web5);
        setKey1(data.key1);
        setKey2(data.key2);
        setKey3(data.key3);
        setKey4(data.key4);
        setKey5(data.key5);
        setKeyCount(data.keyCount);
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

  async function updateProfile({
    key1,
    web1,
    key2,
    web2,
    key3,
    web3,
    key4,
    web4,
    key5,
    web5,
  }) {
    try {
      setLoading(true);
      const user = supabase.auth.user();
      const updates = {
        id: user.id, //
        key1,
        web1,
        key2,
        web2,
        key3,
        web3,
        key4,
        web4,
        key5,
        web5,
      };

      let { error } = await supabase.from("notification").upsert(updates, {
        returning: "minimal", //don't return the value after inserting
      });

      if (error) {
        throw error;
      }
      const { err } = await supabase
        .from("notification")
        .update({ keyCount: keyCount + 1 })
        .eq("id", user.id);
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
              <Grid item xs={12} md={8} className="dash-options-container">
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
                          enter the particular word, phrase or sentence you want
                          to set notification for and then the website
                        </li>
                        {/* <li>
                        select the messaging platform you wish to get
                        notification
                      </li> */}
                        <li>click create</li>
                        <li>you can edit your search in the status panel</li>
                      </ul>
                    </Grid>
                    <div className="inputfield-container">
                      <Grid item xs={12} md={6}>
                        {keyCount == 1 && (
                          <Inputfield
                            type="text"
                            placeholder="keyword"
                            id="keyword"
                            label="keyword"
                            setState={setKey1}
                            value={key1}
                          />
                        )}
                        {keyCount == 2 && (
                          <Inputfield
                            type="text"
                            placeholder="keyword"
                            id="keyword"
                            label="keyword"
                            setState={setKey2}
                            value={key2}
                          />
                        )}
                        {keyCount == 3 && (
                          <Inputfield
                            type="text"
                            placeholder="keyword"
                            id="keyword"
                            label="keyword"
                            setState={setKey3}
                            value={key3}
                          />
                        )}
                        {keyCount == 4 && (
                          <Inputfield
                            type="text"
                            placeholder="keyword"
                            id="keyword"
                            label="keyword"
                            setState={setKey4}
                            value={key4}
                          />
                        )}
                        {keyCount == 5 && (
                          <Inputfield
                            type="text"
                            placeholder="keyword"
                            id="keyword"
                            label="keyword"
                            setState={setKey5}
                            value={key5}
                          />
                        )}
                      </Grid>
                      <Grid item xs={12} md={6}>
                        {keyCount == 1 && (
                          <Inputfield
                            type="text"
                            placeholder="website"
                            id="website"
                            label="website"
                            setState={setWeb1}
                            value={web1}
                          />
                        )}
                        {keyCount == 2 && (
                          <Inputfield
                            type="text"
                            placeholder="website"
                            id="website"
                            label="website"
                            setState={setWeb2}
                            value={web2}
                          />
                        )}
                        {keyCount == 3 && (
                          <Inputfield
                            type="text"
                            placeholder="website"
                            id="website"
                            label="website"
                            setState={setWeb3}
                            value={web3}
                          />
                        )}
                        {keyCount == 4 && (
                          <Inputfield
                            type="text"
                            placeholder="website"
                            id="website"
                            label="website"
                            setState={setWeb4}
                            value={web4}
                          />
                        )}
                        {keyCount == 5 && (
                          <Inputfield
                            type="text"
                            placeholder="website"
                            id="website"
                            label="website"
                            setState={setWeb5}
                            value={web5}
                          />
                        )}
                        {keyCount >= 6 && (
                          <div className="keyword-limit">
                            <p>
                              You have used up you five input limit. But you can
                              delete an input you no longer need from the notification status
                              panel. Thanks &#128151;
                            </p>
                          </div>
                        )}
                      </Grid>
                      <Grid item xs={12}>
                        {keyCount < 6 && (
                          <div
                            onClick={() => {
                              updateProfile({
                                key1,
                                web1,
                                key2,
                                web2,
                                key3,
                                web3,
                                key4,
                                web4,
                                key5,
                                web5,
                                keyCount,
                              });
                            }}
                            className="submit-button"
                          >
                            {(loading && "Loading") || "create"}
                          </div>
                        )}
                      </Grid>
                    </div>
                  </Grid>
                )}
              </Grid>

              <Grid item xs={12} md={4}>
                <Grid container spacing={1}>
                  <Grid
                    item
                    xs={12}
                    style={{ padding: "0 0.5rem 0 1rem", position: "fixed" }}
                  >
                    <div className="dash-tile-subs">
                      <h2>Notification Status</h2>
                      {keyCount == 1 && (
                        <div className="notify-card">no notification yet</div>
                      )}
                      {keyCount > 1 && keyCount < 7 && (
                        <div className="notify-card">
                          <input type="text" />
                          <input type="text" />
                        </div>
                      )}
                      {keyCount > 2 && keyCount < 7 && (
                        <div className="notify-card">world</div>
                      )}
                      {keyCount > 3 && keyCount < 7 && (
                        <div className="notify-card">okay</div>
                      )}
                      {keyCount > 4 && keyCount < 7 && (
                        <div className="notify-card">now</div>
                      )}
                      {/* {keyCount > 5 && keyCount < 7 && (
                        <div className="notify-card">now</div>
                      )} */}
                    </div>
                    {stat ? (
                      <div className="dash-tile-subscription">
                        <h2 onClick={() => setStat((prev) => !prev)}>
                          Notification Status{" "}
                          <AiOutlineUp style={{ marginLeft: "6rem", color: "skyblue" }} />
                        </h2>
                      </div>
                    ) : (
                      <div
                        className="dash-tile-subscription"
                        style={{
                          marginTop: "0rem",
                          backgroundColor: "white",
                          position: "fixed",
                          zIndex: 1,
                        }}
                      >
                        <h2 onClick={() => setStat((prev) => !prev)}>
                          Notification Status{" "}
                          <AiOutlineDown style={{ marginLeft: "5rem", color: "skyblue" }} />
                        </h2>
                        {/* <div className="key">
                        key <div className="green">perfect match</div>
                        <div className="yellow">partial match</div>
                        <div className="skyblue">no match</div>
                      </div> */}

                        {keyCount == 1 && (
                          <div className="notify-card">no notification yet</div>
                        )}
                        {keyCount > 1 && keyCount < 7 && (
                          <div className="notify-card">
                            <input type="text" />
                            <input type="text" />
                          </div>
                        )}
                        {keyCount > 2 && keyCount < 7 && (
                          <div className="notify-card">world</div>
                        )}
                        {keyCount > 3 && keyCount < 7 && (
                          <div className="notify-card">okay</div>
                        )}
                        {keyCount > 4 && keyCount < 7 && (
                          <div className="notify-card">now</div>
                        )}
                        {keyCount > 5 && keyCount < 7 && (
                          <div className="notify-card">now</div>
                        )}
                      </div>
                    )}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}
