import { Box, Grid } from "@mui/material";
import bg from "../public/images/bg1.jpg";
import Image from "next/image";

export default function Text() {
  return (
    <div className="text-container">
      <Grid container spacing={1}>
        <Grid item>
          <div className="text-image">
            <Image
              src={bg}
              alt="good morning"
              width={400}
              height={400}
              // objectFit="cover"
              layout="responsive"
              style={{ borderRadius: 20 }}
            />
          </div>
        </Grid>
        <Grid item>
          <div className="text-blur"></div>
        </Grid>
        {/* <Grid item className="text" xs={12}>
          He that dwelleth in the secret place of the most shall abide under the
          shadow of the Almighty
        </Grid> */}
      </Grid>
    </div>
  );
}
