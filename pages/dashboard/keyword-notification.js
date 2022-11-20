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
  const [del, setDel] = useState(false);
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

  const [emailStatus1, setEmailStatus1] = useState();
  // const [web6, setWeb6] = useState(null);

  const [k1, setK1] = useState(null);
  const [k2, setK2] = useState(null);
  const [k3, setK3] = useState(null);
  const [k4, setK4] = useState(null);
  const [k5, setK5] = useState(null);

  const [keyCount, setKeyCount] = useState();

  const [profile, setProfile] = useState(null);

  const [loading, setloading] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    fetchProfile();
    getDetail();
  }, []);

  async function handleStatusPending1() {
    try {
      const user = supabase.auth.user();

      const { err } = await supabase
        .from("notification")
        .update({ emailStatus1: "pending" })
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
    }
  }
  async function handleStatusSent1() {
    try {
      const user = supabase.auth.user();

      const { err } = await supabase
        .from("notification")
        .update({ emailStatus1: "sent" })
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
    }
  }
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
      const user = supabase.auth.user();

      let { data, error, status } = await supabase
        .from("notification")
        .select(
          `web1,web2,web3,web4,web5,key1,key2,key3,key4,key5,keyCount,emailStatus1`
        ) //
        .eq("id", user.id)
        .single();

      if (error && status === 406) {
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

        setK1(data.key1);
        setK2(data.key2);
        setK3(data.key3);
        setK4(data.key4);
        setK5(data.key5);
        setEmailStatus1(data.emailStatus1);
      }
    } catch (error) {
      // alert(error.message);
      handle();
    } finally {
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
      setloading(true);
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
      setloading(false);
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
                        <li>
                          Once your keyword gets a perfect or partial match, the
                          search will stop/unmount. But you can mount it if
                          still needed
                        </li>
                      </ul>
                    </Grid>
                    <div className="inputfield-container">
                      <Grid item xs={12} md={6}>
                        {k1 == null ? (
                          <div>
                            <Inputfield
                              type="text"
                              placeholder="keyword"
                              id="keyword"
                              label="keyword"
                              setState={setKey1}
                              value={key1}
                            />
                            <Inputfield
                              type="text"
                              placeholder="website"
                              id="website"
                              label="website"
                              setState={setWeb1}
                              value={web1}
                            />
                            <Grid item xs={12}>
                              <div
                                className="submit-button"
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
                              >
                                {(loading && "loading") || "create"}
                              </div>
                            </Grid>
                          </div>
                        ) : k2 == null ? (
                          <div>
                            <Inputfield
                              type="text"
                              placeholder="keyword"
                              id="keyword"
                              label="keyword"
                              setState={setKey2}
                              value={key2}
                            />
                            <Inputfield
                              type="text"
                              placeholder="website"
                              id="website"
                              label="website"
                              setState={setWeb2}
                              value={web2}
                            />
                            <Grid item xs={12}>
                              <div
                                className="submit-button"
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
                              >
                                {(loading && "loading") || "create"}
                              </div>
                            </Grid>
                          </div>
                        ) : k3 == null ? (
                          <div>
                            <Inputfield
                              type="text"
                              placeholder="keyword"
                              id="keyword"
                              label="keyword"
                              setState={setKey3}
                              value={key3}
                            />
                            <Inputfield
                              type="text"
                              placeholder="website"
                              id="website"
                              label="website"
                              setState={setWeb3}
                              value={web3}
                            />
                            <Grid item xs={12}>
                              <div
                                className="submit-button"
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
                              >
                                {(loading && "loading") || "create"}
                              </div>
                            </Grid>
                          </div>
                        ) : k4 == null ? (
                          <div>
                            <Inputfield
                              type="text"
                              placeholder="keyword"
                              id="keyword"
                              label="keyword"
                              setState={setKey4}
                              value={key4}
                            />
                            <Inputfield
                              type="text"
                              placeholder="website"
                              id="website"
                              label="website"
                              setState={setWeb4}
                              value={web4}
                            />
                            <Grid item xs={12}>
                              <div
                                className="submit-button"
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
                              >
                                {(loading && "loading") || "create"}
                              </div>
                            </Grid>
                          </div>
                        ) : k5 == null ? (
                          <div>
                            <Inputfield
                              type="text"
                              placeholder="keyword"
                              id="keyword"
                              label="keyword"
                              setState={setKey5}
                              value={key5}
                            />
                            <Inputfield
                              type="text"
                              placeholder="website"
                              id="website"
                              label="website"
                              setState={setWeb5}
                              value={web5}
                            />
                            <Grid item xs={12}>
                              <div
                                className="submit-button"
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
                              >
                                {(loading && "loading") || "create"}
                              </div>
                            </Grid>
                          </div>
                        ) : (
                          <div className="keyword-limit">
                            <p>
                              You have used up you five input limit. But you can
                              delete an input you no longer need from the
                              notification status panel. Thanks &#128151;
                            </p>
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
                      <h2
                        style={{
                          padding: "0.5rem 2rem 0.5rem 2rem",
                        }}
                      >
                        Notification Status
                      </h2>
                      {k1 == null &&
                        k2 == null &&
                        k3 == null &&
                        k4 == null &&
                        k5 == null && (
                          <div className="notify-card">no notification yet</div>
                        )}
                      {k1 != null && (
                        <div className="notify-card">
                          <div>
                            <input
                              type="text"
                              placeholder="keyword"
                              id="key1"
                              onChange={(e) => setKey1(e.target.value)}
                              value={key1}
                            />
                            <input
                              type="text"
                              placeholder="website"
                              id="web1"
                              onChange={(e) => setWeb1(e.target.value)}
                              value={web1}
                            />
                          </div>
                          <div className="notify-card-status">
                            <div style={{ marginLeft: "-0.6rem" }}>
                              <h5>Status</h5>
                              <h6>Perfect match</h6>
                            </div>
                            <div>
                              <button
                                className="update"
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
                              >
                                {(loading && "loading") || "update"}
                              </button>
                            </div>
                            <div>
                              {emailStatus1 == "sent" ? (
                                <button
                                  className="mount"
                                  onClick={handleStatusPending1}
                                >
                                  mount
                                </button>
                              ) : (
                                <button
                                  className="mount"
                                  onClick={handleStatusSent1}
                                >
                                  unmount
                                </button>
                              )}
                            </div>
                            <div style={{ position: "relative" }}>
                              <button
                                className="delete"
                                onClick={() => setDel((prev) => !prev)}
                              >
                                delete
                              </button>
                              {del && (
                                <div
                                  style={{
                                    backgroundColor: "skyblue",
                                    height: "5rem",
                                    width: "5rem",
                                    position: "absolute",
                                    top: "2rem",
                                    left: "-0.7rem",
                                    borderRadius: "0.5rem",
                                    fontSize: "0.8rem",
                                    padding: ".5rem",
                                  }}
                                >
                                  Are you sure you want to delete?{" "}
                                  <span>Yes</span>
                                  <span>No</span>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      )}
                      {k2 != null && (
                        <div className="notify-card">
                          <div>
                            <input
                              type="text"
                              placeholder="keyword"
                              id="key2"
                              onChange={(e) => setKey2(e.target.value)}
                              value={key2}
                            />
                            <input
                              type="text"
                              placeholder="website"
                              id="web2"
                              onChange={(e) => setWeb2(e.target.value)}
                              value={web2}
                            />
                          </div>
                          <div className="notify-card-status">
                            <div style={{ marginLeft: "-0.6rem" }}>
                              <h5>Status</h5>
                              <h6>Perfect match</h6>
                            </div>
                            <div>
                              <button
                                className="update"
                                onClick={() => {
                                  updateProfile();
                                }}
                              >
                                {(loading && "loading") || "update"}
                              </button>
                            </div>
                            <div>
                              <button className="mount">unmount</button>
                            </div>
                            <div>
                              <button className="delete">delete</button>
                            </div>
                          </div>
                        </div>
                      )}
                      {k3 != null && (
                        <div className="notify-card">
                          <div>
                            <input
                              type="text"
                              placeholder="keyword"
                              id="key3"
                              onChange={(e) => setKey3(e.target.value)}
                              value={key3}
                            />
                            <input
                              type="text"
                              placeholder="website"
                              id="web3"
                              onChange={(e) => setWeb3(e.target.value)}
                              value={web3}
                            />
                          </div>
                          <div className="notify-card-status">
                            <div style={{ marginLeft: "-0.6rem" }}>
                              <h5>Status</h5>
                              <h6>Perfect match</h6>
                            </div>
                            <div>
                              <button
                                className="update"
                                onClick={() => {
                                  updateProfile();
                                }}
                              >
                                {(loading && "loading") || "update"}
                              </button>
                            </div>
                            <div>
                              <button className="mount">unmount</button>
                            </div>
                            <div>
                              <button className="delete">delete</button>
                            </div>
                          </div>
                        </div>
                      )}
                      {k4 != null && (
                        <div className="notify-card">
                          <div>
                            <input
                              type="text"
                              placeholder="keyword"
                              id="key4"
                              onChange={(e) => setKey4(e.target.value)}
                              value={key4}
                            />
                            <input
                              type="text"
                              placeholder="website"
                              id="web4"
                              onChange={(e) => setWeb4(e.target.value)}
                              value={web4}
                            />
                          </div>
                          <div className="notify-card-status">
                            <div style={{ marginLeft: "-0.6rem" }}>
                              <h5>Status</h5>
                              <h6>Perfect match</h6>
                            </div>
                            <div>
                              <button
                                className="update"
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
                              >
                                {(loading && "loading") || "update"}
                              </button>
                            </div>
                            <div>
                              <button className="mount">unmount</button>
                            </div>
                            <div>
                              <button className="delete">delete</button>
                            </div>
                          </div>
                        </div>
                      )}
                      {k4 != null && (
                        <div className="notify-card">
                          <div>
                            <input
                              type="text"
                              placeholder="keyword"
                              id="key5"
                              onChange={(e) => setKey5(e.target.value)}
                              value={key5}
                            />
                            <input
                              type="text"
                              placeholder="website"
                              id="web5"
                              onChange={(e) => setWeb5(e.target.value)}
                              value={web5}
                            />
                          </div>
                          <div className="notify-card-status">
                            <div style={{ marginLeft: "-0.6rem" }}>
                              <h5>Status</h5>
                              <h6>Perfect match</h6>
                            </div>
                            <div>
                              <button
                                className="update"
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
                              >
                                {(loading && "loading") || "update"}
                              </button>
                            </div>
                            <div>
                              <button className="mount">unmount</button>
                            </div>
                            <div>
                              <button className="delete">delete</button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    {stat ? (
                      <div className="dash-tile-subscription">
                        <h2 onClick={() => setStat((prev) => !prev)}>
                          Notification Status
                          <AiOutlineUp
                            style={{
                              marginLeft: "6rem",
                              color: "hsl(216, 100%, 25%)",
                            }}
                          />
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
                          Notification Status
                          <AiOutlineDown
                            style={{
                              marginLeft: "6rem",
                              color: "hsl(216, 100%, 25%)",
                            }}
                          />
                        </h2>

                        {k1 == null &&
                          k2 == null &&
                          k3 == null &&
                          k4 == null &&
                          k5 == null && (
                            <div className="notify-card">
                              no notification yet
                            </div>
                          )}
                        {k1 != null && (
                          <div className="notify-card">
                            <div>
                              <input
                                type="text"
                                placeholder="keyword"
                                id="key1"
                                onChange={(e) => setKey1(e.target.value)}
                                value={key1}
                              />
                              <input
                                type="text"
                                placeholder="website"
                                id="web1"
                                onChange={(e) => setWeb1(e.target.value)}
                                value={web1}
                              />
                            </div>
                            <div className="notify-card-status">
                              <div style={{ marginLeft: "-0.6rem" }}>
                                <h5>Status</h5>
                                <h6>Perfect match</h6>
                              </div>
                              <div>
                                <button
                                  className="update"
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
                                >
                                  {(loading && "loading") || "update"}
                                </button>
                              </div>
                              <div>
                                <button className="mount">unmount</button>
                              </div>
                              <div>
                                <button className="delete">delete</button>
                              </div>
                            </div>
                          </div>
                        )}
                        {k2 != null && (
                          <div className="notify-card">
                            <div>
                              <input
                                type="text"
                                placeholder="keyword"
                                id="key2"
                                onChange={(e) => setKey2(e.target.value)}
                                value={key2}
                              />
                              <input
                                type="text"
                                placeholder="website"
                                id="web2"
                                onChange={(e) => setWeb2(e.target.value)}
                                value={web2}
                              />
                            </div>
                            <div className="notify-card-status">
                              <div style={{ marginLeft: "-0.6rem" }}>
                                <h5>Status</h5>
                                <h6>Perfect match</h6>
                              </div>
                              <div>
                                <button
                                  className="update"
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
                                >
                                  {(loading && "loading") || "update"}
                                </button>
                              </div>
                              <div>
                                {emailStatus1 == "sent" ? (
                                  <button
                                    className="mount"
                                    onClick={() => {
                                      setEmailStatus1("pending");
                                      updateProfile();
                                    }}
                                  >
                                    {(loading && "loading") || "mount"}
                                  </button>
                                ) : (
                                  <button
                                    className="mount"
                                    onClick={() => {
                                      setEmailStatus1("sent");
                                      updateProfile();
                                    }}
                                  >
                                    {(loading && "loading") || "unmount"}
                                  </button>
                                )}
                              </div>
                              <div>
                                <button
                                  className="delete"
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
                                >
                                  {(loading && "loading") || "delete"}
                                </button>
                              </div>
                            </div>
                          </div>
                        )}
                        {k3 != null && (
                          <div className="notify-card">
                            <div>
                              <input
                                type="text"
                                placeholder="keyword"
                                id="key3"
                                onChange={(e) => setKey3(e.target.value)}
                                value={key3}
                              />
                              <input
                                type="text"
                                placeholder="website"
                                id="web3"
                                onChange={(e) => setWeb3(e.target.value)}
                                value={web3}
                              />
                            </div>
                            <div className="notify-card-status">
                              <div style={{ marginLeft: "-0.6rem" }}>
                                <h5>Status</h5>
                                <h6>Perfect match</h6>
                              </div>
                              <div>
                                <button
                                  className="update"
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
                                >
                                  {(loading && "loading") || "update"}
                                </button>
                              </div>
                              <div>
                                <button className="mount">unmount</button>
                              </div>
                              <div>
                                <button className="delete">delete</button>
                              </div>
                            </div>
                          </div>
                        )}
                        {k4 != null && (
                          <div className="notify-card">
                            <div>
                              <input
                                type="text"
                                placeholder="keyword"
                                id="key4"
                                onChange={(e) => setKey4(e.target.value)}
                                value={key4}
                              />
                              <input
                                type="text"
                                placeholder="website"
                                id="web4"
                                onChange={(e) => setWeb4(e.target.value)}
                                value={web4}
                              />
                            </div>
                            <div className="notify-card-status">
                              <div style={{ marginLeft: "-0.6rem" }}>
                                <h5>Status</h5>
                                <h6>Perfect match</h6>
                              </div>
                              <div>
                                <button
                                  className="update"
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
                                >
                                  {(loading && "loading") || "update"}
                                </button>
                              </div>
                              <div>
                                <button className="mount">unmount</button>
                              </div>
                              <div>
                                <button className="delete">delete</button>
                              </div>
                            </div>
                          </div>
                        )}
                        {k4 != null && (
                          <div className="notify-card">
                            <div>
                              <input
                                type="text"
                                placeholder="keyword"
                                id="key5"
                                onChange={(e) => setKey5(e.target.value)}
                                value={key5}
                              />
                              <input
                                type="text"
                                placeholder="website"
                                id="web5"
                                onChange={(e) => setWeb5(e.target.value)}
                                value={web5}
                              />
                            </div>
                            <div className="notify-card-status">
                              <div style={{ marginLeft: "-0.6rem" }}>
                                <h5>Status</h5>
                                <h6>Perfect match</h6>
                              </div>
                              <div>
                                <button
                                  className="update"
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
                                >
                                  {(loading && "loading") || "update"}
                                </button>
                              </div>
                              <div>
                                <button className="mount">unmount</button>
                              </div>
                              <div>
                                <button className="delete">delete</button>
                              </div>
                            </div>
                          </div>
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
