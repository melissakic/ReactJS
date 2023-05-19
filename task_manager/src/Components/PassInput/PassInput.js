import style from "./PassInput.module.css";
import TextField from "@mui/material/TextField";
import { useTranslation } from "react-i18next";

export default function PassInput(props) {
  const { t } = useTranslation();
  return (
    <TextField
      {...props.register("password", {
        required: true,
        pattern: /^(?=.*[A-Z])(?=.*\d).+$/,
        minLength: 8,
      })}
      error={props.errors.password ? true : false}
      label={props.errors.password ? t("passHelp") : "Password"}
      variant="filled"
      type="password"
      className={style.input}
      onChange={(event) => {
        props.setPassword(event.target.value);
      }}
    ></TextField>
  );
}
