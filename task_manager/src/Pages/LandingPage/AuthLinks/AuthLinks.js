import style from "./AuthLinks.module.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PersonIcon from "@mui/icons-material/Person";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import TooggleButton from "@mui/material/ToggleButton";
import TooggleButtonGroup from "@mui/material/ToggleButtonGroup";
import i18n from "../../../i18n";

export default function AuthLinks() {
  const navigation = useNavigate();
  const [lang, setLang] = useState("en");
  const changeLang = (event) => {
    setLang(event.target.value);
    i18n.changeLanguage(event.target.value);
  };
  return (
    <Grid container>
      <Grid item xs={12} md={6}>
        <Card className={style.card}>
          <CardContent className={style.card_content}>
            <PersonIcon className={style.icon} />
          </CardContent>
          <CardActions className={style.card_actions}>
            <Button
              sx={{ color: "white", fontWeight: "600" }}
              onClick={() => {
                navigation("/login");
              }}
            >
              Login
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card className={style.card}>
          <CardContent className={style.card_content}>
            <PersonAddIcon className={style.icon} />
          </CardContent>
          <CardActions className={style.card_actions}>
            <Button
              sx={{ color: "white", fontWeight: "600" }}
              onClick={() => {
                navigation("/signup");
              }}
            >
              Sign up
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}
