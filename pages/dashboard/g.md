const { motion } = require("framer-motion");
import { useState, useEffect } from "react";
import { supabase } from "../../client";
import { useRouter } from "next/router";
import SideBar from "../../components/sidebar";
import DashNav from "../../components/dash-nav";
import { Box, Grid } from "@mui/material";
import Link from "next/link";
import Inputfield from "../../components/inputfield";

import \* as React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

const Alert = React.forwardRef(function Alert(props, ref) {
return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
export default function Notification() {
const [del1, setDel1] = useState(false);
const [del2, setDel2] = useState(false);
const [del3, setDel3] = useState(false);
const [del4, setDel4] = useState(false);
const [del5, setDel5] = useState(false);

const [check, setCheck] = useState(true);

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
const [emailStatus2, setEmailStatus2] = useState();
const [emailStatus3, setEmailStatus3] = useState();
const [emailStatus4, setEmailStatus4] = useState();
const [emailStatus5, setEmailStatus5] = useState();
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

const router = useRouter();
useEffect(() => {
fetchProfile();
getDetail();
}, []);

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

      getDetail();
      console.log(key1);
      handleClick();
    } catch (error) {
      setErrorMessage(error.message);
      handle();
    } finally {
      setloading(false);
    }

}
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
async function handleStatusPending2() {
try {
const user = supabase.auth.user();

      const { err } = await supabase
        .from("notification")
        .update({ emailStatus2: "pending" })
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
async function handleStatusPending3() {
try {
const user = supabase.auth.user();

      const { err } = await supabase
        .from("notification")
        .update({ emailStatus3: "pending" })
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
async function handleStatusPending4() {
try {
const user = supabase.auth.user();

      const { err } = await supabase
        .from("notification")
        .update({ emailStatus4: "pending" })
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
async function handleStatusPending5() {
try {
const user = supabase.auth.user();

      const { err } = await supabase
        .from("notification")
        .update({ emailStatus5: "pending" })
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
async function handleStatusSent2() {
try {
const user = supabase.auth.user();

      const { err } = await supabase
        .from("notification")
        .update({ emailStatus2: "sent" })
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
async function handleStatusSent3() {
try {
const user = supabase.auth.user();

      const { err } = await supabase
        .from("notification")
        .update({ emailStatus3: "sent" })
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
async function handleStatusSent4() {
try {
const user = supabase.auth.user();

      const { err } = await supabase
        .from("notification")
        .update({ emailStatus4: "sent" })
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
async function handleStatusSent5() {
try {
const user = supabase.auth.user();

      const { err } = await supabase
        .from("notification")
        .update({ emailStatus5: "sent" })
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
async function handleDel1() {
try {
const user = supabase.auth.user();

      const { err } = await supabase
        .from("notification")
        .update({
          web1: null,
          key1: null,
          status1: "No",
          emailStatus1: "pending",
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
      setDel1(false);
    }

}
async function handleDel2() {
try {
const user = supabase.auth.user();

      const { err } = await supabase
        .from("notification")
        .update({
          web2: null,
          key2: null,
          status2: "No",
          emailStatus2: "pending",
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
      setDel2(false);
    }

}
async function handleDel3() {
try {
const user = supabase.auth.user();

      const { err } = await supabase
        .from("notification")
        .update({
          web3: null,
          key3: null,
          status3: "No",
          emailStatus3: "pending",
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
      setDel3(false);
    }

}
async function handleDel4() {
try {
const user = supabase.auth.user();

      const { err } = await supabase
        .from("notification")
        .update({
          web4: null,
          key4: null,
          status4: "No",
          emailStatus4: "pending",
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
      setDel4(false);
    }

}
async function handleDel5() {
try {
const user = supabase.auth.user();

      const { err } = await supabase
        .from("notification")
        .update({
          web5: null,
          key5: null,
          status5: "No",
          emailStatus5: "pending",
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
      setDel5(false);
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

async function getDetail() {
try {
const user = supabase.auth.user();

      let { data, error, status } = await supabase
        .from("notification")
        .select(
          `web1,web2,web3,web4,web5,key1,key2,key3,key4,key5,emailStatus1,emailStatus2,emailStatus3,emailStatus4,emailStatus5`
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
        setEmailStatus2(data.emailStatus2);
        setEmailStatus3(data.emailStatus3);
        setEmailStatus4(data.emailStatus4);
        setEmailStatus5(data.emailStatus5);
      }
    } catch (error) {
      // alert(error.message);
      handle();
    } finally {
    }

}
if (k1 == null) {
setCheck(1);
} else if (k2 == null) {
setCheck(2);
} else if (k3 == null) {
setCheck(3);
} else if (k4 == null) {
setCheck(4);
} else if (k5 == null) {
setCheck(5);
} else {
setCheck(6);
}
return (
<Box flexGrow={1}>
<>
<Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
<Alert
onClose={handleClose}
severity="success"
sx={{ width: "100%" }} >
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
                        {check == 1 && (
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
                                  });
                                }}
                              >
                                {(loading && "loading") || "create"}
                              </div>
                            </Grid>
                          </div>
                        )}
                        {check == 2 && (
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
                                    key2,
                                    web2,
                                  });
                                }}
                              >
                                {(loading && "loading") || "create"}
                              </div>
                            </Grid>
                          </div>
                        )}
                        {check == 3 && (
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
                                    key3,
                                    web3,
                                  });
                                }}
                              >
                                {(loading && "loading") || "create"}
                              </div>
                            </Grid>
                          </div>
                        )}
                        {check == 4 && (
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
                                    key4,
                                    web4,
                                  });
                                }}
                              >
                                {(loading && "loading") || "create"}
                              </div>
                            </Grid>
                          </div>
                        )}
                        {check == 5 && (
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
                                    key5,
                                    web5,
                                  });
                                }}
                              >
                                {(loading && "loading") || "create"}
                              </div>
                            </Grid>
                          </div>
                        )}

                        {check == 6 && (
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
                          <div
                            className="notify-card-status"
                            style={{ position: "relative" }}
                          >
                            <div style={{ marginLeft: "-0.6rem" }}>
                              <h5>Status</h5>
                              <h6>Perfect match</h6>
                            </div>
                            <div>
                              <button
                                className="update"
                                onClick={() => {
                                  updateProfile({ key1, web1 });
                                }}
                              >
                                update
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
                            <div>
                              <button
                                className="delete"
                                onClick={() => setDel1(true)}
                              >
                                delete
                              </button>
                              {del1 && (
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
                          <div
                            className="notify-card-status"
                            style={{ position: "relative" }}
                          >
                            <div style={{ marginLeft: "-0.6rem" }}>
                              <h5>Status</h5>
                              <h6>Perfect match</h6>
                            </div>
                            <div>
                              <button
                                className="update"
                                onClick={() => {
                                  updateProfile({ key2, web2 });
                                }}
                              >
                                update
                              </button>
                            </div>
                            <div>
                              {emailStatus2 == "sent" ? (
                                <button
                                  className="mount"
                                  onClick={handleStatusPending2}
                                >
                                  mount
                                </button>
                              ) : (
                                <button
                                  className="mount"
                                  onClick={handleStatusSent2}
                                >
                                  unmount
                                </button>
                              )}
                            </div>
                            <div>
                              <button
                                className="delete"
                                onClick={() => setDel2(true)}
                              >
                                delete
                              </button>
                              {del2 && (
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
                                    onClick={handleDel2}
                                  >
                                    Yes
                                  </span>
                                  <span
                                    onClick={() => setDel2(false)}
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
                          <div
                            className="notify-card-status"
                            style={{ position: "relative" }}
                          >
                            <div style={{ marginLeft: "-0.6rem" }}>
                              <h5>Status</h5>
                              <h6>Perfect match</h6>
                            </div>
                            <div>
                              <button
                                className="update"
                                onClick={() => {
                                  updateProfile({ key3, web3 });
                                }}
                              >
                                update
                              </button>
                            </div>
                            <div>
                              {emailStatus3 == "sent" ? (
                                <button
                                  className="mount"
                                  onClick={handleStatusPending3}
                                >
                                  mount
                                </button>
                              ) : (
                                <button
                                  className="mount"
                                  onClick={handleStatusSent3}
                                >
                                  unmount
                                </button>
                              )}
                            </div>
                            <div>
                              <button
                                className="delete"
                                onClick={() => setDel3(true)}
                              >
                                delete
                              </button>
                              {del3 && (
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
                                    onClick={handleDel3}
                                  >
                                    Yes
                                  </span>
                                  <span
                                    onClick={() => setDel3(false)}
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
                          <div
                            className="notify-card-status"
                            style={{ position: "relative" }}
                          >
                            <div style={{ marginLeft: "-0.6rem" }}>
                              <h5>Status</h5>
                              <h6>Perfect match</h6>
                            </div>
                            <div>
                              <button
                                className="update"
                                onClick={() => {
                                  updateProfile({ key4, web4 });
                                }}
                              >
                                update
                              </button>
                            </div>
                            <div>
                              {emailStatus4 == "sent" ? (
                                <button
                                  className="mount"
                                  onClick={handleStatusPending4}
                                >
                                  mount
                                </button>
                              ) : (
                                <button
                                  className="mount"
                                  onClick={handleStatusSent4}
                                >
                                  unmount
                                </button>
                              )}
                            </div>
                            <div>
                              <button
                                className="delete"
                                onClick={() => setDel4(true)}
                              >
                                delete
                              </button>
                              {del4 && (
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
                                    onClick={handleDel4}
                                  >
                                    Yes
                                  </span>
                                  <span
                                    onClick={() => setDel4(false)}
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
                          </div>
                        </div>
                      )}
                      {k5 != null && (
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
                          <div
                            className="notify-card-status"
                            style={{ position: "relative" }}
                          >
                            <div style={{ marginLeft: "-0.6rem" }}>
                              <h5>Status</h5>
                              <h6>Perfect match</h6>
                            </div>
                            <div>
                              <button
                                className="update"
                                onClick={() => {
                                  updateProfile({ key5, web5 });
                                }}
                              >
                                update
                              </button>
                            </div>
                            <div>
                              {emailStatus5 == "sent" ? (
                                <button
                                  className="mount"
                                  onClick={handleStatusPending5}
                                >
                                  mount
                                </button>
                              ) : (
                                <button
                                  className="mount"
                                  onClick={handleStatusSent5}
                                >
                                  unmount
                                </button>
                              )}
                            </div>
                            <div>
                              <button
                                className="delete"
                                onClick={() => setDel5(true)}
                              >
                                delete
                              </button>
                              {del5 && (
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
                                    onClick={handleDel5}
                                  >
                                    Yes
                                  </span>
                                  <span
                                    onClick={() => setDel5(false)}
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
                        const [emailStatus1, setEmailStatus1] = useState();
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