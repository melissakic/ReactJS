import { useTranslation } from "react-i18next";
import style from "./Username.module.css";
import TextField from "@mui/material/TextField";

export default function UsernameInput(props) {
  const { t } = useTranslation();
  return (
    <TextField
      {...props.register("username", {
        required: true,
      })}
      error={props.errors.username ? true : false}
      label={props.errors.username ? t("inputHelp") : t("username")}
      variant="filled"
      className={style.input}
      onChange={(event) => {
        props.setInput(event.target.value);
      }}
    ></TextField>
  );
}
