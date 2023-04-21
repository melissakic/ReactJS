import style from "./Present.module.css";
import Grid from "@mui/material/Grid";
import PersonIcon from "@mui/icons-material/Person";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import avatar from "./../../images/avatar.jpg";
import Button from "@mui/material/Button";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
export default function Present() {
  return (
    <div className={style.main}>
      <Grid container className={style.body}>
        <Grid item md={12}>
          <img src={avatar} alt="avatar" />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Card variant="outlined" className={style.card}>
            <CardContent className={style.card_content}>
              <PersonIcon className={style.icon} />
            </CardContent>
            <CardActions className={style.card_actions}>
              <Button sx={{ color: "white", fontWeight: "600" }}>Login</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card variant="outlined" className={style.card}>
            <CardContent className={style.card_content}>
              <PersonAddIcon className={style.icon} />
            </CardContent>
            <CardActions className={style.card_actions}>
              <Button sx={{ color: "white", fontWeight: "600" }}>
                Sign up
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      <div className={style.body_down}>
        <ul className={style.list}>
          <li>Plan your tasks</li>
          <li>Collaborate with colleagues</li>
          <li>Log time and be efficient</li>
        </ul>
      </div>
      <div className={style.contact}>
        <InstagramIcon fontSize="large" sx={{ paddingX: "35px" }} />
        <YouTubeIcon fontSize="large" sx={{ paddingX: "35px" }} />
        <FacebookIcon fontSize="large" sx={{ paddingX: "35px" }} />
        <TwitterIcon fontSize="large" sx={{ paddingX: "35px" }} />
      </div>
    </div>
  );
}
