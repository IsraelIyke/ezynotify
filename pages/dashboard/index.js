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
  const [days, setDays] = useState("");

  const router = useRouter();
  useEffect(() => {
    fetchProfile();
    getDetail();
  }, []);

  async function getDetail() {
    try {
      const user = supabase.auth.user();

      let { data, error, status } = await supabase
        .from("notification")
        .select(`days`) //
        .eq("id", user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }
      if (data) {
        setDays(data.days);
      }
    } catch (error) {
      console.log(error);
    }
  }

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
              <Grid
                item
                xs={12}
                md={8}
                className="dash-options-container option"
              >
                <Grid container>
                  <Grid item xs={12}>
                    <h1>Dashboard</h1>
                  </Grid>
                  <div className="ult-contain">
                    <div className="options-container">
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
                              Create notification alert to get notified for
                              every update made in a website
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
                              Update setup for email and telegram
                            </p>
                          </div>
                        </Link>
                      </Grid>
                      <Grid item xs={12} md={12}>
                        <Link href="/dashboard/support">
                          <div className="dash-tile profile shift">
                            <h3 className="dash-option-title">Support</h3>
                            <p className="dash-option-content">
                              Report any issue
                              <br />
                              Give feedbacks
                            </p>
                          </div>
                        </Link>
                      </Grid>
                    </div>
                    <div>
                      <div className="dash-tile-sub">
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
                            {days == 0 ? "Free" : days + "days"}
                          </span>
                        </h2>
                      </div>
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
