const { motion } = require("framer-motion");
import { useState, useEffect } from "react";
import { supabase } from "../../client";
import { useRouter } from "next/router";
import SideBar from "../../components/sidebar";
import DashNav from "../../components/dash-nav";
import { Box, Grid, Paper } from "@mui/material";
import Link from "next/link";
import Inputfield from "../../components/inputfield";

export default function Profile() {
  const [profile, setProfile] = useState(null);
  const router = useRouter();
  useEffect(() => {
    fetchProfile();
  }, []);

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
              <Grid
                item
                xs={12}
                md={12}
                className="dash-options-container option"
              >
                <Grid container>
                  <Grid item xs={12}>
                    <h1>Technical Support</h1>
                  </Grid>
                  <div className="ult-contains">
                    <div className="options-container">
                      <form
                        action="https://formsubmit.co/ezynotify@gmail.com"
                        method="POST"
                        className="feedback-form"
                      >
                        <input
                          type="hidden"
                          name="_subject"
                          value="Feedback!"
                        />
                        <input
                          type="email"
                          name="email"
                          placeholder="Email Address"
                          required
                        />
                        <input type="hidden" name="_captcha" value="false" />
                        <input
                          type="text"
                          name="message"
                          placeholder="message"
                          required
                        />
                        <input
                          type="hidden"
                          name="_next"
                          value="https://ezynotify.pages.dev/dashboard/support"
                        />
                        <button type="submit">Send</button>
                      </form>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}
