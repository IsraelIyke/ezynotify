const { motion } = require("framer-motion");
import { useState, useEffect } from "react";
import { supabase } from "../../client";
import { useRouter } from "next/router";
import SideBar from "../../components/sidebar";
import DashNav from "../../components/dash-nav";
import { Box, Grid, Paper } from "@mui/material";
import Link from "next/link";

export default function Profile() {
  const [profile, setProfile] = useState(null);
  const router = useRouter();
  useEffect(() => {
    fetchProfile();
  }, []);

  async function fetchProfile() {
    const profileData = await supabase.auth.user();
    console.log("profileData: ", profileData);
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
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <DashNav signOut={signOut} />
        </Grid>

        <Grid item xs={1.8} md={2.5}>
          <SideBar profile={profile} />
        </Grid>
        <Grid item xs={10.2} md={9.5}>
          <div
            style={{
              paddingTop: "3.5rem",
              backgroundColor: "white",
              minHeight: "98vh",
              maxHeight: "100%",
              color: "black",
            }}
          >
            <Grid container spacing={1}>
              <Grid item xs={12} md={8} className="dash-options-container">
                <Grid container style={{ marginBottom: "3rem" }}>
                  <Grid item xs={12}>
                    <h1>Dashboard</h1>
                  </Grid>

                  <Grid item xs={12} md={12}>
                    <Link href="/dashboard/keyword-notification">
                      <div className="dash-tile search">
                        <h3 className="dash-option-title">
                          Keyword Notification
                        </h3>
                        <p className="dash-option-content">
                          Create notification alert for a particular word,
                          phrase or sentence in a website. <br />
                          This feature checks your desired website for the
                          keyword you entered at intervals and notifies you.
                        </p>
                      </div>
                    </Link>
                  </Grid>

                  <Grid item xs={12} md={12}>
                    <Link href="/dashboard/update-notification">
                      <div className="dash-tile shift referral">
                        <h3 className="dash-option-title">
                          Update Notification
                        </h3>
                        <p className="dash-option-content">
                          Create notification alert to get notified for every
                          update made in a website
                        </p>
                      </div>
                    </Link>
                  </Grid>
                  {/* <Grid item xs={12} md={12}>
                    <Link href="/dashboard/referral">
                      <div className="dash-tile update">
                        <h3 className="dash-option-title">Referral</h3>
                        <p className="dash-option-content">
                          Refer ezynotify to your friends and accumulate upgrade
                          points you can use for features limited to free plan.
                        </p>
                      </div>
                    </Link>
                  </Grid> */}
                  <Grid item xs={12} md={12}>
                    <Link href="/dashboard/profile">
                      <div className="dash-tile profile shift">
                        <h3 className="dash-option-title">Profile</h3>
                        <p className="dash-option-content">
                          Change password
                          <br />
                          Update setup for telegram
                        </p>
                      </div>
                    </Link>
                  </Grid>
                </Grid>
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
                        Subscription
                        <span
                          style={{
                            fontSize: "1rem",
                            marginLeft: "1rem",
                            color: "hsl(216, 100%, 25%)",
                          }}
                        >
                          Free
                        </span>
                      </h2>
                    </div>
                    <div
                      // style={{ width: "100vw" }}
                      className="dash-tile-subscription"
                    >
                      <h2
                        style={{
                          marginTop: "-15rem",
                          boxShadow: "-4px 0.9rem 1px white",
                          fontSize: "1rem",
                        }}
                      >
                        Subscription
                        <span
                          style={{
                            fontSize: "1rem",
                            marginLeft: "1rem",
                            color: "hsl(216, 100%, 25%)",
                          }}
                        >
                          Free
                        </span>
                      </h2>
                    </div>
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
