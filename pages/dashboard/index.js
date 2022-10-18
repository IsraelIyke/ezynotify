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

        <Grid item xs={1.5} md={2.5}>
          <div style={{ marginTop: "3.5rem" }}>
            {/* <SideBar profile={profile} /> */}
          </div>
        </Grid>
        <Grid item xs={10.5} md={9.5}>
          <div
            style={{
              marginTop: "3.5rem",
              backgroundColor: "white",
              height: "100vh",
              color: "black",
            }}
          >
            {/* <h2>Hello, {profile.email}</h2>
            <p>User ID: {profile.id}</p> */}
            {/* <p style={{ color: "black" }}></p> */}
            <Grid container spacing={1}>
              <Grid item xs={12} md={9} style={{ padding: "2rem 2rem" }}>
                <Grid container>
                  <Grid item xs={12}>
                    <h1>Dashboard</h1>
                  </Grid>

                  <Grid item xs={6.5} md={6}>
                    <Link href="/">
                      <div className="dash-tile search">
                        <p style={{ fontSize: "0.7rem" }}>
                          dashboard dashboard dashboard dashboard dashboard
                        </p>
                      </div>
                    </Link>
                  </Grid>

                  <Grid item xs={5.5} md={4}>
                    <Link href="/">
                      <div className="dash-tile shift referral">
                        <p style={{ fontSize: "0.8rem" }}>
                          dashboard dashboard dashboard dashboard dashboard
                        </p>{" "}
                      </div>
                    </Link>
                  </Grid>
                  <Grid item xs={5.5} md={4}>
                    <div className="dash-tile update">
                      <p style={{ fontSize: "0.9rem" }}>
                        dashboard dashboard dashboard dashboard dashboard
                      </p>{" "}
                    </div>
                  </Grid>
                  <Grid item xs={6.5} md={6}>
                    <div className="dash-tile profile shift">
                      dashboard dashboard dashboard dashboard dashboard
                    </div>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12} md={3}>
                <Grid container>
                  <Grid item xs={12}>
                    <h1>Subscription</h1>
                    <p>Free</p>
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
