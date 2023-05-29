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
import { useTranslation } from "react-i18next";

export default function AuthLinks() {
  const { t } = useTranslation();
  const navigation = useNavigate();
  const [lang, setLang] = useState("en");
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
              {t("logUser")}
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
              {t("signUser")}
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}
