import style from "./Avatar.module.css";
import Grid from "@mui/material/Grid";
import avatar from "./avatar.jpg";

export default function Avatart() {
  return (
    <Grid container className={style.body}>
      <Grid item md={12}>
        <img src={avatar} alt="avatar" />
      </Grid>
    </Grid>
  );
}
