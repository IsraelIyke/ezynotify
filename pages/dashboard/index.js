const { motion } = require("framer-motion");
import { useState, useEffect } from "react";
import { supabase } from "../../client";
import { useRouter } from "next/router";
import SideBar from "../../components/sidebar";
import DashNav from "../../components/dash-nav";
import { Box, Grid } from "@mui/material";

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
        <DashNav signOut={signOut} />
        <Grid item xs={1.5} md={2.5}>
          <div style={{ marginTop: "4rem" }}>
            {/* <SideBar profile={profile} /> */}
          </div>
        </Grid>
        <Grid item xs={10.5} md={9.5}>
          <div
            style={{
              marginTop: "4rem",
              backgroundColor: "white",
              height: "100vh",
            }}
          >
            {/* <h2>Hello, {profile.email}</h2>
            <p>User ID: {profile.id}</p> */}
            <p style={{ color: "black" }}>hello</p>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}
