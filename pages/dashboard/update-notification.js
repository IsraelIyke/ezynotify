const { motion } = require("framer-motion");
import { useState, useEffect } from "react";
import { supabase } from "../../client";
import { useRouter } from "next/router";
import SideBar from "../../components/sidebar";
import DashNav from "../../components/dash-nav";
import { Box, Grid, Paper } from "@mui/material";
import Link from "next/link";

export default function Update() {
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
          <div style={{ marginTop: "3.5rem" }}>
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
            {/* <h2>Hello, {profile.email}</h2>
            <p>User ID: {profile.id}</p> */}
            {/* <p style={{ color: "black" }}></p> */}
            <Grid container spacing={1}>
              <Grid
                item
                xs={12}
                md={8}
                style={{ padding: "2rem 1.2rem 2rem 1rem" }}
                className="dash-options-container"
              >
                <Grid container>
                  <Grid item xs={12}>
                    <h1>Dashboard</h1>
                  </Grid>

                  <Grid item xs={6.5} md={7}>
                    <Link href="/dashboard/notification">
                      <div className="dash-tile search">
                        <h3 className="dash-option-title">
                          Notification
                          <hr style={{ color: "white", height: "0.2rem" }} />
                        </h3>
                        <p className="dash-option-content">
                          create search notification
                          <br />
                          view search status
                        </p>
                      </div>
                    </Link>
                  </Grid>

                  <Grid item xs={5.5} md={5}>
                    <Link href="/dashboard/update">
                      <div className="dash-tile shift referral">
                        <h3 className="dash-option-title">
                          Update
                          <hr style={{ color: "white", height: "0.2rem" }} />
                        </h3>
                        <p className="dash-option-content">
                          Get notification for every update in a website
                        </p>
                      </div>
                    </Link>
                  </Grid>
                  <Grid item xs={5.5} md={5}>
                    <Link href="/dashboard/referral">
                      <div className="dash-tile update">
                        <h3 className="dash-option-title">
                          Referral
                          <hr style={{ color: "white", height: "0.2rem" }} />
                        </h3>
                        <p className="dash-option-content">
                          Refer ezynotify to your friends and accumulate upgrade
                          points
                        </p>
                      </div>
                    </Link>
                  </Grid>
                  <Grid item xs={6.5} md={7}>
                    <Link href="/dashboard/profile">
                      <div className="dash-tile profile shift">
                        <h3 className="dash-option-title">
                          Profile
                          <hr style={{ color: "white", height: "0.2rem" }} />
                        </h3>
                        <p className="dash-option-content">
                          Change password
                          <br />
                          Update social media handle for telegram and facebook
                        </p>
                      </div>
                    </Link>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12} md={4}>
                <Grid container spacing={1}>
                  <Grid item xs={12} style={{ padding: "0 0.5rem 0 1rem" }}>
                    <div className="dash-tile-subscription">
                      <h2>Subscription</h2>
                      <p>Free</p>
                    </div>
                  </Grid>
                  <Grid item xs={12} style={{ padding: "0 0.5rem 0 1rem" }}>
                    <div className="dash-tile-subscription">
                      <h2>Activity Chart</h2>
                      <p>bar chart</p>
                    </div>
                  </Grid>
                  <Grid item xs={12} style={{ padding: "0 0.5rem 0 1rem" }}>
                    <div className="dash-tile-subscription">
                      <h2>Recent</h2>
                      <p>webtoon</p>
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
