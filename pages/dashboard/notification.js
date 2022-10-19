const { motion } = require("framer-motion");
import { useState, useEffect } from "react";
import { supabase } from "../../client";
import { useRouter } from "next/router";
import SideBar from "../../components/sidebar";
import DashNav from "../../components/dash-nav";
import { Box, Grid } from "@mui/material";
import Link from "next/link";
import Inputfield from "../../components/inputfield";

export default function Notification() {
  const [keyword, setKeyword] = useState(null);
  const [website, setWebsite] = useState(null);

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

  async function updateProfile({ keyword, website }) {
    try {
      const user = supabase.auth.user();
      const updates = {
        id: user.id, //
        keyword,
        website,
        updated_at: new Date(),
      };

      let { error } = await supabase.from("profiles").upsert(updates, {
        returning: "minimal", //don't return the value after inserting
      });

      if (error) {
        throw error;
      }

      alert("updated");
    } catch (error) {
      alert(error.message);
    }
  }

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
                md={7}
                style={{ padding: "2rem 1.2rem 2rem 1rem" }}
                className="dash-options-container"
              >
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <h1>Notification</h1>
                    <p className="instruction">
                      create new notification for a keyword/search
                    </p>

                    <ul className="instruction-list">
                      <li>
                        enter the particular word you want to search and the
                        website
                      </li>
                      <li>
                        select the messaging platform you wish to get
                        notification
                      </li>
                      <li>click submit</li>
                      <li>you can edit your search in the status panel</li>
                    </ul>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Inputfield
                      type="text"
                      placeholder="keyword"
                      id="keyword"
                      label="keyword"
                      setState={setKeyword}
                      value={keyword}
                    />
                  </Grid>
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
                    email
                    <input type="checkbox" /> telegram
                    <input type="checkbox" /> facebook
                    <input type="checkbox" />
                  </Grid>
                  <Grid item>
                    <div
                      onClick={() =>
                        updateProfile({
                          keyword,
                          website,
                        })
                      }
                      className="submit-button"
                    >
                      submit
                    </div>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12} md={5}>
                <Grid container spacing={1}>
                  <Grid item xs={12} style={{ padding: "0 0.5rem 0 1rem" }}>
                    <div className="notification-tile">
                      <h2>Status</h2>
                      <p></p>
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
