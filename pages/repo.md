import { Box, Grid } from "@mui/material";
import Footer from "./footer";
import Img from "./img";
import Main from "./Main";
import \_app from "./\_app";

export default function Home() {
return (
<Box className="index-container">
{/_ <br />
<br />
<br />
<br />
<br />
<br />
<br />
<br /> _/}
<Grid container justifyContent="center">
<Grid item xs={12}>
<Img />
</Grid>
<Grid item xs={12}>
<Main />
</Grid>
<Grid item xs={12}>
<Footer />
</Grid>
</Grid>
</Box>
);
}
