import Nav from "../components/nav";
import { Box, Grid, Paper } from "@mui/material";

export default function Contact() {
  return (
    <Box flexGrow={1}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Nav />
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
                style={{ marginLeft: "1rem" }}
              >
                <Grid container>
                  <Grid item xs={12}>
                    <h1>Technical Support</h1>
                  </Grid>
                  <div className="ult-contains">
                    <div className="options-container">
                      <form
                        action="https://formsubmit.co/66e6c33524b6ae0b24acef894af8cbd0"
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
